import React,{Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link,Route} from "react-router-dom";
import { Layout, Menu, Icon } from "antd";
import {logoutRequest} from "../../actions/auth";
import "./HomePage.css";
import ClientPage from "./ClientPage";
import DashBoard from "./DashBoard";
import ProductPage from "./ProductPage";
import ClientMenu from "../menu/ClientMenu";
import ProductMenu from "../menu/ProductMenu";
import UnderwritingMenu from "../menu/UnderwritingMenu";
import AccountingMenu from "../menu/AccountingMenu";
import CareMenu from "../menu/CareMenu";
import AccountingPage from "./AccountingPage";
import ClaimsMenu from "../menu/ClaimsMenu";
import ClaimsPage from "./ClaimsPage";

const { Header, Sider, Content, Footer } = Layout;
class HomePage extends Component{
    state = {
        collapsed : false
    };
    onCollapse = (collapsed) => this.setState({collapsed});

    render(){
        const {collapsed} = this.state;
        const {isAuthenticated,logout} = this.props;
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider
                    onCollapse={this.onCollapse} collapsible collapsed={collapsed}
                >
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Icon type="dashboard" />
                            <span>Dashboard</span>
                            <Link to="/dashboard"/>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="user" />
                            <span>Clients</span>
                            <Link to="/clients"/>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="solution" />
                            <span>Contrats</span>
                            <Link to="/policies"/>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Icon type="calculator" />
                            <span>Comptes</span>
                            <Link to="/accounting"/>
                        </Menu.Item>
                        <Menu.Item key="5">
                            <Icon type="medicine-box" />
                            <span>Soins</span>
                            <Link to="/care"/>
                        </Menu.Item>
                        <Menu.Item key="6">
                            <Icon type="switcher" />
                            <span>Sinistres</span>
                            <Link to="/claims"/>
                        </Menu.Item>
                        <Menu.Item key="7">
                            <Icon type="shop" />
                            <span>Produits</span>
                            <Link to="/products"/>
                        </Menu.Item>
                        { isAuthenticated &&
                            <Menu.Item key="logout">
                                <Icon type="logout" />
                                <span onClick={()=>logout()}>Déconnecter</span>
                            </Menu.Item>
                        }
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#f1f1f1', padding: '20px', margin: '0 0' }}>
                        <Route path="/clients" component={ClientMenu}/>
                        <Route path="/products" component={ProductMenu}/>
                        <Route path="/policies" component={UnderwritingMenu}/>
                        <Route path="/accounting" component={AccountingMenu}/>
                        <Route path="/care" component={CareMenu}/>
                        <Route path="/claims" component={ClaimsMenu}/>

                        {/*{ isAuthenticated && <Button style={{marginLeft: 'auto'}} shape="circle" onClick={()=>logout()} icon="logout"/> }*/}
                        {/*{ isAuthenticated ? (<Icon className="avatar" type="door" onClick={()=>logout()}/>) : (<Link to="/login">Login</Link>)}*/}

                    </Header>
                    <Content style={{ margin: '0 16px'}}>
                        <Route path="/dashboard" component={DashBoard}/>
                        <Route path="/clients" component={ClientPage}/>
                        <Route path="/products" component={ProductPage}/>
                        <Route path="/accounting" component={AccountingPage}/>
                        <Route path="/claims" component={ClaimsPage}/>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        ©2018 Rhino Infotech Limited
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

const mapStateToProps = (state) =>({
   isAuthenticated: !!state.user.access_token
});

HomePage.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired
};

export default connect(mapStateToProps,{logout: logoutRequest})(HomePage);