import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          This is my progressive web application. Usually referred to as a PWA. <br/> 
          They are not a website, not a desktop application and not an app. They are something in between. They can behave like an app, or a website, whichever you prefer.<br/> 
          You can install them in your browser and then they look like an app. <br/>
          PWA&apos;s improve user engagement. They are cost-effective in development. Are SEO optimized. 
          Responsive and fast, even on slow networks. And even offline. Yup. I said it. Offline. <br/> 
          And they are fully cross-platform, from any device, any browser and you do not need an app store!<br/>
        
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/leaf.png"
              alt="Leaf logo"
              width={50}
              height={50}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/512x512.svg"
          alt="Image of the fossils from animal crossing game"
          width={150}
          height={150}
          priority
        />
      </div>

{/* links for pages will be below */}

      <div className={styles.grid}>
        <Link href="/doc"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            I need a doc <span>-&gt;</span>
          </h2>
          <p>This was so hard in the beginning I thought I might need an appt with a doctor.</p>
        </Link>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Headscratcher <span>-&gt;</span>
          </h2>
          <p>There doesn&apos;t seem to be one good resource for reading up about PWA&apos;s. It&apos;s all very scattered.</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            One step at a time<span>-&gt;</span>
          </h2>
          <p>I&apos;ve created this in Next.js and made it installable as a PWA. Next stop is offline and an API!</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploying <span>-&gt;</span>
          </h2>
          <p>
            I am going to deploy it with Vercel. Not yet though. Not yet.
          </p>
        </a>
      </div>
    </main>
  );
}
