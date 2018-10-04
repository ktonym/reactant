import React, {Component} from 'react';
import PropTypes from "prop-types";
import {Form, Icon, Input, Modal} from "antd";

const FormItem = Form.Item;
class ClientTypeForm extends Component{
    state = {
        visible: true,
        errors: {},
        data: {
            clientTypeId: null,
            description: ''
        }
    };

    onSubmit = (e) => {
        const errors = this.validate(this.state.data);
        const {data} = this.state;
        e.preventDefault();
        this.setState({errors});
        if(Object.keys(errors).length===0){
            this.props.submit(data);
            this.setState({visible: false});
        }
    };

    validate = data => {
        const errors = {};
        if(!data.description) errors.description = "Description can't be blank";
        return errors;
    };

    onChange = (e) => this.setState({
        data: {...this.state.data,[e.target.name]: e.target.value}
    });

    onCancel = () => this.props.history.push("/clients");

    render(){
        const {visible,data,errors} = this.state;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        return (
            <Modal visible={visible} title="Client Type Details" okText="Save" onCancel={this.onCancel} onOk={this.onSubmit}>
                <Form layout="vertical">
                    <FormItem label="Name" {...formItemLayout} validateStatus={errors.description ? "warning" : ""} help={errors.description}>
                        <Input name="firstName" onChange={this.onChange} value={data.description}
                               prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Description" />
                    </FormItem>
                </Form>
            </Modal>
        );
    }
};

ClientTypeForm.propTypes = {
    visible: PropTypes.func.isRequired
};
export default ClientTypeForm;