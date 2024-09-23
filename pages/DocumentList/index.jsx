import { useState } from "react";
import ProviderHeader from "../../components/ProviderHeader"
import ProviderMenu from "../../components/ProviderMenu"
import ListTable from "@/components/ListTable";
import CardList from "@/components/CardList";
import Footer from "@/components/Footer";

function DocumentList() {
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
    "Stage"
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
      "2"
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
          "2"
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
      "2"
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
      "2"
  ]
]
  return (
    <>
    <ProviderHeader />
    <div className="document-list">
        <div className="container">
        <ProviderMenu />
        <CardList table={true} heading={"Document List"} tableColumns={tableColumns} tableData={tableData}/>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default DocumentList