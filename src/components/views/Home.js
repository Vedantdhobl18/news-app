import "./Home.css"
import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import NewsArticle from "../../components/NewsArticle/NewsArticle"

function Home() {

    const [news, setNews] = useState([])
    const [searchQuery, setSearchQuery] = useState("pune")

    
    const loadNews = async () => {
       try{
        const response = await axios.get(`https://newsapi.org/v2/everything?q=${searchQuery}&from=2024-07-19&to=2024-07-19&sortBy=popularity&apiKey=66994ae0d3ad41af9932a64fa4b28652`);

        setNews(response.data.articles)
       }
       
       catch(error){
        console.log(error)
       }
    }

    useEffect(() => {
        loadNews()
    }, [])

    useEffect(() => {
        loadNews()
    }, [searchQuery])

    return (
        <div>
            <h1 className="heading">News App</h1>

            <input
                type="text"
                className="search-input"
                value={searchQuery}
                onChange={(e) => {
                    setSearchQuery(e.target.value)

                }}
            />
            <div className="news-container">

                {
                    news.map((newsArticle, i) => {
                        const {
                            author,
                            title,
                            description,
                            url,
                            urlToImage,
                            publishedAt,

                        } = newsArticle

                        return (
                            <NewsArticle
                                key={i}
                                author={author}
                                title={title}
                                description={description}
                                url={url}
                                urlToImage={urlToImage}
                                publishedAt={publishedAt}
                            />
                        )

                    })

                }
            </div>
        </div>
    )
}

export default Home