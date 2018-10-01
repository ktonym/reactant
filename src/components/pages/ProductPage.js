import React,{Component} from "react";
import PropTypes from "prop-types";
import {Route} from "react-router-dom";
import {connect} from "react-redux";
import ProductForm from "../forms/ProductForm";
import {addProductRequest, fetchProducts} from "../../actions/product";
/*import moment from "moment";*/
import ProductCard from "./ProductCard";
import {allProductsSelector} from "../../reducers/products";
import ProductConfig from "./ProductConfig";

class ProductPage extends Component{
    state = {
        formVisible: true,
    };

    submit = data => this.props.newProd(data);

    componentDidMount(){
        this.props.fetchProds();
    }

    render(){
        const {match,products} = this.props;
        const {formVisible} = this.state;
        return (
            <div style={{ padding: '30px' }}>
                {/*{ products && console.log(products)}*/}{/*<ProductCard product={prod}/>*/}
                {products && products.map((prod)=>
                        <ProductCard key={prod.productId} product={prod} match={match}/>
                )}
                <Route path={`${match.url}/new`} render={(props) => <ProductForm {...props} visible={formVisible} submit={this.submit}/>} />
                <Route path={`${match.url}/config/:id`} exact render={(props) => <ProductConfig {...props} visible={formVisible} />}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
   products: allProductsSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
    newProd: (data) => dispatch(addProductRequest(data)),
    fetchProds: () => dispatch(fetchProducts())
});

ProductPage.propTypes = {
    newProd: PropTypes.func.isRequired,
    products: PropTypes.arrayOf(
        PropTypes.shape({
            productId: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            active: PropTypes.bool.isRequired,
            activeFrom: PropTypes.any,
            activeTo: PropTypes.any,
            ratePath: PropTypes.string.isRequired
        }).isRequired
    )
};

export default connect(mapStateToProps,mapDispatchToProps)(ProductPage);