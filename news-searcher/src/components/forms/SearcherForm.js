import React, { useState } from "react";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { grey } from '@mui/material/colors';

export default function SearcherForm(props) {
  const [search, setSearch] = useState("");

  const onSubmited = (e) => {
    e.preventDefault();
    props.handleSearch(search);
  };

  const changeState = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <form onSubmit={onSubmited} className="searcher-container">
        <input
          className="searcher-input"
          placeholder="Buscar Noticias"
          id="standard-basic"
          label="Buscar Noticia"
          variant="standard"
          onChange={changeState}
        />
        <button className="searcher-btn" type="submit" variant="contained">
          <SearchOutlinedIcon sx={{ color: grey[700] }}/>
        </button>
      </form>
    </>
  );
}
