import React, { useState,useEffect } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import { Chart } from 'primereact/chart';
import { fetchDataStatGeneralYearsMounth } from './api/StatGenerale';

export const ChartYearsMounth = ({keycloaks,year}) => {


    const [mounths,setMounths]=useState([]);
    const [counts,setCounts]=useState([]);
    const [chartData, setChartData] = useState();
    const [showStat, setShowStat] = useState(false);
    useEffect(() => {
        fetchDataStatGeneralYearsMounth(keycloaks,year).then((response) => {
            setMounths([]);
            setCounts([]);
            for (var i = 0; i < response.data.length; i++) {
                mounths.push( response.data[i].mounthsname);
                counts.push( response.data[i].counts);
            }
            setMounths(mounths);
            setCounts(counts);
            setShowStat(true);

            setChartData(
                {
                    labels:Object.values(mounths),
                    datasets: [{
                        label:year,
                        backgroundColor: [
                            '#EC407A',
                            '#AB47BC',
                            '#42A5F5',
                            '#7E57C2',
                            '#66BB6A',
                            '#FFCA28',
                            '#26A69A'
                        ],
                        yAxisID: 'y',
                        data: Object.values(counts)
                    }]
                }
            );


        }).catch((e) => {
            setShowStat(false);
        })

    }, []);
    let multiAxisOptions = {
        maintainAspectRatio: false,
        aspectRatio: .8,
        plugins: {
            legend: {
                labels: {
                    color: '#FFF'
                }
            },
            tooltips: {
                mode: 'index',
                intersect: true
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
                type: 'linear',
                display: true,
                position: 'left',
                ticks: {
                    min: 0,
                    max: 100,
                    color: '#FFF'
                },
                grid: {
                    color: '#FFF'
                }
            },
            y1: {
                type: 'linear',
                display: true,
                position: 'right',
                grid: {
                    drawOnChartArea: false,
                    color: '#FFF'
                },
                ticks: {
                    min: 0,
                    max: 100,
                    color: '#FFF'
                }
            }
        }
    };

    return (
        
                       <Chart type="bar" data={chartData} options={multiAxisOptions} />
                    
    );

}