import React, { useState, useRef, useEffect } from 'react';
import { SpeedDial } from 'primereact/speeddial';
import { Tooltip } from 'primereact/tooltip';
import { Toast } from 'primereact/toast';
import './css/SpeedDial.css'


export const BlocArrage = () => {

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

    return (

        <>
        <Toast ref={toast} />

        <div className="p-col-12 p-md-3">
            <div className="card widget-overview-box widget-overview-box-1">
                <span className="overview-title">
                    CONVERSATION RATE
            </span>
                <div className="p-d-flex p-jc-between">
                    <div className="overview-detail p-d-flex p-jc-between">
                        <div className="overview-badge p-d-flex p-jc-center p-ai-center">
                            <i className="pi pi-arrow-down"></i>
                            <span>0.6%</span>
                        </div>
                        <div className="overview-text">
                            0.82%
                    </div>
                    </div>
                </div>
                <img src="assets/layout/images/dashboard/rate.svg" alt="rate" />
            </div>
        </div>
        <div className="p-col-12 p-md-3">
            <div className="card widget-overview-box widget-overview-box-2">
                <span className="overview-title">
                    AVG. ORDER VALUE
            </span>
                <div className="p-d-flex p-jc-between">
                    <div className="overview-detail p-d-flex p-jc-between">
                        <div className="overview-badge p-d-flex p-jc-center p-ai-center">
                            <i className="pi pi-arrow-up"></i>
                            <span>4,2%</span>
                        </div>
                        <div className="overview-text">
                            $306.2
                    </div>
                    </div>
                </div>
                <img src="assets/layout/images/dashboard/value.svg" alt="value" />
            </div>
        </div>
        <div className="p-col-12 p-md-3">
            <div className="card widget-overview-box widget-overview-box-3">
                <span className="overview-title">
                    ORDER QUANTITY
            </span>
                <div className="p-d-flex p-jc-between">
                    <div className="overview-detail p-d-flex p-jc-between">
                        <div className="overview-badge p-d-flex p-jc-center p-ai-center">
                            <i className="pi pi-minus"></i>
                            <span>2,1%</span>
                        </div>
                        <div className="overview-text">
                            1,620
                    </div>
                    </div>
                </div>
                <img src="assets/layout/images/dashboard/quantity.svg" alt="quantity" />
            </div>
        </div>

        <div className="p-col-12 p-md-3">
            <div className="card widget-overview-box widget-overview-box-3">
                <div className="speeddial-tooltip-demo" >
                    <Tooltip target=".speeddial-tooltip-demo .speeddial-left .p-speeddial-action" />
                    <SpeedDial model={items} direction="left" className="speeddial-left" />
                </div>
            </div>
        </div>



        </>

    )


}
