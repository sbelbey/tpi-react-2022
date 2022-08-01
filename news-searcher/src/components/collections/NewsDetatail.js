import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsCard from "./NewsCard";
import AddIcon from '@mui/icons-material/Add';
import { grey } from '@mui/material/colors';

export default function NewsDetatail(props) {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState(null);
  const [news, setNews] = useState([]);
  const [totalNews, setTotalNews] = useState(null);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [language, setLanguage] = useState("es");
  const [pageSize, setPageSize] = useState("10");

  const { toSearch } = props;
  useEffect(() => {
    let prevSearch;
    setSearch(toSearch);
    prevSearch !== search && search ? setNews([]) : (prevSearch = search);
    prevSearch = search;
  }, [toSearch]);

  useEffect(() => {
    setLoading(true);
    search &&
      axios
        .get(
          `https://newsapi.org/v2/everything?q=${search}&page=${page}&pageSize=${pageSize}&language=${language}&apiKey=8345e0c926be4f67bff9cc17fce407b0`
        )
        .then((response) => {
          setNews([...news, ...response.data.articles]);
          setTotalNews(response.data.totalResults);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
        });
  }, [search, page]);

  const loadMore = (e) => {
    e.preventDefault();
    setPage(page + 1);
  };

  return (
    <>
      {news && news.length > 0 ? (
        <>
          <h2>
            We founded {" "}
            {page * pageSize > totalNews ? totalNews : page * pageSize} of{" "}
            {totalNews} {" "} {search}
          </h2>
          <section className="news-container">
            {news.map((article) => {
              return <NewsCard article={article}></NewsCard>;
            })}
          </section>

          {news.length === totalNews ? null : (
            <button className="load-more-btn" onClick={loadMore}>
              Load More{" "} <AddIcon sx={{ color: grey[50] }}></AddIcon>
            </button>
          )}
        </>
      ) : search ? (
        loading ? (
          <h2>Loading...</h2>
        ) : (
          <h2>There are no articles</h2>
        )
      ) : null}
    </>
  );
}
