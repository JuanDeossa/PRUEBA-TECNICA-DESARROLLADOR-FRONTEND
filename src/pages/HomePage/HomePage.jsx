import { Header } from "../../components/Header/Header";
import Box from "@mui/material/Box";
import "./HomePage.css";
import { MainProductsList } from "../../components/MainProductsList/MainProductsList";

export const HomePage = () => {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Header/>
      <MainProductsList/>
    </Box>
  );
};
