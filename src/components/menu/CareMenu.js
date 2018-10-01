import React from "react";
import {Link} from "react-router-dom";
import {Menu,Icon} from "antd";

const SubMenu = Menu.SubMenu;
const CareMenu = ({match}) => (
    <div>

        <Menu mode="horizontal">

            <SubMenu title={<span><Link to={`${match.url}/preauth`}><Icon type="bulb" />Preautorisations</Link></span>}>

            </SubMenu>
            <SubMenu title={<span><Icon type="bulb" />Admissions</span>}>
                <Menu.Item key="add"><Link to={`${match.url}/new`}><Icon type="plus" />Ajouter</Link></Menu.Item>
                <Menu.Item key="list"><Link to={`${match.url}/search`}><Icon type="search" />Ajouter</Link>Chercher</Menu.Item>
            </SubMenu>
            <SubMenu title={<span><Icon type="setting" />Paramétrage</span>}>
                <Menu.Item key="policy"><Link to={`${match.url}/providers`}><Icon type="medicine-box" />Prestataires</Link></Menu.Item>
                <Menu.Item key="claim"><Link to={`${match.url}/conditions`}><Icon type="switcher" />Conditions Médicales</Link></Menu.Item>
            </SubMenu>

        </Menu>

    </div>
);

export default CareMenu;