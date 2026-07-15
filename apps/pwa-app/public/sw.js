self.addEventListener("install", (event) => {
  console.log("Service worker installing...");
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  console.log("Service worker activating...");
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  // Basic fetch handler for PWA installability
  event.respondWith(fetch(event.request));
});
