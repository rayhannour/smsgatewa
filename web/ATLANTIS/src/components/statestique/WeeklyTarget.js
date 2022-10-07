import React, { useState, useRef, useEffect } from 'react';
import { ProgressBar } from 'primereact/progressbar';

console.log("WeeklyTarget component");
export const WeeklyTarget = () => {
    return (

        <>
       <div className="col-12 lg:col-4">
                    <div className="card widget-target">
                        <div className="card-header">
                            <span>Weekly target</span>
                        </div>
                        <div className="content">
                            <h3>1232 Users</h3>
                            <span className="rate">%3.5 <i className="pi pi-arrow-up"></i><span>  than last week</span></span>
                        </div>
                        <div className="values">
                            <div className="item">
                                <span>51%</span>
                                <ProgressBar value={51} showValue={false}></ProgressBar>
                                <span className="day">Thu</span>
                            </div>
                            <div className="item">
                                <span>68%</span>
                                <ProgressBar value={68} showValue={false}></ProgressBar>
                                <span className="day">Fri</span>
                            </div>
                            <div className="item">
                                <span>74%</span>
                                <ProgressBar value={74} showValue={false}></ProgressBar>
                                <span className="day">Sat</span>
                            </div>
                            <div className="item">
                                <span>61%</span>
                                <ProgressBar value={61} showValue={false}></ProgressBar>
                                <span className="day">Sun</span>
                            </div>
                            <div className="item success">
                                <span>100%</span>
                                <ProgressBar value={100} showValue={false}></ProgressBar>
                                <span className="day">Mon</span>
                            </div>
                            <div className="item">
                                <span>70%</span>
                                <ProgressBar value={70} showValue={false}></ProgressBar>
                                <span className="day">Tue</span>
                            </div>
                            <div className="item today">
                                <span>22%</span>
                                <ProgressBar value={22} showValue={false}></ProgressBar>
                                <span className="day">Today</span>
                            </div>
                        </div>
                    </div>
                </div>
        </>

    )


}
