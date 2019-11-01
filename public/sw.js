var CACHE_NAME = 'ubergreen-org-cache-v1';
var urlsToCache = ['/', '/about', '/contact'];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    }),
  );
});
