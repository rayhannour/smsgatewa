import React,{ useState, useRef, useEffect } from 'react';
import { Chart } from 'primereact/chart';


export const LineChartAge = ({male , female , labelages}) => {

    console.log(male);
    console.log(female);
    const revenue = useRef(null);
  
    let [revenueChart, setRevenueChart] = useState([]);

    useEffect(async () => {      
        revenueChart={
            labels:Object.values(labelages),
            datasets: [
                {
                    label: 'ذكور',
                    data:male,
                    borderColor: '#EEE500',
                    pointBackgroundColor: '#EEE500',
                    backgroundColor: 'rgba(238, 229, 0, 0.05)',
                    fill: true,
                    tension: 0.4
                },
                {
                    label: 'إناث',
                    data:female,
                    borderColor: '#00D0DE',
                    pointBackgroundColor: '#00D0DE',
                    backgroundColor: 'rgba(0, 208, 222, 0.05)',
                    fill: true,
                    tension: 0.4
                }]};
       
                await  setRevenueChart(revenueChart);
                revenue.current.refresh();
                console.log("refresh");

    }, []);





    const revenueChartOptions = {
        responsive: true,
        hover: {
            mode: 'index'
        },
        scales: {
            y: {
                min: 0,
                //max: 50,
                ticks: {
                    stepSize: 100
                }
            }
        }
    };

    return (

        <>
       
                    <Chart ref={revenue}  type="line" id="revenue-chart" data={revenueChart} options={revenueChartOptions}></Chart>     
                
        </>

    )


}
