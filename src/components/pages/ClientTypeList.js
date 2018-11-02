import React from "react";
import PropTypes from "prop-types";
import {Button, Popconfirm, Table} from "antd";

const ClientTypeList = ({onAdd,onEdit,onDelete,list}) => {
    const columns = [
        { title: 'Client Type Id', dataIndex: 'clientTypeId'},
        { title: 'Description', dataIndex: 'description'},
        { title: 'Modifier', render: (text,record) => {
                return(
                        <Button onClick={()=>onEdit(record)}>Modifier</Button>
                );
            }
        },
        { title: 'Effacer', render: (text,record) => {
                return(
                    <Popconfirm title="Voulez-vous supprimer cet enregistrement?" onConfirm={()=> onDelete(record.id)}>
                        <Button>Supprimer</Button>
                    </Popconfirm>
                );
            }
        }
    ];

    return (
        <Table dataSource={list} columns={columns} bordered/>
    );
};

ClientTypeList.propTypes = {
    onAdd: PropTypes.func,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    list: PropTypes.array.isRequired
};

export default ClientTypeList;