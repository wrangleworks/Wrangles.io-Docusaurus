import React, {useEffect} from 'react';
import {useLocation} from '@docusaurus/router';

function findPreviousElementSibling(node) {
  let previous = node.previousSibling;
  while (previous) {
    if (previous.nodeType === Node.ELEMENT_NODE) {
      return previous;
    }
    previous = previous.previousSibling;
  }
  return null;
}

function applyLinksListMarkers() {
  const root = document.querySelector('main');
  if (!root) {
    return;
  }

  // Preferred marker format in docs: <!-- {.links-list} -->
  const commentWalker = document.createTreeWalker(root, NodeFilter.SHOW_COMMENT);
  while (commentWalker.nextNode()) {
    const node = commentWalker.currentNode;
    const value = node.nodeValue?.trim();
    if (value !== '{.links-list}' && value !== '\\{.links-list\\}') {
      continue;
    }

    const previous = findPreviousElementSibling(node);
    if (previous && (previous.tagName === 'UL' || previous.tagName === 'OL')) {
      previous.classList.add('links-list');
    }
    node.remove();
  }

  // Backward compatibility for legacy text markers that may still appear.
  const textWalker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const markerPattern = /\\?\{\.links-list\\?\}/g;

  while (textWalker.nextNode()) {
    const node = textWalker.currentNode;
    const value = node.nodeValue;
    if (!value || !value.includes('links-list')) {
      continue;
    }
    if (!markerPattern.test(value)) {
      markerPattern.lastIndex = 0;
      continue;
    }
    markerPattern.lastIndex = 0;

    const container = node.parentElement?.closest('ul, ol');
    if (container) {
      container.classList.add('links-list');
    }

    const cleaned = value.replace(markerPattern, '');
    node.nodeValue = cleaned.replace(/\s+$/, '');
    markerPattern.lastIndex = 0;
  }

  // Clean up now-empty paragraphs that only had a marker.
  const paragraphs = root.querySelectorAll('article p');
  for (const paragraph of paragraphs) {
    if (paragraph.textContent?.trim() === '') {
      paragraph.remove();
    }
  }
}

export default function Root({children}) {
  const location = useLocation();

  useEffect(() => {
    applyLinksListMarkers();

    const root = document.querySelector('main');
    if (!root) {
      return undefined;
    }
    const observer = new MutationObserver(() => {
      applyLinksListMarkers();
    });
    observer.observe(root, {childList: true, subtree: true});

    return () => {
      observer.disconnect();
    };
  }, [location.pathname]);

  return <>{children}</>;
}
