//Criar os elementos do Dashboard
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LogoutIcon from "@mui/icons-material/Logout";
import { useContext } from "react";
import { AppContext } from "../../../shared/contexts/AppContext";

export const Lista2 = () => {
    const {deslogar} = useContext(AppContext);
  return (
    <div>
      <List>
        <ListItem key={1} disablePadding>
          <ListItemButton
            onClick={deslogar}
            sx={{
                transition:'0.4s',
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
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary={"Sair"} />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );
};
