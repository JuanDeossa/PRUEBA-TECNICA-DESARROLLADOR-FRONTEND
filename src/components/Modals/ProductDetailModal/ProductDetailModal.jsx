import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useContext, useState } from "react";
import { ModalContext } from "../../../context/ModalContext";
import { ButtonTypeA } from "../../ButtonTypeA/ButtonTypeA";
import { Stack } from "@mui/system";
// import { useLocalStorage } from "../../../hooks/useLocalStorage";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const buttonStyles = {
  color: "black",
  height: "30px",
  padding: "0px",
  fontSize: "36px",
  fontWeight: "900",
  backgroundColor: "#DBF227",
  ":hover": { backgroundColor: "#b3c91e" },
};

const buttonStyles2 = {
  width: "30%",
  color: "black",
  height: "40px",
  fontSize: "16px",
  fontWeight: "900",
  backgroundColor: "#DBF227",
  ":hover": { backgroundColor: "#b3c91e" },
};

export const ProductDetailModal = () => {
  const { openProductDetailModal, setOpenProductDetailModal, data, setData } =
    useContext(ModalContext);
  const handleOpen = () => setOpenProductDetailModal(true);
  const handleClose = () => setOpenProductDetailModal(false);

  return (
    <div>
      <Modal
        open={openProductDetailModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6">{data?.title}</Typography>
          <Typography variant="subtitle1">{`ID:${data?.ID}`}</Typography>
          <Typography variant="subtitle2">{data?.description}</Typography>
          <Typography variant="h6">{`$ ${data?.price}`}</Typography>
          <Typography variant="subtitle1">{`Cantidad: ${data?.units}`}</Typography>
          <Typography variant="subtitle1">{`Subtotál:$ ${
            data?.price * data?.units
          }`}</Typography>
          <Typography variant="subtitle1">{`IVA:$ ${
            data?.price * data?.units * 0.19
          }`}</Typography>
          <Typography
            sx={{ textDecoration: "underline" }}
            variant="h6"
          >{`Totál:$ ${data?.price * data?.units * 1.19}`}</Typography>
          <Stack
            direction="row"
            justifyContent="center"
            gap="15px"
            alignItems="center"
          ></Stack>
          <Stack direction="row" justifyContent="center">
            <ButtonTypeA
              text="Eliminar"
              action={() => console.log("Yes")}
              styles={buttonStyles2}
            />
          </Stack>
        </Box>
      </Modal>
    </div>
  );
};
