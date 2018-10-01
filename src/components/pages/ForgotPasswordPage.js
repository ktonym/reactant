import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {resetPassRequest} from "../../actions/auth";
import ForgotPasswordForm from "../forms/ForgotPasswordForm";
import { openNotificationWithIcon } from "../Notifications";

class ForgotPasswordPage extends React.Component{

    state = {
        loading: false,
        success: false,
        errors: null
    };

    componentWillReceiveProps(props){
        this.setState({success: props.success, errors: props.errors})
    }

    onSubmit = email => {
        this.setState({loading: true});
        this.props.resetPassReq(email);
    };

    render(){
        const { success,errors,loading } = this.state;
        return(
            <div>
                { success ? openNotificationWithIcon('success','Success','For instructions to reset your password, please check your email')
                 :
                    <ForgotPasswordForm style={{marginLeft: '50%'}} submit={this.onSubmit}/>
                }
            </div>
        );
    }

}

const mapStateToProps = (state) => ({
    errors: state.user.errors,
    success: state.user.resetSent
});

const mapDispatchToProps = (dispatch) => ({
    resetPassReq: (email) => dispatch(resetPassRequest(email))
});

ForgotPasswordPage.propTypes = {
    resetPassReq: PropTypes.func.isRequired
};

export default connect(mapStateToProps,mapDispatchToProps)(ForgotPasswordPage);