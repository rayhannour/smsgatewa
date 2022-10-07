import React, { useState, useRef } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';

import { fetchDataTetatTest, fetchDataTetatList, sendSmgsShudler } from './api/fetchDataTetat';
import { InputNumber } from 'primereact/inputnumber';
import "./api/style.css";
import ExcelPage from "./api/ExcelPage";
import { Dialog } from 'primereact/dialog';
import { DataTableFilterSms } from './DataTableFilterSms';
import { ListBox } from 'primereact/listbox';

import {Schudler} from './Schudler';

export const FormSmsPenale = () => {
    const textAreaRef = useRef(null);
    const [selectedCountries, setSelectedCountries] = useState(null);
    const countryTemplate = (option) => {
        return (
            <div className="country-item">
                <div>{option}</div>
            </div>
        );
    }
    const [showStat, setShowStat] = useState(false);
    const [displayBasic, setDisplayBasic] = useState(false);

    const [displayBasicSchudler, setDisplayBasicSchudler] = useState(false);

    const [position, setPosition] = useState('center');
    const [positionSchudler, setPositionSchudler] = useState('center');
    const dialogFuncMap = {
        'displayBasic': setDisplayBasic

    }

    const dialogFuncMapSchudler = {
        'displayBasicSchudler': setDisplayBasicSchudler

    }
    const onClickSchudler = (name, position) => {
        dialogFuncMapSchudler[`${name}`](true);
        if (position) {
            setPositionSchudler(position);
        }
    }


    let [dataJson, setDataJson] = useState([]);
    let [colomnJson, setColomnJson] = useState([]);
    
    const onClick = (name, position) => {
        dialogFuncMap[`${name}`](true);
        if (position) {
            setPosition(position);
        }
    }

    const onHide = (name) => {
        dialogFuncMap[`${name}`](false);
    }

    const onHideSchudler = (name) => {
        dialogFuncMapSchudler[`${name}`](false);
    }

    const [numberPhone, setNumberPhone] = useState(null);
    const [textHeader, setTextHeader] = useState('');
    let [textSend, setTextSend] = useState('');

    const [datajs, setDatajs] = useState('');
    const [fixTunisia, setFixTunisia] = useState('216');

    const hundleSendSms = async (e) => {
        e.persist();
        await dataJson.map((r, idx) => {
            let text = textAreaRef.current.value;
            let mobile = "";

            let keys = Object.keys(r);

            keys.map((key) => {
                console.log(key, r[key]);
                text = text.replace("%" + key + "%", r[key]);
                setTextSend(text);
                mobile = r['MSICDN'];
            });

            fetchDataTetatList(r, fixTunisia + mobile, textHeader + ' : ' + '\n' + text).then((response) => {
                console.log(response)
            }).catch((e) => {
                setDatajs("ERROR");
            })

        });
    };



    const [jsonsmslist, setJsonssmslist] = useState([]);

   

    const hundleSendSmsTest = async (e) => {
        e.persist();
        let text = textAreaRef.current.value;

        let resmsicdn = false;

        await dataJson.map((r, idx) => {
            if (idx == 0) {
                let keys = Object.keys(r);
                keys.map((key) => {
                    console.log(key, r[key]);
                    text = text.replace("%" + key + "%", r[key]);
                    setTextSend(text);
                    if (key.toUpperCase.toString() == "MSICDN") {
                        resmsicdn = true;
                    }
                });

                if (!resmsicdn) {
                    alert("AUCUN CHAMP MSICDN");
                    return;
                }
                return;
            }
        });




        fetchDataTetatTest(fixTunisia + numberPhone, textHeader + ' : ' + '\n' + text).then((response) => {

            console.log(response)
        }).catch((e) => {
            setDatajs("ERROR");
        })
    };



    const callbackFunction = async (childData, colomdata) => {
        let dds = childData;
        dataJson = dds;
        setDataJson(dataJson);

        let ddscolomnnamer = colomdata;
        colomnJson = ddscolomnnamer;
        setColomnJson(colomnJson);

        setShowStat(true);

        onHide('displayBasic');

    }


    const startPosition = async (e) => {
        e.persist();
        var curPos = textAreaRef.current.selectionStart;
        let x = textAreaRef.current.value;
        let text_to_insert = " %" + selectedCountries + "% ";

        if (selectedCountries == null) {
            return;
        } else {
            if (x.indexOf(text_to_insert) !== -1) {
                return;
            }
        }


        textAreaRef.current.value = x.slice(0, curPos) + text_to_insert + x.slice(curPos);
        setTextSend((p) => textAreaRef.current.value);

    };





   
    return (
        <div className="grid" dir='rtl' >



            <div className="col-12 md:col-6">
                <div className="card p-fluid">
                    <h5>SMS PENALE (Tunisia Only : 216)</h5>
                    <div className="field">
                        <label htmlFor="name1">Number Phone   'MSICDN'</label>
                        <div className="p-inputgroup">

                            <span className="p-inputgroup-addon">+216</span>
                            <InputNumber value={numberPhone} placeholder="NUBER PHONE" style={{ color: 'green' }} onChange={(e) => setNumberPhone(e.value)} />
                            <span className="p-inputgroup-addon">TN</span>
                            <Button id="sendsmstest" label="Send Sms (Only Test)" onClick={hundleSendSmsTest}></Button>
                        </div>

                        <div className="field col">
                            <ListBox value={selectedCountries} options={colomnJson} onChange={(e) => setSelectedCountries(e.value)} filter optionLabel="name"
                                itemTemplate={countryTemplate} listStyle={{ maxHeight: '100px' }} />
                                
                        </div>
                        <div className="field col">
                            
                                <Button id="sendsmsschudler" label="Shudler" onClick={() => onClickSchudler('displayBasicSchudler')}></Button>
                        </div>


                    </div>

                </div>


            </div>
            <div className="col-12 md:col-6">

                <div className="card p-fluid">
                    <h5>Message Text</h5>
                    <div className="formgrid grid">
                        <div className="field col">
                            <label htmlFor="name2">Header Text</label>
                            <InputText id="header" onChange={(e) => setTextHeader(e.target.value)} />
                        </div>
                        <div className="field col">

                        </div>
                        <div className="field col-12">
                            <label htmlFor="email2">Subject</label>
                            <InputTextarea ref={textAreaRef} id="data" rows="5" onClick={startPosition} />

                        </div>
                    </div>
                </div>



            </div>


            <div className="col-12">
                <div className="card">
                    <h5>Advanced</h5>
                    <div className="p-fluid formgrid grid">

                        <div className="field col-12">

                            <Button id="sendsms" label="Open File" onClick={() => onClick('displayBasic')}></Button>

                            {showStat ? <DataTableFilterSms dataJsons={dataJson} colomnJsons={colomnJson} /> : <div />}



                            <Dialog header="Header" visible={displayBasic} style={{ width: '95vw', backgroundColor: '#FFFFFF' }} onHide={() => onHide('displayBasic')}>
                                <p style={{ backgroundColor: 'gray' }}><ExcelPage parentCallback={callbackFunction} /></p>
                            </Dialog>



                            
                            
                            <Dialog header="Header" style={{ width: '65vw' }} visible={displayBasicSchudler}  onHide={() => onHideSchudler('displayBasicSchudler')}>
                                <p ><Schudler dataJson={dataJson} jsonsmslist={jsonsmslist} textAreaRef={textAreaRef} textHeader={textHeader} fixTunisia={fixTunisia} /></p>
                            </Dialog>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}