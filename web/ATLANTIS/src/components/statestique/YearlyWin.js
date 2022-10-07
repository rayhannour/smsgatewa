import React, { useState, useRef, useEffect } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { DataTable } from 'primereact/datatable';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import CustomerService from '../../service/CustomerService';
console.log("YearlyWin component");

const orderYear = [
    { name: '2021', code: '0' },
    { name: '2020', code: '1' }
];

export const YearlyWin = () => {




   

    const [selectedOrderYear, setSelectedOrderYear] = useState(orderYear[0]);
    const [customersTable, setCustomersTable] = useState(null);
    const [customersTable1, setCustomersTable1] = useState(null);
    const [customersTable2, setCustomersTable2] = useState(null);

    const dt = useRef(null)

    const recentSales = (event) => {
        setSelectedOrderYear(event.value);

        console.log(event.value);
        if (event.value.code === '0') {
            setCustomersTable(customersTable1);
        } else {
            setCustomersTable(customersTable2);
        }
    };

    useEffect(() => {
        const customerService = new CustomerService();

        customerService.getCustomersLarge().then(customers => {
            const _customersTable = customers.map(customer => {
                let date = new Date(customer.date);
                return { ...customer, date }
            });
            setCustomersTable(_customersTable)
        });
        customerService.getCustomersLarge().then(customers => {
            const _customersTable1 = customers.map(customer => {
                let date = new Date(customer.date);
                return { ...customer, date }
            });
            setCustomersTable1(_customersTable1)
        });

        customerService.getCustomersMixed().then(customers => {
            const _customersTable2 = customers.map(customer => {
                let date = new Date(customer.date);
                return { ...customer, date }
            });
            setCustomersTable2(_customersTable2)

        });

    }, [])

    const representativeTemplate = (data) => {
        return (
            <>
            <span className="p-column-title">Agent</span>
            <img alt={data.representative.name} src={'assets/demo/images/avatar/' + data.representative.image} width={24} className="p-mr-2" style={{ verticalAlign: 'middle' }} />
            <span className="image-text">{data.representative.name}</span>
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
    const countryTemplate = (data, props) => {
        return (
            <>
            <span className="p-column-title">{props.header}</span>
            <span className="p-ml-2" style={{ verticalAlign: 'middle' }}>{data.country.name}</span>
            </>
        )
    }

    const actionTemplate = () => {
        return (
            <>
            <Button className="p-button-text" icon="pi pi-copy"></Button>
            <Button className="p-button-text" icon="pi pi-pencil"></Button>
            <Button className="p-button-text" icon="pi pi-ellipsis-h"></Button>
            </>
        )
    }
    return (

        <>
        <div className="col-12 md:col-8">
            <div className="card widget-table">
                <div className="card-header">
                    <span>Yearly win</span>
                    <Dropdown options={orderYear} value={selectedOrderYear} optionLabel="name" onChange={recentSales}></Dropdown>
                </div>
                <DataTable className="p-datatable-customers" ref={dt} value={customersTable} dataKey="id" rowHover rows={10} paginator>
                    <Column field="representative.name" header="Agent" sortable body={representativeTemplate} style={{ minWidth: '14rem' }}></Column>
                    <Column field="country.name" header="Country" sortable body={countryTemplate} style={{ minWidth: '10rem' }}></Column>
                    <Column field="date" header="Date" sortable body={(data) => formatDate(data.date)}></Column>
                    <Column field="balance" header="Balance" sortable body={(data) => formatCurrency(data.balance)}></Column>
                    <Column headerStyle={{ width: '8em' }} bodyStyle={{ textAlign: 'center' }} body={actionTemplate}></Column>
                </DataTable>
            </div>
        </div>
  
        </>

    )


}
