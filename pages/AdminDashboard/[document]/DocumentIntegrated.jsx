import AdminHeader from "@/components/AdminHeader";
import BarChart from "@/components/BarChart";
import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import Footer from "@/components/Footer";
import ProviderList from "@/components/ProviderList";
import {
  countryData,
  documentIntegratedOption,
  months,
  pendingDocuments,
} from "@/utils/constants";
import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { Form } from "react-bootstrap";

const DocumentIntegrated = () => {

  const tableColumns = [
    { elementName: "provider", displayName: "Provider" },
    { elementName: "country", displayName: "Country" },
    {
      elementName: "documentUploaded",
      displayName: " Document Uploaded",
    },
    {
      elementName: "eoxegenIntegration",
      displayName: "Integrated to Eoxgen",
    },
    {
      elementName: "pendingEoxegenIntegration",
      displayName: "Pending Integrated to Eoxgen",
    },
    {
      elementName: "errorEoxegenIntegration",
      displayName: "Error to Integrated",
    },
  ];
  const tableData = [
    {
      country: "Kenya",
      provider: "A.H. Hospital",
      documentUploaded: "635",
      eoxegenIntegration: "361",
      pendingEoxegenIntegration: "256",
      errorEoxegenIntegration: "105",
    },
    {
      country: "Uganda",
      provider: "City Hospital",
      documentUploaded: "435",
      eoxegenIntegration: "250",
      pendingEoxegenIntegration: "190",
      errorEoxegenIntegration: "90",
    },
    {
      country: "Ethiopia",
      provider: "AGH Khan Hospital",
      documentUploaded: "320",
      eoxegenIntegration: "230",
      pendingEoxegenIntegration: "115",
      errorEoxegenIntegration: "50",
    },
  ];
  return (
    <>
      <AdminHeader />
      <div className="document-integrated">
        <div className="container">
          <CustomBreadcrumb removeLastCrumb={true} />
          <div className="chart-area">
            <div className="row">
              <div className="flex-between my-3">
                <h6 className="admin-chart-heading">
                  Document Integrated Analytics
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

              <div className="col-md-12 col-lg-6 m-auto">
                <Card elevation={2}>
                  <CardContent>
                    <Typography
                      variant="body2"
                      fontWeight={600}
                      color="#515151"
                    >
                      Documents Integrate in Month
                    </Typography>
                    <BarChart options={documentIntegratedOption} />
                  </CardContent>
                </Card>
              </div>
              <div className="col-md-12 col-lg-6">
                <Card
                  elevation={2}
                  sx={{
                    mt: { xs: "20px", lg: 0 },
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="body2"
                      fontWeight={600}
                      color="#515151"
                    >
                      Pending Documents Integrate in Month
                    </Typography>
                    <BarChart options={pendingDocuments} />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          <Box
            className="mt-4"
            bgcolor="rgba(57, 64, 154, 0.04)"
            p={3}
            borderRadius={2}
          >
            <ProviderList
              tableColumns={tableColumns}
              data={tableData}
              table={true}
              label={"All Documents"}
              areaHidden={"areaHidden"}
              displayAsLink={false}
              countries={countryData}
              isExportFile={false}
            />
          </Box>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DocumentIntegrated;
