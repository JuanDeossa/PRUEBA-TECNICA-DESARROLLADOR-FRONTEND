import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddBoxIcon from "@mui/icons-material/AddBox";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { ButtonTypeA } from "../ButtonTypeA/ButtonTypeA";

export const Header = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  return (
    // <Box sx={{ width: 500 }}>
    //   <BottomNavigation
    //     showLabels
    //     value={value}
    //     onChange={(event, newValue) => {
    //       setValue(newValue);
    //     }}
    //   >
    //     <BottomNavigationAction
    //       label="Ver Carrito"
    //       icon={<ShoppingCartIcon />}
    //       onClick={() => navigate("/cart-detail")}
    //     />
    //     <BottomNavigationAction
    //       label="Agregar Producto"
    //       icon={<AddBoxIcon />}
    //       onClick={() => navigate("/add-product")}
    //     />
    //     <BottomNavigationAction
    //       label="Crear Producto Perzonalizado"
    //       icon={<BorderColorIcon />}
    //       onClick={() => navigate("/custom-product")}
    //     />
    //   </BottomNavigation>
    // </Box>
    <Box>
      {/* <ButtonTypeA text='Carrito'/>
      <ButtonTypeA/>
      <ButtonTypeA/> */}
    </Box>
  );
};

/*
<Route path="/cart-detail" element={<CartDetailPage />} />
<Route path="/custom-product" element={<CreateProductPage />} />
<Route path="/add-product" element={<SelectProductPage />} />
*/
