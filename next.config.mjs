

/** @type {import('next').NextConfig} */   

import withPWA from 'next-pwa'

const isProd = process.env.NODE_ENV === 'production'   //this disables pwa support while in dev mode = see reason below
 
const withPWA2 = withPWA({
  dest: "public",  // destination of service workers
  disable: !isProd,  // This disables the service worker in development mode
  runtimeCaching: [
    {
      urlPattern:  /^https:\/\/newsapi\.org\//,   // BaseUrl for my News API
      handler:     `NetworkFirst`,   // means that service worker will always try to fetch the latest data, but fallback onto cache if offline
      options: {
        cacheName: 'news-api-cache',
        expiration:{
          maxEntries:  200,
          maxAgeSeconds: 24 * 60 * 60,  // cache 24 hours
        },
        cacheableResponse: {
          statuses: [0, 200]
        }
      }
    },
    {
      urlPattern: /^http:\/\/api\.weatherapi\.com\/v1\//, // BaseUrl for my Weather API
      handler: `NetworkFirst`,
      options: {
        cacheName: 'weather-api-cache',
        expiration: {
          maxEntries: 200,
          maxAgeSeconds: 24 * 60 * 60, // cache 24 hours
        }
      }
    }
  ]
});

export default withPWA2({
  // Your Next.js config
});


/*Simplified Debugging: 
Service workers can make debugging more complex because they can cache assets and API responses. 
This means you might not be seeing the most recent version of your files in development if they are being served from the service worker’s cache. 
Disabling the service worker in development ensures that you’re always seeing the latest version of your files.
Performance: 
Registering a service worker, handling caching, and serving cached responses can add some overhead to your application. 
In development, you typically want your changes to be reflected immediately without any performance considerations getting in the way.
Avoiding Unnecessary Caching: In development, your files can change frequently. 
If the service worker caches every version of every file, you could end up using a lot of unnecessary storage space.
*/
