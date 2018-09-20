import React, {Component} from 'react';
import {DatePicker, Form, Icon, Input, Modal} from "antd";

const FormItem = Form.Item;

class ProductForm extends Component{
    state = {
        visible: false,
        data : {
            productId: null,
            name: null,
            active: false,
            activeFrom: new Date(),
            activeTo: null,
            ratePath: null
        },
        errors: {}
    };

    validate = data => {
        const errors = {};
        if(!data.name) errors.name = "Name can't be blank";
        if(!data.activeFrom) errors.activeFrom = "Effective date cannot be blank";
        if(!data.activeTo) errors.activeTo = "Expiry date cannot be blank";
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
                    <FormItem validateStatus={errors.productId ? "warning" : ""} help={errors.productId}>
                        <Input name="productId" onChange={this.onChange} value={data.productId}
                               prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Product Id" />
                    </FormItem>
                    <FormItem >
                        <Input name="name" onChange={this.onChange} value={data.name}
                               prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Name" />
                    </FormItem>
                    <FormItem >
                        <Input name="active" onChange={this.onChange} value={data.active}
                               prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="active" />
                    </FormItem>
                    <FormItem>
                        <DatePicker name="activeFrom" onChange={this.onDateChange} format="YYYY/MM/DD" value={data.activeFrom}/>
                    </FormItem>
                    <FormItem>
                        <DatePicker name="activeTo" onChange={this.onDateChange} format="YYYY/MM/DD" value={data.activeTo}/>
                    </FormItem>
                    <FormItem >
                        <Input name="ratePath" onChange={this.onChange} value={data.ratePath}
                               prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Rate Path" />
                    </FormItem>
                </Form>
            </Modal>
        );
    }
}

export default ProductForm;