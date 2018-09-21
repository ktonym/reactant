import React,{Component} from "react";
import PropTypes from "prop-types";
import {Route} from "react-router-dom";
import {connect} from "react-redux";
import ProductForm from "../forms/ProductForm";
import {addProductRequest} from "../../actions/product";


class ProductPage extends Component{
    state = {
        formVisible: true,
    };

    submit = data => this.props.newProd(data);

    render(){
        const {match} = this.props;
        const {formVisible} = this.state;
        return (
            <div>
                <h3>Chercher des produits</h3>
                <Route path={`${match.url}/new`} render={(props) => <ProductForm {...props} visible={formVisible} submit={this.submit}/>} />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    newProd: (data) => dispatch(addProductRequest(data))
});

ProductPage.propTypes = {
    newProd: PropTypes.func.isRequired
};

export default connect(null,mapDispatchToProps)(ProductPage);