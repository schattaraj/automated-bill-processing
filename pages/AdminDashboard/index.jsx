import AdminMenu from "@/components/AdminMenu";
import AdminHeader from "@/components/AdminHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import DBCard from "@/components/DBCard";
import Link from "next/link";
import Footer from "@/components/Footer";
import BarChart from "@/components/BarChart";
import { useState } from "react";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import LineChart from "@/components/LineChart";
import {
  countryData,
  sourceOfDocumentOptions,
  documentIntegratedOption,
} from "@/utils/constants";
export default function AdminDashboard() {
  const [providerCountry, setProviderCountry] = useState(0);

  const handleNext = () => {
    setProviderCountry((prevState) =>
      prevState === countryData.length - 1 ? 0 : prevState + 1
    );
  };
  const handlePrev = () => {
    setProviderCountry((prevState) =>
      prevState === 0 ? countryData.length - 1 : prevState - 1
    );
  };

  return (
    <>
      <AdminHeader />
      <div className="provider-dashboard">
        <div className="container">
          <AdminMenu />
          <Swiper
            modules={[Navigation]}
            spaceBetween={18}
            slidesPerView={4.5}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              576: {
                slidesPerView: 2.5,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 3.5,
                spaceBetween: 20,
              },
              1920: {
                slidesPerView: 4.5,
                spaceBetween: 18,
              },
            }}
            navigation
          >
            <SwiperSlide>
              <DBCard
                title={"12.5K"}
                description={"Document Processed"}
                img={"/icons/file.svg"}
                link={"/"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <DBCard
                title={"20"}
                description={"Awating processing"}
                img={"/icons/processing.svg"}
                link={"/"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <DBCard
                title={"1.8K"}
                description={"Processing Error"}
                img={"/icons/alert.svg"}
                link={"/"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <DBCard
                title={"8.56K"}
                description={"Integrated To Eoxegen"}
                img={"/icons/integrated.svg"}
                link={"/"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <DBCard
                title={"5.47K"}
                description={"Pending Integration to eoxegen"}
                img={"/icons/pending-integration.svg"}
                link={"/"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <DBCard
                title={"452"}
                description={"Integration Error"}
                img={"/icons/error.svg"}
                link={"/"}
                hoverImage={"/icons/error-white.svg"}
              />
            </SwiperSlide>
          </Swiper>
          <div className="section2">
            <div className="row">
              <div className="col-md-12 col-lg-8">
                <h6 className="heading">Claim Adjudicated Analysis</h6>
                <div className="cards">
                  <div className="card-item">
                    <p>Adjudicated and Paid</p>
                    <span>8,650</span>
                  </div>
                  <div className="card-item">
                    <p>Adjudicated Awaiting Payment</p>
                    <span>9,613</span>
                  </div>
                  <div className="card-item">
                    <p>Required Additional Documentation</p>
                    <span>150</span>
                  </div>
                </div>
                <div className="avg-tat-analysis">
                  <h6 className="heading">Avg TAT Analysis</h6>
                  <div className="process-container">
                    <div className="process">
                      <div className="line">
                        <span className="days">1 Days</span>
                        <img src="/icons/avg-tat-analysis/file.svg" alt="" />
                      </div>
                      <div className="line">
                        <span className="days">2 Days</span>
                        <img src="/icons/avg-tat-analysis/upload.svg" alt="" />
                      </div>
                      <div className="line">
                        <span className="days">5 Days</span>
                        <img
                          src="/icons/avg-tat-analysis/adjudicated.svg"
                          alt=""
                          className="first-image"
                        />
                        <img src="/icons/avg-tat-analysis/payment.svg" alt="" />
                      </div>
                    </div>
                    <div className="names">
                      <div className="name">Claim Mode</div>
                      <div className="name">
                        <span>Claim Upload</span>
                      </div>
                      <div className="name">
                        <span>Claim Adjudicated</span>
                        <span>Claim Payment</span>
                      </div>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-4">
                <h6 className="heading">Recent Activity</h6>
                <ul className="recent-activity">
                  <li>
                    <div className="description">
                      <h4 className="name">M.P Shaha</h4>
                      <p className="info">Document Uploaded</p>
                    </div>
                    <div className="date-time">
                      <p className="date">20 April 2024</p>
                      <span className="time">1.30 PM</span>
                    </div>
                  </li>
                  <li>
                    <div className="description">
                      <h4 className="name">M.P Shaha</h4>
                      <p className="info">Document Uploaded</p>
                    </div>
                    <div className="date-time">
                      <p className="date">20 April 2024</p>
                      <span className="time">1.30 PM</span>
                    </div>
                  </li>
                  <li>
                    <div className="description">
                      <h4 className="name">M.P Shaha</h4>
                      <p className="info">Document Uploaded</p>
                    </div>
                    <div className="date-time">
                      <p className="date">20 April 2024</p>
                      <span className="time">1.30 PM</span>
                    </div>
                  </li>
                  <li>
                    <div className="description">
                      <h4 className="name">M.P Shaha</h4>
                      <p className="info">Document Uploaded</p>
                    </div>
                    <div className="date-time">
                      <p className="date">20 April 2024</p>
                      <span className="time">1.30 PM</span>
                    </div>
                  </li>
                  <li>
                    <div className="description">
                      <h4 className="name">M.P Shaha</h4>
                      <p className="info">Document Uploaded</p>
                    </div>
                    <div className="date-time">
                      <p className="date">20 April 2024</p>
                      <span className="time">1.30 PM</span>
                    </div>
                  </li>
                  <li>
                    <div className="description">
                      <h4 className="name">M.P Shaha</h4>
                      <p className="info">Document Uploaded</p>
                    </div>
                    <div className="date-time">
                      <p className="date">20 April 2024</p>
                      <span className="time">1.30 PM</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="chart-area">
            <div className="row">
              <div className="col-md-12 col-lg-7">
                <div className="claim-settlement card admin-card">
                  <div className="flex">
                    <h6 className="admin-chart-heading">
                      Source Of Documents Upload/Received
                    </h6>
                    <KeyboardArrowRight />
                  </div>
                  <LineChart options={sourceOfDocumentOptions} />
                </div>
              </div>
              <div className="col-md-12 col-lg-5">
                <div className="card admin-card document-integrated">
                  <h6 className="admin-chart-heading">
                    Documents Integrated in Month
                  </h6>
                  <BarChart options={documentIntegratedOption} />
                </div>
              </div>
            </div>
          </div>
          <div className="empaneled-section">
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="row">
                    <div className="col-md-12 empaneled-header">
                      <h6 className="heading admin-chart-heading">
                        Provider Empaneled
                      </h6>
                      <Link className="empaneled-link" href={"/"}>
                        View All
                      </Link>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 col-lg-8">
                      <img className="climate-image" src="/icons/map.svg" />
                    </div>
                    <div className="col-md-12 col-lg-4">
                      <div className="list-area">
                        <ul className="provider-list">
                          <li>
                            <div className="provider-detail">
                              <div className="provider-country">
                                <img
                                  src={`/icons/flags/${countryData[providerCountry].flag}`}
                                />
                                <span>{countryData[providerCountry].name}</span>
                              </div>
                              <div className="country-value">
                                <span>
                                  {countryData[providerCountry].value}
                                </span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="provider-detail">
                              <span>Provider</span>
                              <span>Claim Provider</span>
                            </div>
                          </li>
                          <li>
                            <div className="provider-detail">
                              <span className="provider-name">M.P Shaha</span>
                              <span className="provider-value">100</span>
                            </div>
                          </li>
                          <li>
                            <div className="provider-detail">
                              <span className="provider-name">M.P Shaha</span>
                              <span className="provider-value">100</span>
                            </div>
                          </li>
                          <li>
                            <div className="provider-detail">
                              <span className="provider-name">M.P Shaha</span>
                              <span className="provider-value">100</span>
                            </div>
                          </li>
                          <li>
                            <div className="provider-detail">
                              <span className="provider-name">M.P Shaha</span>
                              <span className="provider-value">100</span>
                            </div>
                          </li>
                          <li>
                            <div className="provider-detail">
                              <span className="provider-name">M.P Shaha</span>
                              <span className="provider-value">100</span>
                            </div>
                          </li>
                          <li>
                            <div className="provider-detail">
                              <span className="provider-name">M.P Shaha</span>
                              <span className="provider-value">100</span>
                            </div>
                          </li>
                          <li>
                            <div className="provider-detail">
                              <span className="provider-name">
                                <IconButton
                                  onClick={handlePrev}
                                  sx={{ py: "5px", px: 0 }}
                                >
                                  <KeyboardArrowLeft />
                                </IconButton>
                              </span>
                              <span className="provider-name">
                                <IconButton
                                  onClick={handleNext}
                                  sx={{ py: "5px", px: 0 }}
                                >
                                  <KeyboardArrowRight />
                                </IconButton>
                              </span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

// import {
//   KeyboardArrowDown,
//   SettingsOutlined,
//   PersonOutline,
//   Logout,
//   LoginOutlined,
//   LogoutOutlined,
//   MoreVert,
// } from "@mui/icons-material";

// import {
//   AppBar,
//   Avatar,
//   Box,
//   Breadcrumbs,
//   Button,
//   Card,
//   CardContent,
//   CardHeader,
//   CardMedia,
//   Container,
//   IconButton,
//   InputBase,
//   MenuItem,
//   Select,
//   Stack,
//   Toolbar,
//   Typography,
// } from "@mui/material";
// import { useState } from "react";
// import { Lato, Poppins } from "next/font/google";
// const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });
// const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

// const IconWithText = ({ icon: Icon, text }) => (
//   <div style={{ display: "flex", alignItems: "center" }}>
//     <Icon sx={{ color: "#0b1d53", marginRight: 1 }} />
//     <Typography
//       className={lato.className}
//       sx={{ color: "#0b1d53", fontWeight: 400 }}
//     >
//       {text}
//     </Typography>
//   </div>
// );

// const Dashboard = () => {
//   const countries = [
//     "All",
//     "Kenya",
//     "Uganda",
//     "Tanzania",
//     "Ethiopia",
//     "Rwanda",
//   ];
//   const [selectedOption, setSelectedOption] = useState("");
//   const [selectedCountry, setSelectedCountry] = useState("All");

//   const handleChange = (event) => {
//     setSelectedOption(event.target.value);
//   };

//   const handleChangeCountry = (event) => {
//     setSelectedCountry(event.target.value);
//   };

//   return (
//     <Box sx={{ background: "#FFF", height: "100vh" }}>
//       <AppBar position="static" sx={{ background: "#FFF", padding: "20px 0" }}>
//         <Container maxWidth="lg">
//           <Toolbar
//             disableGutters
//             sx={{
//               justifyContent: "space-between",
//               minHeight: "50px !important",
//             }}
//           >
//             <IconButton
//               sx={{
//                 display: { xs: "none", md: "flex" },
//                 mr: 1,
//                 pointerEvents: "none",
//                 p: 0,
//               }}
//             >
//               <img src="/images/navLogo.png" style={{ height: "50px" }} />
//             </IconButton>
//             <Stack
//               component="form"
//               direction="row"
//               sx={{
//                 "& .MuiInputBase-root": {
//                   width: "30ch",
//                   borderRadius: "10px",
//                   height: "50px",
//                 },
//                 flexGrow: 0,
//                 alignItems: "center",
//                 gap: 2,
//               }}
//             >
//               <Typography variant="subtitle1" color="#000">
//                 Country
//               </Typography>
//               <Select
//                 labelId="selectCountry"
//                 id="selectCountry"
//                 value={selectedCountry}
//                 onChange={handleChangeCountry}
//                 IconComponent={KeyboardArrowDown}
//               >
//                 {countries.map((option) => (
//                   <MenuItem key={option} value={option}>
//                     {option}
//                   </MenuItem>
//                 ))}
//               </Select>
//               <Select
//                 value={selectedOption}
//                 onChange={handleChange}
//                 displayEmpty
//                 input={<InputBase />}
//                 renderValue={() => (
//                   <Box
//                     display="flex"
//                     alignItems="center"
//                     // justifyContent="space-between"
//                   >
//                     <Avatar
//                       alt="Admin"
//                       src="/images/avatar.png"
//                       sx={{ width: 40, height: 40, marginRight: 1 }}
//                     />
//                     <Box>
//                       <Typography variant="subtitle1" fontWeight="bold">
//                         Admin
//                       </Typography>
//                       <Typography variant="body2" color="textSecondary">
//                         Admin.12@gmail.com
//                       </Typography>
//                     </Box>
//                   </Box>
//                 )}
//                 sx={{
//                   "& .css-11brhm3-MuiSelect-select-MuiInputBase-input.css-11brhm3-MuiSelect-select-MuiInputBase-input.css-11brhm3-MuiSelect-select-MuiInputBase-input":
//                     { paddingRight: 0 },
//                   display: "flex",
//                   alignItems: "center",
//                   padding: "0 5px",
//                   border: "1px solid #e8e8e8",
//                   borderRadius: "10px",
//                 }}
//                 IconComponent={KeyboardArrowDown}
//               >
//                 <MenuItem value="profile" sx={{ color: "#0b1d53" }}>
//                   <IconWithText icon={PersonOutline} text={"My Profile"} />
//                 </MenuItem>
//                 <MenuItem value="logout">
//                   <IconWithText icon={SettingsOutlined} text={"Settings"} />
//                 </MenuItem>
//                 <MenuItem value="logout">
//                   <IconWithText icon={LogoutOutlined} text={"Logout"} />
//                 </MenuItem>
//               </Select>
//             </Stack>
//           </Toolbar>
//         </Container>
//       </AppBar>
//       <Box p={4}>
//         <Container maxWidth="lg">
//           <Breadcrumbs aria-label="breadcrumb">
//             <Typography color="#858585">Dashboard</Typography>
//           </Breadcrumbs>
//           <Stack
//             direction="row"
//             gap={3}
//             mt={3}
//             flexWrap="nowrap"
//             sx={{ overflowX: "auto" }}
//           >
//             <Card
//               width="240px"
//               sx={{
//                 borderRadius: "4px",
//                 cursor: "pointer",
//                 ":hover": {
//                   backgroundColor: "#39409A",
//                   transition: "background-color 0.3s ease-in-out",
//                 },
//               }}
//               className="slider"
//             >
//               <CardContent
//                 sx={{
//                   flexDirection: "row",
//                   display: "flex",
//                   flexWrap: "nowrap",
//                   px: "25px",
//                   py: "28px",
//                 }}
//               >
//                 <div style={{ marginRight: "24px" }}>
//                   <Typography
//                     variant="body1"
//                     fontWeight={600}
//                     color="text.secondary"
//                     className={poppins.className}
//                     sx={{
//                       ":hover": {
//                         color: "white",
//                       },
//                     }}
//                   >
//                     12.5K
//                   </Typography>
//                   <Typography
//                     variant="subtitle2"
//                     color="text.secondary"
//                     className={poppins.className}
//                   >
//                     Document Processed
//                   </Typography>
//                 </div>
//                 <img src="/icons/file.svg" />
//               </CardContent>
//             </Card>
//             <Card width="240px" sx={{ borderRadius: "4px" }}>
//               <CardContent
//                 sx={{
//                   flexDirection: "row",
//                   display: "flex",
//                   flexWrap: "nowrap",
//                   px: "25px",
//                   py: "28px",
//                 }}
//               >
//                 <div style={{ marginRight: "24px" }}>
//                   <Typography
//                     variant="body1"
//                     fontWeight={600}
//                     color="text.secondary"
//                     className={poppins.className}
//                   >
//                     12.5K
//                   </Typography>
//                   <Typography
//                     variant="subtitle2"
//                     color="text.secondary"
//                     className={poppins.className}
//                   >
//                     Document Processed
//                   </Typography>
//                 </div>
//                 <Avatar
//                   sx={{
//                     background: "#0EDB8A1F",
//                     width: "40px",
//                     height: "40px",
//                   }}
//                 >
//                   <img
//                     src="/images/processed.png"
//                     sx={{
//                       backgroundPosition: "center",
//                       backgroundRepeat: "no-repeat",
//                       backgroundSize: "fit",
//                     }}
//                   />
//                 </Avatar>
//               </CardContent>
//               {/* <CardMedia
//                 component="img"
//                 image="/images/processed.png"
//                 // sx={{ width: "40px", height: "40px" }}
//               /> */}
//             </Card>
//             <Card width="240px" sx={{ borderRadius: "4px" }}>
//               <CardContent
//                 sx={{
//                   flexDirection: "row",
//                   display: "flex",
//                   flexWrap: "nowrap",
//                   px: "25px",
//                   py: "28px",
//                 }}
//               >
//                 <div style={{ marginRight: "24px" }}>
//                   <Typography
//                     variant="body1"
//                     fontWeight={600}
//                     color="text.secondary"
//                     className={poppins.className}
//                   >
//                     12.5K
//                   </Typography>
//                   <Typography
//                     variant="subtitle2"
//                     color="text.secondary"
//                     className={poppins.className}
//                   >
//                     Document Processed
//                   </Typography>
//                 </div>
//                 <Avatar
//                   sx={{
//                     background: "#0EDB8A1F",
//                     width: "40px",
//                     height: "40px",
//                   }}
//                 >
//                   <img
//                     src="/images/processed.png"
//                     sx={{
//                       backgroundPosition: "center",
//                       backgroundRepeat: "no-repeat",
//                       backgroundSize: "fit",
//                     }}
//                   />
//                 </Avatar>
//               </CardContent>
//               {/* <CardMedia
//                 component="img"
//                 image="/images/processed.png"
//                 // sx={{ width: "40px", height: "40px" }}
//               /> */}
//             </Card>
//             <Card width="240px" sx={{ borderRadius: "4px" }}>
//               <CardContent
//                 sx={{
//                   flexDirection: "row",
//                   display: "flex",
//                   flexWrap: "nowrap",
//                   px: "25px",
//                   py: "28px",
//                 }}
//               >
//                 <div style={{ marginRight: "24px" }}>
//                   <Typography
//                     variant="body1"
//                     fontWeight={600}
//                     color="text.secondary"
//                     className={poppins.className}
//                   >
//                     12.5K
//                   </Typography>
//                   <Typography
//                     variant="subtitle2"
//                     color="text.secondary"
//                     className={poppins.className}
//                   >
//                     Document Processed
//                   </Typography>
//                 </div>
//                 <Avatar
//                   sx={{
//                     background: "#0EDB8A1F",
//                     width: "40px",
//                     height: "40px",
//                   }}
//                 >
//                   <img
//                     src="/images/processed.png"
//                     sx={{
//                       backgroundPosition: "center",
//                       backgroundRepeat: "no-repeat",
//                       backgroundSize: "fit",
//                     }}
//                   />
//                 </Avatar>
//               </CardContent>
//               {/* <CardMedia
//                 component="img"
//                 image="/images/processed.png"
//                 // sx={{ width: "40px", height: "40px" }}
//               /> */}
//             </Card>
//           </Stack>
//         </Container>
//       </Box>
//     </Box>
//   );
// };

// export default AdminDashboard;
