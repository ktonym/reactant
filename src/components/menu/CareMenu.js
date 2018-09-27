import React from "react";
import {Link} from "react-router-dom";
import {Menu,Icon} from "antd";

const SubMenu = Menu.SubMenu;
const CareMenu = ({match}) => (
    <div>

        <Menu mode="horizontal" onClick={(e)=>{console.log('clicked on menu!',e)}}>

            <SubMenu title={<span><Icon type="bulb" />Action</span>}>
                <Menu.Item key="add"><Link to={`${match.url}/new`}><Icon type="plus"/>Ajouter</Link></Menu.Item>
                <Menu.Item key="list"><Icon type="database"/>Liste</Menu.Item>
            </SubMenu>
            <SubMenu title={<span><Icon type="setting" />Paramétrage</span>}>
                <Menu.Item key="policy"><Link to={`${match.url}/providers`}><Icon type="medicine-box"/>Prestataires</Link></Menu.Item>
                <Menu.Item key="claim"><Link to={`${match.url}/conditions`}><Icon type="switcher"/>Conditions Médicales</Link></Menu.Item>
            </SubMenu>

        </Menu>

    </div>
);

export default CareMenu;