// Bump VERSION whenever any game file changes, so phones download the new version.
const VERSION = 'v6';
const CACHE = 'particle-mahjong-' + VERSION;
const ASSETS = [
  './',
  'index.html',
  'manifest.webmanifest',
  'icons/icon.svg',
  'icons/icon-192.png',
  'icons/icon-512.png',
  // Libraries from the CDN: must match the <script> tags in index.html
  'https://unpkg.com/react@18.3.1/umd/react.production.min.js',
  'https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js',
  'https://unpkg.com/@babel/standalone@7.26.4/babel.min.js',
];

// 'reload' skips the browser's own short-term cache, so a new version never stores old copies.
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(ASSETS.map(url => new Request(url, { cache: 'reload' }))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith('particle-mahjong-') && k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  // The manifest (the app's name, icon and ID for installing) comes fresh from the internet when possible.
  if (new URL(e.request.url).pathname.endsWith('/manifest.webmanifest')) {
    e.respondWith(
      fetch(e.request, { cache: 'no-cache' })
        .then(res => {
          const copy = res.clone();
          if (res.ok) caches.open(CACHE).then(c => c.put('manifest.webmanifest', copy));
          return res;
        })
        .catch(() => caches.match('manifest.webmanifest'))
    );
    return;
  }
  // Everything else: cache first, so the game works fully offline once it has been opened once.
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then(hit => hit || fetch(e.request)));
});
