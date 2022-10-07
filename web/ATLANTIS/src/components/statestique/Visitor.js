import React, { useState, useRef, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import { Dropdown } from 'primereact/dropdown';



export const Visitor = () => {

    const [objs,setObjs]=useState([]);

    useEffect(async () => {
    let obj=[];
    obj.push("500");
    obj.push("1");
    obj.push("1");
    obj.push("1");
    obj.push("1");
    obj.push("1");
    obj.push("1");
    obj.push("1");
    obj.push("1");
    obj.push("1");
    obj.push("1");
    obj.push("1");
    console.log(obj);

    setObjs(obj);

    }, []);


    const visitorChart = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Plan',
                data: objs,
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
                data: [600, 671, 660, 665, 700, 610, 810, 790, 710, 860, 810, 780],
                backgroundColor: getComputedStyle(document.body).getPropertyValue('--primary-color'),
                fill: true,
                barPercentage: 0.5
            }
        ]
    };
    
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
                min: 500,
                max: 900,
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
    
    console.log("Visitor component");
    const visitorYear = [
        { name: '2020', code: '0' },
        { name: '2019', code: '1' }
    ];
    


    const [selectedVisitorYear, setSelectedVisitorYear] = useState(visitorYear[0]);

    const visitor = useRef(null);
    

    let growth = '$620,076';
    let avgCustomer = '$1,120';

    
    const changeVisitorChart = (event) => {
        setSelectedVisitorYear(event.value)
        const dataSet1 = [
            [630, 630, 695, 695, 695, 760, 760, 760, 840, 840, 840, 840],
            [600, 671, 660, 665, 700, 610, 810, 790, 710, 860, 810, 780]
        ];
        const dataSet2 = [
            [580, 580, 620, 620, 620, 680, 680, 680, 730, 730, 730, 730],
            [550, 592, 600, 605, 630, 649, 660, 690, 710, 720, 730, 780],
        ];

        if (event.value.code === '1') {
            growth = '$581,259';
            avgCustomer = '$973';
            visitorChart.datasets[0].data = dataSet2[parseInt('0')];
            visitorChart.datasets[1].data = dataSet2[parseInt('1')];
        } else {
            growth = '$620,076';
            avgCustomer = '$1,120';
            visitorChart.datasets[0].data = dataSet1[parseInt('0')];
            visitorChart.datasets[1].data = dataSet1[parseInt('1')];
        }

        visitor.current.refresh();
    };

    return (
              
                <div className="p-col-12 p-md-8">
                    <div className="card widget-visitor-graph">
                        <div className="card-header">
                            <span>Unique visitor graph</span>
                            <Dropdown options={visitorYear} value={selectedVisitorYear} optionLabel="name" onChange={changeVisitorChart}></Dropdown>
                        </div>

                        <div className="graph-content p-grid">
                            <div className="p-col-12 p-md-6">
                                <h2>{growth}</h2>
                                <h6>MRR GROWTH</h6>
                                <p>Measure how fast you’re growing mothly recurring revenue. <button className="p-link">Learn more</button></p>
                            </div>
                            <div className="p-col-12 p-md-6">
                                <h2>{avgCustomer}</h2>
                                <h6>AVG. MRR/CUSTOMER</h6>
                                <p>The revenue generated per account on a monthly or yearly basis. <button className="p-link">Learn more</button></p>
                            </div>
                        </div>

                        <div className="graph">
                            <h6>Revenue</h6>
                            <Chart ref={visitor} type="bar" data={visitorChart} options={visitorChartOptions} id="visitor-chart"></Chart>
                        </div>
                    </div>
                </div>

   
    )


}
