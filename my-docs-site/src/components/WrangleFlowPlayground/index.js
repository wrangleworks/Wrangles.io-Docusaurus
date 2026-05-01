import React, {useMemo, useState} from 'react';
import CodeBlock from '@theme/CodeBlock';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import clsx from 'clsx';
import yaml from 'js-yaml';
import {runRecipeRequest} from '../recipeRunnerClient';
import WRANGLE_CATALOG, {WRANGLE_MAP} from './wrangleCatalog';
import styles from './styles.module.css';

const MAX_COLUMNS = 10;
const MAX_ROWS = 10;
const MIN_COLUMNS = 1;
const MIN_ROWS = 1;
const DEFAULT_COLUMNS = 3;
const DEFAULT_ROWS = 4;

let nextBlockId = 1;

function createColumnName(index) {
  return `Column ${String.fromCharCode(65 + index)}`;
}

function createRows(rowCount, columnCount) {
  return Array.from({length: rowCount}, () => Array.from({length: columnCount}, () => ''));
}

function createInitialTable() {
  const columns = Array.from({length: DEFAULT_COLUMNS}, (_, index) => createColumnName(index));
  return {
    columns,
    rows: createRows(DEFAULT_ROWS, columns.length),
  };
}

function createBlock(type) {
  const definition = WRANGLE_MAP[type];
  return {
    id: `${type}-${nextBlockId++}`,
    type,
    values: JSON.parse(JSON.stringify(definition.defaults)),
  };
}

function moveItem(items, fromIndex, toIndex) {
  if (toIndex < 0 || toIndex >= items.length) {
    return items;
  }

  const nextItems = [...items];
  const [item] = nextItems.splice(fromIndex, 1);
  nextItems.splice(toIndex, 0, item);
  return nextItems;
}

function normalizeFieldValue(field, value) {
  if (field.type === 'list') {
    return Array.isArray(value)
      ? value.map((item) => String(item).trim()).filter(Boolean)
      : String(value ?? '')
          .split('\n')
          .map((item) => item.trim())
          .filter(Boolean);
  }

  if (field.type === 'boolean') {
    return Boolean(value);
  }

  return value;
}

function toRecipeConfig(block) {
  const definition = WRANGLE_MAP[block.type];
  const values = Object.fromEntries(
    definition.fields.map((field) => [field.key, normalizeFieldValue(field, block.values[field.key])]),
  );

  return {
    [block.type]: definition.buildConfig(values),
  };
}

function buildRecipeYaml(blocks) {
  if (!blocks.length) {
    return 'wrangles: []\n';
  }

  return yaml.dump(
    {
      wrangles: blocks.map(toRecipeConfig),
    },
    {
      lineWidth: -1,
      noRefs: true,
    },
  );
}

function limitTable(columns, rows) {
  const nextColumns = (columns.length ? columns : [createColumnName(0)]).slice(0, MAX_COLUMNS);
  const nextRows = rows.slice(0, MAX_ROWS).map((row) => nextColumns.map((_, index) => row[index] ?? ''));
  return {
    table: {
      columns: nextColumns,
      rows: nextRows,
    },
    truncated: columns.length > MAX_COLUMNS || rows.length > MAX_ROWS,
  };
}

function copyRows(rows) {
  return rows.map((row) => [...row]);
}

function TableEditor({
  table,
  onCellChange,
  onColumnChange,
  onAddRow,
  onRemoveRow,
  onAddColumn,
  onRemoveColumn,
}) {
  return (
    <section className={styles.dataPanel}>
      <div className={styles.sectionHeader}>
        <div>
          <p className={styles.eyebrow}>Top Left</p>
          <h2>Data Board</h2>
        </div>
        <div className={styles.gridControls}>
          <span>{table.rows.length} rows</span>
          <button type="button" onClick={onAddRow} disabled={table.rows.length >= MAX_ROWS}>
            + Row
          </button>
          <button type="button" onClick={onRemoveRow} disabled={table.rows.length <= MIN_ROWS}>
            - Row
          </button>
          <span>{table.columns.length} cols</span>
          <button type="button" onClick={onAddColumn} disabled={table.columns.length >= MAX_COLUMNS}>
            + Col
          </button>
          <button type="button" onClick={onRemoveColumn} disabled={table.columns.length <= MIN_COLUMNS}>
            - Col
          </button>
        </div>
      </div>

      <div className={styles.tableShell}>
        <div className={styles.tableScroll}>
          <table className={styles.playTable}>
            <thead>
              <tr>
                <th className={styles.indexHeader}>#</th>
                {table.columns.map((column, columnIndex) => (
                  <th key={`column-${columnIndex}`}>
                    <input
                      className={styles.columnInput}
                      value={column}
                      onChange={(event) => onColumnChange(columnIndex, event.target.value)}
                      spellCheck={false}
                    />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {table.rows.map((row, rowIndex) => (
                <tr key={`row-${rowIndex}`}>
                  <td className={styles.indexCell}>{rowIndex + 1}</td>
                  {table.columns.map((column, columnIndex) => (
                    <td key={`${column}-${rowIndex}`}>
                      <textarea
                        className={styles.cellInput}
                        rows={1}
                        value={row[columnIndex] ?? ''}
                        onChange={(event) => onCellChange(rowIndex, columnIndex, event.target.value)}
                        spellCheck={false}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <p className={styles.helperText}>
        Enter plain strings, numbers, lists like <code>['A', 'B']</code>, or dictionaries like <code>{`{'Key': 'Value'}`}</code>.
      </p>
    </section>
  );
}

function FieldControl({field, value, onChange}) {
  if (field.type === 'select') {
    return (
      <select className={styles.fieldInput} value={String(value ?? '')} onChange={(event) => onChange(event.target.value)}>
        {field.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  }

  if (field.type === 'boolean') {
    return (
      <label className={styles.toggle}>
        <input type="checkbox" checked={Boolean(value)} onChange={(event) => onChange(event.target.checked)} />
        <span>{value ? 'Enabled' : 'Disabled'}</span>
      </label>
    );
  }

  if (field.type === 'list') {
    return (
      <textarea
        className={clsx(styles.fieldInput, styles.listInput)}
        rows={4}
        value={Array.isArray(value) ? value.join('\n') : ''}
        onChange={(event) => onChange(event.target.value)}
        placeholder={field.placeholder}
        spellCheck={false}
      />
    );
  }

  return (
    <input
      className={styles.fieldInput}
      value={value ?? ''}
      onChange={(event) => onChange(event.target.value)}
      placeholder={field.placeholder}
      spellCheck={false}
    />
  );
}

function BlockInspectorModal({block, currentColumns, onChange, onClose}) {
  if (!block) {
    return null;
  }

  const definition = WRANGLE_MAP[block.type];

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(event) => event.stopPropagation()}>
        <div className={styles.modalHeader}>
          <div>
            <p className={styles.eyebrow}>{definition.category}</p>
            <div className={styles.modalTitleGroup}>
              <h2>{definition.label}</h2>
              <span className={clsx(styles.colorBadge, styles[`badge${definition.color}`])}>
                {definition.type}
              </span>
            </div>
          </div>
          <button type="button" className={styles.closeModalButton} onClick={onClose} aria-label="Close">
            &times;
          </button>
        </div>

        <div className={styles.modalBody}>
          <p className={styles.helperText}>{definition.description}</p>

          <div className={styles.fieldGrid}>
            {definition.fields.map((field) => (
              <label key={field.key} className={styles.fieldCard}>
                <span className={styles.fieldLabel}>{field.label}</span>
                <FieldControl 
                  field={field} 
                  value={block.values[field.key]} 
                  onChange={(value) => onChange(block.id, field.key, value)} 
                />
                {field.helper ? <span className={styles.fieldHint}>{field.helper}</span> : null}
              </label>
            ))}
          </div>

          <div className={styles.columnStrip}>
            <span>Current columns</span>
            <div className={styles.columnChips}>
              {currentColumns.map((column, index) => (
                <code key={`${column}-${index}`}>{column}</code>
              ))}
            </div>
          </div>
        </div>
        
        <div className={styles.modalFooter}>
          <button type="button" className={styles.primaryButton} onClick={onClose}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
}

function PipelineCard({block, isActive, index, isLast, onSelect, onMove, onDuplicate, onRemove}) {
  const definition = WRANGLE_MAP[block.type];

  return (
    <div className={styles.pipelineNode}>
      <button
        type="button"
        className={clsx(styles.pipelineCard, isActive && styles.pipelineCardActive, styles[`card${definition.color}`])}
        onClick={() => onSelect(block.id)}>
        <span className={styles.nodeIndex}>{index + 1}</span>
        <strong>{definition.label}</strong>
        <span>{definition.type}</span>
      </button>
      <div className={styles.nodeActions}>
        <button type="button" onClick={() => onMove(index, -1)} aria-label="Move block left">
          ←
        </button>
        <button type="button" onClick={() => onMove(index, 1)} aria-label="Move block right">
          →
        </button>
        <button type="button" onClick={() => onDuplicate(block.id)} aria-label="Duplicate block">
          Duplicate
        </button>
        <button type="button" onClick={() => onRemove(block.id)} aria-label="Remove block">
          Remove
        </button>
      </div>
      {!isLast ? <div className={styles.connector} aria-hidden="true" /> : null}
    </div>
  );
}

function Palette({onAdd}) {
  const categories = WRANGLE_CATALOG.reduce((grouped, item) => {
    grouped[item.category] = grouped[item.category] ?? [];
    grouped[item.category].push(item);
    return grouped;
  }, {});

  return (
    <div className={styles.palette}>
      {Object.entries(categories).map(([category, items]) => (
        <section key={category} className={styles.paletteGroup}>
          <div className={styles.groupHeader}>
            <h3>{category}</h3>
            <span>{items.length} blocks</span>
          </div>
          <div className={styles.paletteCards}>
            {items.map((item) => (
              <div
                key={item.type}
                className={clsx(styles.paletteCard, styles[`card${item.color}`])}
                draggable
                onDragStart={(event) => event.dataTransfer.setData('text/wrangle-type', item.type)}>
                <div>
                  <strong>{item.label}</strong>
                  <p>{item.description}</p>
                </div>
                <button type="button" onClick={() => onAdd(item.type)}>
                  Add
                </button>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default function WrangleFlowPlayground() {
  const {siteConfig} = useDocusaurusContext();
  const runnerUrl = siteConfig.customFields?.recipeRunnerUrl || '/run-recipe';
  const [table, setTable] = useState(createInitialTable);
  const [blocks, setBlocks] = useState([]);
  const [activeBlockId, setActiveBlockId] = useState(null);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  const activeBlock = useMemo(
    () => blocks.find((block) => block.id === activeBlockId) ?? null,
    [activeBlockId, blocks],
  );

  const recipeYaml = useMemo(() => buildRecipeYaml(blocks), [blocks]);

  function setCellValue(rowIndex, columnIndex, nextValue) {
    setTable((previousTable) => ({
      ...previousTable,
      rows: previousTable.rows.map((row, currentRowIndex) =>
        currentRowIndex === rowIndex
          ? row.map((cell, currentColumnIndex) => (currentColumnIndex === columnIndex ? nextValue : cell))
          : row,
      ),
    }));
  }

  function setColumnName(columnIndex, nextValue) {
    setTable((previousTable) => ({
      ...previousTable,
      columns: previousTable.columns.map((column, currentColumnIndex) =>
        currentColumnIndex === columnIndex ? nextValue : column,
      ),
    }));
  }

  function addRow() {
    setTable((previousTable) => ({
      ...previousTable,
      rows:
        previousTable.rows.length >= MAX_ROWS
          ? previousTable.rows
          : [...previousTable.rows, Array.from({length: previousTable.columns.length}, () => '')],
    }));
  }

  function removeRow() {
    setTable((previousTable) => ({
      ...previousTable,
      rows:
        previousTable.rows.length <= MIN_ROWS
          ? previousTable.rows
          : previousTable.rows.slice(0, -1),
    }));
  }

  function addColumn() {
    setTable((previousTable) => {
      if (previousTable.columns.length >= MAX_COLUMNS) {
        return previousTable;
      }

      return {
        columns: [...previousTable.columns, createColumnName(previousTable.columns.length)],
        rows: previousTable.rows.map((row) => [...row, '']),
      };
    });
  }

  function removeColumn() {
    setTable((previousTable) => {
      if (previousTable.columns.length <= MIN_COLUMNS) {
        return previousTable;
      }

      return {
        columns: previousTable.columns.slice(0, -1),
        rows: previousTable.rows.map((row) => row.slice(0, -1)),
      };
    });
  }

  function addBlock(type) {
    const nextBlock = createBlock(type);
    setBlocks((previousBlocks) => [...previousBlocks, nextBlock]);
    setActiveBlockId(nextBlock.id);
    setNotice(`Added ${WRANGLE_MAP[type].label} to the pipeline.`);
  }

  function updateBlockValue(blockId, key, value) {
    setBlocks((previousBlocks) =>
      previousBlocks.map((block) =>
        block.id === blockId
          ? {
              ...block,
              values: {
                ...block.values,
                [key]: value,
              },
            }
          : block,
      ),
    );
  }

  function moveBlock(index, direction) {
    setBlocks((previousBlocks) => moveItem(previousBlocks, index, index + direction));
  }

  function duplicateBlock(blockId) {
    const block = blocks.find((item) => item.id === blockId);
    if (!block) {
      return;
    }

    const duplicate = {
      ...block,
      id: `${block.type}-${nextBlockId++}`,
      values: JSON.parse(JSON.stringify(block.values)),
    };

    setBlocks((previousBlocks) => {
      const nextBlocks = [...previousBlocks];
      const index = nextBlocks.findIndex((item) => item.id === blockId);
      nextBlocks.splice(index + 1, 0, duplicate);
      return nextBlocks;
    });
    setActiveBlockId(duplicate.id);
  }

  function removeBlock(blockId) {
    const remainingBlocks = blocks.filter((block) => block.id !== blockId);
    setBlocks(remainingBlocks);
    if (activeBlockId === blockId) {
      setActiveBlockId(remainingBlocks[0]?.id ?? null);
    }
  }

  function resetBoard() {
    setBlocks([]);
    setActiveBlockId(null);
    setTable(createInitialTable());
    setError('');
    setNotice('Board reset. Add new blocks to build another recipe.');
  }

  function validateTable() {
    const normalizedColumns = table.columns.map((column, index) => column.trim() || createColumnName(index));
    const uniqueColumns = new Set(normalizedColumns);

    if (uniqueColumns.size !== normalizedColumns.length) {
      throw new Error('Column names need to be unique before you run the board.');
    }

    return {
      columns: normalizedColumns,
      rows: copyRows(table.rows),
    };
  }

  async function runBoard() {
    setError('');
    setNotice('');

    if (!blocks.length) {
      setNotice('Add at least one wrangle block before running the board.');
      return;
    }

    setIsRunning(true);
    try {
      const input = validateTable();
      const payload = await runRecipeRequest({
        runnerUrl,
        recipe: recipeYaml,
        input,
        outputColumns: [],
      });

      const {table: nextTable, truncated} = limitTable(payload.columns || [], payload.rows || []);
      setTable(nextTable);
      setNotice(
        truncated
          ? 'Recipe ran successfully. Output was trimmed to the 10x10 playground limit.'
          : 'Recipe ran successfully. The board now shows your latest output.',
      );
    } catch (runError) {
      const message =
        runError instanceof TypeError
          ? `Could not reach the local recipe runner at ${runnerUrl}. Make sure the site is running and check the runner logs.`
          : runError.message;

      console.error('[wrangle-flow-playground] Run failed:', runError);
      setError(message);
    } finally {
      setIsRunning(false);
    }
  }

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div>
          <p className={styles.kicker}>Wrangles Sandbox</p>
          <h1>Build recipes like a game board.</h1>
          <p className={styles.lead}>
            Edit the input data, drag wrangle blocks into the pipeline, click a block to configure it, and run the whole recipe against the board.
          </p>
        </div>
        <div className={styles.heroActions}>
          <button type="button" className={styles.primaryButton} onClick={runBoard} disabled={isRunning}>
            {isRunning ? 'Running…' : 'Run Board'}
          </button>
          <button type="button" className={styles.secondaryButton} onClick={resetBoard}>
            Reset Board
          </button>
        </div>
      </section>

      <section className={styles.topDeck}>
        <TableEditor
          table={table}
          onCellChange={setCellValue}
          onColumnChange={setColumnName}
          onAddRow={addRow}
          onRemoveRow={removeRow}
          onAddColumn={addColumn}
          onRemoveColumn={removeColumn}
        />

        <section className={styles.controlPanel}>
          <div className={styles.recipePanel}>
            <div className={styles.sectionHeader}>
              <div>
                <p className={styles.eyebrow}>Live Recipe</p>
                <h2>Generated YAML</h2>
              </div>
              <span className={styles.recipeMeta}>{blocks.length} wrangles</span>
            </div>
            <CodeBlock language="yaml">{recipeYaml}</CodeBlock>
            {notice ? <p className={styles.notice}>{notice}</p> : null}
            {error ? <p className={styles.error}>{error}</p> : null}
          </div>
        </section>
      </section>

      <section className={styles.bottomDeck}>
        <div className={styles.sectionHeader}>
          <div>
            <p className={styles.eyebrow}>Bottom Half</p>
            <h2>Wrangle Blocks</h2>
          </div>
          <p className={styles.helperText}>Drag blocks into the chain or click Add to append them instantly.</p>
        </div>

        <div className={styles.builderLayout}>
          <Palette onAdd={addBlock} />

          <div
            className={styles.pipelineBoard}
            onDragOver={(event) => event.preventDefault()}
            onDrop={(event) => {
              event.preventDefault();
              const droppedType = event.dataTransfer.getData('text/wrangle-type');
              if (WRANGLE_MAP[droppedType]) {
                addBlock(droppedType);
              }
            }}>
            {blocks.length ? (
              <div className={styles.pipelineTrack}>
                {blocks.map((block, index) => (
                  <PipelineCard
                    key={block.id}
                    block={block}
                    index={index}
                    isActive={block.id === activeBlockId}
                    isLast={index === blocks.length - 1}
                    onSelect={setActiveBlockId}
                    onMove={moveBlock}
                    onDuplicate={duplicateBlock}
                    onRemove={removeBlock}
                  />
                ))}
              </div>
            ) : (
              <div className={styles.emptyPipeline}>
                <strong>Drop wrangle cards here</strong>
                <p>Your pipeline will stack in order and become a runnable recipe.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <BlockInspectorModal 
        block={activeBlock} 
        currentColumns={table.columns} 
        onChange={updateBlockValue} 
        onClose={() => setActiveBlockId(null)} 
      />
    </div>
  );
}