import "./CreateProductForm.css";
import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import { useForm } from "react-hook-form";
import { useLocalStorage } from "../../../src/hooks/useLocalStorage";

export const CreateProductForm = () => {
  const [customProducts, setCustomProducts] = useLocalStorage(
    "customProductsList",
    []
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const newItem = {
      title: data["Nombre"],
      description: data["Descripción"],
      price: data["Precio"],
      images: [
        "https://via.placeholder.com/242x160.png/0000FF/808080%20C/?text=Custom-Product",
        "",
        "",
      ],
      custom: true,
    };
    const num = customProducts?.length;
    setCustomProducts([...customProducts, { ...newItem, id: `C-${num + 2}` }]);
    location.reload()
  };
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box margin="0 auto">
        <Stack margin="20px auto" width="30%" spacing="15px">
          <Typography
            variant="h4"
            textAlign="center"
            fontFamily="poppins,san-serif"
            color="#042940"
          >
            Agrega tu producto personalizado
          </Typography>
          <input
            className="form-input"
            type="text"
            placeholder="Nombre"
            {...register("Nombre", { required: true, maxLength: 20 })}
          />
          <input
            className="form-input"
            type="text"
            placeholder="Descripción"
            {...register("Descripción", { required: true, maxLength: 50 })}
          />
          <input
            className="form-input"
            type="number"
            placeholder="Precio"
            {...register("Precio", {
              required: true,
              max: 10000,
              min: 1,
              maxLength: 5,
            })}
          />

          <input
            fontFamily="poppins-san-serif"
            value="Guardar"
            className="submit-input"
            type="submit"
          />
        </Stack>
      </Box>
    </form>
  );
};
