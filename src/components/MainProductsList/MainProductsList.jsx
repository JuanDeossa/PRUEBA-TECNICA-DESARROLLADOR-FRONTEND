import { useEffect, useState } from "react";
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
import { getMainProducts } from "../../services/getMainProducts";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { ProductCard } from "../ProductCard/ProductCard";

export const MainProductsList = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    let data = await getMainProducts();
    data = data.splice(0, 20);
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Box>
      <Box sx={{ flexGrow: 1, margin: "40px 100px" }}>
        <Grid margin="0 auto" width="90%" container spacing={1}>
          {products.map((product, index) => (
            <Grid key={index} item xs={4}>
              <ProductCard
                title={product?.title}
                description={product?.description}
                imageUrl={product?.images[0]}
                price={product?.price}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

/*
<Route path="/cart-detail" element={<CartDetailPage />} />
<Route path="/custom-product" element={<CreateProductPage />} />
<Route path="/add-product" element={<SelectProductPage />} />
*/

// import * as React from "react";
// import { styled } from "@mui/material/styles";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

// export default function BasicGrid() {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <Grid container spacing={2}>
//         <Grid item xs={8}>
//           <Item>xs=8</Item>
//         </Grid>
//         <Grid item xs={4}>
//           <Item>xs=4</Item>
//         </Grid>
//         <Grid item xs={4}>
//           <Item>xs=4</Item>
//         </Grid>
//         <Grid item xs={8}>
//           <Item>xs=8</Item>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }
