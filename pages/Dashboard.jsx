import {
  KeyboardArrowDown,
  SettingsOutlined,
  PersonOutline,
  Logout,
  LoginOutlined,
  LogoutOutlined,
  MoreVert,
} from "@mui/icons-material";

import {
  AppBar,
  Avatar,
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  IconButton,
  InputBase,
  MenuItem,
  Select,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Lato, Poppins } from "next/font/google";
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

const IconWithText = ({ icon: Icon, text }) => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <Icon sx={{ color: "#0b1d53", marginRight: 1 }} />
    <Typography
      className={lato.className}
      sx={{ color: "#0b1d53", fontWeight: 400 }}
    >
      {text}
    </Typography>
  </div>
);

const Dashboard = () => {
  const countries = [
    "All",
    "Kenya",
    "Uganda",
    "Tanzania",
    "Ethiopia",
    "Rwanda",
  ];
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("All");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleChangeCountry = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <Box sx={{ background: "#FFF", height: "100vh" }}>
      <AppBar position="static" sx={{ background: "#FFF", padding: 3 }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            <IconButton
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 1,
                pointerEvents: "none",
              }}
            >
              <img src="/images/navLogo.png" />
            </IconButton>
            <Stack
              component="form"
              direction="row"
              sx={{
                "& .MuiInputBase-root": {
                  m: 1,
                  width: "30ch",
                  borderRadius: "10px",
                },
                flexGrow: 0,
                alignItems: "center",
                gap: 2,
              }}
            >
              <Typography variant="subtitle1" color="#000">
                Country
              </Typography>
              <Select
                labelId="selectCountry"
                id="selectCountry"
                // label="All"
                value={selectedCountry}
                onChange={handleChangeCountry}
                IconComponent={KeyboardArrowDown}
              >
                {countries.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
              <Select
                value={selectedOption}
                onChange={handleChange}
                displayEmpty
                input={<InputBase />}
                renderValue={() => (
                  <Box
                    display="flex"
                    alignItems="center"
                    // justifyContent="space-between"
                  >
                    <Avatar
                      alt="Admin"
                      src="/images/avatar.png"
                      sx={{ width: 40, height: 40, marginRight: 1 }}
                    />
                    <Box>
                      <Typography variant="subtitle1" fontWeight="bold">
                        Admin
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Admin.12@gmail.com
                      </Typography>
                    </Box>
                  </Box>
                )}
                sx={{
                  "& .css-11brhm3-MuiSelect-select-MuiInputBase-input.css-11brhm3-MuiSelect-select-MuiInputBase-input.css-11brhm3-MuiSelect-select-MuiInputBase-input":
                    { paddingRight: 0 },
                  display: "flex",
                  alignItems: "center",
                  padding: "0 5px",
                  border: "1px solid #e8e8e8",
                  borderRadius: "10px",
                }}
                IconComponent={KeyboardArrowDown}
              >
                <MenuItem value="profile" sx={{ color: "#0b1d53" }}>
                  <IconWithText icon={PersonOutline} text={"My Profile"} />
                </MenuItem>
                <MenuItem value="logout">
                  <IconWithText icon={SettingsOutlined} text={"Settings"} />
                </MenuItem>
                <MenuItem value="logout">
                  <IconWithText icon={LogoutOutlined} text={"Logout"} />
                </MenuItem>
              </Select>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
      <Box p={4}>
        <Container maxWidth="lg">
          <Breadcrumbs aria-label="breadcrumb">
            <Typography color="#858585">Dashboard</Typography>
          </Breadcrumbs>
          <Stack
            direction="row"
            gap={3}
            mt={3}
            flexWrap="nowrap"
            sx={{ overflowX: "auto" }}
          >
            <Card width="240px" sx={{ borderRadius: "4px" }}>
              <CardContent
                sx={{
                  flexDirection: "row",
                  display: "flex",
                  flexWrap: "nowrap",
                  px: "25px",
                  py: "28px",
                }}
              >
                <div style={{ marginRight: "24px" }}>
                  <Typography
                    variant="body1"
                    fontWeight={600}
                    color="text.secondary"
                    className={poppins.className}
                  >
                    12.5K
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    className={poppins.className}
                  >
                    Document Processed
                  </Typography>
                </div>
                <Avatar
                  sx={{
                    background: "#0EDB8A1F",
                    width: "40px",
                    height: "40px",
                  }}
                >
                  <img
                    src="/images/processed.png"
                    sx={{
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "fit",
                    }}
                  />
                </Avatar>
              </CardContent>
              {/* <CardMedia
                component="img"
                image="/images/processed.png"
                // sx={{ width: "40px", height: "40px" }}
              /> */}
            </Card>
            <Card width="240px" sx={{ borderRadius: "4px" }}>
              <CardContent
                sx={{
                  flexDirection: "row",
                  display: "flex",
                  flexWrap: "nowrap",
                  px: "25px",
                  py: "28px",
                }}
              >
                <div style={{ marginRight: "24px" }}>
                  <Typography
                    variant="body1"
                    fontWeight={600}
                    color="text.secondary"
                    className={poppins.className}
                  >
                    12.5K
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    className={poppins.className}
                  >
                    Document Processed
                  </Typography>
                </div>
                <Avatar
                  sx={{
                    background: "#0EDB8A1F",
                    width: "40px",
                    height: "40px",
                  }}
                >
                  <img
                    src="/images/processed.png"
                    sx={{
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "fit",
                    }}
                  />
                </Avatar>
              </CardContent>
              {/* <CardMedia
                component="img"
                image="/images/processed.png"
                // sx={{ width: "40px", height: "40px" }}
              /> */}
            </Card>
            <Card width="240px" sx={{ borderRadius: "4px" }}>
              <CardContent
                sx={{
                  flexDirection: "row",
                  display: "flex",
                  flexWrap: "nowrap",
                  px: "25px",
                  py: "28px",
                }}
              >
                <div style={{ marginRight: "24px" }}>
                  <Typography
                    variant="body1"
                    fontWeight={600}
                    color="text.secondary"
                    className={poppins.className}
                  >
                    12.5K
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    className={poppins.className}
                  >
                    Document Processed
                  </Typography>
                </div>
                <Avatar
                  sx={{
                    background: "#0EDB8A1F",
                    width: "40px",
                    height: "40px",
                  }}
                >
                  <img
                    src="/images/processed.png"
                    sx={{
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "fit",
                    }}
                  />
                </Avatar>
              </CardContent>
              {/* <CardMedia
                component="img"
                image="/images/processed.png"
                // sx={{ width: "40px", height: "40px" }}
              /> */}
            </Card>
            <Card width="240px" sx={{ borderRadius: "4px" }}>
              <CardContent
                sx={{
                  flexDirection: "row",
                  display: "flex",
                  flexWrap: "nowrap",
                  px: "25px",
                  py: "28px",
                }}
              >
                <div style={{ marginRight: "24px" }}>
                  <Typography
                    variant="body1"
                    fontWeight={600}
                    color="text.secondary"
                    className={poppins.className}
                  >
                    12.5K
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    className={poppins.className}
                  >
                    Document Processed
                  </Typography>
                </div>
                <Avatar
                  sx={{
                    background: "#0EDB8A1F",
                    width: "40px",
                    height: "40px",
                  }}
                >
                  <img
                    src="/images/processed.png"
                    sx={{
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "fit",
                    }}
                  />
                </Avatar>
              </CardContent>
              {/* <CardMedia
                component="img"
                image="/images/processed.png"
                // sx={{ width: "40px", height: "40px" }}
              /> */}
            </Card>
            <Card width="240px" sx={{ borderRadius: "4px" }}>
              <CardContent
                sx={{
                  flexDirection: "row",
                  display: "flex",
                  flexWrap: "nowrap",
                  px: "25px",
                  py: "28px",
                }}
              >
                <div style={{ marginRight: "24px" }}>
                  <Typography
                    variant="body1"
                    fontWeight={600}
                    color="text.secondary"
                    className={poppins.className}
                  >
                    12.5K
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    className={poppins.className}
                  >
                    Document Processed
                  </Typography>
                </div>
                <Avatar
                  sx={{
                    background: "#0EDB8A1F",
                    width: "40px",
                    height: "40px",
                  }}
                >
                  <img
                    src="/images/processed.png"
                    sx={{
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "fit",
                    }}
                  />
                </Avatar>
              </CardContent>
              {/* <CardMedia
                component="img"
                image="/images/processed.png"
                // sx={{ width: "40px", height: "40px" }}
              /> */}
            </Card>
            <Card width="240px" sx={{ borderRadius: "4px" }}>
              <CardContent
                sx={{
                  flexDirection: "row",
                  display: "flex",
                  flexWrap: "nowrap",
                  px: "25px",
                  py: "28px",
                }}
              >
                <div style={{ marginRight: "24px" }}>
                  <Typography
                    variant="body1"
                    fontWeight={600}
                    color="text.secondary"
                    className={poppins.className}
                  >
                    12.5K
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    className={poppins.className}
                  >
                    Document Processed
                  </Typography>
                </div>
                <Avatar
                  sx={{
                    background: "#0EDB8A1F",
                    width: "40px",
                    height: "40px",
                  }}
                >
                  <img
                    src="/images/processed.png"
                    sx={{
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "fit",
                    }}
                  />
                </Avatar>
              </CardContent>
              {/* <CardMedia
                component="img"
                image="/images/processed.png"
                // sx={{ width: "40px", height: "40px" }}
              /> */}
            </Card>
            <Card width="240px" sx={{ borderRadius: "4px" }}>
              <CardContent
                sx={{
                  flexDirection: "row",
                  display: "flex",
                  flexWrap: "nowrap",
                  px: "25px",
                  py: "28px",
                }}
              >
                <div style={{ marginRight: "24px" }}>
                  <Typography
                    variant="body1"
                    fontWeight={600}
                    color="text.secondary"
                    className={poppins.className}
                  >
                    12.5K
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    className={poppins.className}
                  >
                    Document Processed
                  </Typography>
                </div>
                <Avatar
                  sx={{
                    background: "#0EDB8A1F",
                    width: "40px",
                    height: "40px",
                  }}
                >
                  <img
                    src="/images/processed.png"
                    sx={{
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "fit",
                    }}
                  />
                </Avatar>
              </CardContent>
              {/* <CardMedia
                component="img"
                image="/images/processed.png"
                // sx={{ width: "40px", height: "40px" }}
              /> */}
            </Card>
            <Card width="240px" sx={{ borderRadius: "4px" }}>
              <CardContent
                sx={{
                  flexDirection: "row",
                  display: "flex",
                  flexWrap: "nowrap",
                  px: "25px",
                  py: "28px",
                }}
              >
                <div style={{ marginRight: "24px" }}>
                  <Typography
                    variant="body1"
                    fontWeight={600}
                    color="text.secondary"
                    className={poppins.className}
                  >
                    12.5K
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    className={poppins.className}
                  >
                    Document Processed
                  </Typography>
                </div>
                <Avatar
                  sx={{
                    background: "#0EDB8A1F",
                    width: "40px",
                    height: "40px",
                  }}
                >
                  <img
                    src="/images/processed.png"
                    sx={{
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "fit",
                    }}
                  />
                </Avatar>
              </CardContent>
              {/* <CardMedia
                component="img"
                image="/images/processed.png"
                // sx={{ width: "40px", height: "40px" }}
              /> */}
            </Card>
            <Card width="240px" sx={{ borderRadius: "4px" }}>
              <CardContent
                sx={{
                  flexDirection: "row",
                  display: "flex",
                  flexWrap: "nowrap",
                  px: "25px",
                  py: "28px",
                }}
              >
                <div style={{ marginRight: "24px" }}>
                  <Typography
                    variant="body1"
                    fontWeight={600}
                    color="text.secondary"
                    className={poppins.className}
                  >
                    12.5K
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    className={poppins.className}
                  >
                    Document Processed
                  </Typography>
                </div>
                <Avatar
                  sx={{
                    background: "#0EDB8A1F",
                    width: "40px",
                    height: "40px",
                  }}
                >
                  <img
                    src="/images/processed.png"
                    sx={{
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "fit",
                    }}
                  />
                </Avatar>
              </CardContent>
              {/* <CardMedia
                component="img"
                image="/images/processed.png"
                // sx={{ width: "40px", height: "40px" }}
              /> */}
            </Card>
            <Card width="240px" sx={{ borderRadius: "4px" }}>
              <CardContent
                sx={{
                  flexDirection: "row",
                  display: "flex",
                  flexWrap: "nowrap",
                  px: "25px",
                  py: "28px",
                }}
              >
                <div style={{ marginRight: "24px" }}>
                  <Typography
                    variant="body1"
                    fontWeight={600}
                    color="text.secondary"
                    className={poppins.className}
                  >
                    12.5K
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    className={poppins.className}
                  >
                    Document Processed
                  </Typography>
                </div>
                <Avatar
                  sx={{
                    background: "#0EDB8A1F",
                    width: "40px",
                    height: "40px",
                  }}
                >
                  <img
                    src="/images/processed.png"
                    sx={{
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "fit",
                    }}
                  />
                </Avatar>
              </CardContent>
              {/* <CardMedia
                component="img"
                image="/images/processed.png"
                // sx={{ width: "40px", height: "40px" }}
              /> */}
            </Card>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Dashboard;
