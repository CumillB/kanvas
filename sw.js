// Minimal service worker. Its only job is to exist and register, which is
// part of what Chrome checks before treating a site as a real installable
// app. It deliberately does NOT cache anything, so updates to index.html
// always show up immediately instead of an old cached version sticking
// around.
self.addEventListener('install', function (event) {
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function (event) {
  event.respondWith(fetch(event.request));
});
