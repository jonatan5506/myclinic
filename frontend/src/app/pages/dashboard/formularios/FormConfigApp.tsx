import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import TextField from "@mui/material/TextField";

export const FormConfigApp = () => {
  return (
    //Tamanho max é 12
    <Grid container spacing={2}>
      <Grid size={8}>
        <TextField label="Nome da Clínica" variant="outlined" fullWidth/>
      </Grid>
      <Grid size={4}>
        <div style={{
          width:'100%',
          height:'200px',
          backgroundColor:'#f0f0f0',
          textAlign:'center',
        }}>
          <Typography style={{
            marginTop:'50%'
          }}>LOGO</Typography>
        </div>
      </Grid>
    </Grid>
  );
};
