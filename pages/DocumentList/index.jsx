import { useEffect, useState } from "react";
import ProviderHeader from "../../components/ProviderHeader";
import ProviderMenu from "../../components/ProviderMenu";
import ListTable from "@/components/ListTable";
import CardList from "@/components/CardList";
import Footer from "@/components/Footer";
import axios from "axios";
import { error } from "highcharts";

function DocumentList() {
  const [tableData, setTableData] = useState([]);
  // const [pageContent, setPageContent] = useState();
  const tableColumns = [
    { elementName: "fileUnqName", displayName: "Name" },
    { elementName: "modifiedDate", displayName: "Modified" },
    { elementName: "modifiedBy", displayName: "Modified By" },
    { elementName: "providerId", displayName: "Provider Id" },
    { elementName: "invoiceNumber", displayName: "Invoice Number" },
    { elementName: "invoiceDate", displayName: "Invoice Date" },
    { elementName: "memberId", displayName: "Member Id" },
    { elementName: "memberName", displayName: "Member Name" },
    { elementName: "diagnosisCode", displayName: "Diagnosis Code" },
    { elementName: "admissionDate", displayName: "Admission Date" },
    { elementName: "dischargeDate", displayName: "Discharge Date" },
    { elementName: "totalInvoiceAmount", displayName: "Total Invoice Amount" },
    { elementName: "documentStatus", displayName: "Document status" },
    { elementName: "created", displayName: "Created" },
    { elementName: "createdBy", displayName: "Created By" },
    { elementName: "eo2Status", displayName: "EO2 Status" },
    { elementName: "eo2Transition", displayName: "EO2 Transition" },
    { elementName: "claimCount", displayName: "Claim Count" },
    { elementName: "stage", displayName: "Stage" },
  ];
  // const tableData = [
  //   {
  //       "name": "EID Sample MP5_pdf",
  //       "modified": "April9",
  //       "modifiedBy": "Jonnyongeshe@73gmail.com",
  //       "providerId": "123184",
  //       "invoiceNumber": "123184",
  //       "invoiceDate": "11-03-2024",
  //       "memberId": "AK00728",
  //       "memberName": "John Sufina",
  //       "diagnosisCode": "A001231",
  //       "admissionDate": "2-03-2024",
  //       "dischargeDate": "12-03-2024",
  //       "totalInvoiceAmount": "23,53,562",
  //       "documentStatus": "Proceed",
  //       "created": "March 30",
  //       "createdBy": "Webservice",
  //       "eo2Status": "Proceed to Integrated",
  //       "eo2Transition": "---",
  //       "claimCount": "240",
  //       "stage": "2"
  //   },
  //   {
  //       "name": "EID Sample MP5_pdf",
  //       "modified": "April9",
  //       "modifiedBy": "Jonnyongeshe@73gmail.com",
  //       "providerId": "123184",
  //       "invoiceNumber": "123184",
  //       "invoiceDate": "11-03-2024",
  //       "memberId": "AK00728",
  //       "memberName": "John Sufina",
  //       "diagnosisCode": "A001231",
  //       "admissionDate": "2-03-2024",
  //       "dischargeDate": "12-03-2024",
  //       "totalInvoiceAmount": "23,53,562",
  //       "documentStatus": "Proceed",
  //       "created": "March 30",
  //       "createdBy": "Webservice",
  //       "eo2Status": "Proceed to Integrated",
  //       "eo2Transition": "---",
  //       "claimCount": "240",
  //       "stage": "2"
  //   },
  //   {
  //       "name": "EID Sample MP5_pdf",
  //       "modified": "April9",
  //       "modifiedBy": "Jonnyongeshe@73gmail.com",
  //       "providerId": "123184",
  //       "invoiceNumber": "123184",
  //       "invoiceDate": "11-03-2024",
  //       "memberId": "AK00728",
  //       "memberName": "John Sufina",
  //       "diagnosisCode": "A001231",
  //       "admissionDate": "2-03-2024",
  //       "dischargeDate": "12-03-2024",
  //       "totalInvoiceAmount": "23,53,562",
  //       "documentStatus": "Proceed",
  //       "created": "March 30",
  //       "createdBy": "Webservice",
  //       "eo2Status": "Proceed to Integrated",
  //       "eo2Transition": "---",
  //       "claimCount": "240",
  //       "stage": "2"
  //   },
  //   {
  //       "name": "EID Sample MP5_pdf",
  //       "modified": "April9",
  //       "modifiedBy": "Jonnyongeshe@73gmail.com",
  //       "providerId": "123184",
  //       "invoiceNumber": "123184",
  //       "invoiceDate": "11-03-2024",
  //       "memberId": "AK00728",
  //       "memberName": "John Sufina",
  //       "diagnosisCode": "A001231",
  //       "admissionDate": "2-03-2024",
  //       "dischargeDate": "12-03-2024",
  //       "totalInvoiceAmount": "23,53,562",
  //       "documentStatus": "Proceed",
  //       "created": "March 30",
  //       "createdBy": "Webservice",
  //       "eo2Status": "Proceed to Integrated",
  //       "eo2Transition": "---",
  //       "claimCount": "240",
  //       "stage": "2"
  //   }
  // ];
  useEffect(() => {
    const token = localStorage.getItem("token"); // Replace with actual key for the token

    axios
      .get("https://invautomation.eo2cloud.com/api/v1/documents", {
        headers: {
          Authorization: `Bearer ${token}`, // Set authorization header
          "Content-Type": "application/json", // Set content type
        },
      })
      .then((response) => {
        setTableData(response.data.content);
      })
      .catch((error) => {
        return error;
      });
  }, []);
  console.log(tableData);

  return (
    <>
      <ProviderHeader />
      <div className="document-list">
        <div className="container">
          <ProviderMenu />
          <CardList
            table={true}
            heading={"Document List"}
            tableColumns={tableColumns}
            tableData={tableData}
            // pageContent={pageContent}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DocumentList;
