import React from "react";

export default function NewsCard({ article }) {
  return (
    <a href={article.url} target="_blank">
      <article className="news-card">
        <img
          className="news-img"
          src={article.urlToImage}
          alt={article.title}
        />
        <section className="news-description">
          <h6 className="news-title">{article.title}</h6>
          <p className="news-published">Published: {article.publishedAt}</p>
          <p className="news-author">{article.author}</p>
        </section>
      </article>
    </a>
  );
}
