import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import "./Header.css";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddBoxIcon from "@mui/icons-material/AddBox";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { ButtonTypeA } from "../ButtonTypeA/ButtonTypeA";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { minHeight } from "@mui/system";

const navItemStyles = {
  variant: "subtitle1",
  fontFamily: "Poppins,sans-serif",
  ":hover": { textDecoration: "underline", cursor: "pointer" },
};

export const Header = () => {
  const navigate = useNavigate();
  const navigateTo = (route = "*") => navigate(route);
  return (
    <Stack width={"100%"} height={108}>
      <Stack
        width={"100%"}
        height={72}
        sx={{ backgroundColor: "#042940" }}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        paddingLeft="71px"
      >
        <span className="logo1"></span>
        <Stack color="#ffff" direction="row" paddingRight="71px" spacing={4}>
          <Typography onClick={() => navigateTo("/")} sx={navItemStyles}>
            Home
          </Typography>
          <Typography
            onClick={() => navigateTo("/cart-detail")}
            sx={navItemStyles}
          >
            Carrito
          </Typography>
          {/* <Typography
            onClick={() => navigateTo("/add-product")}
            sx={navItemStyles}
          >
            Seleccionar producto
          </Typography> */}
          <Typography
            onClick={() => navigateTo("/custom-product")}
            sx={navItemStyles}
          >
            Crear Producto
          </Typography>
        </Stack>
      </Stack>
      <Stack
        width={"100%"}
        height={36}
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        sx={{ backgroundColor: "#DBF227" }}
        paddingRight="71px"
      >
        <Typography variant="subtitle1" fontFamily={"Poppins,sans-serif"}>
          Medellín,Colombia
        </Typography>
      </Stack>
    </Stack>
  );
};

/*
<Route path="/cart-detail" element={<CartDetailPage />} />
<Route path="/custom-product" element={<CreateProductPage />} />
<Route path="/add-product" element={<SelectProductPage />} />
*/
