import { Header } from "../../components/Header/Header";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { minHeight } from "@mui/system";
import "./HomePage.css"

export const HomePage = () => {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Stack width={"100%"} height={108}>
        <Box
          width={"100%"}
          height={72}
          sx={{ backgroundColor: "#042940" }}
        ><span className="logo1"></span></Box>
        <Stack
          width={"100%"}
          height={36}
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          sx={{ backgroundColor: "#DBF227", paddingRight: "20px" }}
        >
          <Typography variant="subtitle1" fontFamily={"Poppins,sans-serif"}>
            Medellín,Colombia
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};
