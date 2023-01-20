import Typography from "@mui/material/Typography";
import { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { ModalContext } from "../../../context/ModalContext";
import { ButtonTypeA } from "../../ButtonTypeA/ButtonTypeA";
import { Stack } from "@mui/system";
import { ProductDetailChildModal } from "./ProductDetailChildModal";
import CardMedia from "@mui/material/CardMedia";

const buttonStyles1 = {
  width: "30%",
  color: "black",
  height: "40px",
  fontSize: "16px",
  fontWeight: "900",
  backgroundColor: "#DBF227",
  ":hover": { backgroundColor: "#b3c91e" },
};

const buttonStyles2 = {
  width: "20%",
  color: "black",
  height: "40px",
  fontSize: "16px",
  fontWeight: "900",
  backgroundColor: "#F30A0A",
  ":hover": { backgroundColor: "#D50606" },
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export const ProductDetailModal = () => {
  const [openChildModal, setOpenChildModal] = useState(false);
  const {
    openProductDetailModal,
    setOpenProductDetailModal,
    data,
    setOpenProductDetailChildModal,
  } = useContext(ModalContext);

  const subtotal = (data?.price * data?.units).toFixed(2);
  const IVA = (data?.price * data?.units * 0.19).toFixed(2);
  const total = (data?.price * data?.units * 1.19).toFixed(2);

  const handleClose = () => {
    setOpenProductDetailModal(false);
  };

  return (
    <div>
      <Modal
        open={openProductDetailModal}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <CardMedia
            component="img"
            height="160"
            image={data?.image}
            alt={data?.title}
          />
          <Typography variant="h6">{data?.title}</Typography>
          <Typography variant="subtitle1">{`ID:${data?.ID}`}</Typography>
          <Typography variant="subtitle2">{data?.description}</Typography>
          <Typography variant="h6">{`$ ${data?.price}`}</Typography>
          <Typography variant="subtitle1">{`Cantidad: ${data?.units}`}</Typography>
          <Typography variant="subtitle1">{`Subtotál:$ ${subtotal}`}</Typography>
          <Typography variant="subtitle1">{`IVA:$ ${IVA}`}</Typography>
          <Typography
            sx={{ textDecoration: "underline" }}
            variant="h6"
          >{`Totál:$ ${total}`}</Typography>
          <Stack
            direction="row"
            justifyContent="center"
            gap="15px"
            alignItems="center"
          ></Stack>
          <Stack direction="row" justifyContent="center" gap="20px">
            <ButtonTypeA
              text="Eliminar"
              action={() => setOpenProductDetailChildModal(true)}
              styles={buttonStyles1}
            />
            <ButtonTypeA text="X" action={handleClose} styles={buttonStyles2} />
          </Stack>
          <ProductDetailChildModal
            open={openChildModal}
            setOpen={setOpenChildModal}
          />
        </Box>
      </Modal>
    </div>
  );
};
