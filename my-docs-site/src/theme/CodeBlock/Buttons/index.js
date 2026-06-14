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

function PlaygroundButton() {
  const recipePlayground = useRecipePlayground();

  if (!recipePlayground?.canOpenInPlayground) {
    return null;
  }

  const {openInPlayground} = recipePlayground;

  return (
    <Button
      aria-label={translate({
        id: 'theme.CodeBlock.openRecipePlaygroundAriaLabel',
        message: 'Open recipe example in the playground',
        description: 'The ARIA label for the playground button on recipe code blocks',
      })}
      title={translate({
        id: 'theme.CodeBlock.openRecipePlaygroundTitle',
        message: 'Open in Playground',
        description: 'The title for the playground button on recipe code blocks',
      })}
      className={styles.playgroundButton}
      onClick={openInPlayground}>
      <span className={styles.runButtonLabel}>Playground</span>
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
          <PlaygroundButton />
        </div>
      )}
    </BrowserOnly>
  );
}
