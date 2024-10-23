import { useState } from "react";
import ProviderHeader from "../../components/ProviderHeader";
import ProviderMenu from "../../components/ProviderMenu";
import ListTable from "@/components/ListTable";
import CardList from "@/components/CardList";
import Footer from "@/components/Footer";

function ClaimReported() {
  const tableColumns = [
    { elementName: "patientName", displayName: "Patient Name" },
    { elementName: "age", displayName: "Age" },
    { elementName: "disease", displayName: "Disease" },
    { elementName: "description", displayName: "Description" },
    { elementName: "invoiceNo", displayName: "Invoice No" },
    { elementName: "invoiceAmount", displayName: "Invoice Amount" },
    { elementName: "dateOfAdmit", displayName: "Date of admit" },
    { elementName: "contactNo", displayName: "Contact No" },
    { elementName: "drInCharge", displayName: "Dr in charge" },
    { elementName: "documentStatus", displayName: "Document Status" },
    { elementName: "insuranceCorporates", displayName: "Insurance Corporates" },
    { elementName: "principleMember", displayName: "Principle Member" },
  ];
  const tableData = {
    content: [
      {
        patientName: "Patrika Mumbi Gacukia",
        age: 43,
        disease: "Heart",
        description: "---",
        invoiceNo: "AAR-INV/2023559640",
        invoiceAmount: "2,10,000",
        dateOfAdmit: "10-03-2005",
        contactNo: "9546457511",
        drInCharge: "Dr. Preeti Jabbal",
        documentStatus: "Proceed",
        insuranceCorporates: "Bupa International",
        principleMember: "Self",
      },
      {
        patientName: "Piya jonn smiths",
        age: 24,
        disease: "Brain",
        description: "---",
        invoiceNo: "AAR-INV/2023559640",
        invoiceAmount: "2,10,21",
        dateOfAdmit: "12-03-2005",
        contactNo: "546461454",
        drInCharge: "Dr. nila shahanj",
        documentStatus: "Proceed",
        insuranceCorporates: "Bupa International",
        principleMember: "Self",
      },
      {
        patientName: "Nil Nithesh kathiwala",
        age: 50,
        disease: "ortho",
        description: "---",
        invoiceNo: "AAR-INV/2023559640",
        invoiceAmount: "854611",
        dateOfAdmit: "16-03-2005",
        contactNo: "87967546",
        drInCharge: "Dr. kuldip sing",
        documentStatus: "Pending",
        insuranceCorporates: "Bupa International",
        principleMember: "Self",
      },
      {
        patientName: "Piya jonn smiths",
        age: 24,
        disease: "Brain",
        description: "---",
        invoiceNo: "AAR-INV/2023559640",
        invoiceAmount: "2,10,000",
        dateOfAdmit: "10-03-2005",
        contactNo: "9546457511",
        drInCharge: "Dr. Preeti Jabbal",
        documentStatus: "Proceed",
        insuranceCorporates: "Bupa International",
        principleMember: "Self",
      },
      {
        patientName: "Nil Nithesh kathiwala",
        age: 50,
        disease: "ortho",
        description: "---",
        invoiceNo: "AAR-INV/2023559640",
        invoiceAmount: "854611",
        dateOfAdmit: "16-03-2005",
        contactNo: "87967546",
        drInCharge: "Dr. kuldip sing",
        documentStatus: "Pending",
        insuranceCorporates: "Bupa International",
        principleMember: "Self",
      },
      {
        patientName: "Piya jonn smiths",
        age: 24,
        disease: "Brain",
        description: "---",
        invoiceNo: "AAR-INV/2023559640",
        invoiceAmount: "2,10,000",
        dateOfAdmit: "10-03-2005",
        contactNo: "9546457511",
        drInCharge: "Dr. Preeti Jabbal",
        documentStatus: "Proceed",
        insuranceCorporates: "Bupa International",
        principleMember: "Self",
      },
      {
        patientName: "Nil Nithesh kathiwala",
        age: 50,
        disease: "ortho",
        description: "---",
        invoiceNo: "AAR-INV/2023559640",
        invoiceAmount: "854611",
        dateOfAdmit: "16-03-2005",
        contactNo: "87967546",
        drInCharge: "Dr. kuldip sing",
        documentStatus: "Pending",
        insuranceCorporates: "Bupa International",
        principleMember: "Self",
      },
      {
        patientName: "Piya jonn smiths",
        age: 24,
        disease: "Brain",
        description: "---",
        invoiceNo: "AAR-INV/2023559640",
        invoiceAmount: "2,10,21",
        dateOfAdmit: "12-03-2005",
        contactNo: "546461454",
        drInCharge: "Dr. nila shahanj",
        documentStatus: "Proceed",
        insuranceCorporates: "Bupa International",
        principleMember: "Self",
      },
      {
        patientName: "Patrika Mumbi Gacukia",
        age: 43,
        disease: "Heart",
        description: "---",
        invoiceNo: "AAR-INV/2023559640",
        invoiceAmount: "2,10,000",
        dateOfAdmit: "10-03-2005",
        contactNo: "9546457511",
        drInCharge: "Dr. Preeti Jabbal",
        documentStatus: "Proceed",
        insuranceCorporates: "Bupa International",
        principleMember: "Self",
      },
      {
        patientName: "Piya jonn smiths",
        age: 24,
        disease: "Brain",
        description: "---",
        invoiceNo: "AAR-INV/2023559640",
        invoiceAmount: "2,10,000",
        dateOfAdmit: "10-03-2005",
        contactNo: "9546457511",
        drInCharge: "Dr. Preeti Jabbal",
        documentStatus: "Proceed",
        insuranceCorporates: "Bupa International",
        principleMember: "Self",
      },
    ],
  };

  return (
    <>
      <ProviderHeader />
      <div className="document-list">
        <div className="container">
          <ProviderMenu />
          <CardList
            table={true}
            heading={"Claim Reported"}
            tableColumns={tableColumns}
            tableData={tableData}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ClaimReported;
