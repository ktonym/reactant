import React from "react";
import { Button, Modal, Form, Input, Radio, Icon, DatePicker} from "antd";

const FormItem = Form.Item;

class ClientForm extends React.Component{
    state = {
        visible : false,
        data: {
            clientTypeId: 0,
            clientId: null,
            firstName: '',
            lastName: '',
            otherName: '',
            pin: '',
            joinDate: new Date()
        },
        errors: {}
    };

    validate = data => {
        const errors = {};
        if(!data.firstName) errors.firstName = "Name can't be blank";
        if(!data.pin) errors.pin = "Personal Identification Number can't be blank";
        return errors;
    };

    onChange = (e) => this.setState({
        data: {...this.state.data,[e.target.name]: e.target.value}
    });

    onDateChange = (e) => this.setState({
        data: {...this.state.data,[e.target.name]: e.target.value}
    });

    render(){
        const {visible,data,errors} = this.state;
        return(
            <Modal visible={visible} title="Client Details" okText="Save" onCancel={onCancel} onOk={onCreate}>
                <Form layout="vertical">
                    <FormItem validateStatus={errors.firstName ? "warning" : ""} help={errors.firstName}>
                        <Input name="firstName" onChange={this.onChange} value={data.firstName}
                                     prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="First name" />
                    </FormItem>
                    <FormItem >
                        <Input name="lastName" onChange={this.onChange} value={data.lastName}
                               prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Last name" />
                    </FormItem>
                    <FormItem >
                        <Input name="otherName" onChange={this.onChange} value={data.otherName}
                               prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Other name" />
                    </FormItem>
                    <FormItem validateStatus={errors.pin ? "error" : ""} help={errors.pin}>
                        <Input name="password" onChange={this.onChange} value={data.pin}
                               prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="PIN" />
                    </FormItem>
                    <FormItem>
                        <DatePicker name="joinDate" onChange={this.onDateChange} format="YYYY/MM/DD" />
                    </FormItem>
                </Form>
            </Modal>
        );
    }
}

export default ClientForm;