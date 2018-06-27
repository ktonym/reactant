import React, {Component} from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import { Layout } from "antd";
import LoginForm from "../forms/LoginForm";
import {loginRequest} from "../../actions/auth";
import './login.css';

class LoginPage extends Component{

    submit = data => this.props.login(data);

    render(){
        return (
            <div className="container">
                <div className="login">
                {/*<Row>
                    <Col span={6} offset={10}>*/}
                    <h1><strong style={{color:'black'}}>bima</strong><i style={{color:'yellow'}}>pro</i></h1>
                        <LoginForm submit={this.submit}/>
                        <Link to="/forgot_password">Forgot Password?</Link>
                    {/*</Col>
                </Row>*/}
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    login: (data) => dispatch(loginRequest(data))
});

LoginPage.propTypes = {
    login: PropTypes.func.isRequired
};

export default connect(null,mapDispatchToProps)(LoginPage);