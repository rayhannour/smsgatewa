import React, { useState, useRef, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import { Dropdown } from 'primereact/dropdown';
import { fetchDataPrison } from '../../../api/statPenale/StatGeneral';



export const VisitorPenale = React.memo(({keycloaks}) => {
    const [data,setData]=useState([]);
    const [showStat, setShowStat] = useState(false);

    const [prison,setPrison]=useState([]);
    const [val,setVal]=useState([]);
    const [maxval,setMaxval]=useState([]);
    const visitor = useRef(null);

    const [visitorChart,setVisitorChart]=useState(null);

    const [total, setTotal] = useState(0);
    const [totalMax, setTotalMax] = useState(0);
    useEffect( () => {
        fetchDataPrison(keycloaks).then((response) => {
            setShowStat(false);
            setData(response.data);   
            setPrison([]); 
            setVal([]);  
            setMaxval([]); 
            setTotal(0);  
            setTotalMax(0);  
            for (var i = 0; i < response.data.length; i++) {
                prison.push(response.data[i].tetat);
                val.push(response.data[i].count);
                maxval.push(response.data[i].maxdetenu);  
                setTotal((t) => t + response.data[i].count);
                setTotalMax((t) => t + response.data[i].maxdetenu);
                 
            }
            setPrison(prison);
            setVal(val);
            setMaxval(maxval);
            setVisitorChart( {
                labels: Object.values(prison),
                datasets: [
                    {
                        label: 'Plan',
                        data: Object.values(val),
                        borderColor: [
                            '#FC6161',
                        ],
                        pointBorderColor: 'transparent',
                        pointBackgroundColor: 'transparent',
                        type: 'line',
                        fill: false,
                        barPercentage: 0.5,
                        stepped: true
                    },
                    {
                        label: 'Growth actual',
                        data: Object.values(maxval),
                        backgroundColor: getComputedStyle(document.body).getPropertyValue('--primary-color'),
                        fill: true,
                        barPercentage: 0.5
                    }
                ]
            });
            setShowStat(true);

            
        }).catch((e) => {
            setShowStat(false);
        })

    }, []);




    
    
    const visitorChartOptions = {
        plugins: {
            legend: {
                position: 'top',
                align: 'end'
            }
        },
        responsive: true,
        hover: {
            mode: 'index'
        },
        scales: {
            y: {
               
                grid: {
                    display: false
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        }
    };
    return (
              
                <div className="col-12 md:col-8">
                    <div className="card widget-visitor-graph">
                        <div className="card-header">
                            <span>La distribution des detenues dans les prisons</span>
                            
                        </div>

                        <div className="graph-content grid">
                            <div className="col-12 md:col-6">
                                <h2>{total}</h2>
                                <h6>TOTAL DETENU</h6>
                                <p>Measure how fast you’re growing mothly recurring revenue. <button className="p-link">Learn more</button></p>
                            </div>
                            <div className="col-12 md:col-6">
                                <h2>{totalMax}</h2>
                                <h6>Max.Detenu/Resident</h6>
                                <p>The revenue generated per account on a monthly or yearly basis. <button className="p-link">Learn more</button></p>
                            </div>
                        </div>

                        <div className="graph">
                            <h6>Revenue</h6>
                            {showStat ?
                        <Chart ref={visitor} type="bar" data={visitorChart} options={visitorChartOptions} id="visitor-chart"></Chart> : <span>loading chart</span>}
                            
                        </div>
                    </div>
                </div>

   
    )


});
