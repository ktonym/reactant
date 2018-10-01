import React from "react";
import {Menu,Icon} from "antd";

const SubMenu = Menu.SubMenu;
const ClientMenu = () => (
    <div>
        <Menu mode="horizontal">
            <SubMenu title={<span><Icon type="bulb" />Action</span>}>
                <Menu.Item key="add"><Icon type="plus"/>New</Menu.Item>
                <Menu.Item key="list"><Icon type="database"/>List</Menu.Item>
            </SubMenu>
            <SubMenu title={<span><Icon type="setting" />Client Type</span>}>
                <Menu.Item key="add-client-type"><Icon type="plus"/>New</Menu.Item>
                <Menu.Item key="list-client-type"><Icon type="switcher"/>List</Menu.Item>
            </SubMenu>
        </Menu>
    </div>
);

export default ClientMenu;