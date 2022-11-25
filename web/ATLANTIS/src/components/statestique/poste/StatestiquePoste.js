import React, { useState, useRef, useEffect } from 'react';
import { BlocArragePoste } from './BlocArragePoste';




export const StatestiquePoste = ({keycloak}) => {
  


    return (
        <>

            <div className="layout-dashboard">
                <div className="grid">                                                            
                <BlocArragePoste keycloaks={keycloak} />
                    
                </div>
            </div>
        </>
    )


}
