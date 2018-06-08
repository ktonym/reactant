import React, {Component} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Button,Icon,Input,Form} from "antd";
import isEmail from "validator/lib/isEmail";
import ModalDialog from "../dialogs/ModalDialog";

class ForgotPasswordForm extends Component{


    state = {
        data: { email: ""},
        errors: {}
    };

    onChange = e => this.setState({
        data: {...this.state.data, [e.target.name]:e.target.value}
    });

    onSubmit = e => {
        e.preventDefault();
        const errors = this.validate(this.state.data);
        const {data} = this.state;
        this.setState({errors});
        if(Object.keys(errors).length===0){
            //this.setState({loading:true});
            this.props.submit(data);
        }
    };

    validate = data => {
        const errors = {};
        if(!isEmail(data.email)) errors.email = "Invalid email";
        return errors;
    };

    getDerivedStateFromProps(props,state){
        console.log(props);
        this.setState({errors: props.serverErrors.errors})
    }

    // componentWillReceiveProps(props){
    //
    // }

    render(){
        const {data,errors} = this.state;
        return (
            <div>
                <Form layout="inline" onSubmit={this.onSubmit}>
                    <Form.Item label="Enter your email" validateStatus={errors.email ? "error" : ""} help={errors.email} >
                        <Input name="email" onChange={this.onChange} value={data.email}
                               prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="name@yourdomain.com" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Reset
                        </Button>
                    </Form.Item>
                    { errors.global && <ModalDialog title="Action did not succeed" message={errors.global}/>}
                </Form>
            </div>
        );
    }
}

ForgotPasswordForm.propTypes = {
    submit: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    serverErrors: state.formErrors.resetPassword
});

export default connect(mapStateToProps)(ForgotPasswordForm);