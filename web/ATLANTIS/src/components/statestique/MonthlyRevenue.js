import React, { useState, useRef, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import { Dropdown } from 'primereact/dropdown';

console.log("MonthlyRevenue component");
const revenueChartOptions = {
    responsive: true,
    hover: {
        mode: 'index'
    },
    scales: {
        y: {
            min: 0,
            max: 50,
            ticks: {
                stepSize: 5
            }
        }
    }
};
const revenueMonth = [
    { name: 'January - July 2021', code: '0' },
    { name: 'August - December 2020', code: '1' }
];

const revenueChart = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'Sales',
            data: [37, 34, 21, 27, 10, 18, 15],
            borderColor: '#EEE500',
            pointBackgroundColor: '#EEE500',
            backgroundColor: 'rgba(238, 229, 0, 0.05)',
            fill: true,
            tension: 0.4
        },
        {
            label: 'Revenue',
            data: [31, 27, 30, 37, 23, 29, 20],
            borderColor: '#00D0DE',
            pointBackgroundColor: '#00D0DE',
            backgroundColor: 'rgba(0, 208, 222, 0.05)',
            fill: true,
            tension: 0.4
        },
        {
            label: 'Expenses',
            data: [21, 7, 13, 3, 19, 11, 6],
            borderColor: '#FC6161',
            pointBackgroundColor: '#FC6161',
            backgroundColor: 'rgba(253, 72, 74, 0.05)',
            fill: true,
            tension: 0.4
        },
        {
            label: 'Customer',
            data: [47, 31, 35, 20, 46, 39, 25],
            borderColor: '#0F8BFD',
            pointBackgroundColor: '#0F8BFD',
            backgroundColor: 'rgba(15, 139, 253, 0.05)',
            fill: true,
            tension: 0.4
        }]
};


export const MonthlyRevenue = () => {

    const [selectedRevenueMonth, setSelectedRevenueMonth] = useState(revenueMonth[0]);
    const revenue = useRef(null);

    const changeRevenueChart = (event) => {
        setSelectedRevenueMonth(event.value)
        const dataSet1 = [
            [37, 34, 21, 27, 10, 18, 15],
            [31, 27, 30, 37, 23, 29, 20],
            [21, 7, 13, 3, 19, 11, 6],
            [47, 31, 35, 20, 46, 39, 25]
        ];
        const dataSet2 = [
            [31, 27, 30, 37, 23, 29, 20],
            [47, 31, 35, 20, 46, 39, 25],
            [37, 34, 21, 27, 10, 18, 15],
            [21, 7, 13, 3, 19, 11, 6]
        ];
        if (event.value.code === '1') {
            revenueChart.datasets[0].data = dataSet2[parseInt('0')];
            revenueChart.datasets[1].data = dataSet2[parseInt('1')];
            revenueChart.datasets[2].data = dataSet2[parseInt('2')];
            revenueChart.datasets[3].data = dataSet2[parseInt('3')];
        } else {
            revenueChart.datasets[0].data = dataSet1[parseInt('0')];
            revenueChart.datasets[1].data = dataSet1[parseInt('1')];
            revenueChart.datasets[2].data = dataSet1[parseInt('2')];
            revenueChart.datasets[3].data = dataSet1[parseInt('3')];
        }

        revenue.current.refresh();
    }
    return (

        <>
        <div className="p-col-12 p-md-8">
            <div className="card widget-revenue-graph">
                <div className="card-header">
                    <span>Monthly revenue</span>
                    <Dropdown options={revenueMonth} value={selectedRevenueMonth} optionLabel="name" onChange={changeRevenueChart}></Dropdown>
                </div>

                <div className="graph">
                    <Chart ref={revenue} type="line" id="revenue-chart" data={revenueChart} options={revenueChartOptions}></Chart>
                </div>
            </div>
        </div>
        </>

    )


}
