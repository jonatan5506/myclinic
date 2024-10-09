import { Divider, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormEvent, useContext, useState } from "react";
import {
  Background,
  ContainerForm,
  FormPaper,
  InputBox
} from "./Login.moduleCss";
import { AppContext } from "../../shared/contexts/AppContext";
import Alert from "@mui/material/Alert";

export const Login = () => {
  const { logar } = useContext(AppContext);
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState(false);
  const [textError, setTextError] = useState("");

  const handleLogar = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await logar(usuario, senha);
      console.log("Resposta da função logar:", response); // Log da resposta

      // Se a resposta for uma string, trate-a como mensagem de erro
      if (typeof response === "string") {
        setTextError(response);
        setError(true);
      } else {
        // Aqui, você pode acessar 'data' se a resposta for um objeto
        setTextError("response.data"); // Ajuste conforme necessário
        setError(true);
      }
    } catch (error) {
      console.error("Erro ao logar:", error); // Log detalhado do erro
      setTextError("Ocorreu um erro ao tentar logar.");
      setError(true);
    }
  };

  //v1
  // const handleLogar = async (e:FormEvent) => {
  //   e.preventDefault();
  //   const response = await logar(usuario,senha);

  //   if (response) {
  //     setTextError(response);
  //     setError(true);
  //   }
  // };

  return (
    <Background>
      <ContainerForm>
        <FormPaper elevation={8}>
          <Typography
            variant="h5"
            component="h1"
            sx={{
              "& .MuiInputLabel-root": { color: "black" }
            }}
          >
            My Clinic
          </Typography>
          <Divider
            style={{
              margin: "20px 0px"
            }}
          />
          {
            <form onSubmit={handleLogar}>
              <InputBox>
                {error && <Alert severity="error">{textError}</Alert>}
              </InputBox>
              <InputBox>
                <TextField
                  label="Usuario"
                  variant="outlined"
                  fullWidth
                  value={usuario}
                  onChange={(e) => {
                    setUsuario(e.target.value);
                  }}
                  sx={{
                    "& .MuiInputLabel-root": { color: "black" }
                  }}
                />
              </InputBox>
              <InputBox>
                <TextField
                  label="Senha"
                  variant="outlined"
                  fullWidth
                  type="password"
                  value={senha}
                  onChange={(e) => {
                    setSenha(e.target.value);
                  }}
                  sx={{
                    "& .MuiInputLabel-root": { color: "black" }
                  }}
                />
              </InputBox>
              <InputBox>
                <Button variant="contained" fullWidth type="submit">
                  Login
                </Button>
              </InputBox>
              <Typography
                variant="body1"
                sx={{
                  "& .MuiInputLabel-root": { color: "black" }
                }}
              >
                Caso não tenha login,<br></br> contate o administrador do
                Sistema
              </Typography>
            </form>
          }
        </FormPaper>
      </ContainerForm>
    </Background>
  );
};
