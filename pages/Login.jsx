import {
  Box,
  Button,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { decodeJWT } from "@/utils/utils";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter()
  useEffect(() => {
    const checkLogin = () => {
      const token = localStorage.getItem('token');

      if (token) {
        try {
          const decodedToken = decodeJWT(token);
          const currentTime = Date.now() / 1000; // Current time in seconds
          if (decodedToken.exp < currentTime) {
            // Token expired
            localStorage.removeItem('token'); // Optionally clear the token
            localStorage.removeItem('role'); // Optionally clear the token
            return;
          }
          // const userRole = decodedToken.role; // Adjust according to your token structure
          const userRole = localStorage.getItem('role');
          // Redirect based on user role
          switch (userRole) {
            case "ADMIN":
              router.push('/AdminDashboard');
              break;
              case "PROVIDER":
                router.push('/ProviderDashboard');
                break;
                case "COUNTRY_HEAD" :
                  router.push('/CountryheadDashboard');
                break;
            default:
              router.push('/Login');
              break;
          }
        } catch (error) {
          console.error("Token decoding failed:", error);
          localStorage.removeItem('token'); // Clear invalid token
        }
      }
    };

    checkLogin();
  }, [router]);
  const handleLogin = async () => {
     // Reset error state
     setError("");

     // Basic validation
     if (!username || !password) {
       setError("Please fill in both fields.");
       return;
     }
    try {
      const response = await fetch('https://invautomation.eo2cloud.com/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error('Login failed. Please check your credentials.');
      }

      const data = await response.json();
      console.log(data);
      localStorage.setItem('token', data.token);
      localStorage.setItem('role', data.roles);
      switch (data.roles[0]) {
        case "ADMIN":
          router.push('/AdminDashboard');
          break;
          case "PROVIDER":
            router.push('/ProviderDashboard');
            break;
            case "COUNTRY_HEAD" :
              router.push('/CountryheadDashboard');
            break;
        default:
          router.push('/Login');
          break;
      }
      // if (data.roles.includes("ADMIN")) {
      //   window.location.href = '/AdminDashboard'; // Change to the appropriate route
      // } else {
      //   window.location.href = '/ProviderDashboard'; // Change to the appropriate route
      // }
    } catch (err) {
      setError(err.message);
      console.error(err);
    }
  };
  return (
    <Box sx={{ background: "#FFF", height: "100vh" }}>
      <Stack
        direction="column"
        sx={{
          justifyContent: "start",
          alignItems: { xs: "center", md: "start" },
        }}
      >
        <IconButton sx={{ py: "88px", px: "76px", pointerEvents: "none" }}>
          <img src="/images/logo.png" alt="Logo" />
        </IconButton>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Paper
            elevation={2}
            variant="elevation"
            sx={{
              width: "400px",
              justifyContent: "center",
              alignItems: "center",
              px: "50px",
              py: "30px",
            }}
          >
            <Stack gap="28px">
              <Typography
                className={poppins.className}
                variant="h4"
                color="#39409A"
                sx={{ fontWeight: 700, textAlign: "center" }}
              >
                Log In
              </Typography>
              {error && (
                <Typography color="error" textAlign="center">
                  {error}
                </Typography>
              )}
              <TextField
                id="username"
                label="Username"
                variant="outlined"
                fullWidth
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                error={!!error && !username}
                helperText={!!error && !username ? "Required" : ""}
              />
              <TextField
                id="password"
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={!!error && !password}
                helperText={!!error && !password ? "Required" : ""}
              />
              <Button
                variant="contained"
                sx={{
                  width: "136px",
                  borderRadius: "7px",
                  padding: "10px",
                  background: "#39409A",
                  color: "#FFF",
                  fontSize: 14,
                  fontWeight: 700,
                  textTransform: "capitalize",
                  margin: "auto",
                }}
                className={poppins.className}
                onClick={handleLogin}
              >
                Log In
              </Button>
            </Stack>
          </Paper>
        </Box>
      </Stack>
    </Box>
  );
};

export default Login;
