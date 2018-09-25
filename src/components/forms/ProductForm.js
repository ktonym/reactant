import React, {Component} from 'react';
import PropTypes from "prop-types";
import {DatePicker, Form, Icon, Input, InputNumber, Modal, Switch} from "antd";

const FormItem = Form.Item;

class ProductForm extends Component{
    state = {
        visible: true,
        data : {
            productId: null,
            name: null,
            active: true,
            activeFrom: null,
            activeTo: null,
            ratePath: null
        },
        errors: {}
    };

    onSubmit = (e) => {
        const errors = this.validate(this.state.data);
        const {data} = this.state;
        e.preventDefault();
        this.setState({errors});
        if(Object.keys(errors).length===0){
            this.setState({visible: false}); //need to send this to the store
            //this.props.loginFailed();
            this.props.submit(data);
        }
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

    onDateChange = (e) => {
        console.log(e)
    };
        /*this.setState({
        data: {...this.state.data,[e.target.name]: e.target.value}
        });*/

    onToggle = (e) => this.setState({
        data: {...this.state.data,[e.target.name]: e}
    });

    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.visible!==prevState.visible){
            return { visible: nextProps.visible};
        }
        else return null;
    }

    render(){
        const {data,errors} = this.state;
        const {visible} = this.props;
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
        return(
            <Modal visible={visible} title="Détails du produit" cancelText="Annuler" okText="Enregistrer" onCancel={() => {this.props.history.push("/products")}} onOk={this.onSubmit}>
                <Form layout="vertical">
                    <FormItem {...formItemLayout} label="Identifiant" validateStatus={errors.productId ? "warning" : ""} help={errors.productId}>
                        <InputNumber name="productId" disabled={true} value={data.productId}
                               prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Product Id" />
                    </FormItem>
                    <FormItem {...formItemLayout} label="Nom">
                        <Input name="name" onChange={this.onChange} value={data.name}
                               prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Nom descriptif du produit" />
                    </FormItem>
                    <FormItem {...formItemLayout} label="Activé">
                        <Switch name="active" onChange={(e)=>{console.log(e)}} value={data.active}
                               prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="active" />
                    </FormItem>
                    <FormItem {...formItemLayout} label="Actif dès">
                        <DatePicker name="activeFrom" onChange={this.onDateChange} format="YYYY/MM/DD" value={data.activeFrom} placeholder="Sélectionner une date"/>
                    </FormItem>
                    <FormItem {...formItemLayout} label="Actif à">
                        <DatePicker name="activeTo" onChange={this.onDateChange} format="YYYY/MM/DD" value={data.activeTo} placeholder="Sélectionner une date"/>
                    </FormItem>
                    <FormItem {...formItemLayout} label="Rate path">
                        <Input name="ratePath" onChange={this.onChange} value={data.ratePath}
                               prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Rate Path" />
                    </FormItem>
                </Form>
            </Modal>
        );
    }
}

ProductForm.propTypes = {
    submit: PropTypes.func.isRequired,
    visible: PropTypes.bool.isRequired
};

export default ProductForm;