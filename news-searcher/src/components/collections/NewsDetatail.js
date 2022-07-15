import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsCard from "./NewsCard";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

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
            You are watching {page * pageSize} for {totalNews} News
          </h2>
          {news.map((article) => {
            return <NewsCard article={article}></NewsCard>;
          })}
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              endIcon={<AddIcon />}
              onClick={loadMore}
            >
              Load more
            </Button>
          </Stack>
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
