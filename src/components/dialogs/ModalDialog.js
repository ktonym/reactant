import React, {Component} from 'react';
import PropTypes from "prop-types";
import { Modal } from "antd";

class ModalDialog extends Component{
    state = { visible: true };
    showModal = () => this.setState({visible: true});
    handleOk = (e) => this.setState({visible: false});

    render(){
        const {title,message} = this.props;
        const {visible} = this.state;
        return (
            <Modal title={title} visible={visible}
                   onOk={this.handleOk} onCancel={this.handleOk}>
                <p>{message}</p>
            </Modal>
        );
    }
}

ModalDialog.propTypes = {
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
};

export default ModalDialog;