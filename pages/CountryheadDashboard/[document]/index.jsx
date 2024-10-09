import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import AdminHeader from "@/components/AdminHeader";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import ProviderList from "@/components/ProviderList";
import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import { countryData } from "@/utils/constants";
import { KeyboardArrowRight } from "@mui/icons-material";

const SwiperDetails = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  useEffect(() => {
    setName(router?.query?.document);
  }, [router]);

  const tableColumn = [
    { elementName: "providerName", displayName: "Provider Name" },
    { elementName: "providerId", displayName: "Provider Id" },
    { elementName: "totalDocuments", displayName: "Total Documents" },
    { elementName: "documentStatus", displayName: name },
    { elementName: "", displayName: "", className: "invisible-element" },
  ];
  const tableData = [
    {
      providerName: "ABC Healthcare",
      providerId: "25598",
      totalDocuments: "5632",
      documentStatus: "3623",
      "": <KeyboardArrowRight />,
    },
    {
      providerName: "A.H Hospital",
      providerId: "25598",
      totalDocuments: "5632",
      documentStatus: "3623",
      "": <KeyboardArrowRight />,
    },
    {
      providerName: "ABC Healthcare",
      providerId: "25598",
      totalDocuments: "5632",
      documentStatus: "3623",
      "": <KeyboardArrowRight />,
    },
    {
      providerName: "ABC Healthcare",
      providerId: "25598",
      totalDocuments: "5632",
      documentStatus: "3623",
      "": <KeyboardArrowRight />,
    },
    {
      providerName: "ABC Healthcare",
      providerId: "25598",
      totalDocuments: "5632",
      documentStatus: "3623",
      "": <KeyboardArrowRight />,
    },
    {
      providerName: "ABC Healthcare",
      providerId: "25598",
      totalDocuments: "5632",
      documentStatus: "3623",
      "": <KeyboardArrowRight />,
    },
  ];
  const dataColors = [
    { documentStatus: "Document Processed", color: "#0EDB8A" },
    { documentStatus: "Awating processing", color: "#F18701" },
    { documentStatus: "Processing Error", color: "#F30808" },
    { documentStatus: "Integrated To Eoxegen", color: "#3A7CFF" },
    { documentStatus: "Pending Integration to eoxegen", color: "#F18701" },
    { documentStatus: "Integration Error", color: "#F30808" },
  ];
  return (
    <>
      <AdminHeader />
      <div className="document-details">
        <div className="container">
          <CustomBreadcrumb />
          <Box bgcolor="rgba(57, 64, 154, 0.04)" p={3} borderRadius={2}>
            <ProviderList
              countries={countryData}
              label={name}
              table={true}
              tableColumns={tableColumn}
              data={tableData}
              dataColors={dataColors}
              urlBase={"CountryheadDashboard"}

            />
          </Box>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SwiperDetails;
