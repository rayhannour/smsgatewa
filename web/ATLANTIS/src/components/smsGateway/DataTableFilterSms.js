import React, { useState, useEffect } from 'react';

import { FilterMatchMode } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import CustomerService from '../../service/CustomerService';
import './DataTableDemo.css';

export const DataTableFilterSms = ({ dataJsons, colomnJsons }) => {

    let [colomnJsond, setColomnJsond] = useState([]);
    const [filters2, setFilters2] = useState({});
    const [loading2, setLoading2] = useState(true);
    const customerService = new CustomerService();
    useEffect(() => {
        setColomnJsond(colomnJsons);
        console.log("zizi", colomnJsons);        
        setFilters2({

            'MOBILE': { value: null, matchMode: FilterMatchMode.STARTS_WITH }

        });

    }, []);

    return (
        <div className="datatable-filter-demo">
            <div className="card" dir='ltr'>

                <DataTable value={dataJsons} paginator className="p-datatable-customers" rows={5}
                    dataKey="id" filters={filters2} filterDisplay="row" responsiveLayout="scroll"
                    emptyMessage="No customers found.">
                    {colomnJsond.map((person, index) => (
                        <Column key={index} field={colomnJsons[index]} header={colomnJsons[index]} filter filterPlaceholder="Search by name" style={{ minWidth: '12rem' }} />
                    ))}
                </DataTable>

            </div>
        </div>
    );
}