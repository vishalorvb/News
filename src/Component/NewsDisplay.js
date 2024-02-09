import React from 'react'

function NewsDisplay({ news }) {
    console.log(news)
    return (
        <div>
            <h1>{news.headline}</h1>
            <article>
                <h2>{news.subheading}</h2>
                <p>Published on {news.date}</p>
                <img src={news.photourl} />
                <p>{news.b1}</p>
                <p>{news.b2}</p>
                <p>{news.b3}</p>
            </article>
        </div>
    )
}

export default NewsDisplay
