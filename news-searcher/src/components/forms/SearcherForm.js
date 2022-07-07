import React from "react";
import { useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function HookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <h1>Buscar Noticias</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="on"
        >
          <TextField
            id="standard-basic"
            label="Buscar Noticia"
            variant="standard"
            {...register("parametro", { required: "requerido" })}
          />
        </Box>
        {errors.parametro && <h2>{errors.parametro.message}</h2>}
        <input type="submit" />
      </form>
    </>
  );
}
