const sm = require('sitemap');

const sitemap = sm.createSitemap({
  hostname: 'https://ubergreen.org',
  cacheTime: 600000, // 600 sec - cache purge period
  urls: [{ url: '/' }, { url: '/about' }, { url: '/contact' }],
});

module.exports = sitemap;
