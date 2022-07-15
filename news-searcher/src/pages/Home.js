import React, { useState, useEffect } from "react";
import NewsDetatail from "../components/collections/NewsDetatail";
import SearcherForm from "../components/forms/SearcherForm";

export default function Home() {
  const [toSearch, setToSearch] = useState(null);

  const handleSearch = (search) =>{
    setToSearch(search);
  }

  useEffect( () => {
  }, [toSearch])

  return (
    <>
      <SearcherForm handleSearch={handleSearch}></SearcherForm>
      <NewsDetatail toSearch={toSearch}></NewsDetatail>
    </>
  );
}
