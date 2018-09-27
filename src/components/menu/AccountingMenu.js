import React from "react";
import {Link} from "react-router-dom";
import {Menu,Icon} from "antd";

const SubMenu = Menu.SubMenu;
const AccountingMenu = ({match}) => (
    <div>

        <Menu mode="horizontal">

            <SubMenu title={<span><Icon type="bulb" />Action</span>}>
                <Menu.Item key="add"><Link to={`${match.url}/new`}><Icon type="plus"/>Ajouter</Link></Menu.Item>
                <Menu.Item key="list"><Icon type="database"/>Liste</Menu.Item>
            </SubMenu>
            <SubMenu title={<span><Icon type="bulb" />Encaissements</span>}>
                <Menu.Item key="add"><Link to={`${match.url}/receipts`}><Icon type="plus"/>Ajouter</Link></Menu.Item>
                <Menu.Item key="list"><Icon type="database"/>Liste</Menu.Item>
            </SubMenu>
            <SubMenu title={<span><Icon type="bulb" />Décaissements</span>}>
                <Menu.Item key="add"><Link to={`${match.url}/commissions`}><Icon type="plus"/>Paiement de commissions</Link></Menu.Item>
                <Menu.Item key="list"><Link to={`${match.url}/sinistres`}><Icon type="plus"/>Paiement des sinistres</Link></Menu.Item>
            </SubMenu>
            <SubMenu title={<span><Icon type="setting" />Paramétrage</span>}>
                {/*<Menu.Item key="policy"><Icon type="solution"/>Police</Menu.Item>
                <Menu.Item key="claim"><Icon type="switcher"/>Sinitres</Menu.Item>
                <Menu.Item key="care"><Icon type="medicine-box"/>Soins</Menu.Item>*/}
                <Menu.Item key="finance"><Link to={`${match.url}/types`}><Icon type="calculator"/>Types de Compte</Link></Menu.Item>
            </SubMenu>

        </Menu>

    </div>
);

export default AccountingMenu;