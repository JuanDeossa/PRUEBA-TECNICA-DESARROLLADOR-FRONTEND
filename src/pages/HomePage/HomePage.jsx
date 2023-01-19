import { Header } from "../../components/Header/Header";
import Box from "@mui/material/Box";
import "./HomePage.css";
import { MainProductsList } from "../../components/MainProductsList/MainProductsList";
import Typography from "@mui/material/Typography";

export const HomePage = () => {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Header />
      <Typography textAlign="center" variant="h4" fontFamily={"Poppins,sans-serif"} marginTop={5}>
        Developed By Juan Ricardo Deossa
      </Typography>
      <MainProductsList />
    </Box>
  );
};
