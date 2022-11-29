import React, { useState, useRef, useEffect } from 'react';

import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import './css/SpeedDial.css'

import { fetchDataTetat, fetchDataTcodtyp } from '../../../api/statPenale/StatGeneral';
import { OtherSplitButton } from './other/OtherSplitButton';
import { OtherSplitButtonRule } from './other/OtherSplitButtonRule';


export const BlocArragePenale = ({ keycloaks }) => {

    const [data, setData] = useState([]);
    const [datatcodtyp, setDatatcodtyp] = useState([]);
    const [showStat, setShowStat] = useState(false);
    const [showStattcodtyp, setShowStattcodtyp] = useState(false);
    const [total, setTotal] = useState(0);
    useEffect(() => {
        setData([]);
        setDatatcodtyp([]);

        fetchDataTcodtyp(keycloaks).then((response) => {
            setShowStattcodtyp(false);
            console.log(response.data);
            setDatatcodtyp(response.data);
            setShowStattcodtyp(true);
        }).catch((e) => {
            setShowStattcodtyp(false);
        });

        fetchDataTetat(keycloaks).then((response) => {
            setShowStat(false);
            setData(response.data);
            setTotal(0);
            for (var i = 0; i < response.data.length; i++) {
                setTotal((t) => t + response.data[i].count);
            }

            setShowStat(true);
        }).catch((e) => {
            setShowStat(false);
        });



    }, []);


    const renderElementPercent = (count) => {
        var d = count * 100 / total;
        var s = Number(d / 100).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 });
        return s;
    }

    const toast = useRef();


    const renderElement = (tetat) => {
        if (tetat == 'J')
            return "المحكومين";
        else if (tetat == 'A')
            return "الموقوفين";
        else if (tetat == 'E')
            return "بحالة فرار";
        else if (tetat == 'م')
            return "المبتدؤون";
        else if (tetat == 'ع')
            return "العائدون";
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
                            'المجموع' : null}
                    </span>
                    <div className="flex justify-content-between">
                        <div className="overview-detail flex justify-content-between">
                            <div className="overview-badge flex justify-content-center align-items-center">
                                <i className="pi pi-arrow-up"></i>
                                <span>{showStat ? renderElementPercent(total) : null}</span>
                            </div>
                            <div className="overview-text">
                                {showStat ? total : null}
                            </div>
                        </div>
                    </div>
                    <img src="assets/layout/images/dashboard/quantity.svg" alt="quantity" />
                </div>
            </div>







            <div className="col-12 md:col-4">
                <div className="card widget-overview-box widget-overview-box-1">
                    <span className="overview-title">
                        {showStattcodtyp ?
                            renderElement(datatcodtyp[0].tetat) : null}

                    </span>
                    <div className="flex justify-content-between">
                        <div className="overview-detail flex justify-content-between">
                            <div className="overview-badge flex justify-content-center align-items-center">
                                <i className="pi pi-arrow-down"></i>
                                <span>{showStattcodtyp ? renderElementPercent(datatcodtyp[0].count) : null}</span>
                            </div>
                            <div className="overview-text">
                                {showStattcodtyp ? datatcodtyp[0].count : null}
                            </div>
                        </div>
                    </div>
                    <img src="assets/layout/images/dashboard/rate.svg" alt="rate" />
                </div>
            </div>
            <div className="col-12 md:col-4">
                <div className="card widget-overview-box widget-overview-box-2">
                    <span className="overview-title">
                        {showStattcodtyp ?
                            renderElement(datatcodtyp[1].tetat) : null}
                    </span>
                    <div className="flex justify-content-between">
                        <div className="overview-detail flex justify-content-between">
                            <div className="overview-badge flex justify-content-center align-items-center">
                                <i className="pi pi-arrow-up"></i>
                                <span>{showStattcodtyp ? renderElementPercent(datatcodtyp[1].count) : null}</span>
                            </div>
                            <div className="overview-text">
                                {showStattcodtyp ? datatcodtyp[1].count : null}
                            </div>
                        </div>
                    </div>
                    <img src="assets/layout/images/dashboard/value.svg" alt="value" />
                </div>
            </div>
            <div className="col-12 md:col-4">
                

                   
                        <OtherSplitButtonRule keycloaks={keycloaks} />
                        
                   
            </div>
        </>

    )


}
