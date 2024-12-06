import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  LinearProgress,
  TextField,
} from "@mui/material";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/users/login";
import { useAppDispatch } from "../../app/hooks";
import { Payload } from "../../routes";
import { login as reduxLogin } from "../users/usersSlice";

export const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setLoading(true);
      const req = await login(email, pass);

      const decoded: any = jwtDecode<Payload>(req.data.access_token);
      dispatch(
        reduxLogin({
          id: decoded.sub,
          email: decoded.email,
          name: decoded.name,
          role: decoded.role,
          saloonId: decoded.saloonId,
        })
      );

      localStorage.setItem(process.env.REACT_TOKEN!, req.data.access_token);

      navigate("/home");
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} height="100%">
        <Grid
          container
          item
          xs={12}
          marginTop={4}
          alignContent="center"
          justifyContent="center"
        >
          <Card>
            <Box p={4}>
              <h1 style={{ marginTop: "6px" }}>Login</h1>
              <h5 style={{ marginBottom: "12px" }}>Insira suas credenciais</h5>
              {loading && (
                <Box>
                  <LinearProgress />
                </Box>
              )}
              <form noValidate onSubmit={submit}>
                <TextField
                  margin="normal"
                  required
                  label="Email"
                  autoFocus
                  value={email}
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  placeholder="Seu email"
                  onChange={(event) => setEmail(event.target.value)}
                  disabled={loading}
                />
                <br />
                <TextField
                  margin="normal"
                  required
                  label="Senha"
                  autoFocus
                  value={pass}
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  placeholder="Sua senha"
                  onChange={(event) => setPass(event.target.value)}
                  disabled={loading}
                />
                <br />
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  disabled={loading}
                  style={{ marginRight: 43 }}
                >
                  Entrar
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => navigate("/")}
                  color="secondary"
                >
                  Voltar
                </Button>
              </form>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};
