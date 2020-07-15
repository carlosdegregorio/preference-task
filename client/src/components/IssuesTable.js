import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import cellEditFactory, { Type } from 'react-bootstrap-table2-editor';
import { Badge } from 'react-bootstrap';
import './IssuesTable.css';

const IssuesTable = (props) => {
    const { issues } = props;

    const checkColor = (item) => {
        if (item === "Todo" || item === "High") return "danger";
        else if (item === "Doing" || item === "Medium") return "warning";
        else return "success";
    }

    const cellFormatter = (cell, row) => {

        return (<Badge pill variant={checkColor(cell)}>
            {cell}
        </Badge>);

    };
    const options = {
        paginationSize: 4,
        pageStartIndex: 0,
        alwaysShowAllBtns: true, // Always show next and previous button
        // withFirstAndLast: false, // Hide the going to First and Last page button
        // hideSizePerPage: true, // Hide the sizePerPage dropdown always
        hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
        firstPageText: 'First',
        prePageText: 'Back',
        nextPageText: 'Next',
        lastPageText: 'Last',
        nextPageTitle: 'First page',
        prePageTitle: 'Pre page',
        firstPageTitle: 'Next page',
        lastPageTitle: 'Last page',
        showTotal: true,
        disablePageTitle: true,
        sizePerPageList: [{
            text: '5', value: 5
        }, {
            text: '10', value: 10
        }, {
            text: 'All', value: issues.length
        }] // A numeric array is also available. the purpose of above example is custom the text
    };
    const columns = [{
        dataField: 'status',
        text: 'Status',
        editor: {
            type: Type.SELECT,
            options: [{
                value: 'Todo',
                label: 'Todo'
            }, {
                value: 'Doing',
                label: 'Doing'
            }, {
                value: 'Done',
                label: 'Done'
            }]
        },
        formatter: cellFormatter
    }, {
        dataField: 'severity',
        text: 'Severity',
        editor: {
            type: Type.SELECT,
            options: [{
                value: 'High',
                label: 'High'
            }, {
                value: 'Medium',
                label: 'Medium'
            }, {
                value: 'Low',
                label: 'Low'
            }]
        },
        formatter: cellFormatter,
    }, {
        dataField: 'title',
        text: 'Title',
        sort: true
    }, {
        dataField: 'description',
        text: 'Description'
    }];
    return (
        <section>
            <h3><strong>Issues list</strong></h3>
            <BootstrapTable
                bootstrap4
                keyField='id'
                bordered={false}
                data={issues}
                columns={columns}
                pagination={paginationFactory(options)}
                cellEdit={cellEditFactory({
                    mode: 'click',
                    blurToSave: true,
                })}
            />
        </section>
    );
}

export default IssuesTable;
