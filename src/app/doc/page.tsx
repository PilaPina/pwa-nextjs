import styles from "../page.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Doctor() {
    return (
        <main className={styles.main}>
            <div className={styles.description}>
                <p>
                    This is the part where I talk about almost being sent to the insane asylum... 
                    <br/>
                    And how most of this time has been dealing with next.js errors, not PWA errors. 
                    <br/>
                    The PWA part was the easy part. 
                    <br/>
                </p>
                <Image
                    src="/leaf.png"
                    alt="Leaf logo"
                    width={100}
                    height={100}
                    priority
                    />
            </div>
        <div className={styles.grid}>
        <Link 
          href="/"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            go back<span>-&gt;</span>
          </h2>
          <p>This link will take you back to the landing page.</p>
        </Link>

        <a
          // href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Headscratcher <span>-&gt;</span>
          </h2>
          <p>There doesn&apos;t seem to be one good resource for reading up about PWA&apos;s. It&apos;s all very scattered.
            And not up to date yet for Next.js 14, or maybe it&apos;s just me? 
          </p>
        </a>

        <Link
          href="/weather"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            The Weather<span>-&gt;</span>
          </h2>
          <p>Here is my weather API. I&apos;m currently getting confusing errors on it... </p>
        </Link>

        <Link
          href="/not-found"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            News! <span>-&gt;</span>
          </h2>
          <p>
            This is my News API - but it&apos;s not connected yet. 
          </p>
        </Link>
      </div>
        </main>
    )
} 