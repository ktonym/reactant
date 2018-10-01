import React,{Fragment} from "react";
import {List} from "antd";

const configItems = [
    {attributeId: 1, productId: 1, active: true, name: 'Product prefix'}
];

class ProductConfigList extends React.Component{

    state = {
        data: {},
        errors: {}
    };

    render(){
        return(
            <Fragment>
                <List itemLayout="horizontal" dataSource={configItems}

                />
            </Fragment>
        );
    }

}

export default ProductConfigList;