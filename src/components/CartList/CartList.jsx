import "./CartList.css";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { RiDeleteBin6Line, RiEyeLine } from "react-icons/ri";
import { useContext } from "react";
import { color } from "@mui/system";
// import { ModalContext } from "../../context/ModalContext";

export const CartList = () => {
  const emptyTable = Array(3).fill(null);
  const [productsList, setProductsList] = useLocalStorage("productsList", []);
  // const { setOpenModal, setData } = useContext(ModalContext);

  // const deleteRow = (name) => {
  //   const newStudentsArray = studentsDB.filter(
  //     (student) => student.name !== name
  //   );
  //   setStudentsDB(newStudentsArray);
  // };

  // const showRowDetails = (name) => {
  //   setOpenModal((prevState) => !prevState);
  //   const { difficulty, category, questions } = studentsDB.find(
  //     (student) => student.name === name
  //   );
  //   setData({
  //     name,
  //     difficulty,
  //     category,
  //     questionsNumber: questions?.length,
  //   });
  // };

  // window.localStorage.setItem(
  //   "productsList",
  //   JSON.stringify([
  //     { ID: 1, name: "zapato", description: "Lorem ipsum dolor im ..." },
  //     { ID: 12, name: "reloj", description: "Lorem ipsum dolor im ..." },
  //     { ID: 13, name: "celular", description: null },
  //     { ID: 21, name: "Mouse", description: "Lorem ipsum dolor im ..." },
  //   ])
  // );

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
                  align={label === "ID" ? "left" : "center"}
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
                    <TableCell align="center" sx={cellStyles.value}>
                      {row?.name}
                    </TableCell>
                    <TableCell
                      className={`table-data state ${
                        row?.description ? "yes" : "no"
                      }`}
                      align="center"
                      sx={cellStyles.value}
                    >
                      {row?.description ?? "Not available"}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={cellStyles.value}
                      id={row.ID}
                      onClick={() => showRowDetails(row.ID)}
                    >
                      <RiEyeLine className="details-icon" />
                    </TableCell>
                  </TableRow>
                ))}
            {emptyTable.map((e, i) => (
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
    </div>
  );
};
