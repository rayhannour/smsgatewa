import React, { useRef } from 'react';
import { Chart } from 'primereact/chart';
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';
import { ProgressBar } from 'primereact/progressbar';
import { Timeline } from 'primereact/timeline';

const visitorChart = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
    datasets: [
        {
            label: 'Plan',
            data: [630, 630, 695, 695, 695, 760, 760, 760, 840, 840, 840, 840],
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

const revenueChartOptions = {
    responsive: true,
    hover: {
        mode: 'index'
    },
    scales: {
        y: {
            min: 0,
            max: 60,
            ticks: {
                stepSize: 5
            }
        }
    }
};

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
}

export const Widgets = () => {

    const visitor = useRef(null);
    const customer = useRef(null);
    const revenue = useRef(null);

    const customerMax = '1232';
    const customerMin = '284';
    const customerAvg = '875';
    const growth = '$620,076';
    const avgCustomer = '$1,120';
    const timelineEvents = [
        {
            transaction: 'Payment from #28492', amount: '+$250.00', date: 'June 13, 2020 11:09 AM',
            icon: 'pi pi-check', iconColor: '#0F8BFD', amountColor: '#00D0DE'
        },
        {
            transaction: 'Process refund to #94830', amount: '-$570.00', date: 'June 13, 2020 08:22 AM',
            icon: 'pi pi-refresh', iconColor: '#FC6161', amountColor: '#FC6161'
        },
        {
            transaction: 'New 8 user to #5849', amount: '+$50.00', date: 'June 12, 2020 02:56 PM',
            icon: 'pi pi-plus', iconColor: '#0BD18A', amountColor: '#0BD18A'
        },
        {
            transaction: 'Payment from #3382', amount: '+$3830.00', date: 'June 11, 2020 06:11 AM',
            icon: 'pi pi-check', iconColor: '#0F8BFD', amountColor: '#00D0DE'
        },
        {
            transaction: 'Payment from #4738', amount: '+$845.00', date: 'June 11, 2020 03:50 AM',
            icon: 'pi pi-check', iconColor: '#0F8BFD', amountColor: '#00D0DE'
        },
        {
            transaction: 'Payment failed form #60958', amount: '$1450.00', date: 'June 10, 2020 07:54 PM',
            icon: 'pi pi-exclamation-triangle', iconColor: '#EC4DBC', amountColor: '#EC4DBC'
        },
        {
            transaction: 'Payment from #5748', amount: '+$50.00', date: 'June 09, 2020 11:37 PM',
            icon: 'pi pi-check', iconColor: '#0F8BFD', amountColor: '#00D0DE'
        },
        {
            transaction: 'Removed 32 users from #5849', amount: '-$240.00', date: 'June 09, 2020 08:40 PM',
            icon: 'pi pi-minus', iconColor: '#FC6161', amountColor: '#FC6161'
        },
    ];

    const marker = (item) => {
        return (
            <>
                <span className="custom-marker" style={{ backgroundColor: item.iconColor }}>
                    <i className={item.icon}></i>
                </span>
            </>
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

    return (
        <>
            <div>
                <h4>Reusable CSS widgets for your applications.</h4>
                <div className="p-grid">
                    <div className="p-col-12 p-md-4">
                        <div className="card widget-overview-box widget-overview-box-1">
                            <span className="overview-title">
                                CONVERSATION RATE
                            </span>
                            <div className="p-d-flex p-jc-between">
                                <div className="overview-detail p-d-flex p-jc-between">
                                    <div className="overview-badge p-d-flex p-jc-center p-ai-center">
                                        <i className="pi pi-arrow-down"></i>
                                        <span>0.6%</span>
                                    </div>
                                    <div className="overview-text">
                                        0.81%
                                    </div>
                                </div>
                            </div>
                            <img src="assets/layout/images/dashboard/rate.svg" alt="rate" />
                        </div>
                    </div>
                    <div className="p-col-12 p-md-4">
                        <div className="card widget-overview-box widget-overview-box-2">
                            <span className="overview-title">
                                AVG. ORDER VALUE
                            </span>
                            <div className="p-d-flex p-jc-between">
                                <div className="overview-detail p-d-flex p-jc-between">
                                    <div className="overview-badge p-d-flex p-jc-center p-ai-center">
                                        <i className="pi pi-arrow-up"></i>
                                        <span>4,2%</span>
                                    </div>
                                    <div className="overview-text">
                                        $306.2
                                    </div>
                                </div>
                            </div>
                            <img src="assets/layout/images/dashboard/value.svg" alt="value" />
                        </div>
                    </div>
                    <div className="p-col-12 p-md-4">
                        <div className="card widget-overview-box widget-overview-box-3">
                            <span className="overview-title">
                                ORDER QUANTITY
                            </span>
                            <div className="p-d-flex p-jc-between">
                                <div className="overview-detail p-d-flex p-jc-between">
                                    <div className="overview-badge p-d-flex p-jc-center p-ai-center">
                                        <i className="pi pi-minus"></i>
                                        <span>2,1%</span>
                                    </div>
                                    <div className="overview-text">
                                        1,620
                                    </div>
                                </div>
                            </div>
                            <img src="assets/layout/images/dashboard/quantity.svg" alt="quantity" />
                        </div>
                    </div>

                    <div className="p-col-12 p-md-4">
                        <div className="card widget-timeline">
                            <div className="timeline-header p-d-flex p-jc-between p-ai-center">
                                <p>Transaction history</p>
                                <div className="header-icons">
                                    <i className="pi pi-refresh"></i>
                                    <i className="pi pi-filter"></i>
                                </div>
                            </div>
                            <div className="timeline-content">
                                <Timeline value={timelineEvents} marker={marker} content={content} className="custimized-timeline" />
                            </div>
                            <div className="timeline-footer p-d-flex p-ai-center p-jc-center">
                                <button className="p-link">View all transactions <i className="pi pi-arrow-down"></i></button>
                            </div>
                        </div>
                    </div>

                    <div className="p-col-12 p-md-8">
                        <div className="card widget-visitor-graph">
                            <div className="card-header">
                                <span>Unique visitor graph</span>
                                <div className="actions">
                                    <span>Yearly<i className="pi pi-angle-down"></i></span>
                                    <span>2019<i className="pi pi-angle-down"></i></span>
                                </div>
                            </div>

                            <div className="graph-content p-grid">
                                <div className="p-col-12 p-md-6">
                                    <h2>{growth}</h2>
                                    <h6>MRR GROWTH</h6>
                                    <p>Measure how fast you’re growing monthly recurring revenue. <button className="p-link">Learn more</button></p>
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

                    <div className="p-col-12 p-lg-8">
                        <div className="card widget-customer-graph">
                            <div className="header">
                                <div className="title">
                                    <span>Weekly new customers</span>
                                    <span>2019<i className="pi pi-angle-down"></i></span>
                                </div>
                                <p className="subtitle">Number of new customer are listed by weekly</p>
                            </div>

                            <div className="content p-grid p-nogutter">
                                <div className="p-col-12 p-md-6 p-grid">
                                    <div className="p-col-12 p-md-4 p-d-flex p-ai-center">
                                        <h2>{customerMax}</h2>
                                        <p>MAX</p>
                                    </div>
                                    <div className="p-col-12 p-md-4 p-d-flex p-ai-center">
                                        <h2>{customerMin}</h2>
                                        <p>MIN</p>
                                    </div>
                                    <div className="p-col-12 p-md-4 p-d-flex p-ai-center">
                                        <h2 style={{ color: '#FC6161' }}>{customerAvg}</h2>
                                        <p>AVERAGE</p>
                                    </div>
                                </div>
                            </div>

                            <Chart ref={customer} type="bar" id="customer-chart" data={customerChart} options={customerChartOptions}></Chart>
                        </div>
                    </div>

                    <div className="p-col-12 p-md-4">
                        <div className="card widget-performance">
                            <div className="header">
                                <span>Quarterly win</span>
                                <p className="subtitle">Top performances</p>
                            </div>
                            <div className="content">
                                <ul>
                                    <li className="person-item">
                                        <Avatar image="assets/layout/images/dashboard/ann.png" className="p-mr-2 p-overlay-badge" shape="circle"><Badge value="1" /></Avatar>
                                        <div className="person-info">
                                            <div className="amount">$94,815</div>
                                            <div className="name">Ann Vaccaro</div>
                                        </div>
                                    </li>
                                    <li className="person-item">
                                        <Avatar image="assets/layout/images/dashboard/miracle.png" className="p-mr-2 p-overlay-badge" shape="circle"><Badge value="2" /></Avatar>
                                        <div className="person-info">
                                            <div className="amount">$78,985</div>
                                            <div className="name">Miracle Aminoff</div>
                                        </div>
                                    </li>
                                    <li className="person-item">
                                        <Avatar image="assets/layout/images/dashboard/kaylynn.png" className="p-mr-2 p-overlay-badge" shape="circle"><Badge value="3" /></Avatar>
                                        <div className="person-info">
                                            <div className="amount">$53,611</div>
                                            <div className="name">Kaylynn Geidt</div>
                                        </div>
                                    </li>
                                    <li className="person-item">
                                        <Avatar image="assets/layout/images/dashboard/angel.png" className="p-mr-2 p-overlay-badge" shape="circle"><Badge value="4" /></Avatar>
                                        <div className="person-info">
                                            <div className="amount">$25,338</div>
                                            <div className="name">Angel Rosser</div>
                                        </div>
                                    </li>
                                    <li className="person-item">
                                        <Avatar image="assets/layout/images/dashboard/cristofer.png" className="p-mr-2 p-overlay-badge" shape="circle"><Badge value="5" /></Avatar>
                                        <div className="person-info">
                                            <div className="amount">$15,989</div>
                                            <div className="name">Cristofer Mango</div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="p-col-12 p-lg-4">
                        <div className="card widget-target">
                            <div className="card-header">
                                <span>Weekly target</span>
                            </div>
                            <div className="content">
                                <h3>1232 Users</h3>
                                <span className="rate">%3.5 <i className="pi pi-arrow-up"></i><span>  than last week</span></span>
                            </div>
                            <div className="values">
                                <div className="item">
                                    <span>51%</span>
                                    <ProgressBar value={51} showValue={false}></ProgressBar>
                                    <span className="day">Thu</span>
                                </div>
                                <div className="item">
                                    <span>68%</span>
                                    <ProgressBar value={68} showValue={false}></ProgressBar>
                                    <span className="day">Fri</span>
                                </div>
                                <div className="item">
                                    <span>74%</span>
                                    <ProgressBar value={74} showValue={false}></ProgressBar>
                                    <span className="day">Sat</span>
                                </div>
                                <div className="item">
                                    <span>61%</span>
                                    <ProgressBar value={61} showValue={false}></ProgressBar>
                                    <span className="day">Sun</span>
                                </div>
                                <div className="item success">
                                    <span>100%</span>
                                    <ProgressBar value={100} showValue={false}></ProgressBar>
                                    <span className="day">Mon</span>
                                </div>
                                <div className="item">
                                    <span>70%</span>
                                    <ProgressBar value={70} showValue={false}></ProgressBar>
                                    <span className="day">Tue</span>
                                </div >
                                <div className="item today">
                                    <span>22%</span>
                                    <ProgressBar value={22} showValue={false}></ProgressBar>
                                    <span className="day">Today</span>
                                </div >
                            </div >
                        </div >
                    </div >

                    <div className="p-col-12 p-md-8">
                        <div className="card widget-revenue-graph">
                            <div className="card-header">
                                <span>Monthly revenue</span>
                                <span>January - July 2020<i className="pi pi-angle-down"></i></span>
                            </div>

                            <div className="graph">
                                <h6>Revenue</h6>
                                <Chart ref={revenue} type="line" id="revenue-chart" data={revenueChart} options={revenueChartOptions}></Chart>
                            </div>
                        </div>
                    </div >
                </div >
            </div >
        </>
    )
}