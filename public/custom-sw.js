importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js');
// importScripts(
//   "/podcast-player/precache-manifest.21eac3d18bac61bd2a92199e9702c227.js"
// );

// Cache CSS, JS, and Web Worker requests with a Stale While Revalidate strategy
workbox.routing.registerRoute(
  // Check to see if the request's destination is style for stylesheets, script for JavaScript, or worker for web worker
  ({ request }) => {
    if(request.destination === 'style') {
      console.log('request style::: ',request);
    }

    return request.destination === 'style' || request.destination === 'script';
  },
  // Use a Stale While Revalidate caching strategy
  new workbox.strategies.StaleWhileRevalidate({
    // Put all cached files in a cache named 'assets'
    cacheName: 'assets',
    maxAgeSeconds: 1,
    plugins: [
      // Ensure that only requests that result in a 200 status are cached
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [200],
      }),
    ],
  }),
);

// self.__precacheManifest = [].concat(self.__precacheManifest || []);
// workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

// workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/podcast-player/index.html"), {
//   blacklist: [/^\/_/,/\/[^/?]+\.[^/]+$/],
// });
