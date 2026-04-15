import React from 'react';
import clsx from 'clsx';
import BrowserOnly from '@docusaurus/BrowserOnly';
import {translate} from '@docusaurus/Translate';
import CopyButton from '@theme/CodeBlock/Buttons/CopyButton';
import Button from '@theme/CodeBlock/Buttons/Button';
import WordWrapButton from '@theme/CodeBlock/Buttons/WordWrapButton';
import {useRecipePlayground} from '@site/src/components/RecipePlayground/context';
import styles from './styles.module.css';

function RunButton() {
  const recipePlayground = useRecipePlayground();

  if (!recipePlayground) {
    return null;
  }

  const {runRecipe, isRunning} = recipePlayground;

  return (
    <Button
      aria-label={translate({
        id: 'theme.CodeBlock.runRecipeAriaLabel',
        message: 'Run recipe example',
        description: 'The ARIA label for the recipe run button on code blocks',
      })}
      title={translate({
        id: 'theme.CodeBlock.runRecipeTitle',
        message: 'Run',
        description: 'The title for the recipe run button on code blocks',
      })}
      className={styles.runButton}
      disabled={isRunning}
      onClick={runRecipe}>
      <span className={styles.runButtonLabel}>{isRunning ? 'Running' : 'Run'}</span>
    </Button>
  );
}

export default function CodeBlockButtons({className}) {
  return (
    <BrowserOnly>
      {() => (
        <div className={clsx(className, styles.buttonGroup)}>
          <WordWrapButton />
          <CopyButton />
          <RunButton />
        </div>
      )}
    </BrowserOnly>
  );
}
