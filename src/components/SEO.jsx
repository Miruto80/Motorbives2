import React, { useEffect } from 'react';

export default function SEO({ title, description, url, image }) {
  useEffect(() => {
    const site = "Motorvibesllc";
    document.title = title ? `${title} — ${site}` : site;

    const upsertMeta = (attr, name, content) => {
      if (!content) return;
      const selector = attr === 'name' ? `meta[name="${name}"]` : `meta[property="${name}"]`;
      let el = document.head.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const metaDescription = description || "Motorvibes — Your trusted car dealer in the USA. Explore new and used cars, financing, and more."; // Actualizado para Motorvibes
    const metaUrl = url || window.location.href;
    const metaImage = image || '/img/logo.webp'; 

    upsertMeta('name', 'description', metaDescription);
    upsertMeta('name', 'keywords', "Motorvibes, car dealer USA, used cars for sale, new cars, auto financing, car dealership, buy cars online");
    upsertMeta('property', 'og:site_name', site);
    upsertMeta('property', 'og:title', title ? `${title} — ${site}` : site);
    upsertMeta('property', 'og:description', metaDescription);
    upsertMeta('property', 'og:url', metaUrl);
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:image', metaImage);
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', title ? `${title} — ${site}` : site);
    upsertMeta('name', 'twitter:description', metaDescription);
    upsertMeta('name', 'twitter:image', metaImage);

    // canonical link
    if (metaUrl) {
      let link = document.head.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', metaUrl);
    }
  }, [title, description, url, image]);

  return null;
}