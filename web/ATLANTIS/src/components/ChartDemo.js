import React from 'react';
import { Chart } from 'primereact/chart';

const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            backgroundColor: 'rgb(255, 205, 86)',
            borderColor: 'rgb(255, 205, 86)',
            tension: .4
        },
        {
            label: 'Second Dataset',
            data: [28, 48, 40, 19, 86, 27, 90],
            fill: false,
            backgroundColor: 'rgb(75, 192, 192)',
            borderColor: 'rgb(75, 192, 192)',
            tension: .4
        }
    ]
};

const lineOptions = {
    plugins: {
        legend: {
            labels: {
                color: '#A0A7B5'
            }
        }
    },
    scales: {
        x: {
            ticks: {
                color: '#A0A7B5'
            },
            grid: {
                color:  'rgba(160, 167, 181, .3)',
            }
        },
        y: {
            ticks: {
                color: '#A0A7B5'
            },
            grid: {
                color:  'rgba(160, 167, 181, .3)',
            }
        }
    }
};

const barData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: 'My Second dataset',
            backgroundColor: 'rgb(54, 162, 235)',
            borderColor: 'rgb(54, 162, 235)',
            data: [28, 48, 40, 19, 86, 27, 90]
        }
    ]
};

const barOptions = {
    plugins: {
        legend: {
            labels: {
                color: '#A0A7B5'
            }
        }
    },
    scales: {
        x: {
            ticks: {
                color: '#A0A7B5'
            },
            grid: {
                color:  'rgba(160, 167, 181, .3)',
            }
        },
        y: {
            ticks: {
                color: '#A0A7B5'
            },
            grid: {
                color:  'rgba(160, 167, 181, .3)',
            }
        }
    }
};

const pieData = {
    labels: ['A', 'B', 'C'],
    datasets: [
        {
            data: [540, 325, 702, 421],
            backgroundColor: [
                'rgb(54, 162, 235)',
                'rgb(255, 99, 132)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)'
            ]
        }
    ]
};

const pieOptions = {
    plugins: {
        legend: {
            labels: {
                color: '#A0A7B5'
            }
        }
    }
};

const polarData = {
    datasets: [{
        data: [
            11,
            16,
            7,
            3
        ],
        backgroundColor: [
            'rgb(54, 162, 235)',
            'rgb(255, 99, 132)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)'
        ],
        label: 'My dataset'
    }],
    labels: [
        'Blue',
        'Purple',
        'Orange',
        'Green'
    ]
};

const polarOptions = {
    plugins: {
        legend: {
            labels: {
                color: '#A0A7B5'
            }
        }
    },
    scales: {
        r: {
            grid: {
                color: 'rgba(160, 167, 181, .3)'
            }
        }
    }
};

const radarData = {
    labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
    datasets: [
        {
            label: 'My First dataset',
            backgroundColor: 'rgba(54, 162, 235,0.2)',
            borderColor: 'rgba(54, 162, 235,1)',
            pointBackgroundColor: 'rgba(54, 162, 235,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(54, 162, 235,1)',
            data: [65, 59, 90, 81, 56, 55, 40]
        },
        {
            label: 'My Second dataset',
            backgroundColor: 'rgba(255, 99, 132,0.2)',
            borderColor: 'rgba(255, 99, 132,1)',
            pointBackgroundColor: 'rgba(255, 99, 132,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255, 99, 132,1)',
            data: [28, 48, 40, 19, 96, 27, 100]
        }
    ]
};

const radarOptions = {
    plugins: {
        legend: {
            labels: {
                color: '#A0A7B5'
            }
        }
    },
    scales: {
        r: {
            grid: {
                color: 'rgba(160, 167, 181, .3)'
            }
        }
    }
};

export const ChartDemo = () => {

    return (
        <div className="p-grid p-fluid">
            <div className="p-col-12 p-lg-6">
                <div className="card">
                    <h5 className="centerText">Linear Chart</h5>
                    <Chart type="line" data={lineData} options={lineOptions} />
                </div>

                <div className="card">
                    <h5 className="centerText">Pie Chart</h5>
                    <div className="p-d-flex p-jc-center">
                        <Chart style={{ position: 'relative', width: '50%' }} type="pie" data={pieData} options={pieOptions} />
                    </div>
                </div>

                <div className="card">
                    <h5 className="centerText">Polar Area Chart</h5>
                    <div className="p-d-flex p-jc-center">
                        <Chart style={{ position: 'relative', width: '50%' }} type="polarArea" data={polarData} options={polarOptions} />
                    </div>
                </div>
            </div>
            <div className="p-col-12 p-lg-6">
                <div className="card">
                    <h5 className="centerText">Bar Chart</h5>
                    <Chart type="bar" data={barData} options={barOptions} />
                </div>

                <div className="card">
                    <h5 className="centerText">Doughnut Chart</h5>
                    <div className="p-d-flex p-jc-center">
                        <Chart style={{ position: 'relative', width: '50%' }} type="doughnut" data={pieData} options={pieOptions} />
                    </div>
                </div>

                <div className="card">
                    <h5 className="centerText">Radar Chart</h5>
                    <div className="p-d-flex p-jc-center">
                        <Chart style={{ position: 'relative', width: '50%' }} type="radar" data={radarData} options={radarOptions} />
                    </div>
                </div>
            </div>
        </div>
    )
}