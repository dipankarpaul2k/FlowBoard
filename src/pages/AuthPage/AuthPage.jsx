import { useRef, useState } from "react";
import { Container, Stack, Button, Typography, TextField } from "@mui/material";

import LogoImg from "/logo.svg";
import ImageElm from "../../components/utils/ImageElm";

import authService from "../../appwrite/auth";
import useAuthStore from "../../stores/authStore";

export default function AuthPage() {
  const setLoginStatus = useAuthStore((s) => s.setLoginStatus);

  const [loading, setLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const AuthText = isLogin
    ? "Do not have an account?"
    : "Already have an account?";

  const handleAuthSubmit = async () => {
    setLoading(true);
    try { // const userData = 
      if (isLogin) {
        const userData = await authService.login({
          email: email,
          password: password,
        });
        setLoginStatus(true, userData);
      } else {
        const userData = await authService.createAccount({
          email: email,
          password: password,
        });
        setLoginStatus(true, userData);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        mt: 20,
      }}
    >
      <Stack mb={4} spacing={4} alignItems="center" textAlign="center">
        <ImageElm src={LogoImg} alt="FlowBoard logo" />
        <Typography color="rgba(255,255,255, .6)">
          Visualize Your Workflow for Increased Productivity.
          <br />
          Access Your Tasks Anytime, Anywhere
        </Typography>
      </Stack>
      <Stack spacing={3}>
        <TextField
          name="email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
        <TextField
          name="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          // type="password"
        />
        <Button
          onClick={handleAuthSubmit}
          size="large"
          variant="contained"
          disabled={loading || !email.trim() || !password.trim()}
        >
          {isLogin ? "Login" : "Register"}
        </Button>
      </Stack>
      <Typography
        onClick={() => setIsLogin((pre) => !pre)}
        mt={2}
        textAlign={"center"}
        sx={{
          cursor: "pointer",
        }}
      >
        {AuthText}
      </Typography>
    </Container>
  );
}
