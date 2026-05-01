const WRANGLE_CATALOG = [
  {
    type: 'convert.case',
    label: 'Case Shift',
    category: 'Convert',
    description: 'Change text casing in a column.',
    color: 'sun',
    defaults: {
      input: 'Column A',
      output: 'Column A Upper',
      case: 'upper',
    },
    fields: [
      {
        key: 'input',
        label: 'Input Column',
        type: 'text',
        placeholder: 'Column A',
        helper: 'Column to read text from.',
      },
      {
        key: 'output',
        label: 'Output Column',
        type: 'text',
        placeholder: 'Column A Upper',
        helper: 'New column name for the transformed text.',
      },
      {
        key: 'case',
        label: 'Case',
        type: 'select',
        options: [
          {value: 'upper', label: 'Upper'},
          {value: 'lower', label: 'Lower'},
          {value: 'title', label: 'Title'},
          {value: 'sentence', label: 'Sentence'},
        ],
      },
    ],
    buildConfig(values) {
      return {
        input: values.input,
        output: values.output,
        case: values.case,
      };
    },
  },
  {
    type: 'convert.data_type',
    label: 'Type Cast',
    category: 'Convert',
    description: 'Convert text or numbers into another data type.',
    color: 'lagoon',
    defaults: {
      input: 'Column A',
      output: 'Column A Int',
      data_type: 'int',
    },
    fields: [
      {
        key: 'input',
        label: 'Input Column',
        type: 'text',
      },
      {
        key: 'output',
        label: 'Output Column',
        type: 'text',
      },
      {
        key: 'data_type',
        label: 'Data Type',
        type: 'select',
        options: [
          {value: 'int', label: 'Integer'},
          {value: 'float', label: 'Float'},
          {value: 'str', label: 'String'},
          {value: 'bool', label: 'Boolean'},
        ],
      },
    ],
    buildConfig(values) {
      return {
        input: values.input,
        output: values.output,
        data_type: values.data_type,
      };
    },
  },
  {
    type: 'merge.concatenate',
    label: 'Concatenate',
    category: 'Merge',
    description: 'Join multiple columns or list elements into one string.',
    color: 'ember',
    defaults: {
      input: ['Column A', 'Column B'],
      output: 'Joined Text',
      char: ', ',
    },
    fields: [
      {
        key: 'input',
        label: 'Input Columns',
        type: 'list',
        placeholder: 'Column A',
        helper: 'One column name per line.',
      },
      {
        key: 'output',
        label: 'Output Column',
        type: 'text',
      },
      {
        key: 'char',
        label: 'Join Character',
        type: 'text',
        placeholder: ', ',
      },
    ],
    buildConfig(values) {
      return {
        input: values.input,
        output: values.output,
        char: values.char,
      };
    },
  },
  {
    type: 'merge.to_list',
    label: 'Make List',
    category: 'Merge',
    description: 'Collect multiple columns into a list.',
    color: 'forest',
    defaults: {
      input: ['Column A', 'Column B', 'Column C'],
      output: 'Collected List',
      include_empty: false,
    },
    fields: [
      {
        key: 'input',
        label: 'Input Columns',
        type: 'list',
        placeholder: 'Column A',
      },
      {
        key: 'output',
        label: 'Output Column',
        type: 'text',
      },
      {
        key: 'include_empty',
        label: 'Include Empty',
        type: 'boolean',
      },
    ],
    buildConfig(values) {
      return {
        input: values.input,
        output: values.output,
        include_empty: values.include_empty,
      };
    },
  },
  {
    type: 'split.text',
    label: 'Split Text',
    category: 'Split',
    description: 'Split a text column by a separator.',
    color: 'violet',
    defaults: {
      input: 'Column A',
      output: 'Split Parts',
      char: ', ',
      element: '',
    },
    fields: [
      {
        key: 'input',
        label: 'Input Column',
        type: 'text',
      },
      {
        key: 'output',
        label: 'Output',
        type: 'text',
        helper: 'Use a single column or a wildcard like Result*.',
      },
      {
        key: 'char',
        label: 'Separator',
        type: 'text',
        placeholder: ', ',
      },
      {
        key: 'element',
        label: 'Specific Element',
        type: 'text',
        placeholder: 'Leave blank to return the full split result',
      },
    ],
    buildConfig(values) {
      const config = {
        input: values.input,
        output: values.output,
        char: values.char,
      };

      if (values.element !== '') {
        config.element = Number.isNaN(Number(values.element)) ? values.element : Number(values.element);
      }

      return config;
    },
  },
  {
    type: 'split.dictionary',
    label: 'Break Dictionary',
    category: 'Split',
    description: 'Expand dictionary keys into columns.',
    color: 'sky',
    defaults: {
      input: 'Dictionary Column',
      output: 'Expanded*',
    },
    fields: [
      {
        key: 'input',
        label: 'Input Column',
        type: 'text',
      },
      {
        key: 'output',
        label: 'Output Pattern',
        type: 'text',
        placeholder: 'Expanded*',
      },
    ],
    buildConfig(values) {
      return {
        input: values.input,
        output: values.output,
      };
    },
  },
  {
    type: 'select.columns',
    label: 'Select Columns',
    category: 'Select',
    description: 'Keep only the columns you want to continue with.',
    color: 'slate',
    defaults: {
      input: ['Column A', 'Column B'],
    },
    fields: [
      {
        key: 'input',
        label: 'Columns to Keep',
        type: 'list',
        placeholder: 'Column A',
      },
    ],
    buildConfig(values) {
      return {
        input: values.input,
      };
    },
  },
];

export const WRANGLE_MAP = Object.fromEntries(WRANGLE_CATALOG.map((item) => [item.type, item]));

export default WRANGLE_CATALOG;
