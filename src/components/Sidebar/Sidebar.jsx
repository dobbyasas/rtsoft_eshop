import { Dropdown } from 'react-bootstrap';

import './SideBar.scss';

const SideBar = ({ isSidebarShown }) => {
    return (
        <div className={`SideBar ${isSidebarShown ? '' : 'hidden'}`}>
            <div className="sidebar-header"></div>
            <ul className="SidebarList">
                <li>
                    <a href="#" className="active">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#">Sale</a>
                </li>
                <li>
                    <Dropdown
                        as="div"
                        className="list-group-item list-group-item-action"
                    >
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Kategorie
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">
                                Subcategory 1
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                                Subcategory 2
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                                Subcategory 3
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </li>
            </ul>
        </div>
    );
};

export default SideBar;
