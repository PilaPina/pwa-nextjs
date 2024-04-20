import styles from "./page.module.css"
import Image from "next/image"

const NotFound: React.FC = () => {
    return (
        <div className={styles.main}>
            <div className={styles.description}>
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
                    <h1>Nothing going on over here... </h1>
                </div>
            </div>
        </div>
    )
}

export default NotFound 