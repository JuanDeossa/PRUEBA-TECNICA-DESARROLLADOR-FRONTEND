import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useContext, useState } from "react";
import { ModalContext } from "../../../context/ModalContext";
import { ButtonTypeA } from "../../ButtonTypeA/ButtonTypeA";
import { Stack } from "@mui/system";

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

export const AddProductModal = () => {
  const [cantidad, setCantidad] = useState(1);
  const { openAddProductModal, setOpenAddProductModal, data, setData } =
    useContext(ModalContext);
  const handleOpen = () => setOpenAddProductModal(true);
  const handleClose = () => setOpenAddProductModal(false);

  const addItem = () => {
    if (cantidad < 5) {
      setCantidad((prevState) => prevState + 1);
    }
  };
  const delItem = () => {
    if (cantidad > 1) {
      setCantidad((prevState) => prevState - 1);
    }
  };

  return (
    <div>
      <Modal
        open={openAddProductModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6">{data?.title}</Typography>
          <Typography variant="subtitle2">{data?.description}</Typography>
          <Typography variant="h6">{`$ ${data?.price}`}</Typography>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            textAlign="center"
          >
            Seleccionar cantidad (5 max)
          </Typography>
          <Stack
            direction="row"
            justifyContent="center"
            gap="15px"
            alignItems="center"
          >
            <ButtonTypeA text="-" action={delItem} styles={buttonStyles} />
            <Typography variant="h2">{cantidad}</Typography>
            <ButtonTypeA text="+" action={addItem} styles={buttonStyles} />
          </Stack>
          <Stack direction="row" justifyContent="center">
            <ButtonTypeA text="Aceptar" styles={buttonStyles2} />
          </Stack>
        </Box>
      </Modal>
    </div>
  );
};
