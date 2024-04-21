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
                <h2>It&apos;s a good idea to have an offline page because I might not be precaching 
                    everything and you don&apos;t want your users to get stuck on a blank screen.</h2>
            </div> 
        </div>
    )
}

export default NotFound 