import "./CartList.css";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useContext, useEffect } from "react";
import { ModalContext } from "../../context/ModalContext";
import { RiEyeLine } from "react-icons/ri";
import { Box } from "@mui/system";
import { getTotalValue } from "../../services/getTotalValue";
import { Typography } from "@mui/material";

export const CartList = () => {
  useEffect(() => {
    setTotalValue(getTotalValue(productsList));
  });

  const emptyTable = Array(0).fill(null);
  const [productsList, setProductsList] = useLocalStorage("productsList", []);

  const cellStyles = {
    label: {
      padding: {
        xs: "20px 0px 20px 10px",
        sm: "10px 10px",
      },
      fontSize: {
        xs: "16px",
        sm: "25px",
      },
      fontWeight: "900",
    },
    value: {
      padding: {
        xs: "10px 0px 10px 10px",
        sm: "10px 10px",
      },
      fontSize: {
        xs: "14px",
        sm: "16px",
      },
      minHeight: "47px !important",
    },
  };

  const labels = ["ID", "Nombre", "Decripción", "Ver más"];

  const { setOpenProductDetailModal, setData, totalValue, setTotalValue } =
    useContext(ModalContext);

  const showRowDetails = (id) => {
    setOpenProductDetailModal(true);
    catchDataByID(id);
  };

  const catchDataByID = (id) => {
    const product = productsList.find((item) => item.ID === id);
    setData(product);
  };

  return (
    <div className="cart-list">
      <TableContainer
        component={Paper}
        sx={{
          width: "100% ",
          borderTopRightRadius: "20px",
          borderTopLeftRadius: "20px",
        }}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {labels.map((label, i) => (
                <TableCell
                  align={label !== "Ver más" ? "left" : "center"}
                  key={i}
                  sx={cellStyles.label}
                >
                  {label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {!productsList.length
              ? null
              : productsList.map((row, i) => (
                  <TableRow key={i}>
                    <TableCell sx={cellStyles.value}>{row?.ID}</TableCell>
                    <TableCell align="left" sx={cellStyles.value}>
                      {row?.title}
                    </TableCell>
                    <TableCell align="left" sx={cellStyles.value}>
                      {row?.description ?? "Not available"}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={cellStyles.value}
                      id={row?.ID}
                      onClick={() => showRowDetails(row?.ID)}
                    >
                      <RiEyeLine className="details-icon" />
                    </TableCell>
                  </TableRow>
                ))}
            {productsList?.length
              ? null
              : emptyTable.map((e, i) => (
                  <TableRow key={i}>
                    <TableCell sx={cellStyles.value}></TableCell>
                    <TableCell
                      align="center"
                      sx={{ ...cellStyles.value, color: "white" }}
                    >
                      .
                    </TableCell>
                    <TableCell
                      className={`table-data state`}
                      align="center"
                      sx={cellStyles.value}
                    ></TableCell>
                    <TableCell align="center" sx={cellStyles.value}></TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box padding="10px" textAlign="end">
        <Typography>{`Subtotál: $ ${totalValue}`}</Typography>
        <Typography>{`Iva: $ ${(totalValue * 0.19).toFixed(2)}`}</Typography>
        <Typography
          sx={{ textDecoration: "underline" }}
          variant="h6"
        >{`Totál: $ ${(totalValue * 1.19).toFixed(2)}`}</Typography>
      </Box>
    </div>
  );
};
