import styles from "./page.module.css"
import Image from "next/image"
import Link from "next/link"

const NotFound: React.FC = () => {
    return (
        <div className={styles.main}>
            <div className={styles.card}>
                <div>
                    <h1>oh no!</h1>
                    <Image
                    src="/leaf.png"
                    alt="Leaf logo"
                    width={100}
                    height={100}
                    priority
                    />
                </div>
                <div>
                    <h1>404</h1>
                    <h2>Nothing fun happening over here... </h2>
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
            <div className={styles.grid}>
                <Link 
                href="/"
                className={styles.card}
                target="_blank"
                rel="noopener noreferrer"
                >
                <h2>
                    Go home! <span>-&gt;</span>
                </h2>
                <p>Click here to go back to landing page</p>
            </Link>
            </div>
        </div>
    )
}

export default NotFound 