import React, { useState, useRef, useEffect } from 'react';
import { SpeedDial } from 'primereact/speeddial';
import { Tooltip } from 'primereact/tooltip';
import { Toast } from 'primereact/toast';
import './css/SpeedDial.css'

import { fetchDataTetat } from '../../../api/statPenale/StatGeneral';


export const BlocArragePenale = ({keycloaks}) => {

    const [data, setData] = useState([]);
    const [showStat, setShowStat] = useState(false);
    const [total, setTotal] = useState(0);
    useEffect(() => {
        fetchDataTetat(keycloaks).then((response) => {
            setShowStat(false);
            setData(response.data);
            setTotal(0);
            for (var i = 0; i < response.data.length; i++) {
                setTotal((t) => t + response.data[i].count);
            }
            console.log("total" + total);
            setShowStat(true);
        }).catch((e) => {
            setShowStat(false);
        })

    }, []);


    const renderElementPercent = (count) => {
        var d = count * 100 / total;
        var s = Number(d / 100).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 });
        return s;
    }

    const toast = useRef();
    const items = [
        {
            label: 'Add',
            icon: 'pi pi-pencil',
            command: () => {
                toast.current.show({ severity: 'info', summary: 'Add', detail: 'Data Added' });
            }
        },
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-trash',
            command: () => {
                toast.current.show({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'Upload',
            icon: 'pi pi-upload',
            command: () => {
                window.location.hash = "/fileupload"
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://facebook.github.io/react/'
            }
        }
    ];

    const renderElement = (tetat) => {
        if (tetat == 'J')
            return "JUGER";
        else if (tetat == 'A')
            return "ARRETER";
        else if (tetat == 'E')
            return "EVADER";
        else return null;
    }


    return (

        <>
        <Toast ref={toast} />
        
        <div className="col-12 md:col-4">
            <div className="card widget-overview-box widget-overview-box-1">
                <span className="overview-title">
                    {showStat ?
                        renderElement(data[0].tetat) : null}

                </span>
                <div className="flex justify-content-between">
                    <div className="overview-detail flex justify-content-between">
                        <div className="overview-badge flex justify-content-center align-items-center">
                            <i className="pi pi-arrow-down"></i>
                            <span>{showStat ? renderElementPercent(data[0].count) : null}</span>
                        </div>
                        <div className="overview-text">
                            {showStat ? data[0].count : null}
                        </div>
                    </div>
                </div>
                <img src="assets/layout/images/dashboard/rate.svg" alt="rate" />
            </div>
        </div>
        <div className="col-12 md:col-4">
            <div className="card widget-overview-box widget-overview-box-2">
                <span className="overview-title">
                    {showStat ?
                        renderElement(data[1].tetat) : null}
                </span>
                <div className="flex justify-content-between">
                    <div className="overview-detail flex justify-content-between">
                        <div className="overview-badge flex justify-content-center align-items-center">
                            <i className="pi pi-arrow-up"></i>
                            <span>{showStat ? renderElementPercent(data[1].count) : null}</span>
                        </div>
                        <div className="overview-text">
                            {showStat ? data[1].count : null}
                        </div>
                    </div>
                </div>
                <img src="assets/layout/images/dashboard/value.svg" alt="value" />
            </div>
        </div>
        <div className="col-12 md:col-4">
            <div className="card widget-overview-box widget-overview-box-3">
                <span className="overview-title">
                    {showStat ?
                        renderElement(data[2].tetat) : null}
                </span>
                <div className="flex justify-content-between">
                    <div className="overview-detail flex justify-content-between">
                        <div className="overview-badge flex justify-content-center align-items-center">
                            <i className="pi pi-arrow-up"></i>
                            <span>{showStat ? renderElementPercent(data[2].count) : null}</span>
                        </div>
                        <div className="overview-text">
                            {showStat ? data[2].count : null}
                        </div>
                    </div>
                </div>
                <img src="assets/layout/images/dashboard/quantity.svg" alt="quantity" />
            </div>
        </div>





        </>

    )


}
