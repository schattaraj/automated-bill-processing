import AdminHeader from "@/components/AdminHeader";
import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import Footer from "@/components/Footer";
import LineChart from "@/components/LineChart";
import PieChart from "@/components/PieChart";
import ProviderList from "@/components/ProviderList";
import {
  countryData,
  months,
  sourceOfDocumentOptions,
  uploadDocumentSource,
} from "@/utils/constants";
import { Box, Card, CardContent, Paper, Typography } from "@mui/material";
import React from "react";
import { Form } from "react-bootstrap";

const DocumentUpload = () => {
  const dataColors = [
    {documentUploadSource:"Hospital", color:"#03045E"},
    {documentUploadSource:"Internal Team", color:"#C93131"},
    {documentUploadSource:"FTP", color:"#4A87FF"},
    {documentUploadSource:"Email", color:"#00B33C"},
  ]
  const tableColumns = [
    { elementName: "providerName", displayName: "Provider Name" },
    {
      elementName: "documentUploadedNo",
      displayName: " No. Of Document Uploaded",
    },
    {
      elementName: "documentUploadSource",
      displayName: "Source of document Upload",
    },
    { elementName: "uploadedDate", displayName: "Document Uploaded date" },
  ];
  const tableData = [
    {
      providerName: "A.H. Hospital",
      documentUploadedNo: "25598",
      documentUploadSource: "Hospital",
      uploadedDate: "20 jun 23",
    },
    {
      providerName: "A.H. Hospital",
      documentUploadedNo: "25598",
      documentUploadSource: "Internal Team",
      uploadedDate: "20 jun 23",
    },
    {
      providerName: "A.H. Hospital",
      documentUploadedNo: "25598",
      documentUploadSource: "FTP",
      uploadedDate: "20 jun 23",
    },
    {
      providerName: "A.H. Hospital",
      documentUploadedNo: "25598",
      documentUploadSource: "Hospital",
      uploadedDate: "20 jun 23",
    },
    {
      providerName: "A.H. Hospital",
      documentUploadedNo: "25598",
      documentUploadSource: "Email",
      uploadedDate: "20 jun 23",
    },
  ];
  return (
    <>
      <AdminHeader />
      <div className="document-upload">
        <div className="container">
          <CustomBreadcrumb removeLastCrumb={true} />
          <div className="chart-area">
            <div className="row">
              <div className="flex-between my-3">
                <h6 className="admin-chart-heading">
                  Source Of Documents Upload
                </h6>
                <Form.Select
                  className="form-elements"
                  aria-label="Select Country"
                  style={{ width: "auto" }}
                >
                  <option disabled selected>
                    Month
                  </option>
                  {months.map((month) => (
                    <option key={month} href="#/action-1">
                      {month}
                    </option>
                  ))}
                </Form.Select>
              </div>

              <div className="col-md-12 col-lg-7 m-auto">
                <Card elevation={2}>
                  <CardContent>
                    <LineChart options={sourceOfDocumentOptions} />
                  </CardContent>
                </Card>
              </div>
              <div className="col-md-12 col-lg-5">
                <Card
                  elevation={2}
                  sx={{
                    maxHeight: { lg: "390px" },
                    height: "100%",
                    mt: { xs: "20px", lg: 0 },
                  }}
                >
                  <CardContent sx={{ height: "100%", pb: "0 !important" }}>
                    <Typography
                      variant="body2"
                      fontWeight={600}
                      color="#515151"
                    >
                      Frequently used source to upload document{" "}
                    </Typography>
                    <PieChart options={uploadDocumentSource} />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          <Box className="mt-4" bgcolor="rgba(57, 64, 154, 0.04)" p={3} borderRadius={2}>
            <ProviderList
              tableColumns={tableColumns}
              data={tableData}
              dataColors={dataColors}
              table={true}
              label={"All Documents"}
              areaHidden={"areaHidden"}
              displayAsLink={false}
              isExportFile={false}
            />
          </Box>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DocumentUpload;
