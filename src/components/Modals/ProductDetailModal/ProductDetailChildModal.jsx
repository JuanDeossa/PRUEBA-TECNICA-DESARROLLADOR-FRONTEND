import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useContext } from "react";
import { ModalContext } from "../../../context/ModalContext";
import { ButtonTypeA } from "../../ButtonTypeA/ButtonTypeA";
import { Stack } from "@mui/system";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { Typography } from "@mui/material";

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

const buttonStyles1 = {
  width: "100%",
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

export const ProductDetailChildModal = () => {
  const [productsCart, setProductsCart] = useLocalStorage("productsList", []);
  const {
    setOpenProductDetailModal,
    openProductDetailChildModal,
    setOpenProductDetailChildModal,
    data,
  } = useContext(ModalContext);
  const handleCloseChildModal = () => {
    setOpenProductDetailChildModal(false);
  };
  const handleConfirmChildModal = () => {
    const newArray = productsCart?.filter((product) => product?.ID !== data.ID);
    setProductsCart(newArray);
    setOpenProductDetailModal(false);
    setOpenProductDetailChildModal(false);
    location.reload();
  };

  return (
    <>
      <Modal
        hideBackdrop
        open={openProductDetailChildModal}
        onClose={handleCloseChildModal}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 300 }}>
          <Typography variant="subtitle1" textAlign="center">
            ¿Seguro que deseas eliminar todas las unidades?
          </Typography>
          <Stack direction="row" gap="20px">
            <ButtonTypeA
              text="Confirmar"
              action={handleConfirmChildModal}
              styles={buttonStyles1}
            />
            <ButtonTypeA
              text="X"
              action={handleCloseChildModal}
              styles={buttonStyles2}
            />
          </Stack>
        </Box>
      </Modal>
    </>
  );
};
