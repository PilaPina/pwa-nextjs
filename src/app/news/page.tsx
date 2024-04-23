
 'use client'
  import { useEffect, useState } from "react";
  import styles from "../page.module.css";
   // import MyNav from "../components/navbar";

  export interface Article {
      title: string;
      description: string;
      url: string;
  }

  export default function News() {
      const [news, setNews] = useState<Article[] | null>(null);
  
    //   useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const data = await fetchNews();
    //         setNews(data);
    //       } catch (error) {
    //         console.error('Error fetching news data:', error);
    //       }
    //     };
    //     fetchData();
    //   }, []);
  
      return (
        <main className={styles.main}>
          <h1>News</h1>
          {news &&
            news.map((article: Article, index: number) => (
              <div key={index}>
                <h2>{article.title}</h2>
                <p>{article.description}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  Read more
                </a>
              </div>
            ))}
        </main>
      );
    }