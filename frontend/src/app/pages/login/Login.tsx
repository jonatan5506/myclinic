import { Box, Divider, styled, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";


//Mudar depois para um CSS
const Background = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundImage: "url('/Loginmydoctor.jpeg')",
  backgroundSize: "cover" //ajuste da imagem na tela
});

const ContainerForm = styled("div")({
  display: "flex",
  alignItems: "center",
  flexDirection: "column"
});

const FormPaper = styled(Paper)({
  width: "100%",
  maxWidth: "300px",
  padding: "40px",
  textAlign: "center",
  borderRadius: "10px",
  //backgroundColor: 'transparent', // Div transparente
  opacity: 0.8
});

const InputBox = styled(Box)({
  marginBottom: "13px"
});

export const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogar = () => {
    alert("Usuário logado!");
  };

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
