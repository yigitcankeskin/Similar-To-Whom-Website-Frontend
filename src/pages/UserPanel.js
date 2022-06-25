import React, { Component } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import ButtonAppBarUser from "../ButtonAppBarUser";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
export default function UserPanel() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [token, setToken] = useState(localStorage.getItem("accessToken"));
  const [files, setFiles] = useState([]);
  const [image_urls, setImage_urls] = useState([]);
  const [Benzerlik, setBenzerlik] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:44359/SessionControl?token=" + token)
      .then((res) => {})
      .catch((err) => {
        handlePush();
      });

    axios
      .get("https://localhost:44359/User/" + token)
      .then((res) => {
        setName(res.data.userName);
        setSurname(res.data.userSurname);
        setEmail(res.data.userEmail);
      })
      .catch((err) => {});
  });
  const history = useHistory();
  const handlePush = () => {
    history.push("/SignInSide");
  };

  const İmageUpload = async (e) => {
    const apiKey = "00001b9c9f6bffb269e790d207507078";
    const url = " https://thumbsnap.com/api/upload";
    const formData = new FormData();
    formData.append("key", apiKey);

    for (let i = 0; i < files.length; i++) {
      try {
        formData.append("media", files[i]);
        const result = await axios.post(url, formData);
        console.log(result.data);
        image_urls[i] = result.data.data.media;
        formData.delete("media");
      } catch (err) {
        console.log(err);
      }
    }
  };

  const SubmitFileData = async (e) => {
    await İmageUpload();

    try {
      const result = await axios.post(
        "https://api-us.faceplusplus.com/facepp/v3/compare?api_key=_fDPXyz3781xp9o2kBlH6CGa1dV1S12F&api_secret=UIIic8NChs_rQb99ohJwROhsQGVDHvsh" +
          "&image_url1=" +
          image_urls[0] +
          "&image_url2=" +
          image_urls[1]
      );
      const result2 = await axios.post(
        "https://api-us.faceplusplus.com/facepp/v3/compare?api_key=_fDPXyz3781xp9o2kBlH6CGa1dV1S12F&api_secret=UIIic8NChs_rQb99ohJwROhsQGVDHvsh" +
          "&image_url1=" +
          image_urls[0] +
          "&image_url2=" +
          image_urls[2]
      );
      Benzerlik[0] = result.data.confidence;
      Benzerlik[1] = result2.data.confidence;
    } catch (err) {
      console.log(err);
    }
  };
  console.log(image_urls);
  return (
    <div>
      <ButtonAppBarUser />
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Typography
            variant="h5"
            component="div"
            sx={{ fontSize: { xs: "15px", md: "35px" } }}
          >
            Fotoğraf 1 :
          </Typography>
          <input
            type="file"
            onChange={(e) => setFiles([...files, e.target.files[0]])}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Typography
            variant="h5"
            component="div"
            sx={{ fontSize: { xs: "15px", md: "35px" } }}
          >
            Fotoğraf 2 :
          </Typography>
          <input
            type="file"
            onChange={(e) => setFiles([...files, e.target.files[0]])}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Typography
            variant="h5"
            component="div"
            sx={{ fontSize: { xs: "15px", md: "35px" } }}
          >
            Fotoğraf 3 :
          </Typography>
          <input
            type="file"
            onChange={(e) => setFiles([...files, e.target.files[0]])}
          />
        </Box>
        <Button variant="contained" onClick={SubmitFileData}>
          Karşılaştır
        </Button>
        <Typography
          variant="h5"
          component="div"
          sx={{ fontSize: { xs: "15px", md: "35px" } }}
        >
          1. Fotoğraf ile 2. Fotoğraf arasındaki benzerlik Oranı :{" "}
          {Benzerlik[0]}
        </Typography>
        <Typography
          variant="h5"
          component="div"
          sx={{ fontSize: { xs: "15px", md: "35px" } }}
        >
          2. Fotoğraf ile 3. Fotoğraf arasındaki benzerlik Oranı :{" "}
          {Benzerlik[1]}
        </Typography>

        {files?.map((file, index) => {
          return <img src={URL.createObjectURL(file)} alt="file" key={0} />;
        })}
      </Box>
    </div>
  );
}
