import React, { useEffect, useState } from 'react';
import { fetchDataTerrorismes } from '../../../../api/statPenale/StatGeneral';

import { DataTable } from 'primereact/datatable';

import { Column } from 'primereact/column';
import { Chart } from 'primereact/chart';



export const Terrorisme = React.memo(({ keycloaks }) => {
    const [basicData, setBasicData] = useState(null);
    let jugerMale=0,jugerFemale=0,arreterMale=0,arreterFemale=0;
    let jugerTotal=0,arreterTotal=0;
    const [statTerrorimeChartDTOS, setStatTerrorimeChartDTOS] = useState([]);
    const [statTerrorimePrisonDTOS, setStatTerrorimePrisonDTOS] = useState([]);

    const [tJuger, setTJuger] = useState(0);
    const [tArreter, setTArreter] = useState(0);
    const reloadChart = async () => {
        await fetchDataTerrorismes(keycloaks).then((response) => {

            let chartStats = [];
            let chartTableaux = [];
            chartStats = response.data.statTerrorimeChartDTOS;
            chartTableaux = response.data.statTerrorimePrisonDTOS;
            

            jugerMale=0;
            jugerFemale=0;
            arreterMale=0;
            arreterFemale=0;
            for (var i = 0; i < response.data.statTerrorimeChartDTOS.length; i++) {

               
                if(response.data.statTerrorimeChartDTOS[i].tetat==="J" && response.data.statTerrorimeChartDTOS[i].tcodsex==="0"){
                   
                    jugerFemale=response.data.statTerrorimeChartDTOS[i].counts;
                }else if(response.data.statTerrorimeChartDTOS[i].tetat==="J" && response.data.statTerrorimeChartDTOS[i].tcodsex==="1"){
                    jugerMale=response.data.statTerrorimeChartDTOS[i].counts;
                }else if(response.data.statTerrorimeChartDTOS[i].tetat==="A" && response.data.statTerrorimeChartDTOS[i].tcodsex==="0"){
                    arreterFemale=response.data.statTerrorimeChartDTOS[i].counts;
                }else if(response.data.statTerrorimeChartDTOS[i].tetat==="A" && response.data.statTerrorimeChartDTOS[i].tcodsex==="1"){
                    arreterMale=response.data.statTerrorimeChartDTOS[i].counts;
                }
               
                
            } 
            jugerTotal=jugerFemale+jugerMale;
            arreterTotal=arreterFemale+arreterMale;

            setTJuger(jugerTotal);
            setTArreter(arreterTotal);
            setBasicData({
                labels: ['المحكومين', 'الموقوفين'],
                datasets: [
                    {
                        label: 'ذكور',
                        backgroundColor: '#42A5F5',
                        data: [jugerMale,arreterMale ]
                    },
                    {
                        label: 'إناث',
                        backgroundColor: '#FFA726',
                        data: [jugerFemale,arreterFemale ]
                    }
                ]
            });
            

            setStatTerrorimeChartDTOS(chartStats);
            setStatTerrorimePrisonDTOS(chartTableaux);

        }).catch((e) => {

        });
    }

    useEffect(async () => {
        reloadChart();
    }, []);



    

    let basicOptions = {
        maintainAspectRatio: false,
        aspectRatio: .8,
        plugins: {
            legend: {
                labels: {
                    color: '#FFF'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#FFF'
                },
                grid: {
                    color: '#FFF'
                }
            },
            y: {
                ticks: {
                    color: '#FFF'
                },
                grid: {
                    color: '#ebedef'
                }
            }
        }
    };
    return (
        <>

            <div className="layout-dashboard">
                <div className="grid">

                    <div className="col-12 md:col-6">
                        <div className="card widget-overview-box widget-overview-box-1">
                            <span className="overview-title">
                                {tArreter}
                            </span>
                            <div className="flex justify-content-between">
                                <div className="overview-detail flex justify-content-between">
                                    <div className="overview-badge flex justify-content-center align-items-center">
                                        <i className="pi pi-arrow-up"></i>
                                        <span>Arreter</span>
                                    </div>
                                    <div className="overview-text">
                                        {tArreter}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-12 md:col-6">
                        <div className="card widget-overview-box widget-overview-box-2">
                            <span className="overview-title">
                                {tJuger}
                            </span>
                            <div className="flex justify-content-between">
                                <div className="overview-detail flex justify-content-between">
                                    <div className="overview-badge flex justify-content-center align-items-center">
                                        <i className="pi pi-arrow-up"></i>
                                        <span>Juger</span>
                                    </div>
                                    <div className="overview-text">
                                    {tJuger}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="grid">
                <div className="col-12 md:col-12">

                    <div className="card p-fluid">
                        
                        <div className="formgrid grid">
                            <div className="field col">
                                <div className="card widget-table">
                                <Chart type="bar" data={basicData} options={basicOptions} />
                                </div>

                            </div>
                            <div className="field col">
                                <div className="card widget-table" dir='rtl'>
                                    <DataTable className="p-datatable-customers" value={statTerrorimePrisonDTOS} dataKey="prison" rowHover rows={10} paginator>
                                        <Column field="prison" header="Prison" sortable style={{ textAlign: 'right', minWidth: '20rem' }}></Column>
                                        <Column field="countArreter" header="Arreter" style={{ textAlign: 'right', minWidth: '10rem' }}></Column>
                                        <Column field="countJuger" header="Juger" style={{ textAlign: 'right', minWidth: '10rem' }}></Column>
                                    </DataTable>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );

});