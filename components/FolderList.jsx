import Link from "next/link";

const FolderList = ({ items }) => {
    return (
        <>
            <div className="folder-list">
                {
                    items.map((item,index) => {
                        return <Link className="item" href={`/Folders/${item}`} key={`folderItem${index}`}>
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