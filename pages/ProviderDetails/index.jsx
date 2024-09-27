import AdminHeader from "@/components/AdminHeader";
import AdminMenu from "@/components/AdminMenu";
import Footer from "@/components/Footer";
import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import { AccountBoxOutlined, ExitToApp, Search } from "@mui/icons-material";
import DBCard from "@/components/DBCard";
import { SwiperSlide } from "swiper/react";
import { Button, Form } from "react-bootstrap";
import ListTable from "@/components/ListTable";
const index = () => {
  const documentStatus = [
    "All Documents",
    "Processed",
    "Pending Processing",
    "Processing Error",
    "Integrated",
    "Integration Error",
  ];
  const tableColumns = [
    "Name",
    "Modified",
    "Modified By",
    "Provider Id",
    "Invoice Number",
    "Invoice Date",
    "Member Id",
    "Member Name",
    "Diagnosis Code",
    "Admission Date",
    "Discharge Date",
    "Total Invoice Amount",
    "Document status",
    "Created",
    "Created By",
    "EO2 Status",
    "EO2 Transition",
    "Claim Count",
    "Stage",
  ];
  const tableData = [
    [
      "EID Sample MP5_pdf",
      "April9",
      "Jonnyongeshe@73gmail.com",
      "123184",
      "123184",
      "11-03-2024",
      "AK00728",
      "John Sufina",
      "A001231",
      "2-03-2024",
      "12-03-2024",
      "23,53,562",
      "Proceed",
      "March 30",
      "Webservice",
      "Proceed to Integrated",
      "---",
      "240",
      "2",
    ],
    [
      "EID Sample MP5_pdf",
      "April9",
      "Jonnyongeshe@73gmail.com",
      "123184",
      "123184",
      "11-03-2024",
      "AK00728",
      "John Sufina",
      "A001231",
      "2-03-2024",
      "12-03-2024",
      "23,53,562",
      "Proceed",
      "March 30",
      "Webservice",
      "Proceed to Integrated",
      "---",
      "240",
      "2",
    ],
    [
      "EID Sample MP5_pdf",
      "April9",
      "Jonnyongeshe@73gmail.com",
      "123184",
      "123184",
      "11-03-2024",
      "AK00728",
      "John Sufina",
      "A001231",
      "2-03-2024",
      "12-03-2024",
      "23,53,562",
      "Proceed",
      "March 30",
      "Webservice",
      "Proceed to Integrated",
      "---",
      "240",
      "2",
    ],
    [
      "EID Sample MP5_pdf",
      "April9",
      "Jonnyongeshe@73gmail.com",
      "123184",
      "123184",
      "11-03-2024",
      "AK00728",
      "John Sufina",
      "A001231",
      "2-03-2024",
      "12-03-2024",
      "23,53,562",
      "Proceed",
      "March 30",
      "Webservice",
      "Proceed to Integrated",
      "---",
      "240",
      "2",
    ],
  ];
  return (
    <>
      <AdminHeader />
      <div className="provider-detail-container">
        <div className="container">
          <AdminMenu label="A.H.Hospital" path="/ProviderDetails" />
          <div className="provider-details-section">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-12">
                <div className="card provider-card">
                  <div className="card-icon">
                    <AccountBoxOutlined />
                  </div>
                  <div className="card-content">
                    <Typography variant="h5">A.H.Hospital</Typography>
                    <Typography variant="body1">Provider Id 123184</Typography>
                    <Typography variant="body1">+254 221454654</Typography>
                    <Typography variant="body1">
                      A.h hospotal@gmail.com
                    </Typography>
                    <Typography variant="body1">
                      Abcd Building, central Park dist.421546
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="col-xl-9 col-lg-8 col-md-12">
                <div className="provider-document-status">
                  <SwiperSlide>
                    <DBCard
                      title={"12.5K"}
                      description={"Document Processed"}
                      img={"/icons/file.svg"}
                      elementAsLink={false}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DBCard
                      title={"20"}
                      description={"Awating processing"}
                      img={"/icons/processing.svg"}
                      elementAsLink={false}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DBCard
                      title={"1.8K"}
                      description={"Processing Error"}
                      img={"/icons/alert.svg"}
                      elementAsLink={false}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DBCard
                      title={"8.56K"}
                      description={"Integrated To Eoxegen"}
                      img={"/icons/integrated.svg"}
                      elementAsLink={false}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DBCard
                      title={"5.47K"}
                      description={"Pending Integration to eoxegen"}
                      img={"/icons/pending-integration.svg"}
                      elementAsLink={false}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <DBCard
                      title={"452"}
                      description={"Integration Error"}
                      img={"/icons/error.svg"}
                      link={"/DocumentDetails"}
                      hoverImage={"/icons/error-white.svg"}
                    />
                  </SwiperSlide>
                </div>
              </div>
            </div>
          </div>
          <Box bgcolor="rgba(57, 64, 154, 0.04)" p={3} borderRadius={2}>
            <div className="flex-between">
              <span className="document-label">All Documents</span>
            </div>
            <div className="items-right">
              <TextField
                id="input-with-icon-textfield"
                placeholder="Search"
                sx={{ bgcolor: "white" }}
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
              />
              <Form.Select
                className="form-elements"
                aria-label="Select Country"
                style={{ paddingRight: "5rem" }}
              >
                <option disabled selected>
                  Document Status
                </option>
                {documentStatus.map((country) => (
                  <option key={country} href="#/action-1">
                    {country}
                  </option>
                ))}
              </Form.Select>
              <Form.Select
                className="form-elements"
                aria-label="Select Country"
                style={{ paddingRight: "5rem" }}
              >
                <option disabled selected>
                  Short By
                </option>
                <option>Ascending</option>
                <option>Decending</option>
              </Form.Select>

              <Button variant="primary" className="form-elements form-button">
                Search
              </Button>
              <Button variant="primary" className="form-elements form-button">
                Export File <ExitToApp />
              </Button>
            </div>
            <ListTable columnNames={tableColumns} data={tableData} />
          </Box>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default index;
