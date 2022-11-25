import React, { useState, useEffect } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import { ChartYearsMounth } from './ChartYearsMounth';

export const HeaderYears = ({ keycloaks }) => {



    return (
        <div className="p-grid">
            <div className="p-col-12">
                <div className="card">
                    <h5>تطور عمليات التحويل البريدي</h5>
                    <TabView className="tabview-header-icon">
                        <TabPanel header="2022" leftIcon="pi pi-calendar">
                            <ChartYearsMounth keycloaks={keycloaks} year="2022" />
                        </TabPanel>
                        <TabPanel header="2021" leftIcon="pi pi-calendar">
                            <ChartYearsMounth keycloaks={keycloaks} year="2021" />
                        </TabPanel>
                        <TabPanel header="2020" leftIcon="pi pi-calendar">
                            <ChartYearsMounth keycloaks={keycloaks} year="2020" />
                        </TabPanel>
                    </TabView>
                </div>

            </div>
        </div>
    );

}