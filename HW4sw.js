const CACHE_NAME = 'CacheA';
const urlsToCache = [
    '/',
    '/HW4index.html',
    '/HW4index.css',
    '/HW4sw.js'
];

// Install event: Caches static assets
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

// Fetch event: Intercepts network requests
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {                     // Cache hit - return response
                    return response;
                }
                return fetch(event.request);        // No cache hit - fetch from network
            })
    );
});

// Activate event: Cleans up old caches
self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});