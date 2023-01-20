import { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [openAddProductModal, setOpenAddProductModal] = useState(false);
  const [openProductDetailModal, setOpenProductDetailModal] = useState(false);
  const [openProductDetailChildModal, setOpenProductDetailChildModal] =
    useState(false);
  const [data, setData] = useState({});

  return (
    <ModalContext.Provider
      value={{
        data,
        setData,
        openAddProductModal,
        setOpenAddProductModal,
        openProductDetailModal,
        setOpenProductDetailModal,
        openProductDetailChildModal,
        setOpenProductDetailChildModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
