import styles from "../page.module.css";
import Link from "next/link";

export default function Doctor() {
    return (
        <main className={styles.main}>
            <div className={styles.description}>
                <p>
                    This is the part where I talk about almost being sent to the insane asylum... 
                </p>
            </div>
            <div className={styles.grid}>
        <Link 
          href="/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Back to home page <span>-&gt;</span>
          </h2>
          <p>This link should take me back to homepage.</p>
        </Link>

        <a
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
    )
} 