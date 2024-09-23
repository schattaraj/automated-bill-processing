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

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

const Login = () => {
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
          <img src="/images/logo.png" />
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
              <TextField
                id="outlined-basic"
                label="Email Id"
                variant="outlined"
                fullWidth
              />
              <TextField
                id="outlined-basic"
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
              />
              <Link href={"/Dashboard"} style={{ margin: "auto" }}>
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
                  }}
                  className={poppins.className}
                >
                  Log In
                </Button>
              </Link>
            </Stack>
          </Paper>
        </Box>
      </Stack>
    </Box>
  );
};

export default Login;
