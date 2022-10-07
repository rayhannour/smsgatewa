import React, { useState, useRef, useEffect } from 'react';
import { Timeline } from 'primereact/timeline';

import { fetchDataPrison } from '../../../api/statPenale/StatGeneral';
import { any } from 'prop-types';

export const TransactionHistoryPenale = ({ keycloaks }) => {
    const [timelineEvents, setTimelineEvents] = useState([]);
    const [timelineEventsFistTen, setTimelineEventsFistTen] = useState([]);
    const [timelineEventsFistTenConst, setTimelineEventsFistTenConst] = useState([]);

    const [showall, setShowall] = useState(false);

    useEffect(() => {
        setShowall(false);
        setTimelineEvents([]);
        setTimelineEventsFistTen([]);
        setTimelineEventsFistTenConst([]);
        fetchDataPrison(keycloaks).then((response) => {
            generateArray(response);
        }).catch((e) => {
            console.log(e);
        })





    }, []);

    const generateArray = (response) => {
        for (var i = 0; i < response.data.length; i++) {

            let datajs = markerColor(response.data[i].tetat, response.data[i].count, response.data[i].maxdetenu);

            timelineEvents.push(datajs);

            if (i <= 8) {
                timelineEventsFistTenConst.push(datajs);
            }




        }
        setTimelineEventsFistTenConst(timelineEventsFistTenConst);
        setTimelineEvents(timelineEvents);
        setTimelineEventsFistTen(timelineEventsFistTenConst);
    }

    const markerColor = (prison, count, maxdetenu) => {
        let datas = any;
        if (count >= maxdetenu) {
            datas = {
                transaction: prison, amount: count, date: maxdetenu,
                icon: 'pi pi-check', iconColor: '#0F8BFD', amountColor: '#00D0DE'
            };
        } else datas = {
            transaction: prison, amount: count, date: maxdetenu,
            icon: 'pi pi-exclamation-triangle', iconColor: '#EC4DBC', amountColor: '#EC4DBC'
        };

        return datas;
    }





    const marker = (item) => {
        return (
            <span className="custom-marker" style={{ backgroundColor: item.iconColor }}>
                <i className={item.icon}></i>
            </span>
        )
    }

    const content = (item) => {
        return (
            <>
                <div className="flex align-items-center justify-content-between">
                    <p>{item.transaction}</p>
                    <h6 style={{ color: item.amountColor }}> {item.amount}</h6>
                </div>
                <span>{item.date}</span>
            </>
        )
    }
    const handleClick = (e) => {
        setShowall(!showall);
        if (!showall) setTimelineEventsFistTen(timelineEvents)
        else setTimelineEventsFistTen(timelineEventsFistTenConst)
    }


    return (

        <>
            


            <div className="card widget-timeline">
                        <div className="timeline-header flex justify-content-between align-items-center">
                            <p>Transaction history</p>
                            <div className="header-icons">
                                <i className="pi pi-refresh"></i>
                                <i className="pi pi-filter"></i>
                            </div>
                        </div>
                        <div className="timeline-content">
                        <Timeline value={timelineEventsFistTen} marker={marker} content={content} className="custimized-timeline" />
                        </div>
                        <div className="timeline-footer flex align-items-center justify-content-center">
                        <button className="p-link" onClick={handleClick} >View all transactions <i className="pi pi-arrow-down"></i></button>
                        </div>
                    </div>



        </>

    )


}
