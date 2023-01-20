import { Typography } from "@mui/material";
import { CreateProductForm } from "../../components/CreateProductForm/CreateProductForm";
import { Header } from "../../components/Header/Header";

export const CreateProductPage = () => {
  return (
    <div>
      <Header />
      <CreateProductForm />
    </div>
  );
};
