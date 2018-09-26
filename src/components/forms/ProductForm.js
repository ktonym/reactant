import React, {Component} from 'react';
import PropTypes from "prop-types";
import {DatePicker, Form, Icon, Input, InputNumber, Modal, Switch} from "antd";
import moment from "moment";

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
            this.props.submit(data);
            this.setState({visible: false}); //need to send this to the store
            //this.props.addProductFailed();
        }
    };

    validate = data => {
        const errors = {};
        if(!data.name) errors.name = "Le nom ne peut pas être vide";
        if(!data.activeFrom) errors.activeFrom = "La date effective ne peut pas être vide";
        if(!data.activeTo) errors.activeTo = "La date d'expiration ne peut pas être vide";
        return errors;
    };

    onChange = (e) => this.setState({
        data: {...this.state.data,[e.target.name]: e.target.value}
    });

    onDateChange = (value) => {
        this.setState({
            data: {...this.state.data,activeFrom: moment(value)}
        });
    };
    onEndDateChange = (value) => {
        this.setState({
            data: {...this.state.data,activeTo: moment(value)}
        });
    };

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
                    <FormItem {...formItemLayout} label="Identifiant">
                        <InputNumber name="productId" disabled={true} value={data.productId}
                               prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Product Id" />
                    </FormItem>
                    <FormItem {...formItemLayout} label="Nom" validateStatus={errors.name ? "warning" : ""} help={errors.name}>
                        <Input name="name" onChange={this.onChange} value={data.name}
                               prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Nom descriptif du produit" />
                    </FormItem>
                    <FormItem {...formItemLayout} label="Activé">
                        <Switch name="active" onChange={(e)=>{console.log(e)}} value={data.active}
                               prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="active" />
                    </FormItem>
                    <FormItem {...formItemLayout} label="Actif dès" validateStatus={errors.activeFrom ? "warning" : ""} help={errors.activeFrom}>
                        <DatePicker name="activeFrom" onChange={this.onDateChange} format="YYYY/MM/DD" value={data.activeFrom} placeholder="Sélectionner une date"/>
                    </FormItem>
                    <FormItem {...formItemLayout} label="Actif à" validateStatus={errors.activeTo ? "warning" : ""} help={errors.activeTo}>
                        <DatePicker name="activeTo" onChange={this.onEndDateChange} format="YYYY/MM/DD" value={data.activeTo} placeholder="Sélectionner une date"/>
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