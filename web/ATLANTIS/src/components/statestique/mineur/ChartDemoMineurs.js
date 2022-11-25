import React, { useEffect, useState } from 'react';
import { Chart } from 'primereact/chart';
import { Tooltip } from 'primereact/tooltip';
import { Button } from 'primereact/button';

export const ChartDemoMineurs = ({ data, names, jugers, arreters, primaires, recies }) => {


    const [ages, setAges] = useState([]);

    useEffect(() => {
        console.log(data);
        let age13 = 0;
        let age14 = 0;
        let age15 = 0;
        let age16 = 0;
        let age17 = 0;
        let age18 = 0;
        data.map((age) => {
            age13 +=  age.age13;
            age14 +=   age.age14;
            age15 +=   age.age15;
            age16 +=   age.age16;
            age17 +=   age.age17;
            age18 +=   age.age18;

            console.log("age16 :"+age16);

        });

       
        ages.push(age13);
        ages.push(age14);
        ages.push(age15);
        ages.push(age16);
        ages.push(age17);
        ages.push(age18);
        setAges(ages)



    }, []);



    const lineData = {
        labels: Object.values(names),
        datasets: [
            {
                label: 'المحكومين',
                data: Object.values(jugers),
                fill: false,
                backgroundColor: 'rgb(255, 205, 86)',
                borderColor: 'rgb(255, 205, 86)',
                tension: 0.4
            },
            {
                label: 'الموقوفين',
                data: Object.values(arreters),
                fill: false,
                backgroundColor: 'rgb(75, 192, 192)',
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.4
            }
        ]
    };

    const barData = {
        labels: Object.values(names),
        datasets: [
            {
                label: 'المبتدؤون',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: Object.values(primaires),
            },
            {
                label: 'العائدون',
                backgroundColor: 'rgb(54, 162, 235)',
                borderColor: 'rgb(54, 162, 235)',
                data: Object.values(recies)
            }
        ]
    };

    const pieData = {
        labels: ['13', '14', '15', '16', '17','18'],
        datasets: [
            {
                data: Object.values(ages),
                backgroundColor: ['rgb(54, 162, 235)', 'rgb(255, 99, 132)', 'rgb(255, 205, 86)', 'rgb(75, 192, 192)', 'rgb(10, 192, 192)', 'rgb(33, 33, 192)']
            }
        ]
    };



    const [lineOptions, setLineOptions] = useState(null);
    const [barOptions, setBarOptions] = useState(null);
    const [pieOptions, setPieOptions] = useState(null);


    const applyLightTheme = () => {
        const lineOptions = {
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

        const barOptions = {
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

        const pieOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: '#495057'
                    }
                }
            }
        };

        const polarOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: '#495057'
                    }
                }
            },
            scales: {
                r: {
                    grid: {
                        color: '#ebedef'
                    }
                }
            }
        };

        const radarOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: '#495057'
                    }
                }
            },
            scales: {
                r: {
                    grid: {
                        color: '#ebedef'
                    }
                }
            }
        };

        setLineOptions(lineOptions);
        setBarOptions(barOptions);
        setPieOptions(pieOptions);

    };

    const applyDarkTheme = () => {
        const lineOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: '#ebedef'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#ebedef'
                    },
                    grid: {
                        color: 'rgba(160, 167, 181, .3)'
                    }
                },
                y: {
                    ticks: {
                        color: '#ebedef'
                    },
                    grid: {
                        color: 'rgba(160, 167, 181, .3)'
                    }
                }
            }
        };

        const barOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: '#ebedef'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#ebedef'
                    },
                    grid: {
                        color: 'rgba(160, 167, 181, .3)'
                    }
                },
                y: {
                    ticks: {
                        color: '#ebedef'
                    },
                    grid: {
                        color: 'rgba(160, 167, 181, .3)'
                    }
                }
            }
        };

        const pieOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: '#ebedef'
                    }
                }
            }
        };

        const polarOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: '#ebedef'
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

        const radarOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: '#ebedef'
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

        setLineOptions(lineOptions);
        setBarOptions(barOptions);
        setPieOptions(pieOptions);

    };

    useEffect(() => {
        applyDarkTheme();
    }, []);

    return (
        <div className="grid p-fluid">
            <div className="col-12 lg:col-6">
                <div className="card">
                    <h5>الوضعية الجزائية</h5>
                    <Chart type="line" data={lineData} options={lineOptions} />
                </div>

                <div className="card flex flex-column align-items-center">
                    <h5>حسب العمر</h5>
                    <Chart type="pie" data={pieData} options={pieOptions} style={{ width: '50%' }} />
                </div>


            </div>
            <div className="col-12 lg:col-6">
                <div className="card">
                    <h5>العود الجزائي</h5>
                    <Chart type="bar" data={barData} options={barOptions} />
                </div>

                <div className="card flex flex-column align-items-center">
                   


                    <Button label= { "("+  ages[0]+")    " +"ســ13ــنة"} className="p-button-secondary p-button-outlined mr-3 mb-2" tooltip={ages[0]} tooltipOptions={{ className: 'blue-tooltip', position: 'top' }} />
                    <Button label= { "("+  ages[1]+")    " +"ســ14ــنة"} className="p-button-secondary p-button-outlined mr-3 mb-2" tooltip={ages[1]} tooltipOptions={{ className: 'green-tooltip', position: 'top' }} />
                    <Button label= { "("+  ages[2]+")    " +"ســ15ــنة"} className="p-button-secondary p-button-outlined mr-3 mb-2" tooltip={ages[2]} tooltipOptions={{ className: 'yellow-tooltip', position: 'top' }} />
                    <Button label= { "("+  ages[3]+")    " +"ســ16ــنة"} className="p-button-secondary p-button-outlined mr-3 mb-2" tooltip={ages[3]} tooltipOptions={{ className: 'cyan-tooltip', position: 'top' }} />
                    <Button label= { "("+  ages[4]+")    " +"ســ17ــنة"} className="p-button-secondary p-button-outlined mr-3 mb-2" tooltip={ages[4]} tooltipOptions={{ className: 'pink-tooltip', position: 'top' }} />
                    <Button label= { "("+  ages[5]+")    " +"ســ18ــنة"} className="p-button-secondary p-button-outlined mr-3 mb-2" tooltip={ages[5]} tooltipOptions={{ className: 'pink-tooltip', position: 'top' }} />
                   
                </div>


            </div>
        </div>
    );
};

