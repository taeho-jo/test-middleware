import React from 'react';

const Sitemap = () => {
  return;
};

export const getServerSideProps = ({ res }) => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
        xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
    <!-- created with Free Online Sitemap Generator www.xml-sitemaps.com -->

    <url>
        <loc>https://diby.io/</loc>
        <lastmod>2022-04-07T03:05:24+00:00</lastmod>
    </url>
    <url>
        <loc>https://diby.io/usecases/ui</loc>
        <lastmod>2022-04-07T03:05:24+00:00</lastmod>
    </url>
    <url>
        <loc>https://diby.io/usecases/ux</loc>
        <lastmod>2022-04-07T03:05:24+00:00</lastmod>
    </url>
    <url>
        <loc>https://diby.io/usecases/scenario</loc>
        <lastmod>2022-04-07T03:05:24+00:00</lastmod>
    </url>
    <url>
        <loc>https://diby.io/feature</loc>
        <lastmod>2022-04-07T03:05:24+00:00</lastmod>
    </url>
    <url>
        <loc>https://diby.io/pricing</loc>
        <lastmod>2022-04-07T03:05:24+00:00</lastmod>
    </url>
    <url>
        <loc>https://diby.io/tri</loc>
        <lastmod>2022-04-07T03:05:24+00:00</lastmod>
    </url>
</urlset>
  `;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
