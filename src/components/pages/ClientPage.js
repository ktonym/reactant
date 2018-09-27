import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {Route} from "react-router-dom";
//import ClientForm from "../forms/ClientForm";
import {addClientRequest,clientSearchRequest} from "../../actions/client";
import ClientForm from "../forms/ClientForm";
//import SearchClientForm from "../forms/SearchClientForm";

class ClientPage extends React.Component{

    state = {
        formVisible: true
    };

    submit = data => this.props.addClient(data);
    searchClient = query => this.props.clientSearch(query);

    onClientSelect = () => {

    };

    render(){
        const {formVisible} = this.state;
        const {match} = this.props;
        return(
           <div>
               <h3>Search Clients</h3>
               <Route path={`${match.url}/new`} render={(props) => <ClientForm {...props} visible={formVisible} submit={this.submit}/>} />
           </div>
        );
    }

}

const mapDispatchToProps = (dispatch) => ({
    addClient: (data) => dispatch(addClientRequest(data)),
    clientSearch: (query) => dispatch(clientSearchRequest(query))
});

const mapStateToProps = (state) => ({
    clients: state.clients.data
});

ClientPage.propTypes = {
    addClient: PropTypes.func.isRequired,
    clientSearch: PropTypes.func.isRequired
};

export default connect(mapStateToProps,mapDispatchToProps)(ClientPage);