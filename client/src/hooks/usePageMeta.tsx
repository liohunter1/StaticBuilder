import { useEffect } from 'react';

interface PageMetaOptions {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
}

export function usePageMeta({ title, description, ogTitle, ogDescription }: PageMetaOptions) {
  useEffect(() => {
    document.title = title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    const ogTitleMeta = document.querySelector('meta[property="og:title"]');
    if (ogTitleMeta) {
      ogTitleMeta.setAttribute('content', ogTitle || title);
    }

    const ogDescriptionMeta = document.querySelector('meta[property="og:description"]');
    if (ogDescriptionMeta) {
      ogDescriptionMeta.setAttribute('content', ogDescription || description);
    }
  }, [title, description, ogTitle, ogDescription]);
}
