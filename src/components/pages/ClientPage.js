import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {Route} from "react-router-dom";
import {addClientRequest, addClientTypeRequest, clientSearchRequest} from "../../actions/client";
/*import ClientForm from "../forms/ClientForm";*/
import ClientList from "./ClientList";
import {allClientsSelector} from "../../reducers/clients";
import moment from "moment";
import ClientSteps from "./ClientSteps";
import ClientTypeForm from "../forms/ClientTypeForm";
import {allClientTypesSelector} from "../../reducers/clienttypes";
import ClientTypeList from "./ClientTypeList";


const data = [];

for ( let i=0; i<3; i++){
    data.push({
        key: i,
        clientTypeId: 1,
        clientId: i,
        firstName: ` first name${i}`,
        lastName: ` last name${i}`,
        otherName: ` other name${i}`,
        pin: ` ABCD${i}`,
        joinDate: moment.now
    });
}

class ClientPage extends React.Component{

    state = {
        formVisible: true
    };

    submitClient = data => this.props.addClient(data);
    submitClientType = data => this.props.addClientType(data);
    searchClient = query => this.props.clientSearch(query);

    onClientSelect = () => {

    };

    editClientType = data => {
        console.log(data);
    };

    onDelete = (data) => {
        console.log(data);
    };

    render(){
        const {formVisible} = this.state;
        const {match,clients,clientTypes} = this.props;
        return(
           <div>
               {/*<h3>Search Clients</h3>*/}
               <br/>
               <Route path={`${match.url}/add`} render={(props) => <ClientSteps {...props} visible={formVisible} submit={this.submitClient}/>} />
               {/*<Route path={`${match.url}/new`} render={(props) => <ClientForm {...props} visible={formVisible} submit={this.submit}/>} />*/}
               <Route path={`${match.url}/list`} render={(props) => <ClientList {...props} onDelete={this.onDelete} clients={data}/> } />
               <Route path={`${match.url}/type/new`} render={(props) => <ClientTypeForm {...props} visible={formVisible} submit={this.submitClientType}/> } />
               <Route path={`${match.url}/type/list`} render={(props) =>
                   <ClientTypeList {...props} onEdit={this.editClientType} onDelete={this.onDelete} list={clientTypes}/> }
               />
           </div>
        );
    }

}

const mapDispatchToProps = (dispatch) => ({
    addClient: (data) => dispatch(addClientRequest(data)),
    addClientType: (data) => dispatch(addClientTypeRequest(data)),
    clientSearch: (query) => dispatch(clientSearchRequest(query))
});

const mapStateToProps = (state) => ({
    clients: allClientsSelector(state),
    clientTypes: allClientTypesSelector(state)
});

ClientPage.propTypes = {
    addClient: PropTypes.func.isRequired,
    addClientType: PropTypes.func.isRequired,
    clientSearch: PropTypes.func.isRequired
};

export default connect(mapStateToProps,mapDispatchToProps)(ClientPage);