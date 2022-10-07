import React, { useEffect, useState } from 'react';
export const StatusJob = ({jobname,statusjob,totalsms,nbrdelivered,nbrnomdelivered}) => {


    useEffect(async () => {


    }, []);



    return (

        <div className="layout-dashboard">
            <div className="grid">
            <div className="col-12 md:col-4">
                    <div className="card widget-overview-box widget-overview-box-3">
                        <span className="overview-title">{jobname}</span>
                        <div className="flex justify-content-between">
                            <div className="overview-detail flex justify-content-between">
                                <div className="overview-badge flex justify-content-center align-items-center">
                                    <i className="pi pi-minus"></i>
                                    <span>{totalsms}</span>
                                </div>
                                <div className="overview-text">{statusjob}</div>
                            </div>
                        </div>
                        <img src="assets/layout/images/dashboard/quantity.svg" alt="quantity" />
                    </div>
                </div>
                
                <div className="col-12 md:col-4">
                    <div className="card widget-overview-box widget-overview-box-2">
                        <span className="overview-title">DELIVERED</span>
                        <div className="flex justify-content-between">
                            <div className="overview-detail flex justify-content-between">
                                <div className="overview-badge flex justify-content-center align-items-center">
                                    <i className="pi pi-arrow-up"></i>
                                    <span></span>
                                </div>
                                <div className="overview-text">{nbrdelivered}</div>
                            </div>
                        </div>
                        <img src="assets/layout/images/dashboard/value.svg" alt="value" />
                    </div>
                </div>
                <div className="col-12 md:col-4">
                    <div className="card widget-overview-box widget-overview-box-1">
                        <span className="overview-title">UNDELIVERED</span>
                        <div className="flex justify-content-between">
                            <div className="overview-detail flex justify-content-between">
                                <div className="overview-badge flex justify-content-center align-items-center">
                                    <i className="pi pi-arrow-down"></i>
                                    <span></span>
                                </div>
                                <div className="overview-text">{nbrnomdelivered}</div>
                            </div>
                        </div>
                        <img src="assets/layout/images/dashboard/rate.svg" alt="rate" />
                    </div>
                </div>                

            </div>
        </div>

    );

}