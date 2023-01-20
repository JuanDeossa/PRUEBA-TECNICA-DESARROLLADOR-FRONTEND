import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { getMainProducts } from "../../services/getMainProducts";
import Grid from "@mui/material/Grid";
import { ProductCard } from "../ProductCard/ProductCard";
import { useLocalStorage } from "../../../src/hooks/useLocalStorage";

export const MainProductsList = () => {
  const [customProducts, setCustomProducts] = useLocalStorage(
    "customProductsList",
    []
  );
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    let data = await getMainProducts();
    data = data.splice(0, 20);
    setProducts([...customProducts, ...data]);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Box>
      <Box
        maxWidth="1300px"
        margin="0 auto"
        sx={{ flexGrow: 1, marginX: { xs: "auto" } }}
      >
        <Grid paddingX="40px" paddingY="30px" container spacing={4}>
          {products.map((product, index) => (
            <Grid key={index} item xs={12} sm={6} md={4}>
              <ProductCard
                id={product?.id}
                title={product?.title}
                description={product?.description}
                imageUrl={product?.images[0]}
                price={product?.price}
                custom={product?.custom}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
