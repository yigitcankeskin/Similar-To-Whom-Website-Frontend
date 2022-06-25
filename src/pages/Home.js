import { Typography, Box } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import ButtonAppBar from "../ButtonAppBar";
const Home = () => {
  const history = useHistory();

  const handlePush = () => {
    history.push(`/Property`);
  };

  return (
    <div>
      <ButtonAppBar />
      <Box
        sx={{
          flexDirection: "column",
          display: "flex",
          p: 1,
          m: 1,
          bgcolor: "background.paper",
          borderRadius: 1,
          alignItems: "center",
        }}
      >
        <Typography
          variant="h2"
          component="div"
          sx={{ fontSize: { xs: "35px", md: "65px" } }}
        >
          Hoşgeldiniz.
        </Typography>
        <Typography
          variant="h2"
          component="div"
          sx={{ fontSize: { xs: "35px", md: "65px" } }}
        >
          Sorgulama yapmak için lütfen giriş yapınız.
        </Typography>
      </Box>
    </div>
  );
};

export default Home;
