import Grid from "@mui/material/Grid2";
import TextField from '@mui/material/TextField';

export const FormConfigApp = () => {
  return (
    <Grid container spacing={2}>
      <Grid size={8}>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </Grid>
    </Grid>
  );
};
