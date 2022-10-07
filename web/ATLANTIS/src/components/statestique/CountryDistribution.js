import React, { useState, useRef, useEffect } from 'react';
import { Chart } from 'primereact/chart';


const countryChart = {
    labels: ['RUS', 'Other', 'IND', 'AUS', 'JPN', 'USA', 'CHN'],
    datasets: [
        {
            data: [30, 18, 36, 54, 61, 90, 72],
            backgroundColor: [
                '#0F8BFD',
                '#545C6B',
                '#EC4DBC',
                '#EEE500',
                '#FC6161',
                '#00D0DE',
                '#873EFE',
            ],
            hoverBackgroundColor: [
                '#0F8BFD',
                '#545C6B',
                '#EC4DBC',
                '#EEE500',
                '#FC6161',
                '#00D0DE',
                '#873EFE',
            ],
            borderColor: 'transparent',
            fill: true
        }
    ]
};

const countryChartOptions = {
    responsive: true
};


console.log("CountryDistribution component");
export const CountryDistribution = () => {
    return (

        <>
        <div className="p-col-12 p-md-4">
        <div className="card widget-country-graph">
            <div className="country-title">Country distrubutions</div>
            <div className="country-graph p-d-flex p-jc-center">
                <Chart type="doughnut" id="country-chart" data={countryChart} options={countryChartOptions} style={{ position: 'relative', width: '75%' }}></Chart>
            </div>
            <div className="country-content">
                <ul>
                    <li className="p-d-flex p-jc-between p-ai-center">
                        <div className="p-d-flex p-jc-between p-ai-center">
                            <div className="color" style={{ backgroundColor: '#00D0DE', boxShadow: '0px 0px 10px rgba(0, 208, 222, 0.3)' }}></div>
                            <span>United States of America</span>
                        </div>
                        <span>25%</span>
                    </li>
                    <li className="p-d-flex p-jc-between p-ai-center">
                        <div className="p-d-flex p-jc-between p-ai-center">
                            <div className="color" style={{ backgroundColor: '#873EFE', boxShadow: '0px 0px 10px rgba(135, 62, 254, 0.3)' }}></div>
                            <span>China</span>
                        </div>
                        <span>20%</span>
                    </li>
                    <li className="p-d-flex p-jc-between p-ai-center">
                        <div className="p-d-flex p-jc-between p-ai-center">
                            <div className="color" style={{ backgroundColor: '#FC6161', boxShadow: '0px 0px 10px rgba(252, 97, 97, 0.3)' }}></div>
                            <span>Japan</span>
                        </div>
                        <span>17%</span>
                    </li>
                    <li className="p-d-flex p-jc-between p-ai-center">
                        <div className="p-d-flex p-jc-between p-ai-center">
                            <div className="color" style={{ backgroundColor: '#EEE500', boxShadow: '0px 0px 10px rgba(238, 229, 0, 0.3)' }}></div>
                            <span>Australia</span>
                        </div>
                        <span>15%</span>
                    </li>
                    <li className="p-d-flex p-jc-between p-ai-center">
                        <div className="p-d-flex p-jc-between p-ai-center">
                            <div className="color" style={{ backgroundColor: '#EC4DBC', boxShadow: '0px 0px 10px rgba(236, 77, 188, 0.3)' }}></div>
                            <span>India</span>
                        </div>
                        <span>10%</span>
                    </li>
                    <li className="p-d-flex p-jc-between p-ai-center">
                        <div className="p-d-flex p-jc-between p-ai-center">
                            <div className="color" style={{ backgroundColor: '#0F8BFD', boxShadow: '0px 0px 10px rgba(15, 139, 253, 0.3)' }}></div>
                            <span>Rusian Federation</span>
                        </div>
                        <span>8%</span>
                    </li>
                    <li className="p-d-flex p-jc-between p-ai-center">
                        <div className="p-d-flex p-jc-between p-ai-center">
                            <div className="color" style={{ backgroundColor: '#545C6B' }}></div>
                            <span>Others</span>
                        </div>
                        <span>5%</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
        </>

    )


}
