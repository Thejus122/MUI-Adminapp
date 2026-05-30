import { useState } from "react";
import { TextField, Button, Paper } from "@mui/material";
import API from "../api/axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await API.post("/auth/login", {
      email,
      password,
    });

    localStorage.setItem("token", res.data.access_token);

    window.location.href = "/dashboard";
  };

  return (
    <Paper sx={{ width: 300, p: 4, m: "100px auto" }}>
      <TextField
        fullWidth
        label="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextField
        fullWidth
        label="Password"
        type="password"
        sx={{ mt: 2 }}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button
        fullWidth
        variant="contained"
        sx={{ mt: 2 }}
        onClick={handleLogin}
      >
        Login
      </Button>
    </Paper>
  );
}

export default Login;
