import React from "react";
import {Modal,Tabs} from "antd";

const {TabPane} = Tabs;
class ProductConfig extends React.Component{

    state = {
        data: {},
        errors: {}
    };

    goBack = () => {
        this.props.history.push("/products")
    };

    render(){
        return(
            <Modal visible={this.props.visible} title="Paramètres du produit" okText="Retourner" onOk={this.goBack} onCancel={this.goBack}>

                    <Tabs defaultActiveKey="1" tabPosition="left" style={{ height: 420 }}>
                        <TabPane tab="Basic Settings" key="1">Content of tab 1</TabPane>
                        <TabPane tab="Product Options" key="2">Content of tab 2</TabPane>
                        <TabPane tab="Levies" key="3">Content of tab 3</TabPane>
                        <TabPane tab="Policy Settings" key="4">Content of tab 4</TabPane>
                        <TabPane tab="Claim Settings" key="5">Content of tab 5</TabPane>
                        <TabPane tab="Accounting Settings" key="7">Content of tab 7</TabPane>
                    </Tabs>

            </Modal>
        );
    }

}

export default ProductConfig;