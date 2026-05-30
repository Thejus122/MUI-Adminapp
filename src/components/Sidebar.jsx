import { Drawer, List, ListItem, ListItemText, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";

const drawerWidth = 200;

function Sidebar() {

  const navigate = useNavigate();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <List>

        <ListItem button onClick={() => navigate("/dashboard")}>
          <ListItemText primary="Dashboard" />
        </ListItem>

        <ListItem button onClick={() => navigate("/products")}>
          <ListItemText primary="Products" />
        </ListItem>

        <ListItem button onClick={() => navigate("/categories")}>
          <ListItemText primary="Categories" />
        </ListItem>

        <ListItem
          button
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/");
          }}
        >
          <ListItemText primary="Logout" />
        </ListItem>

      </List>
    </Drawer>
  );
}

export default Sidebar;