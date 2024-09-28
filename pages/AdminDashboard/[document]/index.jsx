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

  const tableColumn = [
    { elementName: "country", displayName: "Country" },
    { elementName: "providerName", displayName: "Provider Name" },
    { elementName: "providerId", displayName: "Provider Id" },
    { elementName: "totalDocuments", displayName: "Total Documents" },
    { elementName: "documentProceed", displayName: "Document Proceed" },
    { elementName: "", displayName: "", className: "invisible-element"},
  ];
  const tableData = [
    {
      country: "Kenya",
      providerName: "ABC Healthcare",
      providerId: "25598",
      totalDocuments: "5632",
      documentProceed: "3623",
      "" : <KeyboardArrowRight />
    },
    {
      country: "Rwanda",
      providerName: "A.H Hospital",
      providerId: "25598",
      totalDocuments: "5632",
      documentProceed: "3623",
      "" : <KeyboardArrowRight />
    },
    {
      country: "Tanzania",
      providerName: "ABC Healthcare",
      providerId: "25598",
      totalDocuments: "5632",
      documentProceed: "3623",
      "" : <KeyboardArrowRight />
    },
    {
      country: "Ethiopia",
      providerName: "ABC Healthcare",
      providerId: "25598",
      totalDocuments: "5632",
      documentProceed: "3623",
      "" : <KeyboardArrowRight />
    },
    {
      country: "Uganda",
      providerName: "ABC Healthcare",
      providerId: "25598",
      totalDocuments: "5632",
      documentProceed: "3623",
      "" : <KeyboardArrowRight />
    },
    {
      country: "Kenya",
      providerName: "ABC Healthcare",
      providerId: "25598",
      totalDocuments: "5632",
      documentProceed: "3623",
      "" : <KeyboardArrowRight />
    },
  ];
  const [name, setName] = useState("");
  useEffect(() => {
    setName(router?.query?.document);
  }, [router]);
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
            />
          </Box>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SwiperDetails;
