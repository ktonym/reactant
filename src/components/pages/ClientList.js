import React from "react";
import PropTypes from "prop-types";
import {Button,Popconfirm,Table} from "antd";

const ClientList = ({onSelect,clients,onDelete}) => {
    const columns =[
        { title: 'Client Type', dataIndex: 'clientTypeId'},
        { title: 'Client Id', dataIndex: 'clientId'},
        { title: 'First Name', dataIndex: 'firstName'},
        { title: 'Last Name', dataIndex: 'lastName'},
        { title: 'Other Name', dataIndex: 'otherName'},
        { title: 'PIN', dataIndex: 'pin'},
        { title: 'Join Date', dataIndex: 'joinDate'},
        { title: 'Actions', render: (text,record) => {
                return(
                    <Popconfirm title="Voulez-vous supprimer cet enregistrement?" onConfirm={()=> onDelete(record.id)}>
                        <Button>Supprimer</Button>
                    </Popconfirm>
                );
            }
        }
    ];
    return(
        <Table dataSource={clients} columns={columns}/>
    );
};

ClientList.propTypes = {
    onDelete: PropTypes.func.isRequired,
    clients: PropTypes.array.isRequired,
};

export default ClientList;