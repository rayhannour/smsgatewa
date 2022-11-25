import React, { useEffect, useState } from 'react';
import { fetchDataStatGeneral } from './api/StatGeneral';
import { DataTable } from 'primereact/datatable';
import { ColumnGroup } from 'primereact/columngroup';
import { Row } from 'primereact/row';
import { Column } from 'primereact/column';

import { ChartDemoMineurs } from './ChartDemoMineurs';
export const StatMineur = () => {
    const [showStat, setShowStat] = useState(false);
    let [data, setData] = useState([]);


    const [totalJuger, setTotalJuger] = useState(0);
    const [totalArreter, setTotalArreter] = useState(0);
    const [totalPrimaire, setTotalPrimaire] = useState(0);
    const [totalRecie, setTotalRecie] = useState(0);

    useEffect(async () => {

        setData([]);
        setShowStat(false);
        await chargingData('11');
        await chargingData('12');
        await chargingData('13');
        await chargingData('14');
        await chargingData('16');

       


        setShowStat(true);
        
    }, []);

    useEffect(async () => {
        setData(data);
        
    }, [showStat]);

    const libellePrison = (key) => {
        if (key === '11') {
            return 'المروج';
        } else if (key === '12') {
            return 'سيدي الهاني';
        } else if (key === '13') {
            return 'سوق الجديد';
        } else if (key === '14') {
            return 'المغيرة';
        } else if (key === '16') {
            return 'مجاز الباب';
        }
        return '';
    }


const [names,setNames]=useState([]);
const [jugers,setJugers]=useState([]);
const [arreters,setArreters]=useState([]);

const [primaires,setPrimaires]=useState([]);
const [recies,setRecies]=useState([]);



    const chargingData = async (key) => {
        fetchDataStatGeneral(key).then((response) => {

            names.push(libellePrison(key));
            setNames(names);

            jugers.push(response.data.result.nbrJuge);
            setJugers(jugers);

            arreters.push(response.data.result.nbrArret);
            setArreters(arreters);

            primaires.push(response.data.result.nbrDebutant);
            setPrimaires(primaires);

            recies.push(response.data.result.nbrAncien);
            setRecies(recies);

           
           



            let prison = {
                key: key,
                name: libellePrison(key),
                juger: response.data.result.nbrJuge,
                arreter: response.data.result.nbrArret,
                primaire: response.data.result.nbrDebutant,
                recie: response.data.result.nbrAncien,

                age13: response.data.result.nbrAge13,
                age14: response.data.result.nbrAge14,
                age15: response.data.result.nbrAge15,
                age16: response.data.result.nbrAge16,
                age17: response.data.result.nbrAge17,
                age18: response.data.result.nbrAge18,


            };
            //totalJuger=totalJuger+response.data.result.nbrJuge;
            //totalArreter=totalArreter+response.data.result.nbrArret;
           // totalPrimaire=totalPrimaire+response.data.result.nbrDebutant;
            //totalRecie=totalRecie+response.data.result.nbrAncien;


            setTotalJuger((totalJuger)=>totalJuger+response.data.result.nbrJuge);
            setTotalArreter((totalArreter)=>totalArreter+response.data.result.nbrArret);
            setTotalPrimaire((totalPrimaire)=>totalPrimaire+response.data.result.nbrDebutant);
            setTotalRecie((totalRecie)=>totalRecie+response.data.result.nbrAncien);
            
          
            data.push(prison);

        }).catch((e) => {

        });
    }
    let footerGroupJugerArreter = <ColumnGroup>
        <Row>
            <Column footer="Totals:" colSpan={1} footerStyle={{ textAlign: 'right' }} />
            <Column footer={totalJuger} style={{textAlign:'center'}}/>
            <Column footer={totalArreter} style={{textAlign:'center'}}/>
            <Column footer={totalJuger+totalArreter} style={{textAlign:'center'}}/>
        </Row>
    </ColumnGroup>;

let footerGroupPrimaireRecie = <ColumnGroup>
<Row>
    <Column footer="Totals:" colSpan={1} footerStyle={{ textAlign: 'right' }} />
    <Column footer={totalPrimaire} style={{textAlign:'center'}}/>
    <Column footer={totalRecie} style={{textAlign:'center'}}/>
    <Column footer={totalPrimaire+totalRecie} style={{textAlign:'center'}}/>
</Row>
</ColumnGroup>;    

    return (
<>
        <div className="grid">
            <div className="col-12 md:col-6">
                <div className="card p-fluid" dir='rtl'>
                    <DataTable value={data} selectionMode="single" responsiveLayout="scroll" style={{ __dirname: 'rtl' }} footerColumnGroup={footerGroupJugerArreter}>
                        <Column field="name" header="Name" style={{textAlign:'right'}}></Column>
                        <Column field="juger" header="Juger" style={{textAlign:'right'}}></Column>
                        <Column field="arreter" header="Arreter" style={{textAlign:'right'}}></Column>
                        <Column header="Total" body={(data) => data.juger + data.arreter} style={{textAlign:'right'}}></Column>

                    </DataTable>
                </div>


            </div>

            <div className="col-12 md:col-6">
                <div className="card p-fluid" dir='rtl'>

                    <DataTable value={data} selectionMode="single" responsiveLayout="scroll" footerColumnGroup={footerGroupPrimaireRecie}>
                        <Column field="name" header="Name"  style={{textAlign:'right'}}></Column>
                        <Column field="primaire" header="Primaire" style={{textAlign:'right'}}></Column>
                        <Column field="recie" header="Recie" style={{textAlign:'right'}}></Column>
                        <Column header="Total" body={(data) => data.primaire + data.recie} style={{textAlign:'right'}}></Column>

                    </DataTable>
                </div>

            </div>

        </div>

        {data.length>4 ?
                            <ChartDemoMineurs data={data} names={names} jugers={jugers}  arreters={arreters} primaires={primaires} recies={recies}   /> : null}

</>






    );

}