import React, {Component} from 'react';
import { Form, Icon, Input, Button,Alert } from 'antd';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import { loginFailed } from "../../actions/auth";
import "./LoginForm.css";

// const FormItem = Form.Item;
function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}
class LoginForm extends Component{
    state = {
        data: {
            username: "",
            password: ""
        },
        loaded: true,
        errors: {}
    };
    componentDidMount(){
        //this.props.form.validateFields();
    }

    componentWillReceiveProps(nextProps){
        this.setState({errors: nextProps.serverErrors, loaded: nextProps.loaded})
    }

    onSubmit = (e) => {
        const errors = this.validate(this.state.data);
        const {data} = this.state;
        e.preventDefault();
        this.setState({errors});
        if(Object.keys(errors).length===0){
            this.setState({loaded: false}); //need to send this to the store
            //this.props.loginFailed();
            this.props.submit(data);
        }
    };

    validate = data => {
        const errors = {};
        if(!data.username) errors.username = "Username can't be blank";
        if(!data.password) errors.password = "Password can't be blank";
        return errors;
    };

    onChange = (e) => this.setState({
        data: {...this.state.data,[e.target.name]: e.target.value}
    });

    render(){
        const {data,errors,loaded} = this.state;
        const loginError = errors.msg;
        console.log(loginError);

        return (
            <div>
                { loginError && <Alert message={loginError} type="error" showIcon closable />}
                <Form onSubmit={this.onSubmit}>

                    <Form.Item validateStatus={errors.username ? "warning" : ""} help={errors.username}>
                        <Input name="username" onChange={this.onChange} value={data.username}
                                   prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item validateStatus={errors.password ? "error" : ""} help={errors.password}>
                            <Input name="password" onChange={this.onChange} value={data.password}
                                   prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    </Form.Item>
                    <Form.Item>
                        <Button className="login-form-button" type="primary" htmlType="submit">
                            Log in
                        </Button>
                    </Form.Item>
                </Form>

            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    serverErrors: state.formErrors.login,
    loaded: state.user.loaded
});

LoginForm.propTypes = {
    submit: PropTypes.func.isRequired,
    loginFailed: PropTypes.func.isRequired
};

export default connect(mapStateToProps,{loginFailed})(LoginForm);