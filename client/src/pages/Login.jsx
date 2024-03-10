import React, { useState } from "react";
import { Container, Paper, Typography, TextField,Button } from "@mui/material";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Container component={"main"} maxWidth="xs">
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "colum",
          alignItems: "center",
        }}
      >
        {isLogin ? (
          <>
            <Typography variant="h5">Login</Typography>
            <form>
              <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
              />

              <TextField
                required
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
              />
              <Button 
                sx={{
                  marginTop:"1rem",
                }}
              variant="contained" color="primary" type="submit">Login</Button>

              <Typography>OR</Typography>

              <Button 
                sx={{
                  marginTop:"1rem",
                }}
              variant="contained" color="primary" type="submit">Register</Button>
            </form>
          </>
        ) : (
          <></>
        )}
      </Paper>
    </Container>
  );
};

export default Login;
