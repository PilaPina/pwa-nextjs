ABOUT THIS PROJECT:
This is my progressive web application. Usually referred to as a PWA.
They are not a website, not a desktop application and not an app. They are something in between. They can behave like an app, or a website, whichever you prefer.
PWAs are made with web technologies but give users an experience that feels like using a native app on systems like iOS or Android. You use the same code base for all devices. Fully cross-platform and no app store needed. 

PWA Benefits: 
They bring together the best of both worlds - the wide accessibility of traditional websites and the perks of platform-specific apps, such as being able to work offline.
PWA's improve user engagement. They are cost-effective in development. 
Are SEO optimized. Responsive and fast, even on slow networks.

Core Features: For a PWA to work properly, it needs a web app manifest so users can install it through their browser, and a service worker for functions like offline access and running in the background, sending push notifications. 
Service workers can be tailored to fit what your PWA needs. 


Tech Stack:
Next.js 14, Typescript and Yarn.  
Next-pwa plugin that helps with creating a PWA. It comes with service workers that allow you to pre-cache Javascript and CSS files out of the box. 




MANIFEST FILE (public/manifest.json):
A manifest file provides metadata and config details for the PWA. Browsers use this file to identify and install the PWA, allowing it to behave more like a native app on a user's device.







----

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
## Getting Started
First, run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.
This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More
To learn more about Next.js, take a look at the following resources:
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.




