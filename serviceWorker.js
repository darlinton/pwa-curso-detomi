const detomiDev = "calc-calender-v1"
const assets = [
    "/index.html",
    "/css/mystile.css",
    "/js/myscripts.js",
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(detomiDev).then(cache => {
            cache.addAll(assets)
        })
    )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})