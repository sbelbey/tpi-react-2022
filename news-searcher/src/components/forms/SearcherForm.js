import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";


export default function SearcherForm(props) {
  const [search, setSearch] = useState("");

  const onSubmited = (e) => {
    e.preventDefault();
    props.handleSearch(search);
  };

  const changeState = e => {
    setSearch(e.target.value);
  }

  return (
    <>
      <h1>Buscar Noticias</h1>
      <form onSubmit={onSubmited}>
          <TextField
            id="standard-basic"
            label="Buscar Noticia"
            variant="standard"
            onChange={changeState}
          />
          <Stack direction="row" spacing={2}>
            <Button type="submit" variant="contained" endIcon={<SearchIcon />}>
              Search
            </Button>
          </Stack>
      </form>
    </>
  );
}
