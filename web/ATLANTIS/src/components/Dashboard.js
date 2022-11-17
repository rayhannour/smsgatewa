import React, { useState, useRef, useEffect } from 'react';
import { VisitorPenale } from './statestique/penale/VisitorPenale';
import { VisitorEntrantSortantPenale } from './statestique/penale/VisitorEntrantSortantPenale';


import { BlocArragePenale } from './statestique/penale/BlocArragePenale';
import { TransactionHistoryPenale } from './statestique/penale/TransactionHistoryPenale';
import { CountryDistributionPenale } from './statestique/penale/CountryDistributionPenale';
import { MonthlyRevenuePenale } from './statestique/penale/MonthlyRevenuePenale';
import { YearlyWin } from './statestique/YearlyWin';
import { QuartlyWin } from './statestique/QuartlyWin';
import { WeeklyCostumers } from './statestique/WeeklyCostumers';
import { WeeklyTarget } from './statestique/WeeklyTarget';
import { TopCostumers } from './statestique/TopCostumers';
import { useKeycloak } from "@react-keycloak/web";
import { MonthlyRevenue } from './statestique/MonthlyRevenue';
import HeroSection from '../pages/Herosection';



import { Statispr, GetStatGlobalRequest, GetStatListResponse, GetStatJourRequest, GetStatJourResponse } from '../protopb/statisprison_pb';
import { StatisprisonServiceClient } from '../protopb/statisprison_grpc_web_pb';

import { OtherSplitButton } from './statestique/penale/other/OtherSplitButton';



export const Dashboard = () => {
    const { keycloak } = useKeycloak();

    const grpcCall = () => {

        var request = new GetStatGlobalRequest();

        var metadata = { 'custom-header-1': 'value1' };
        var echoService = new StatisprisonServiceClient(
            'http://localhost:8888');

        console.log(echoService);

        echoService.getStatispr(
            request,
            {},
            (err, response) => {
                console.log(response)
            }
        );

    }
    grpcCall();



    return (
        <>

            <div className="layout-dashboard">
                <div className="grid">

                    <OtherSplitButton keycloaks={keycloak} />


                    <BlocArragePenale keycloaks={keycloak} />
                    <VisitorPenale keycloaks={keycloak} />

                    <div className="col-12 md:col-4">
                        <TransactionHistoryPenale keycloaks={keycloak} />
                    </div>

                    <CountryDistributionPenale keycloaks={keycloak} />

                    <MonthlyRevenuePenale keycloaks={keycloak} />
                    <VisitorEntrantSortantPenale keycloaks={keycloak} />

                    <YearlyWin />

                    <QuartlyWin />

                    

                    <TopCostumers />
                </div>
            </div>
        </>
    )


}
