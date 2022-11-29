import React, { useState, useRef, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import { fetchDataNatureAffaire } from '../../../api/statPenale/StatGeneral';




export const CountryDistributionPenale = ({keycloaks}) => {
    const [countryChart, setCountryChart] = useState(null);


    const countryChartOptions = {
        responsive: true
    };

    const [affaire, setAffaire] = useState([]);
    const [val, setVal] = useState([]);
    const [showStat, setShowStat] = useState(false);
    const [total, setTotal] = useState(0);


    const [data, setData] = useState([]);


    useEffect(() => {
        fetchDataNatureAffaire(keycloaks).then((response) => {
            setShowStat(false);
            setAffaire([]);
            setVal([]);
            setTotal(0);
            setData([]);
            for (var i = 0; i < response.data.length; i++) {
                affaire.push(response.data[i].tetat);
                val.push(response.data[i].count);
                setTotal((t) => response.data[i].total);
            }
            setData(response.data);
            setAffaire(affaire);
            setVal(val);
            setCountryChart({
                labels: Object.values(affaire),
                datasets: [
                    {
                        data: Object.values(val),
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
            });

            setShowStat(true);


        }).catch((e) => {
            setShowStat(false);
        })

    }, []);
    const renderElementPercent = (count) => {
        var d = count * 100 / total;
        var s = Number(d / 100).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 });
        return s;
    }


    const markerColor = (i, affaire, count) => {
        let j = i;
        if (i > 6) {
            i = 6;
        }
        let percent = renderElementPercent(count);
        let datas = <li key={j} className="flex justify-content-between align-items-center">
            <div className="flex justify-content-between align-items-center">
                <div className="color" style={{ backgroundColor: color[i], boxShadow: shadow[i] }}></div>
                <span>{affaire}</span>
            </div>
            <span>{percent}</span>
        </li>;
        return datas;
    }

    const [color, setColor] = useState(['#00D0DE', '#873EFE', '#FC6161', '#EEE500', '#EC4DBC', '#0F8BFD', '#545C6B']);
    const [shadow, setShadow] = useState(['0px 0px 10px rgba(0, 208, 222, 0.3)', '0px 0px 10px rgba(135, 62, 254, 0.3)', '0px 0px 10px rgba(252, 97, 97, 0.3)', '0px 0px 10px rgba(238, 229, 0, 0.3)', '0px 0px 10px rgba(236, 77, 188, 0.3)', '0px 0px 10px rgba(15, 139, 253, 0.3)', '']);
    return (

        <>
        <div className="col-12 md:col-4">
            <div className="card widget-country-graph">
                <div className="country-title">نسب المودعين حسب القضايا</div>
                <div className="country-graph flex justify-content-center">
                    <Chart type="doughnut" id="country-chart" data={countryChart} options={countryChartOptions} style={{ position: 'relative', width: '75%' }}></Chart>
                </div>
                <div className="country-content">
                    <ul>

                        {data.map(function (d, idx) {
                            return markerColor(idx, d.tetat, d.count);
                        })}


                    </ul>
                </div>
            </div>
        </div>
        </>

    )


}
