import {
  Link,
  Button,
  Grid,
  Box,
  Avatar,
  Container,
  TextField,
  CssBaseline,
  createTheme,
  Switch,
  FormControlLabel,
  Typography,
  Checkbox,
} from "@mui/material";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import { ThemeProvider } from "@emotion/react";
import { useState } from "react";

import { Link as LinkRouter } from "react-router-dom";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import api from "../../services/api";

import { toast } from "react-toastify";

const Login = ({ setUser, setToken }) => {
  const [mode, setMode] = useState("dark");

  const darkTheme = () =>
    createTheme({
      palette: {
        mode,
      },
    });

  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleLogin = (data) => {
    console.log(data);
    api
      .post("/sessions", data)
      .then((res) => {
        console.log(res);
        localStorage.setItem("@DemoNoturno:Token", res.data.token);
        localStorage.setItem(
          "@DemoNoturno:User",
          JSON.stringify(res.data.user)
        );
        setToken(res.data.token);
        setUser(res.data.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <FormControlLabel
        control={
          <Switch
            checked={mode === "dark" ? true : false}
            onChange={() =>
              setMode((oldValue) => (oldValue === "light" ? "dark" : "light"))
            }
            name="Light"
          />
        }
        label={mode === "light" ? "Dark" : "Light"}
      />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            mt: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 2, bgcolor: "secondary.main" }}>
            <VpnKeyIcon />
          </Avatar>

          <Typography component="h1" variant="h3">
            Login
          </Typography>

          {/* Fazer o form usando o Box */}

          <Box component="form" onSubmit={handleSubmit(handleLogin)}>
            <TextField
              {...register("email")}
              label="Email"
              type="email"
              fullWidth
              margin="normal"
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            <TextField
              {...register("password")}
              label="Senha"
              type="password"
              fullWidth
              margin="normal"
            />

            <FormControlLabel control={<Checkbox />} label="Lembre de mim" />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Enviar
            </Button>

            <Grid container>
              <Grid item xs>
                <Link>Esqueceu a senha?</Link>
              </Grid>
              <Grid item>
                <Link component={LinkRouter} to="/register">
                  Ainda não tem cadastro?
                </Link>
              </Grid>
            </Grid>
            <LinkRouter to="/">Home</LinkRouter>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Login;
