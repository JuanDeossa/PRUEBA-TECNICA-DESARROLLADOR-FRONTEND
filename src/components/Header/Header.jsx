import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import "./Header.css"
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

export const Header = () => {

  return (
    <Stack width={"100%"} height={108}>
      <Box width={"100%"} height={72} sx={{ backgroundColor: "#042940" }}>
        <span className="logo1"></span>
      </Box>
      <Stack
        width={"100%"}
        height={36}
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        sx={{ backgroundColor: "#DBF227", paddingRight: "20px" }}
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
