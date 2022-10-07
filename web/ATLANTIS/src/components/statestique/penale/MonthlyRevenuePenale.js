import React, { useState, useRef, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import { Dropdown } from 'primereact/dropdown';
import { fetchDataAgeInf, fetchDataAgeSup, fetchDataAgeBetween } from '../../../api/statPenale/StatGeneral';
import { LineChartAge } from './lineChartAge/LineChartAge';



export const MonthlyRevenuePenale = ({ keycloaks }) => {

    const [isLoading, setIsLoading] = useState(false);

    const [labeldata, setLabeldate] = useState(['أقل من 18', 'ما بين 19 و 30 سنة', 'ما بين 31 و 40 سنة', 'ما بين 41 و 50 سنة', 'ما بين 51 و 60 سنة', 'اكبر من 60 سنة']);


    let [datamale, setDatamale] = useState([]);
    let [datafemale, setDatafemale] = useState([]);


    useEffect(async () => {

        setIsLoading(false);


        setDatamale([]);
        setDatafemale([]);

        await markerData("inf", 18, "", "");
        await markerData("between", "", 19, 30);
        await markerData("between", "", 31, 40);
        await markerData("between", "", 41, 50);
        await markerData("between", "", 51, 60);
        await markerData("sup", 60, "", "");






        setDatamale(datamale);
        setDatafemale(datafemale);
        setIsLoading(true);

    }, []);

    const markerData = async (type, age, age1, age2) => {
        if (type === 'inf') {


            fetchDataAgeInf(keycloaks, age).then((response) => {
                console.log(response.data);


                for (var i = 0; i < response.data.length; i++) {
                    //console.log("response.data[i].count"+response.data[i].count);            
                    if (response.data[i].tcodsex === "1") {
                        datamale.push(Number(response.data[i].count));

                    } else {
                        datafemale.push(Number(response.data[i].count));


                    }
                }
                //console.log(female); 
                //console.log(male);              
            }).catch((e) => {
                console.log(e);

            })
        }

        if (type === 'sup') {
            fetchDataAgeSup(keycloaks, age).then((response) => {
                console.log(response.data);
                for (var i = 0; i < response.data.length; i++) {
                    //console.log("response.data[i].count"+response.data[i].count);  
                    if (response.data[i].tcodsex === "1") {
                        datamale.push(Number(response.data[i].count));

                    } else {
                        datafemale.push(Number(response.data[i].count));

                    }
                }
                //console.log(female); 
                //console.log(male);          
            }).catch((e) => {
                console.log(e);

            })
        }

        if (type === 'between') {
            fetchDataAgeBetween(keycloaks, age1, age2).then((response) => {
                console.log(response.data);
                for (var i = 0; i < response.data.length; i++) {
                    //console.log("response.data[i].count"+response.data[i].count);  
                    if (response.data[i].tcodsex === "1") {
                        datamale.push(Number(response.data[i].count));

                    } else {
                        datafemale.push(Number(response.data[i].count));

                    }

                }

            }).catch((e) => {
                console.log(e);

            })
        }



    }


    return (

        <>
            <div className="col-12 md:col-8">
                <div className="card widget-revenue-graph">
                <div className="card-header">
                            <span>Monthly revenue</span>
                           
                        </div>
                    {isLoading
                        ? <div className="graph"><LineChartAge male={datamale} female={datafemale} labelages={labeldata} /></div>
                        : <div />
                    }

                </div>
            </div>
        </>

    )


}
