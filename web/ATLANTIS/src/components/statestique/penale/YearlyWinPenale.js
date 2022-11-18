import React, { useState, useRef, useEffect } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { DataTable } from 'primereact/datatable';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { fetchDataUserpenale } from '../../../api/statPenale/StatGeneral';

export const YearlyWinPenale = React.memo(({ keycloaks }) => {
    const [customersTable, setCustomersTable] = useState(null);
    const [fiveFirst, setFiveFirst] = useState([]);


    const reloadChart = async () => {
        await fetchDataUserpenale(keycloaks).then((response) => {
            setCustomersTable(response.data);
            let fearst = [];
            setFiveFirst([]);
            for (var i = 0; i < 5; i++) {
                //fearst.push(response.data[i]);
            }
            setFiveFirst(fearst);
            console.log(fiveFirst);
        }).catch((e) => {

        });
    }

    useEffect(async () => {
        reloadChart();
    }, []);



    const dt = useRef(null)



    const actionTemplate = () => {
        return (
            <>
                <Button className="p-button-text" icon="pi pi-copy"></Button>
                <Button className="p-button-text" icon="pi pi-pencil"></Button>
                <Button className="p-button-text" icon="pi pi-ellipsis-h"></Button>
            </>
        )
    }



    const formatDate = (value) => {
        return <>
            <span className="p-column-title">Date</span>
            {value.toLocaleDateString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' })}
        </>
    };

    const formatCurrency = (value) => {

        return <>
            <span className="p-column-title">Balance</span>
            {value.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}

        </>
    }
    return (

        <>
            {fiveFirst}
            <div className="col-12 md:col-8">
                <div className="card widget-table" >
                    <div className="card-header">
                        <span>Les Utilisateurs externes</span>

                    </div>
                    <DataTable className="p-datatable-customers" ref={dt} value={customersTable} dataKey="matpers" rowHover rows={10} paginator>
                        <Column field="matpers" header="Agent" sortable style={{ minWidth: '14rem' }}></Column>
                        <Column field="prepers" header="الهيكل" sortable style={{ minWidth: '10rem' }}></Column>
                        <Column field="nompers" header="التسمية" sortable style={{ minWidth: '10rem' }}></Column>
                        <Column field="maxdateconsult" header="ت.آخر استرشاد" sortable ></Column>
                        <Column field="counts" header="عدد العمليات" sortable ></Column>
                        <Column headerStyle={{ width: '8em' }} bodyStyle={{ textAlign: 'center' }} body={actionTemplate}></Column>
                    </DataTable>
                </div>
            </div>

        </>

    )


});