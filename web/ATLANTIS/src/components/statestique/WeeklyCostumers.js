import React, { useState, useRef, useEffect } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { Chart } from 'primereact/chart';
console.log("BlocArrage component");
const customerYear = [
    { name: '2021', code: '0' },
    { name: '2022', code: '1' }
];

let customerAvg = '875';
let customerMax = '1232';
let customerMin = '284';
const customerChart = {
    labels: ['January', 'March', 'May', 'Agust', 'October', 'December'],
    datasets: [
        {
            data: [10, 25, 48, 35, 54, 70],
            backgroundColor: '#AAABDD',
            hoverBackgroundColor: '#AAABDD',
            fill: true,
            categoryPercentage: 1.0,
            barPercentage: 1.0
        },
        {
            data: [18, 35, 23, 30, 59, 65],
            backgroundColor: '#A0A0D9',
            hoverBackgroundColor: '#A0A0D9',
            fill: true,
            categoryPercentage: 1.0,
            barPercentage: 1.0
        },
        {
            data: [20, 47, 46, 46, 61, 70],
            backgroundColor: '#ACADDE',
            hoverBackgroundColor: '#ACADDE',
            fill: true,
            categoryPercentage: 1.0,
            barPercentage: 1.0
        },
        {
            data: [17, 34, 18, 48, 67, 68],
            backgroundColor: '#ABABDD',
            hoverBackgroundColor: '#ABABDD',
            fill: true,
            categoryPercentage: 1.0,
            barPercentage: 1.0
        },
        {
            data: [9, 37, 47, 50, 60, 62],
            backgroundColor: '#A2A3D9',
            hoverBackgroundColor: '#A2A3D9',
            fill: true,
            categoryPercentage: 1.0,
            barPercentage: 1.0
        },
        {
            data: [8, 48, 40, 52, 72, 75],
            backgroundColor: '#A3A4DA',
            hoverBackgroundColor: '#A3A4DA',
            fill: true,
            categoryPercentage: 1.0,
            barPercentage: 1.0
        },
        {
            data: [10, 18, 50, 47, 63, 80],
            backgroundColor: '#A2A3D9',
            hoverBackgroundColor: '#A2A3D9',
            fill: true,
            categoryPercentage: 1.0,
            barPercentage: 1.0
        },
        {
            data: [20, 36, 39, 58, 59, 85],
            backgroundColor: '#8485CD',
            hoverBackgroundColor: '#8485CD',
            fill: true,
            categoryPercentage: 1.0,
            barPercentage: 1.0
        },
        {
            data: [30, 45, 35, 50, 54, 81],
            backgroundColor: '#7D7ECA',
            hoverBackgroundColor: '#7D7ECA',
            fill: true,
            categoryPercentage: 1.0,
            barPercentage: 1.0
        },
        {
            data: [28, 35, 52, 56, 60, 77],
            backgroundColor: '#8384CD',
            hoverBackgroundColor: '#8384CD',
            fill: true,
            categoryPercentage: 1.0,
            barPercentage: 1.0
        },
        {
            data: [40, 40, 38, 45, 68, 86],
            backgroundColor: '#8F90D2',
            hoverBackgroundColor: '#8F90D2',
            fill: true,
            categoryPercentage: 1.0,
            barPercentage: 1.0
        },
        {
            data: [50, 23, 27, 34, 65, 90],
            backgroundColor: '#8C8DD0',
            hoverBackgroundColor: '#8C8DD0',
            fill: true,
            categoryPercentage: 1.0,
            barPercentage: 1.0
        },
        {
            data: [29, 27, 29, 42, 55, 84],
            backgroundColor: '#9495D4',
            hoverBackgroundColor: '#9495D4',
            fill: true,
            categoryPercentage: 1.0,
            barPercentage: 1.0
        },
        {
            data: [10, 37, 47, 29, 59, 80],
            backgroundColor: '#9696D4',
            hoverBackgroundColor: '#9696D4',
            fill: true,
            categoryPercentage: 1.0,
            barPercentage: 1.0
        },
        {
            data: [10, 54, 42, 38, 63, 83],
            backgroundColor: '#7273C6',
            hoverBackgroundColor: '#7273C6',
            fill: true,
            categoryPercentage: 1.0,
            barPercentage: 1.0
        },
        {
            data: [25, 44, 50, 56, 65, 92],
            backgroundColor: '#5F60BE',
            hoverBackgroundColor: '#5F60BE',
            fill: true,
            categoryPercentage: 1.0,
            barPercentage: 1.0
        },
        {
            data: [30, 43, 48, 45, 73, 78],
            backgroundColor: '#5C5DBD',
            hoverBackgroundColor: '#5C5DBD',
            fill: true,
            categoryPercentage: 1.0,
            barPercentage: 1.0
        },
        {
            data: [29, 47, 54, 60, 77, 86],
            backgroundColor: '#5C5DBD',
            hoverBackgroundColor: '#5C5DBD',
            fill: true,
            categoryPercentage: 1.0,
            barPercentage: 1.0
        }
    ]
};

const customerChartOptions = {
    interaction: {
        mode: 'x'
    },
    plugins: {
        legend: {
            display: false
        }
    },
    scales: {
        y: {
            display: false,
        },
        x: {
            grid: {
                display: false
            }
        }
    }
};
export const WeeklyCostumers = () => {

    const [selectedCustomerYear, setSelectedCustomerYear] = useState(customerYear[0]);
    const customer = useRef(null);




    const changeCustomerChart = (event) => {
        setSelectedCustomerYear(event.value)
        const dataSet1 = [
            [10, 25, 48, 35, 54, 70],
            [18, 35, 23, 30, 59, 65],
            [20, 47, 46, 46, 61, 70],
            [17, 34, 18, 48, 67, 68],
            [9, 37, 47, 50, 60, 62],
            [8, 48, 40, 52, 72, 75],
            [10, 18, 50, 47, 63, 80],
            [20, 36, 39, 58, 59, 85],
            [30, 45, 35, 50, 54, 81],
            [28, 35, 52, 56, 60, 77],
            [40, 40, 38, 45, 68, 86],
            [50, 23, 27, 34, 65, 90],
            [29, 27, 29, 42, 55, 84],
            [10, 37, 47, 29, 59, 80],
            [10, 54, 42, 38, 63, 83],
            [25, 44, 50, 56, 65, 92],
            [30, 43, 48, 45, 73, 78],
            [29, 47, 54, 60, 77, 86]
        ];
        const dataSet2 = [
            [10, 25, 48, 35, 54, 70],
            [20, 47, 46, 46, 61, 70],
            [17, 34, 18, 48, 67, 68],
            [50, 23, 27, 34, 65, 90],
            [8, 48, 40, 52, 72, 75],
            [9, 37, 47, 50, 60, 62],
            [10, 18, 50, 47, 63, 80],
            [30, 45, 35, 50, 54, 81],
            [10, 37, 47, 29, 59, 80],
            [28, 35, 52, 56, 60, 77],
            [25, 44, 50, 56, 65, 92],
            [18, 35, 23, 30, 59, 65],
            [20, 36, 39, 58, 59, 85],
            [29, 27, 29, 42, 55, 84],
            [40, 40, 38, 45, 68, 86],
            [30, 43, 48, 45, 73, 78],
            [10, 54, 42, 38, 63, 83],
            [29, 47, 54, 60, 77, 86]
        ];

        if (event.value.code === '1') {
            customerAvg = '621';
            customerMin = '198';
            customerMax = '957';
            customerChart.datasets[0].data = dataSet2[parseInt('0')];
            customerChart.datasets[1].data = dataSet2[parseInt('1')];
            customerChart.datasets[2].data = dataSet2[parseInt('2')];
            customerChart.datasets[3].data = dataSet2[parseInt('3')];
            customerChart.datasets[4].data = dataSet2[parseInt('4')];
            customerChart.datasets[5].data = dataSet2[parseInt('5')];
            customerChart.datasets[6].data = dataSet2[parseInt('6')];
            customerChart.datasets[7].data = dataSet2[parseInt('7')];
            customerChart.datasets[8].data = dataSet2[parseInt('8')];
            customerChart.datasets[9].data = dataSet2[parseInt('9')];
            customerChart.datasets[10].data = dataSet2[parseInt('10')];
            customerChart.datasets[11].data = dataSet2[parseInt('11')];
            customerChart.datasets[12].data = dataSet2[parseInt('12')];
            customerChart.datasets[13].data = dataSet2[parseInt('13')];
            customerChart.datasets[14].data = dataSet2[parseInt('14')];
            customerChart.datasets[15].data = dataSet2[parseInt('15')];
            customerChart.datasets[16].data = dataSet2[parseInt('16')];
            customerChart.datasets[17].data = dataSet2[parseInt('17')];
        } else {
            customerAvg = '875';
            customerMin = '284';
            customerMax = '1232';
            customerChart.datasets[0].data = dataSet1[parseInt('0')];
            customerChart.datasets[1].data = dataSet1[parseInt('1')];
            customerChart.datasets[2].data = dataSet1[parseInt('2')];
            customerChart.datasets[3].data = dataSet1[parseInt('3')];
            customerChart.datasets[4].data = dataSet1[parseInt('4')];
            customerChart.datasets[5].data = dataSet1[parseInt('5')];
            customerChart.datasets[6].data = dataSet1[parseInt('6')];
            customerChart.datasets[7].data = dataSet1[parseInt('7')];
            customerChart.datasets[8].data = dataSet1[parseInt('8')];
            customerChart.datasets[9].data = dataSet1[parseInt('9')];
            customerChart.datasets[10].data = dataSet1[parseInt('10')];
            customerChart.datasets[11].data = dataSet1[parseInt('11')];
            customerChart.datasets[12].data = dataSet1[parseInt('12')];
            customerChart.datasets[13].data = dataSet1[parseInt('13')];
            customerChart.datasets[14].data = dataSet1[parseInt('14')];
            customerChart.datasets[15].data = dataSet1[parseInt('15')];
            customerChart.datasets[16].data = dataSet1[parseInt('16')];
            customerChart.datasets[17].data = dataSet1[parseInt('17')];
        }

        customer.current.refresh();
    };


    return (

        <>
        <div className="col-12 lg:col-8">
                    <div className="card widget-customer-graph">
                        <div className="header">
                            <div className="title">
                                <span>Weekly new customers</span>
                                <Dropdown options={customerYear} value={selectedCustomerYear} optionLabel="name" onChange={changeCustomerChart}></Dropdown>
                            </div>
                            <p className="subtitle">Number of new customer are listed by weekly</p>
                        </div>

                        <div className="content grid grid-nogutter">
                            <div className="col-12 md:col-6 grid">
                                <div className="col-12 md:col-4 flex align-items-center">
                                    <h2>{customerMax}</h2>
                                    <p>MAX</p>
                                </div>
                                <div className="col-12 md:col-4 flex align-items-center">
                                    <h2>{customerMin}</h2>
                                    <p>MIN</p>
                                </div>
                                <div className="col-12 md:col-4 flex align-items-center">
                                    <h2 style={{ color: '#FC6161' }}>{customerAvg}</h2>
                                    <p>AVERAGE</p>
                                </div>
                            </div>
                        </div>

                        <Chart ref={customer} type="bar" id="customer-chart" data={customerChart} options={customerChartOptions}></Chart>
                    </div>
                </div>
        </>

    )


}
