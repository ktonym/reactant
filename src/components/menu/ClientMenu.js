import React from "react";
import {Menu,Icon} from "antd";
import {Link} from "react-router-dom";

const SubMenu = Menu.SubMenu;
const ClientMenu = ({match}) => (
    <div>
        <Menu mode="horizontal">
            <SubMenu title={<span><Icon type="bulb" />Action</span>}>
                <Menu.Item key="add"><Link to={`${match.url}/new`}><Icon type="plus"/>Ajouter</Link></Menu.Item>
                <Menu.Item key="list"><Link to={`${match.url}/list`}><Icon type="plus"/>Liste</Link></Menu.Item>
            </SubMenu>
            <SubMenu title={<span><Icon type="setting" />Client Type</span>}>
                <Menu.Item key="add"><Link to={`${match.url}/type/new`}><Icon type="plus"/>Ajouter</Link></Menu.Item>
                <Menu.Item key="list"><Link to={`${match.url}/type/list`}><Icon type="plus"/>Liste</Link></Menu.Item>
            </SubMenu>
        </Menu>
    </div>
);

export default ClientMenu;