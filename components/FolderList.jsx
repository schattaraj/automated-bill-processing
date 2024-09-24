import Link from "next/link";

const FolderList = ({ items }) => {
    return (
        <>
            <div className="folder-list">
                {
                    items.map((item) => {
                        return <Link className="item" href={"/Folders"}>
                            <img src="/icons/folder.svg" alt="" />
                            <span>{item}</span>
                        </Link>
                    })
                }
            </div>
        </>
    );
}

export default FolderList;