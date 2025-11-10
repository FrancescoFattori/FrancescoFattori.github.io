const STATIC_ASSETS = [
    "index.html"
];

async function cacheAssets() {
    const cache = await caches.open("static_cache");
    return cache.addAll(STATIC_ASSETS);
}

async function fetchAssets(event) {
    try {
        const response = fetch(event.request);
        return response;
    } catch (err) {
        const cache = await caches.open("static_cache");
        return cache.match(event.request);
    }
}

self.addEventListener("install", (event) => {
    event.waitUntil(cacheAssets);
});

self.addEventListener("activate", (event) => {

});

self.addEventListener("fetch", (event) => {
    event.respondWith(fetchAssets(event));
});