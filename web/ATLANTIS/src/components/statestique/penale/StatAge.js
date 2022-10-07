import React, { useState, useRef, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import { Dropdown } from 'primereact/dropdown';
import { fetchDataAgeInf, fetchDataAgeSup, fetchDataAgeBetween } from '../../../api/statPenale/StatGeneral';
import {LineChartAge} from './lineChartAge/LineChartAge';
import { sync } from 'resolve';


export const StaAges = ({keycloaks}) => {
    
    let [labelage, setLabelage] = useState([]);
    const [showStat, setShowStat] = useState(false);


    var dataPoints =[];
    var male =[];
    var female =[];

    const [male, setSMale] = useState([]);
    const [female, setFemale] = useState([]);
    
    const markerData =async (type, age, age1, age2) => {
        if (type === 'inf') {

            
            fetchDataAgeInf(keycloaks,age).then((response) => {
                console.log(response.data);
                if( response.data.length===0){
                    //male.push(0);
                    //female.push(0);

                    setSMale(oldArray => [...oldArray, 0]);
                    setFemale(oldArray => [...oldArray, 0]);
                    
                }else if( response.data.length===1){
                    if(response.data[i].tcodsex==="1"){
                        //female.push(0); 
                        setFemale(oldArray => [...oldArray, 0]);                       
                    }else{
                        //male.push(0);  
                        setSMale(oldArray => [...oldArray, 0]);                      
                    }
                
                }

                for (var i = 0; i < response.data.length; i++) {    
                    //console.log("response.data[i].count"+response.data[i].count);            
                    if(response.data[i].tcodsex==="1"){
                        //male.push(Number(response.data[i].count));
                        setSMale(oldArray => [...oldArray, Number(response.data[i].count)]);
                    }else{
                        //female.push(Number(response.data[i].count));
                        setFemale(oldArray => [...oldArray, Number(response.data[i].count)]);  
                        
                    }
                }   
                //console.log(female); 
                //console.log(male);              
            }).catch((e) => {
                console.log(e); 
                setShowStat(false);
            })
        }

        if (type === 'sup') {
            fetchDataAgeSup(keycloaks,age).then((response) => {
                console.log(response.data);
                for (var i = 0; i < response.data.length; i++) {
                    //console.log("response.data[i].count"+response.data[i].count);  
                    if(response.data[i].tcodsex==="1"){
                        //male.push(Number(response.data[i].count));
                        setSMale(oldArray => [...oldArray, Number(response.data[i].count)]);
                    }else{
                        //female.push(Number(response.data[i].count));
                        setFemale(oldArray => [...oldArray, Number(response.data[i].count)]);  
                    }
                }       
                //console.log(female); 
                //console.log(male);          
            }).catch((e) => {
                console.log(e); 
                setShowStat(false);
            })
        }

        if (type === 'between') {
            fetchDataAgeBetween(keycloaks,age1,age2).then((response) => {
                console.log(response.data);
                for (var i = 0; i < response.data.length; i++) {
                    //console.log("response.data[i].count"+response.data[i].count);  
                    if(response.data[i].tcodsex==="1"){
                        //male.push(Number(response.data[i].count));
                        setSMale(oldArray => [...oldArray, Number(response.data[i].count)]);
                    }else{
                        //female.push(Number(response.data[i].count));
                        setFemale(oldArray => [...oldArray, Number(response.data[i].count)]);  
                    }

                } 
                             
            }).catch((e) => {
                console.log(e); 
                setShowStat(false);
            })
        }
        
        console.log(female.length); 
        console.log(male.length);   
       
    }
    useEffect(async () => {        
        reloadData();      
    }, []);

 let reloadData=async ()=>{
     setLabelage([]);
    

     setShowStat(false);
        
         labelage.push("أقل من 18");
         labelage.push("ما بين 19 و 30");
         labelage.push("ما بين 31 و 40");
         labelage.push("ما بين 41 و 50");
         labelage.push("ما بين 51 و 60");
         labelage.push("أكبر من 60");

         

         await markerData ("inf", 18, "", "") ;
         await markerData ("between", "", 19, 30) ;
         await markerData ("between", "", 31, 40) ;
         await markerData ("between", "", 41, 50) ;
         await markerData ("between", "",51, 60) ;
         await markerData ("sup", 60, "", "") ;

         setLabelage(labelage);

         setShowStat(true);
        
}

    const revenueMonth = [
        { name: 'January - July 2021', code: '0' },
        { name: 'August - December 2020', code: '1' }
    ];
    const [selectedRevenueMonth, setSelectedRevenueMonth] = useState(revenueMonth[0]);
    const changeRevenueChart = (event) => {
        setSelectedRevenueMonth(event.value);
        
        setShowStat(true);

        //revenue.current.refresh();
    }
    return (

        <>
        <div className="p-col-12 p-md-8">
            <div className="card widget-revenue-graph">
            <div className="card-header">
                    <span>Age line pics </span>
                    <Dropdown options={revenueMonth} value={selectedRevenueMonth} optionLabel="name" onChange={changeRevenueChart}></Dropdown>
                </div>            
                <div className="graph">
                {showStat ?
                        <LineChartAge male={male} female={female} labelages={labelage} showStat={showStat} dataPoints={dataPoints}/> : <span>loading chart</span>}
                
                </div>
            </div>
        </div>
        </>

    )


}
