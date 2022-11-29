import React, { useState, useRef, useEffect } from 'react';

import { Dialog } from 'primereact/dialog';

import { Terrorisme } from './Terrorisme';
import { Etranger } from './Etranger';
import { EtrangerAfricain } from './EtrangerAfricain';
import { Button } from 'primereact/button';



export const OtherSplitButtonRule = ({ keycloaks }) => {




    const [displayTerrorisme, setDisplayTerrorisme] = useState(false);
    const [displayEtranger, setDisplayEtranger] = useState(false);
    const [displayEtrangerAfricain, setDisplayEtrangerAfricain] = useState(false);
    
    const [position, setPosition] = useState('center');

    const dialogFuncMap = {

        'displayTerrorisme': setDisplayTerrorisme,
        'displayEtranger': setDisplayEtranger,
        'displayEtrangerAfricain': setDisplayEtrangerAfricain,


    }

    const onClick = (name, position) => {
        dialogFuncMap[`${name}`](true);

        if (position) {
            setPosition(position);
        }
    }

    const onHide = (name) => {
        dialogFuncMap[`${name}`](false);
    }

    const [space, setSpace] = useState('    ');

    return (
        <>
            <div className="p-grid">
                <div className="col-12 md:col-12">
                    <div className="card">
                        <Button label="الإرهاب" className="p-button-outlined p-button-warning p-mr-2 p-mb-2" onClick={() => onClick('displayTerrorisme', 'top')} />
                       <span>{space}</span> <Button label="الأجانب" className="p-button-outlined p-button-help p-mr-2 p-mb-2" onClick={() => onClick('displayEtranger', 'top')} />
                       <span>{space}</span><Button label="أفارقة أجانب" className="p-button-outlined p-button-danger p-mr-2 p-mb-2" onClick={() => onClick('displayEtrangerAfricain', 'top')}/>
                        <Dialog header="الإرهاب" visible={displayTerrorisme} position={position} modal style={{ width: '85vw' }} onHide={() => onHide('displayTerrorisme')}
                            draggable={false} resizable={false}>
                            <Terrorisme keycloaks={keycloaks} />
                        </Dialog>
                        <Dialog header="الأجانب" visible={displayEtranger} position={position} modal style={{ width: '85vw' }} onHide={() => onHide('displayEtranger')}
                            draggable={false} resizable={false}>
                            <Etranger keycloaks={keycloaks} />
                        </Dialog>
                        <Dialog header="أفارقة أجانب" visible={displayEtrangerAfricain} position={position} modal style={{ width: '85vw' }} onHide={() => onHide('displayEtrangerAfricain')}
                            draggable={false} resizable={false}>
                            <EtrangerAfricain keycloaks={keycloaks} />
                        </Dialog>                        
                    </div>
                </div>
            </div>
        </>

    )


}
