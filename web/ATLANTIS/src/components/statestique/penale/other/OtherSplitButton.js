import React, { useState, useRef, useEffect } from 'react';
import { SpeedDial } from 'primereact/speeddial';
import { Toast } from 'primereact/toast';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';

import { Terrorisme } from './Terrorisme';
import '../css/SpeedDial.css'




export const OtherSplitButton = ({ keycloaks }) => {
    const [visible, setVisible] = useState(false);
    const toast = useRef(null);
    
    function struct() { 
        return (
            <Terrorisme keycloaks={keycloaks}/>
        );
    }
    
    
    const confirmPosition = (position) => {
        confirmDialog({

            message: struct(),
            header: 'توزيع المساجين المتعلقة بهم قضايا ارهابية',
            //icon: 'pi pi-info-circle',
            position
        });
    };

    const items = [
        {
            label: 'Add',
            icon: 'pi pi-pencil',

            command: () => {
                confirmPosition('top');
                //toast.current.show({ severity: 'info', summary: 'Add', detail: 'Data Added' });
            }
        },
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                //toast.current.show({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-trash',

            command: () => {
                //toast.current.show({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'Upload',
            icon: 'pi pi-upload',
            command: () => {
                //window.location.hash = "/fileupload"
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                //window.location.href = 'https://facebook.github.io/react/'
            }
        }
    ];

    return (

        <>
            <Toast ref={toast} />

            <div className="col-12 md:col-12">
                <div className="speeddial-linear-demo" style={{ position: 'relative', height: '50px' }}>
                    <SpeedDial model={items} direction="right" />
                </div>
                <ConfirmDialog style={{ width: '65vw' }} visible={visible} onHide={() => setVisible(false)} 
                    header="Confirmation" icon="pi pi-exclamation-triangle"  />
            </div>






        </>

    )


}
