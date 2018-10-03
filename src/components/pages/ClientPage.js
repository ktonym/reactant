import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {Route} from "react-router-dom";
import {addClientRequest,clientSearchRequest} from "../../actions/client";
/*import ClientForm from "../forms/ClientForm";*/
import ClientList from "./ClientList";
import {allClientsSelector} from "../../reducers/clients";
import moment from "moment";
import ClientSteps from "./ClientSteps";


const data = [];

for ( let i=0; i<5; i++){
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

    submit = data => this.props.addClient(data);
    searchClient = query => this.props.clientSearch(query);

    onClientSelect = () => {

    };

    onDelete = (data) => {
        console.log(data);
    };

    render(){
        const {formVisible} = this.state;
        const {match,clients} = this.props;
        return(
           <div>
               {/*<h3>Search Clients</h3>*/}
               <br/>
               <Route path={`${match.url}/add`} render={(props) => <ClientSteps {...props} visible={formVisible} submit={this.submit}/>} />
               {/*<Route path={`${match.url}/new`} render={(props) => <ClientForm {...props} visible={formVisible} submit={this.submit}/>} />*/}
               <Route path={`${match.url}/list`} render={(props) => <ClientList onDelete={this.onDelete} clients={data}/> } />
           </div>
        );
    }

}

const mapDispatchToProps = (dispatch) => ({
    addClient: (data) => dispatch(addClientRequest(data)),
    clientSearch: (query) => dispatch(clientSearchRequest(query))
});

const mapStateToProps = (state) => ({
    clients: allClientsSelector(state)
});

ClientPage.propTypes = {
    addClient: PropTypes.func.isRequired,
    clientSearch: PropTypes.func.isRequired
};

export default connect(mapStateToProps,mapDispatchToProps)(ClientPage);