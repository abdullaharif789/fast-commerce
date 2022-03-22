import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

import { app } from "../contants";
import "./style.css";
import ceo from "./ceo.jpg";
import logo from "./logo.png";
import axios from "axios";
import dataProvider from "../providers/dataProvider";

const theme = createTheme();
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const CSnackBar = ({ open, handleClose, message }) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      message={message}
    >
      <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};
export default function SignInSide() {
  const [snackBar, setSnackBar] = React.useState({
    message: "Please provide all required fields!",
    status: false,
  });
  const createRegistration = async (body) => {
    await axios
      .post(app.api + "registrations", body)
      .then((result) => {
        setSnackBar({
          message: "Registration successfully!",
          status: true,
        });
        window.location.replace(app.website);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = {
      first_name: data.get("first_name"),
      last_name: data.get("last_name"),
      email: data.get("email"),
      contact: data.get("contact"),
      region: data.get("region"),
      course: data.get("cource"),
      fee: data.get("fee"),
      transaction_id: data.get("transaction_id"),
    };
    const errors = Object.values(body).filter(
      (d) => typeof d === "undefined" || d === ""
    );
    if (errors.length > 0) {
      setSnackBar({
        message: "Please provide all required fields!",
        status: true,
      });
      return;
    }
    const fee = parseFloat(body.fee);
    if (fee == 0 || !fee) {
      setSnackBar({
        message: "Please provide valid fee!",
        status: true,
      });
      return;
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(body.email)) {
      setSnackBar({
        message: "Please provide a valid email!",
        status: true,
      });
      return;
    }
    createRegistration(body);
  };

  return (
    <ThemeProvider theme={theme}>
      <CSnackBar
        open={snackBar.status}
        message={snackBar.message}
        handleClose={() => setSnackBar({ message: "", status: false })}
      />
      <Grid container component="main" sx={{ height: "100vh", paddingTop: 0 }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={3}
          md={3}
          sx={{
            backgroundImage: `url(${ceo})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          padding={1}
          pt={5}
        >
          <Typography
            component="h1"
            variant="h4"
            color="text.primary"
            className="name-title bold"
          >
            Ahmad Shakeel Khan
          </Typography>
          <Typography component="h4" variant="p" className="name-title">
            CEO of Fast Commerce International
          </Typography>
        </Grid>
        <Grid item xs={12} sm={9} md={9} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={logo}
              alt="logo"
              className="logo"
              style={{
                width: 100,
              }}
            />
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1, width: "75%" }}
            >
              <TextField
                autoFocus
                margin="dense"
                required
                fullWidth
                label="First Name"
                name="first_name"
                size="small"
              />
              <TextField
                margin="dense"
                required
                fullWidth
                label="Last Name"
                name="last_name"
                size="small"
              />
              <TextField
                margin="dense"
                required
                fullWidth
                label="Email"
                name="email"
                size="small"
                autoComplete="email"
              />
              <TextField
                margin="dense"
                required
                fullWidth
                label="Whatsapp/Botim"
                name="contact"
                size="small"
              />
              <Select
                labelId="demo-simple-select-label"
                name="region"
                label="Region"
                defaultValue={app.region[0].id}
                fullWidth
                size="small"
                sx={{
                  mt: 1,
                }}
              >
                {app.region.map((k, i) => (
                  <MenuItem key={i} value={k.id}>
                    {k.name}
                  </MenuItem>
                ))}
              </Select>
              <Select
                labelId="demo-simple-select-label"
                name="cource"
                label="Cources"
                defaultValue={app.cources[0].id}
                fullWidth
                size="small"
                sx={{
                  mt: 1,
                }}
              >
                {app.cources.map((k, i) => (
                  <MenuItem key={i} value={k.id}>
                    {k.name}
                  </MenuItem>
                ))}
              </Select>
              <TextField
                margin="dense"
                required
                fullWidth
                label="Fee"
                name="fee"
                size="small"
              />
              <TextField
                margin="dense"
                required
                fullWidth
                label="Transaction ID#"
                name="transaction_id"
                size="small"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="error"
                sx={{ mt: 1, mb: 2 }}
                size="small"
              >
                Register
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
