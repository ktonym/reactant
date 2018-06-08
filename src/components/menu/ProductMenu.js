import React from "react";
import {Menu,Icon} from "antd";

const SubMenu = Menu.SubMenu;
const ProductMenu = () => (
    <div>

        <Menu mode="horizontal" onClick={(e)=>{console.log('clicked on menu!',e)}}>

            <SubMenu title={<span><Icon type="bulb" />Action</span>}>
                <Menu.Item key="add"><Icon type="plus"/>New</Menu.Item>
                <Menu.Item key="list"><Icon type="database"/>List</Menu.Item>
            </SubMenu>
            <SubMenu title={<span><Icon type="setting" />Settings</span>}>
                <Menu.Item key="policy"><Icon type="solution"/>Policy</Menu.Item>
                <Menu.Item key="claim"><Icon type="switcher"/>Claim</Menu.Item>
                <Menu.Item key="care"><Icon type="medicine-box"/>Care</Menu.Item>
                <Menu.Item key="finance"><Icon type="calculator"/>Finance</Menu.Item>
            </SubMenu>

        </Menu>

  </div>
);

export default ProductMenu;