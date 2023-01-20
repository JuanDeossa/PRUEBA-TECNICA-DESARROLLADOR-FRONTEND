import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";
import { ButtonTypeA } from "../ButtonTypeA/ButtonTypeA";
import { Stack } from "@mui/system";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const buttonStyles2 = {
  width: "10%",
  color: "black",
  height: "30px",
  fontSize: "16px",
  fontWeight: "900",
  backgroundColor: "#F30A0A",
  ":hover": { backgroundColor: "#D50606" },
};

export const ProductCard = (props) => {
  const [customProducts, setCustomProducts] = useLocalStorage(
    "customProductsList",
    []
  );

  const {
    id,
    imageUrl = "",
    title = "Product name not available",
    description = "Description not available",
    price = "$---",
    custom,
  } = props;

  const { openAddProductModal, setOpenAddProductModal, setData } =
    useContext(ModalContext);

  const handleDeleteCustom = (id) => {
    console.log(id);
    const newArray = customProducts?.filter((product) => product?.id !== id);
    setCustomProducts(newArray);
    location.reload();
  };

  return (
    <Card sx={{ maxWidth: 345, minHeight: 400 }}>
      <CardActionArea>
        <CardMedia component="img" height="160" image={imageUrl} alt={title} />
        <CardContent sx={{ minHeight: 160 }}>
          <Typography gutterBottom variant="h5" component="div">
            {`${title} ${custom && "(Custom)"}`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ marginTop: "10px", fontWeight: "900" }}
          >
            {`$ ${price}`}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Stack width="100%" direction="row" justifyContent="space-between">
          <Button
            size="small"
            sx={{
              color: "#042940",
              fontWeight: "900",
              fontFamily: "poppins,sans-serif",
              backgroundColor: "#DBF227",
              ":hover": { backgroundColor: "#b3c91e" },
            }}
            onClick={() => {
              setData({ id, title, description, price, imageUrl });
              setOpenAddProductModal(true);
            }}
          >
            Añadir al carrito
          </Button>
          {custom && (
            <ButtonTypeA
              text="X"
              action={() => handleDeleteCustom(id)}
              styles={buttonStyles2}
            ></ButtonTypeA>
          )}
        </Stack>
      </CardActions>
    </Card>
  );
};
