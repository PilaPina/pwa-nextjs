

/** @type {import('next').NextConfig} */   

import withPWA from 'next-pwa'

const isProd = process.env.NODE_ENV === 'production'   //this disables pwa support while dev = see reason below
 
const withPWA2 = withPWA({
  dest: "public",
  disable: !isProd,  // This disables the service worker in development mode
});

export default withPWA2({
  // Your Next.js config
});


/*Kept getting these errors while in dev mode: 
⚠ GenerateSW has been called multiple times, perhaps due to running webpack in --watch mode. 
The precache manifest generated after the first call may be inaccurate! 
Please see https://github.com/GoogleChrome/workbox/issues/1790 for more information. 
*/
