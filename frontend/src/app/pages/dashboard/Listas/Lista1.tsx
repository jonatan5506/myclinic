//Criar os elementos do Dashboard
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
//ICONS
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

//UTILS
import { Link } from "react-router-dom";

export const Lista1 = () => {
  return (
    <div>
      <List>
        <ListItem key={1} disablePadding>
          <ListItemButton component={Link} to="/Dashboard/Agendamento"//Altera o caminho ao clicar no ícone
            sx={{
              transition: "0.4s",
              "&:hover": {
                background: "#4771a3",
                color: "white",
                // Alterar cor do ícone LogoutIcon durante o hover
                "& .MuiSvgIcon-root": {
                  color: "white"
                }
              }
            }}
          >
            <ListItemIcon>
              <CalendarMonthIcon />
            </ListItemIcon>
            <ListItemText primary={"Agendamento"} />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem key={2} disablePadding>
          <ListItemButton component={Link} to="/Dashboard/Cadastro"
            sx={{
              transition: "0.4s",
              "&:hover": {
                background: "#4771a3",
                color: "white",
                // Alterar cor do ícone LogoutIcon durante o hover
                "& .MuiSvgIcon-root": {
                  color: "white"
                }
              }
            }}
          >
            <ListItemIcon>
              <PersonAddAltIcon />
            </ListItemIcon>
            <ListItemText primary={"Cadastro"} />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem key={3} disablePadding>
          <ListItemButton component={Link} to="/Dashboard/Pep"
            sx={{
              transition: "0.4s",
              "&:hover": {
                background: "#4771a3",
                color: "white",
                // Alterar cor do ícone LogoutIcon durante o hover
                "& .MuiSvgIcon-root": {
                  color: "white"
                }
              }
            }}
          >
            <ListItemIcon>
              <LocalHospitalIcon />
            </ListItemIcon>
            <ListItemText primary={"PEP"} />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem key={4} disablePadding>
          <ListItemButton component={Link} to="/Dashboard/Faturamento"
            sx={{
              transition: "0.4s",
              "&:hover": {
                background: "#4771a3",
                color: "white",
                // Alterar cor do ícone LogoutIcon durante o hover
                "& .MuiSvgIcon-root": {
                  color: "white"
                }
              }
            }}
          >
            <ListItemIcon>
              <AttachMoneyIcon />
            </ListItemIcon>
            <ListItemText primary={"Faturamento"} />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );
};
