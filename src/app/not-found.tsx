import styles from "./page.module.css"

const NotFound: React.FC = () => {
    return (
        <div className={styles.main}>
            <h1>oh no!</h1>
            <h1>404</h1>
            <h1>so very sorry but there is nothing here</h1>
        </div>
    )
}

export default NotFound 