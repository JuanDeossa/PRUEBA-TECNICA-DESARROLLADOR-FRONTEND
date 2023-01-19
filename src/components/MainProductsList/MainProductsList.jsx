import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { getMainProducts } from "../../services/getMainProducts";
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
                id={product?.id}
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
