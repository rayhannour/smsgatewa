import React, { useState, useEffect } from 'react';
import { fetchDataStatGeneral } from './api/StatGenerale';
import { Chart } from 'primereact/chart';
import { Timeline } from 'primereact/timeline';
import { any } from 'prop-types';

import { nArabicWords } from '../util/nArabicWords';
import { HeaderYears } from './HeaderYears';
export const BlocArragePoste = ({ keycloaks }) => {

    const [prison, setPrison] = useState([]);
    const [data, setData] = useState([]);
    const [chartData, setChartData] = useState();
    const [showStat, setShowStat] = useState(false);
    const [totaltransaction, setTotaltransaction] = useState(0);
    const [totalmontant, setTotalmontant] = useState(0);

    const [reponce, setResponce] = useState([]);

    const [timelineEvents, setTimelineEvents] = useState([]);
    useEffect(() => {
        fetchDataStatGeneral(keycloaks).then((response) => {
            setPrison([]);
            setData([]);
            setChartData([]);
            setResponce([]);
            setTimelineEvents([]);
            let t_tansaction = 0;
            let t_montant = 0;

            for (var i = 0; i < response.data.length; i++) {
                t_tansaction = t_tansaction + response.data[i].counts;
                t_montant = t_montant + response.data[i].mantants;

                prison.push(response.data[i].alias);
                data.push(response.data[i].mantants);

                timelineEvents.push(markerColor(response.data[i].alias, response.data[i].mantants, response.data[i].counts));
            }
            setTimelineEvents(timelineEvents);
            setResponce(response.data);
            console.log(Object.values(prison));
            setTotaltransaction((t) => t_tansaction);
            setTotalmontant((t) => t_montant);
            setShowStat(true);

            setChartData({
                labels: Object.values(prison),
                datasets: [
                    {
                        data: Object.values(data),
                        backgroundColor: [
                            "#42A5F5",
                            "#66BB6A",
                            "#FFA726",
                            "#545C6B"
                        ],
                        hoverBackgroundColor: [
                            "#64B5F6",
                            "#81C784",
                            "#FFB74D",
                            "#545C7C"
                        ]
                    }
                ]
            });


        }).catch((e) => {
            setShowStat(false);
        })

    }, []);






    const [lightOptions] = useState({
        plugins: {
            legend: {
                labels: {
                    color: '#FFF'
                }
            }
        }
    });


    const markerColor = (prison, montant, transaction) => {
        let datas = any;
        datas = {
            transaction: prison + '  (' + transaction + ')', amount: montant, date: transaction,
            icon: 'pi pi-check', iconColor: '#0F8BFD', amountColor: '#00D0DE'
        };
        return datas;
    };



    console.log("TransactionHistory component");

    const marker = (item) => {
        return (
            <span className="custom-marker" style={{ backgroundColor: item.iconColor }}>
                <i className={item.icon}></i>
            </span>
        )
    }

    const content = (item) => {
        return (
            <>
                <div className="p-d-flex p-ai-center p-jc-between">
                    <p>{item.transaction}</p>
                    <h6 style={{ color: item.amountColor }}> {item.amount}</h6>
                </div>
                <span>{item.date}</span>
            </>
        )
    }



    const [lineStylesData] = useState({
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'First Dataset',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                tension: .4,
                borderColor: '#42A5F5'
            },
            {
                label: 'Second Dataset',
                data: [28, 48, 40, 19, 86, 27, 90],
                fill: false,
                borderDash: [5, 5],
                tension: .4,
                borderColor: '#66BB6A'
            },
            {
                label: 'Third Dataset',
                data: [12, 51, 62, 33, 21, 62, 45],
                fill: true,
                borderColor: '#FFA726',
                tension: .4,
                backgroundColor: 'rgba(255,167,38,0.2)'
            }
        ]
    });

    let basicOptions = {
        maintainAspectRatio: false,
        aspectRatio: .6,
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            },
            y: {
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            }
        }
    };

    return (

        <>

            <div className="col-12 md:col-6">
                <div className="card widget-overview-box widget-overview-box-2">
                    <span className="overview-title">
                        {showStat ?
                            'عدد العمليات' : null}
                    </span>
                    <div className="flex justify-content-between">
                        <div className="overview-detail flex justify-content-between">
                            <div className="overview-badge flex justify-content-center align-items-center">
                                <i className="pi pi-arrow-up"></i>
                                <span>{showStat ? '+' : null}</span>
                            </div>
                            <div className="overview-text">
                                {showStat ? <span style={{ fontSize: '0.65em', fontFamily: "FontAwesome" }}>{totaltransaction + "  " + nArabicWords(totaltransaction)} عملية تحويل</span> : null}
                            </div>
                        </div>
                    </div>
                    <img src="assets/layout/images/dashboard/value.svg" alt="value" />
                </div>
            </div>
            <div className="col-12 md:col-6">
                <div className="card widget-overview-box widget-overview-box-3">
                    <span className="overview-title">
                        {showStat ?
                            'المبلغ الجملي' : null}
                    </span>
                    <div className="flex justify-content-between">
                        <div className="overview-detail flex justify-content-between">
                            <div className="overview-badge flex justify-content-center align-items-center">
                                <i className="pi pi-arrow-up"></i>
                                <span>{showStat ? '+' : null}</span>
                            </div>
                            <div className="overview-text" >
                                {showStat ? <span style={{ fontSize: '0.65em', fontFamily: "FontAwesome" }}>{totalmontant + "  " + nArabicWords(totalmontant)} دينار</span> : null}
                            </div>
                        </div>
                    </div>
                    <img src="assets/layout/images/dashboard/quantity.svg" alt="quantity" />
                </div>
            </div>
            <div className="col-12 md:col-12">
                <HeaderYears keycloaks={keycloaks} year={2022} />
            </div>
            <div className="col-12 md:col-6">
                <Chart type="pie" data={chartData} options={lightOptions} style={{ position: 'relative', width: '40%' }} />
            </div>

            <div className="col-12 md:col-6">
                <div className="card widget-timeline">
                    <div className="timeline-content">
                        <Timeline value={timelineEvents} marker={marker} content={content} className="custimized-timeline" />
                    </div>

                </div>
            </div>





        </>

    )


}
