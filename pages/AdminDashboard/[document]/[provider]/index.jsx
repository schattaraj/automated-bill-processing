import AdminHeader from "@/components/AdminHeader";
import Footer from "@/components/Footer";
import { Box, Typography } from "@mui/material";
import { AccountBoxOutlined } from "@mui/icons-material";
import DBCard from "@/components/DBCard";
import { SwiperSlide } from "swiper/react";
import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import { swiperData } from "@/utils/constants";
import ProviderList from "@/components/ProviderList";
import { useRouter } from "next/router";
const Index = () => {
  const router = useRouter();
  const tableType = router?.query?.type;

  const documentStatus = [
    "All Documents",
    "Processed",
    "Pending Processing",
    "Processing Error",
    "Integrated",
    "Integration Error",
  ];
  const tableColumns = !tableType
    ? [
        { elementName: "name", displayName: "Name" },
        { elementName: "modified", displayName: "Modified" },
        { elementName: "modifiedBy", displayName: "Modified By" },
        { elementName: "providerId", displayName: "Provider Id" },
        { elementName: "invoiceNumber", displayName: "Invoice Number" },
        { elementName: "invoiceDate", displayName: "Invoice Date" },
        { elementName: "memberId", displayName: "Member Id" },
        { elementName: "memberName", displayName: "Member Name" },
        { elementName: "diagnosisCode", displayName: "Diagnosis Code" },
        { elementName: "admissionDate", displayName: "Admission Date" },
        { elementName: "dischargeDate", displayName: "Discharge Date" },
        {
          elementName: "totalInvoiceAmount",
          displayName: "Total Invoice Amount",
        },
        { elementName: "documentStatus", displayName: "Document status" },
        { elementName: "created", displayName: "Created" },
        { elementName: "createdBy", displayName: "Created By" },
        { elementName: "eo2Status", displayName: "EO2 Status" },
        { elementName: "eo2Transition", displayName: "EO2 Transition" },
        { elementName: "claimCount", displayName: "Claim Count" },
        { elementName: "stage", displayName: "Stage" },
      ]
    : [
        { elementName: "providerName", displayName: "Provider Name" },
        { elementName: "country", displayName: "Country" },
        { elementName: "contactNo", displayName: "Contact Number" },
        { elementName: "address", displayName: "Address" },
        { elementName: "providerId", displayName: "Provider Id" },
        { elementName: "addInNetwork", displayName: "Add In Network" },
      ];
  const tableData = !tableType
    ? [
        {
          name: "EID Sample MP5_pdf",
          modified: "April9",
          modifiedBy: "Jonnyongeshe@73gmail.com",
          providerId: "123184",
          invoiceNumber: "123184",
          invoiceDate: "11-03-2024",
          memberId: "AK00728",
          memberName: "John Sufina",
          diagnosisCode: "A001231",
          admissionDate: "2-03-2024",
          dischargeDate: "12-03-2024",
          totalInvoiceAmount: "23,53,562",
          documentStatus: "Proceed",
          created: "March 30",
          createdBy: "Webservice",
          eo2Status: "Proceed to Integrated",
          eo2Transition: "---",
          claimCount: "240",
          stage: "2",
        },
        {
          name: "EID Sample MP5_pdf",
          modified: "April9",
          modifiedBy: "Jonnyongeshe@73gmail.com",
          providerId: "123184",
          invoiceNumber: "123184",
          invoiceDate: "11-03-2024",
          memberId: "AK00728",
          memberName: "John Sufina",
          diagnosisCode: "A001231",
          admissionDate: "2-03-2024",
          dischargeDate: "12-03-2024",
          totalInvoiceAmount: "23,53,562",
          documentStatus: "Proceed",
          created: "March 30",
          createdBy: "Webservice",
          eo2Status: "Proceed to Integrated",
          eo2Transition: "---",
          claimCount: "240",
          stage: "2",
        },
        {
          name: "EID Sample MP5_pdf",
          modified: "April9",
          modifiedBy: "Jonnyongeshe@73gmail.com",
          providerId: "123184",
          invoiceNumber: "123184",
          invoiceDate: "11-03-2024",
          memberId: "AK00728",
          memberName: "John Sufina",
          diagnosisCode: "A001231",
          admissionDate: "2-03-2024",
          dischargeDate: "12-03-2024",
          totalInvoiceAmount: "23,53,562",
          documentStatus: "Proceed",
          created: "March 30",
          createdBy: "Webservice",
          eo2Status: "Proceed to Integrated",
          eo2Transition: "---",
          claimCount: "240",
          stage: "2",
        },
        {
          name: "EID Sample MP5_pdf",
          modified: "April9",
          modifiedBy: "Jonnyongeshe@73gmail.com",
          providerId: "123184",
          invoiceNumber: "123184",
          invoiceDate: "11-03-2024",
          memberId: "AK00728",
          memberName: "John Sufina",
          diagnosisCode: "A001231",
          admissionDate: "2-03-2024",
          dischargeDate: "12-03-2024",
          totalInvoiceAmount: "23,53,562",
          documentStatus: "Proceed",
          created: "March 30",
          createdBy: "Webservice",
          eo2Status: "Proceed to Integrated",
          eo2Transition: "---",
          claimCount: "240",
          stage: "2",
        },
      ]
    : [
        {
          country: "Kenya",
          providerName: "ABC Healthcare",
          providerId: "25598",
          contactNo: "+254 221454654 A.h hospotal@gmail.com",
          address: "Abcd Building, central Park dist.421546",
          addInNetwork: "20 jun 23",
        },
        {
          country: "Kenya",
          providerName: "ABC Healthcare",
          providerId: "25598",
          contactNo: "+254 221454654 A.h hospotal@gmail.com",
          address: "Abcd Building, central Park dist.421546",
          addInNetwork: "20 jun 23",
        },
        {
          country: "Kenya",
          providerName: "ABC Healthcare",
          providerId: "25598",
          contactNo: "+254 221454654 A.h hospotal@gmail.com",
          address: "Abcd Building, central Park dist.421546",
          addInNetwork: "20 jun 23",
        },
        {
          country: "Kenya",
          providerName: "ABC Healthcare",
          providerId: "25598",
          contactNo: "+254 221454654 A.h hospotal@gmail.com",
          address: "Abcd Building, central Park dist.421546",
          addInNetwork: "20 jun 23",
        },
        {
          country: "Kenya",
          providerName: "ABC Healthcare",
          providerId: "25598",
          contactNo: "+254 221454654 A.h hospotal@gmail.com",
          address: "Abcd Building, central Park dist.421546",
          addInNetwork: "20 jun 23",
        },
        {
          country: "Kenya",
          providerName: "ABC Healthcare",
          providerId: "25598",
          contactNo: "+254 221454654 A.h hospotal@gmail.com",
          address: "Abcd Building, central Park dist.421546",
          addInNetwork: "20 jun 23",
        },
        {
          country: "Kenya",
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
      <div className="provider-detail-container">
        <div className="container">
          <CustomBreadcrumb />
          {/* <AdminMenu label="A.H.Hospital" path="/ProviderDetails" /> */}
          <div className="provider-details-section">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-12">
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
              <div className="col-xl-8 col-lg-8 col-md-12">
                <div className="provider-document-status">
                  {swiperData.map((item, index) => (
                    <SwiperSlide key={item.title + index}>
                      <DBCard
                        title={item.title}
                        description={item.description}
                        img={item.img}
                        elementAsLink={false}
                      />
                    </SwiperSlide>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Box bgcolor="rgba(57, 64, 154, 0.04)" p={3} borderRadius={2}>
            <ProviderList
              label={"All Documents"}
              tableColumns={tableColumns}
              data={tableData}
              table={true}
              isSortBy={true}
              isStatus={true}
              documentStatus={documentStatus}
              displayAsLink={false}
            />
          </Box>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Index;
