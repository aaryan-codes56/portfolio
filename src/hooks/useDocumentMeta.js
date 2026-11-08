import { useEffect } from 'react';
import { site } from '../data/site';

// Sets the tab title and description for the current route.
export function useDocumentMeta(title, description) {
  useEffect(() => {
    document.title = title ?? site.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', description ?? site.description);
  }, [title, description]);
}
