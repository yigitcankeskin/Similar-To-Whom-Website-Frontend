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
import AccountCircle from "@mui/icons-material/AccountCircle";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import axios from "axios";
import { useState, useEffect } from "react";

export default function ButtonAppBar() {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const HandlePush = () => {
    localStorage.removeItem("accessToken");
    history.push("../");
  };
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [token, setToken] = useState(localStorage.getItem("accessToken"));
  useEffect(() => {
    axios
      .get("https://localhost:44359/User/" + token)
      .then((res) => {
        setName(res.data.userName);
        setSurname(res.data.userSurname);
        setEmail(res.data.userEmail);
      })
      .catch((err) => {
        console.log(err);
      });
  });
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
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem>
              {name} {surname}
            </MenuItem>
            <MenuItem>{email}</MenuItem>
            <MenuItem onClick={HandlePush}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
