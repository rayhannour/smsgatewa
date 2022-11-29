import React, { useState, useRef, useEffect } from 'react';
import { Chart } from 'primereact/chart';

import { fetchDataPrisonEntranSortant,fetchDataPrisonEntrantYears,fetchDataPrisonSortantYears } from '../../../api/statPenale/StatGeneral';
import { Slider } from 'primereact/slider';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import './css/DataTableDemo.css';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
export const VisitorEntrantSortantPenale = React.memo(({ keycloaks }) => {

    const [displayBasic, setDisplayBasic] = useState(false);
    const basicDialogFooter = <Button type="button" label="Dismiss" onClick={() => setDisplayBasic(false)} icon="pi pi-check" className="p-button-secondary" />;

    const toast = useRef(null);
    const [selectedRow, setSelectedRow] = useState(null);
    const [years, setYears] = useState('');

    const [mounthsEntrant, setMounthsEntrant] = useState([]);
    const [mounthscountsEntrant, setMounthscountsEntrant] = useState([]);
    const [mounthsSortant, setMounthsSortant] = useState([]);
    const [mounthscountsSortant, setMounthscountsSortant] = useState([]);


    const [entrantYears, setEntrantYears] = useState(null);
    const [sortantYears, setSortantYears] = useState(null);

    useEffect(async() => {
        
        
       
        await fetchDataPrisonEntrantYears(keycloaks,years ).then((response) => {    
            let newRowsMounth = [];
            let newRowsCountMounth = [];
            setEntrantYears(null);
            setMounthsEntrant([]);
            setMounthscountsEntrant([]);        
            for (var i = 0; i < response.data.length; i++) {
                newRowsMounth  .push(response.data[i].mounths);  
                newRowsCountMounth  .push(response.data[i].counts);                   
            } 
            console.log("newRowsMounths :"+newRowsMounth);
            setMounthsEntrant(newRowsMounth);
            setMounthscountsEntrant(newRowsCountMounth);

            setEntrantYears({
                labels: Object.values(newRowsMounth),
                datasets: [
                    {
                        label: 'الداخلون',
                        backgroundColor: '#FC6161',
                        data:Object.values(newRowsCountMounth)
                    }
                ]
            });
        }).catch((e) => {
            
        });

        await fetchDataPrisonSortantYears(keycloaks,years ).then((response) => {  
            let newRowsMounth = [];
            let newRowsCountMounth = [];
            setSortantYears(null);       
            setMounthsSortant([]);
            setMounthscountsSortant([]);          
            for (var i = 0; i < response.data.length; i++) {
                newRowsMounth.push(response.data[i].mounths);
                newRowsCountMounth.push(response.data[i].counts);                                
            } 
            setMounthsSortant(newRowsMounth);        
            setMounthscountsSortant(newRowsCountMounth);    

            setSortantYears({
                labels: Object.values(newRowsMounth),
                datasets: [
                    {
                        label: 'المغادرون',
                        backgroundColor: '#42A5F5',
                        data:Object.values(newRowsCountMounth)
                    }
                ]
            });
        }).catch((e) => {
            
        });
    },[years]);



    const onRowSelect = (event) => {

       
        setYears(event.data.years);


        
        

        setDisplayBasic(true);

        toast.current.show({ severity: 'info', summary: 'Product Selected', detail: `Name: ${event.data.years}`, life: 3000 });
    }

    const onRowUnselect = (event) => {
        toast.current.show({ severity: 'warn', summary: 'Product Unselected', detail: `Name: ${event.data.years}`, life: 3000 });
    }

    const [value5, setValue5] = useState([0, 30]);

    const [data, setData] = useState([]);
    const [showStat, setShowStat] = useState(false);

    const [prison, setPrison] = useState([]);
    const [val, setVal] = useState([]);
    const [maxval, setMaxval] = useState([]);
    const visitor = useRef(null);

    let [visitorChart, setVisitorChart] = useState(null);

    const [total, setTotal] = useState(0);
    const [totalMax, setTotalMax] = useState(0);
    useEffect(() => {
        reloadChart();

    }, [value5]);


    const reloadChart=async()=>{
       console.log(value5[0]+"--"+value5[1]);
        
        //console.log("value5: "+value5);
        await fetchDataPrisonEntranSortant(keycloaks, value5[0], value5[1]).then((response) => {
            console.log(response.data);
            let newRowsPrison = [];
            let newRowsCountVal = [];
            let newRowsCountMaxVal = [];
            setVisitorChart(null);
            setShowStat(false);
            setData(response.data);
            setPrison([]);
            setVal([]);
            setMaxval([]);
            setTotal(0);
            setTotalMax(0);
            for (var i = 0; i < response.data.length; i++) {
                newRowsPrison.push(response.data[i].years);
                newRowsCountVal.push(response.data[i].entrantCount);
                newRowsCountMaxVal.push(response.data[i].sortatntCount);
            }
            setPrison(newRowsPrison);
            setVal(newRowsCountVal);
            setMaxval(newRowsCountMaxVal);

            setVisitorChart({
                labels: Object.values(newRowsPrison),
                datasets: [
                    {
                        label: 'الداخلون',
                        data: Object.values(newRowsCountVal),
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
                        label: 'المغادرون',
                        data: Object.values(newRowsCountMaxVal),
                        backgroundColor: getComputedStyle(document.body).getPropertyValue('--primary-color'),
                        fill: true,
                        barPercentage: 0.5
                    }
                ]
            });
            setShowStat(true);


        }).catch((e) => {
            setShowStat(false);
        });
    }




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
        <>
            <Toast ref={toast} />
            <div className="col-12 md:col-8">
                <div className="card widget-visitor-graph">
                    <div className="card-header">
                        <span>عدد المودعين الداخلون / المغادرون سنويا</span>

                    </div>

                    <div className="graph">
                        <h6>Valeur</h6>
                        {showStat ?
                            <Chart ref={visitor} type="bar" data={visitorChart} options={visitorChartOptions} id='chart' ></Chart> : <span>loading chart</span>}
                        <h5>السنة: [{value5[0]+1996}, {value5[1]+1996}]</h5>
                        <Slider min={0} max={30} value={value5} onChange={(e) => setValue5(e.value) } range />
                    </div>
                </div>
            </div>


            <div className="col-12 md:col-4">
                <div className="card widget-visitor-graph">
                    <div className="card-header">
                        <span>عدد المودعين الداخلون / المغادرون سنويا</span>
                    </div>

                    <div className="graph">

                        <DataTable value={data} selectionMode="single" selection={selectedRow} onSelectionChange={e => setSelectedRow(e.value)} dataKey="years" responsiveLayout="scroll"
                            onRowSelect={onRowSelect} onRowUnselect={onRowUnselect}>
                            <Column field="years" header="السنة"></Column>
                            <Column field="entrantCount" header="الداخلون"></Column>
                            <Column field="sortatntCount" header="المغادرون"></Column>

                        </DataTable>
                    </div>
                </div>
            </div>


                        <Dialog header="مقارنة" visible={displayBasic} style={{ width: '35vw' }} modal footer={basicDialogFooter} onHide={() => setDisplayBasic(false)}>
                            <p>
                               عدد المودعين (الداخلون / المغادرون) {years}
                            </p>
                            <Chart type="bar" data={entrantYears} />
                            <Chart type="bar" data={sortantYears} />
                        </Dialog>


        </>

    )


});
