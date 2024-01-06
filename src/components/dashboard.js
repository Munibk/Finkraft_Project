
/**
 * Dashboard component displays a grid of space mission data and a pie chart.
 * It fetches the data from an API and renders it using AgGridReact.
 * The component also includes a Pichart component to display the data in a chart format.
 */
import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import Pichart from './piechart';
import '../App.css';

const Dashboard = () => {
    const [rowData, setRowData] = useState([]);

    useEffect(() => {
        /**
         * Fetches space mission data from an API and sets the fetched data to the rowData state.
         */
        fetch('https://www.ag-grid.com/example-assets/space-mission-data.json')
            .then((response) => response.json())
            .then((data) => setRowData(data));
    }, []);

    const columnDefs = [
        { headerName: 'Misson', field: 'mission' },
        { headerName: 'Company', field: 'company' },
        { headerName: 'location', field: 'location' },
        { headerName: 'Date', field: 'date' },
        { headerName: 'Time', field: 'time' },
        { headerName: 'Rocket', field: 'rocket' },
        { headerName: 'Price', field: 'price' },
        { headerName: 'Successful', field: 'successful', filter: true },
    ];

    return (
        <div>
            <div className="ag-theme-alpine" style={{ height: '400px', width: '100%' }}>
                <h1>SpaceVue Misson Data</h1>
                <AgGridReact
                    rowData={rowData}
                    columnDefs={columnDefs}
                    pagination={true}
                    paginationPageSize={50}
                />
            </div>

            <Pichart data={rowData} />
        </div>
    );
};

export default Dashboard;