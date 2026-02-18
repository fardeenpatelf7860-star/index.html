const CACHE_NAME = "props-calculator-v3";

const urlsToCache = [
  "logo.png",
  "manifest.json"
];

// Install
self.addEventListener("install", event => {
  self.skipWaiting();
});

// Activate
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => caches.delete(cache))
      );
    })
  );
  self.clients.claim();
});

// Fetch (always get fresh HTML)
self.addEventListener("fetch", event => {
  if (event.request.mode === "navigate") {
    event.respondWith(fetch(event.request));
  }
});
