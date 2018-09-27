import React from "react";
import {Link} from "react-router-dom";
import {Menu,Icon} from "antd";

const SubMenu = Menu.SubMenu;
const ClaimsMenu = ({match}) => (
    <div>
        <Menu mode="horizontal" onClick={(e)=>{console.log('clicked on menu!',e)}}>

            <SubMenu title={<span><Icon type="bulb" />Souscription</span>}>
                <Menu.Item key="add"><Link to={`${match.url}/new`}><Icon type="plus"/>Nouvelle</Link></Menu.Item>
                <Menu.Item key="list"><Icon type="database"/>Liste</Menu.Item>
            </SubMenu>
            <SubMenu title={<span><Icon type="setting" />Paramétrage</span>}>
                <Menu.Item key="policy"><Icon type="solution"/>Police</Menu.Item>
                <Menu.Item key="claim"><Icon type="switcher"/>Sinitres</Menu.Item>
                <Menu.Item key="care"><Icon type="medicine-box"/>Care</Menu.Item>
                <Menu.Item key="finance"><Icon type="calculator"/>Finance</Menu.Item>
            </SubMenu>
        </Menu>
    </div>
);

export default ClaimsMenu;