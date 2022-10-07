import React, { useState, useRef, useEffect } from 'react';
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';

console.log("BlocArrage component");

export const QuartlyWin = () => {
    return (

        <>
        <div className="col-12 md:col-4">
                    <div className="card widget-performance">
                        <div className="header">
                            <span>Quarterly win</span>
                            <p className="subtitle">Top performances</p>
                        </div>
                        <div className="content">
                            <ul>
                                <li className="person-item">
                                    <Avatar image="assets/layout/images/dashboard/ann.png" className="mr-2 p-overlay-badge" shape="circle"><Badge value={1} /></Avatar>
                                    <div className="person-info">
                                        <div className="amount">$94,815</div>
                                        <div className="name">Ann Vaccaro</div>
                                    </div>
                                </li>
                                <li className="person-item">
                                    <Avatar image="assets/layout/images/dashboard/miracle.png" className="mr-2 p-overlay-badge" shape="circle"><Badge value={2} /></Avatar>
                                    <div className="person-info">
                                        <div className="amount">$78,985</div>
                                        <div className="name">Miracle Aminoff</div>
                                    </div>
                                </li>
                                <li className="person-item">
                                    <Avatar image="assets/layout/images/dashboard/kaylynn.png" className="mr-2 p-overlay-badge" shape="circle"><Badge value={3} /></Avatar>
                                    <div className="person-info">
                                        <div className="amount">$53,611</div>
                                        <div className="name">Kaylynn Geidt</div>
                                    </div>
                                </li>
                                <li className="person-item">
                                    <Avatar image="assets/layout/images/dashboard/angel.png" className="mr-2 p-overlay-badge" shape="circle"><Badge value={4} /></Avatar>
                                    <div className="person-info">
                                        <div className="amount">$25,338</div>
                                        <div className="name">Angel Rosser</div>
                                    </div>
                                </li>
                                <li className="person-item">
                                    <Avatar image="assets/layout/images/dashboard/cristofer.png" className="mr-2 p-overlay-badge" shape="circle"><Badge value={5} /></Avatar>
                                    <div className="person-info">
                                        <div className="amount">$15,989</div>
                                        <div className="name">Cristofer Mango</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
        </>

    )


}
