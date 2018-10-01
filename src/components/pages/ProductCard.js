import React from "react";
import { Link } from "react-router-dom";
import {Avatar,Card,Col,Icon} from "antd";
import PropTypes from "prop-types";
/*import moment from "moment/moment";*/

const {Meta} = Card;

const ProductCard = ({product,match}) =>
    <Col span={8}>
        <Card
            style={{ width: 240, marginTop: 16 }}
            actions={[<Link to={`${match.url}/config/${product.productId}`}><Icon type="setting" /></Link>,
                <Link to={`${match.url}/edit/${product.productId}`}><Icon type="edit"/></Link>]}
        >
            {/*<Skeleton loading={false} avatar active>*/}
                <Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title={product.name}
                    description={product.active ? "Activé" : "Désactivé"}
                />
            {/*</Skeleton>*/}
        </Card>
    </Col>;

ProductCard.propTypes = {
    product: PropTypes.shape({
        productId: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        active: PropTypes.bool.isRequired,
        activeFrom: PropTypes.any,
        activeTo: PropTypes.any,
        ratePath: PropTypes.string.isRequired
    }).isRequired
};

export default ProductCard;