import { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [openAddProductModal, setOpenAddProductModal] = useState(false);
  const [openProductDetailModal, setOpenProductDetailModal] = useState(false);
  const [totalValue, setTotalValue] = useState(0);
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
        totalValue,
        setTotalValue,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
