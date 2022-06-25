import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import { useHistory } from "react-router-dom";

export default function ButtonAppBar() {
  const history = useHistory();

  const HandlePush = () => {
    history.push("../SignInSide");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            justifyContent: "space-between",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <ChildCareIcon
              sx={{
                display: { xs: "flex", md: "flex" },
                mr: 1,
                color: "inherit",
              }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Kime Benzer ?
            </Typography>

            <Typography
              href="/"
              variant="h6"
              component="a"
              sx={{
                flexGrow: 1,
                mx: 2,
                textDecoration: "none",
                color: "inherit",
              }}
            >
              Hakkımızda
            </Typography>
            <Typography
              href="/"
              variant="h6"
              component="a"
              sx={{
                flexGrow: 1,
                mx: 2,
                textDecoration: "none",
                color: "inherit",
              }}
            >
              İletişim
            </Typography>
          </Box>
          <Button onClick={HandlePush} color="inherit">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
