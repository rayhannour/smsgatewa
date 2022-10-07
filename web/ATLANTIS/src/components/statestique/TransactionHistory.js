import React, { useState, useRef, useEffect } from 'react';
import { Timeline } from 'primereact/timeline';

const timelineEvents = [
    {
        transaction: 'Payment from #28492', amount: '+$250.00', date: 'June 13, 2020 11:09 AM',
        icon: 'pi pi-check', iconColor: '#0F8BFD', amountColor: '#00D0DE'
    },
    {
        transaction: 'Process refund to #94830', amount: '-$570.00', date: 'June 13, 2020 08:22 AM',
        icon: 'pi pi-refresh', iconColor: '#FC6161', amountColor: '#FC6161'
    },
    {
        transaction: 'New 8 user to #5849', amount: '+$50.00', date: 'June 12, 2020 02:56 PM',
        icon: 'pi pi-plus', iconColor: '#0BD18A', amountColor: '#0BD18A'
    },
    {
        transaction: 'Payment from #3382', amount: '+$3830.00', date: 'June 11, 2020 06:11 AM',
        icon: 'pi pi-check', iconColor: '#0F8BFD', amountColor: '#00D0DE'
    },
    {
        transaction: 'Payment from #4738', amount: '+$845.00', date: 'June 11, 2020 03:50 AM',
        icon: 'pi pi-check', iconColor: '#0F8BFD', amountColor: '#00D0DE'
    },
    {
        transaction: 'Payment failed form #60958', amount: '$1450.00', date: 'June 10, 2020 07:54 PM',
        icon: 'pi pi-exclamation-triangle', iconColor: '#EC4DBC', amountColor: '#EC4DBC'
    },
    {
        transaction: 'Payment from #5748', amount: '+$50.00', date: 'June 09, 2020 11:37 PM',
        icon: 'pi pi-check', iconColor: '#0F8BFD', amountColor: '#00D0DE'
    },
    {
        transaction: 'Removed 32 users from #5849', amount: '-$240.00', date: 'June 09, 2020 08:40 PM',
        icon: 'pi pi-minus', iconColor: '#FC6161', amountColor: '#FC6161'
    },
];


console.log("TransactionHistory component");

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
        <div className="p-d-flex p-ai-center p-jc-between">
            <p>{item.transaction}</p>
            <h6 style={{ color: item.amountColor }}> {item.amount}</h6>
        </div>
        <span>{item.date}</span>
        </>
    )
}

export const TransactionHistory = () => {
    return (

        <>
        <div className="card widget-timeline">
            <div className="timeline-header p-d-flex p-jc-between p-ai-center">
                <p>Transaction history</p>
                <div className="header-icons">
                    <i className="pi pi-refresh"></i>
                    <i className="pi pi-filter"></i>
                </div>
            </div>
            <div className="timeline-content">
                <Timeline value={timelineEvents} marker={marker} content={content} className="custimized-timeline" />
            </div>
            <div className="timeline-footer p-d-flex p-ai-center p-jc-center">
                <button className="p-link">View all transactions <i className="pi pi-arrow-down"></i></button>
            </div>
        </div>
        </>

    )


}
