import styles from "./page.module.css"
import Image from "next/image"

const NotFound: React.FC = () => {
    return (
        <div className={styles.main}> 
           <div>
                <Image
                src="/leaf.png"
                alt="Leaf logo"
                width={100}
                height={100}
                priority
                />
            </div>   
            <div>                
                <h1>oh no!</h1>
                <h1>There is no internet</h1>
            </div> 
        </div>
    )
}

export default NotFound 