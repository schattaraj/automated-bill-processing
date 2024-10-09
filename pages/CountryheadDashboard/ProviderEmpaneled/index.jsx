import AdminHeader from "@/components/AdminHeader";
import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import Footer from "@/components/Footer";
import ProviderList from "@/components/ProviderList";
import { countryData } from "@/utils/constants";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const ProviderEmpaneled = () => {
  const [name, setName] = useState("");
  const router = useRouter();
  useEffect(() => {
    setName(
      router.asPath
        .split("/")
        .pop()
        .replace(/([a-z])([A-Z])/g, "$1 $2")
    );
  }, [router]);
  const tableColumn = [
    { elementName: "providerName", displayName: "Provider Name" },
    { elementName: "contactNo", displayName: "Contact Number" },
    { elementName: "address", displayName: "Address" },
    { elementName: "providerId", displayName: "Provider Id" },
    { elementName: "addInNetwork", displayName: "Add In Network" },
  ];
  const tableData = [
    {
      providerName: "ABC Healthcare",
      providerId: "25598",
      contactNo: "+254 221454654 A.h hospotal@gmail.com",
      address: "Abcd Building, central Park dist.421546",
      addInNetwork: "20 jun 23",
    },
    {
      providerName: "ABC Healthcare",
      providerId: "25598",
      contactNo: "+254 221454654 A.h hospotal@gmail.com",
      address: "Abcd Building, central Park dist.421546",
      addInNetwork: "20 jun 23",
    },
    {
      providerName: "ABC Healthcare",
      providerId: "25598",
      contactNo: "+254 221454654 A.h hospotal@gmail.com",
      address: "Abcd Building, central Park dist.421546",
      addInNetwork: "20 jun 23",
    },
    {
      providerName: "ABC Healthcare",
      providerId: "25598",
      contactNo: "+254 221454654 A.h hospotal@gmail.com",
      address: "Abcd Building, central Park dist.421546",
      addInNetwork: "20 jun 23",
    },
    {
      providerName: "ABC Healthcare",
      providerId: "25598",
      contactNo: "+254 221454654 A.h hospotal@gmail.com",
      address: "Abcd Building, central Park dist.421546",
      addInNetwork: "20 jun 23",
    },
    {
      providerName: "ABC Healthcare",
      providerId: "25598",
      contactNo: "+254 221454654 A.h hospotal@gmail.com",
      address: "Abcd Building, central Park dist.421546",
      addInNetwork: "20 jun 23",
    },
    {
      providerName: "ABC Healthcare",
      providerId: "25598",
      contactNo: "+254 221454654 A.h hospotal@gmail.com",
      address: "Abcd Building, central Park dist.421546",
      addInNetwork: "20 jun 23",
    },
  ];
  return (
    <>
      <AdminHeader />
      <div className="empaneled-list">
        <div className="container">
          <CustomBreadcrumb />
          <Box bgcolor="rgba(57, 64, 154, 0.04)" p={3} borderRadius={2}>
            <ProviderList
              label={name}
              table={true}
              countries={countryData}
              tableColumns={tableColumn}
              data={tableData}
              isSortBy={true}
              tableFor="providerEmpaneled"
              urlBase={"CountryheadDashboard"}
            />
          </Box>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProviderEmpaneled;
