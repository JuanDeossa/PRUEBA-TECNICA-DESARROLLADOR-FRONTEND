import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";

export const ProductCard = (props) => {
  const {
    id,
    imageUrl = "",
    title = "Product name not available",
    description = "Description not available",
    price = "$---",
  } = props;

  const { openAddProductModal, setOpenAddProductModal, setData } =
    useContext(ModalContext);

  return (
    <Card sx={{ maxWidth: 345, minHeight: 400 }}>
      <CardActionArea>
        <CardMedia component="img" height="160" image={imageUrl} alt={title} />
        <CardContent sx={{ minHeight: 160 }}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
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
      </CardActions>
    </Card>
  );
};
