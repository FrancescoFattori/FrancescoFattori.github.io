const STATIC_ASSETS = [
    "/insulti_gratis/"
];

async function cacheAssets() {
    const cache = await caches.open("static_cache");
    return cache.addAll(STATIC_ASSETS);
}

async function fetchAssets(event) {
    try {
        const response = await fetch(event.request);
        return response;
    } catch (err) {
        console.log("a");
        const cache = await caches.open("static_cache");
        return cache.match(event.request);
    }
}

self.addEventListener("install", (event) => {
    console.log("installed");
    event.waitUntil(cacheAssets());
});

self.addEventListener("activate", (event) => {
    console.log("activated");
});

self.addEventListener("fetch", (event) => {
    console.log("fetched");
    event.respondWith(fetchAssets(event));
});