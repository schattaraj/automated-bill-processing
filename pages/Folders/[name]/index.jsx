import CustomBreadcrumb from '@/components/CustomBreadcrumb'
import CardList from '@/components/CardList'
import Footer from '@/components/Footer'
import ProviderHeader from '@/components/ProviderHeader'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
const Files = () => {
    const tableColumns = [
        { "elementName": "name", "displayName": "Name" },
        { "elementName": "modified", "displayName": "Modified" },
        { "elementName": "modifiedBy", "displayName": "Modified By" },
        { "elementName": "providerId", "displayName": "Provider Id" },
        { "elementName": "invoiceNumber", "displayName": "Invoice Number" },
        { "elementName": "invoiceDate", "displayName": "Invoice Date" },
        { "elementName": "memberId", "displayName": "Member Id" },
        { "elementName": "memberName", "displayName": "Member Name" },
        { "elementName": "diagnosisCode", "displayName": "Diagnosis Code" },
        { "elementName": "admissionDate", "displayName": "Admission Date" },
        { "elementName": "dischargeDate", "displayName": "Discharge Date" },
        { "elementName": "totalInvoiceAmount", "displayName": "Total Invoice Amount" },
        { "elementName": "documentStatus", "displayName": "Document status" },
        { "elementName": "created", "displayName": "Created" },
        { "elementName": "createdBy", "displayName": "Created By" },
        { "elementName": "eo2Status", "displayName": "EO2 Status" },
        { "elementName": "eo2Transition", "displayName": "EO2 Transition" },
        { "elementName": "claimCount", "displayName": "Claim Count" },
        { "elementName": "stage", "displayName": "Stage" }
    ];
    const tableData = [
      {
          "name": "EID Sample MP5_pdf",
          "modified": "April9",
          "modifiedBy": "Jonnyongeshe@73gmail.com",
          "providerId": "123184",
          "invoiceNumber": "123184",
          "invoiceDate": "11-03-2024",
          "memberId": "AK00728",
          "memberName": "John Sufina",
          "diagnosisCode": "A001231",
          "admissionDate": "2-03-2024",
          "dischargeDate": "12-03-2024",
          "totalInvoiceAmount": "23,53,562",
          "documentStatus": "Proceed",
          "created": "March 30",
          "createdBy": "Webservice",
          "eo2Status": "Proceed to Integrated",
          "eo2Transition": "---",
          "claimCount": "240",
          "stage": "2"
      },
      {
          "name": "EID Sample MP5_pdf",
          "modified": "April9",
          "modifiedBy": "Jonnyongeshe@73gmail.com",
          "providerId": "123184",
          "invoiceNumber": "123184",
          "invoiceDate": "11-03-2024",
          "memberId": "AK00728",
          "memberName": "John Sufina",
          "diagnosisCode": "A001231",
          "admissionDate": "2-03-2024",
          "dischargeDate": "12-03-2024",
          "totalInvoiceAmount": "23,53,562",
          "documentStatus": "Proceed",
          "created": "March 30",
          "createdBy": "Webservice",
          "eo2Status": "Proceed to Integrated",
          "eo2Transition": "---",
          "claimCount": "240",
          "stage": "2"
      },
      {
          "name": "EID Sample MP5_pdf",
          "modified": "April9",
          "modifiedBy": "Jonnyongeshe@73gmail.com",
          "providerId": "123184",
          "invoiceNumber": "123184",
          "invoiceDate": "11-03-2024",
          "memberId": "AK00728",
          "memberName": "John Sufina",
          "diagnosisCode": "A001231",
          "admissionDate": "2-03-2024",
          "dischargeDate": "12-03-2024",
          "totalInvoiceAmount": "23,53,562",
          "documentStatus": "Proceed",
          "created": "March 30",
          "createdBy": "Webservice",
          "eo2Status": "Proceed to Integrated",
          "eo2Transition": "---",
          "claimCount": "240",
          "stage": "2"
      },
      {
          "name": "EID Sample MP5_pdf",
          "modified": "April9",
          "modifiedBy": "Jonnyongeshe@73gmail.com",
          "providerId": "123184",
          "invoiceNumber": "123184",
          "invoiceDate": "11-03-2024",
          "memberId": "AK00728",
          "memberName": "John Sufina",
          "diagnosisCode": "A001231",
          "admissionDate": "2-03-2024",
          "dischargeDate": "12-03-2024",
          "totalInvoiceAmount": "23,53,562",
          "documentStatus": "Proceed",
          "created": "March 30",
          "createdBy": "Webservice",
          "eo2Status": "Proceed to Integrated",
          "eo2Transition": "---",
          "claimCount": "240",
          "stage": "2"
      }
    ];
    const router = useRouter()
    const [name,setName] = useState("")
    useEffect(()=>{
        setName(router?.query?.name)
    },[router])
  return (
    <>
    <ProviderHeader />
    <div className="document-list">
        <div className="container">
        <CustomBreadcrumb/>
        <CardList table={true}  heading={name} tableColumns={tableColumns} tableData={tableData} />
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Files