import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { Typography, Box } from "@mui/material";

function Dashboard() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Topbar />

        <Box sx={{ p: 3 }}>
          <Typography variant="h4" gutterBottom>
            Admin Dashboard
          </Typography>

          <Typography>Welcome to Admin Panel</Typography>
        </Box>
      </div>
    </div>
  );
}

export default Dashboard;
