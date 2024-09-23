import Dropdown from 'react-bootstrap/Dropdown';

function ProviderHeader() {
    return (
        <>
            <div className="provider-header">
                <div className="container">
                    <div className="flex">
                        <img src="/images/logo.png" alt="" className="logo" />
                        <div className="actions">
                            <Dropdown className='upload'>
                                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                    Upload Documents
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Folder</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">File</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown className='profile'>
                                <Dropdown.Toggle variant="white" id="dropdown-basic">
                                    <img src="/images/user.png" alt="" className='profile-image'/>
                                    <div className="info">
                                        <h6>AGA Khan</h6>
                                        <span>Admin.12@gmail.com</span>
                                    </div>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1"><img src="/icons/profile-actions/person.svg" alt="" /><span>My Profile</span></Dropdown.Item>
                                    <Dropdown.Item href="#/action-2"><img src="/icons/profile-actions/settings.svg" alt="" /><span>Setting</span></Dropdown.Item>
                                    <Dropdown.Item href="#/action-2"><img src="/icons/profile-actions/logout.svg" alt="" /><span>Logout</span></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProviderHeader