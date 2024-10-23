import { useState } from "react";
import ProviderHeader from "../../components/ProviderHeader";
import ProviderMenu from "../../components/ProviderMenu";
import ListTable from "@/components/ListTable";
import CardList from "@/components/CardList";
import Footer from "@/components/Footer";

function Folders() {
  const tableColumns = [
    "Patient Name",
    "Age",
    "Disease",
    "Description",
    "Invoice No",
    "Invoice Amount",
    "Date of admit",
    "Contact No",
    "Dr in charge",
    "Document Status",
    "Insurance Corporates",
    "Principle Member",
  ];
  const tableData = {
    content: [
      [
        "Patrika Mumbi Gacukia",
        43,
        "Heart",
        "---",
        "AAR-INV/2023559640",
        "2,10,000",
        "10-03-2005",
        "9546457511",
        "Dr. Preeti Jabbal",
        "Proceed",
        "Bupa International",
        "Self",
      ],
      [
        "Piya jonn smiths",
        24,
        "Brain",
        "---",
        "AAR-INV/2023559640",
        "2,10,21",
        "12-03-2005",
        "546461454",
        "Dr. nila shahanj",
        "Proceed",
        "Bupa International",
        "Self",
      ],
      [
        "Nil Nithesh kathiwala",
        50,
        "ortho",
        "---",
        "AAR-INV/2023559640",
        "854611",
        "16-03-2005",
        "87967546",
        "Dr. kuldip sing",
        "Pending",
        "Bupa International",
        "Self",
      ],
      [
        "Piya jonn smiths",
        24,
        "Brain",
        "---",
        "AAR-INV/2023559640",
        "2,10,000",
        "10-03-2005",
        "9546457511",
        "Dr. Preeti Jabbal",
        "Proceed",
        "Bupa International",
        "Self",
      ],
      [
        "Nil Nithesh kathiwala",
        50,
        "ortho",
        "---",
        "AAR-INV/2023559640",
        "854611",
        "16-03-2005",
        "87967546",
        "Dr. kuldip sing",
        "Pending",
        "Bupa International",
        "Self",
      ],
      [
        "Piya jonn smiths",
        24,
        "Brain",
        "---",
        "AAR-INV/2023559640",
        "2,10,000",
        "10-03-2005",
        "9546457511",
        "Dr. Preeti Jabbal",
        "Proceed",
        "Bupa International",
        "Self",
      ],
      [
        "Nil Nithesh kathiwala",
        50,
        "ortho",
        "---",
        "AAR-INV/2023559640",
        "854611",
        "16-03-2005",
        "87967546",
        "Dr. kuldip sing",
        "Pending",
        "Bupa International",
        "Self",
      ],
      [
        "Piya jonn smiths",
        24,
        "Brain",
        "---",
        "AAR-INV/2023559640",
        "2,10,21",
        "12-03-2005",
        "546461454",
        "Dr. nila shahanj",
        "Proceed",
        "Bupa International",
        "Self",
      ],
      [
        "Patrika Mumbi Gacukia",
        43,
        "Heart",
        "---",
        "AAR-INV/2023559640",
        "2,10,000",
        "10-03-2005",
        "9546457511",
        "Dr. Preeti Jabbal",
        "Proceed",
        "Bupa International",
        "Self",
      ],
      [
        "Piya jonn smiths",
        24,
        "Brain",
        "---",
        "AAR-INV/2023559640",
        "2,10,000",
        "10-03-2005",
        "9546457511",
        "Dr. Preeti Jabbal",
        "Proceed",
        "Bupa International",
        "Self",
      ],
    ],
  };
  const folderList = [
    "Dr Shital Patil",
    "Dr Agh Khan",
    "Dr Nilam Dalvi",
    "Dr Patil Surendra",
    "Dr Preeti Jain",
    "Dr Kanika Jain",
  ];

  return (
    <>
      <ProviderHeader />
      <div className="document-list">
        <div className="container">
          <ProviderMenu />
          <CardList
            table={false}
            heading={"Folders"}
            tableColumns={tableColumns}
            tableData={tableData}
            folderList={folderList}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Folders;
