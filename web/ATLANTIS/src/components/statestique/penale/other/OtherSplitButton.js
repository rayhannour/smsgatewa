import React, { useState, useRef, useEffect } from 'react';
import { SpeedDial } from 'primereact/speeddial';
import { Toast } from 'primereact/toast';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';

import { Terrorisme } from './Terrorisme';
import { Etranger } from './Etranger';
import '../css/SpeedDial.css'
import { Tooltip } from 'primereact/tooltip';



export const OtherSplitButton = ({ keycloaks }) => {
    const [visible, setVisible] = useState(false);
    const toast = useRef(null);
    
    function structTerrorisme() { 
        return (
            <Terrorisme keycloaks={keycloaks}/>
        );
    }
    
    function structEtranger() { 
        return (
            <Etranger keycloaks={keycloaks}/>
        );
    }
    
    const confirmPositionTerrorisme = (position) => {
        confirmDialog({
            message: structTerrorisme(),
            header: 'توزيع المساجين المتعلقة بهم قضايا ارهابية',
            //icon: 'pi pi-info-circle',
            position
        });
    };

    const confirmPositionEtranger = (position) => {
        confirmDialog({
            message: structEtranger(),
            header: 'توزيع المساجين الأجانب',
            //icon: 'pi pi-info-circle',
            position
        });
    };

    const items = [
        {
            label: 'الإرهاب',
            icon: 'pi pi-user-plus',

            command: () => {
                confirmPositionTerrorisme('top');
                //toast.current.show({ severity: 'info', summary: 'Add', detail: 'Data Added' });
            }
        },
        {
            label: 'الأجانب',
            icon: 'pi pi-users',
            command: () => {
                confirmPositionEtranger('bottom');
                //toast.current.show({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
            }
        }
    ];

    return (

        <>
            <Toast ref={toast} />

            <div className="col-12 md:col-12">
                <div className="speeddial-tooltip-demo" style={{ position: 'relative', height: '50px' }}>
                    <Tooltip target=".speeddial-tooltip-demo .speeddial-left .p-speeddial-action" />
                    <SpeedDial model={items} direction="right" className="speeddial-left" buttonClassName="p-button-help" />
                </div>                
                <ConfirmDialog style={{ width: '65vw' }} visible={visible} onHide={() => setVisible(false)} 
                    header="Confirmation" icon="pi pi-exclamation-triangle"  />
            </div>






        </>

    )


}
