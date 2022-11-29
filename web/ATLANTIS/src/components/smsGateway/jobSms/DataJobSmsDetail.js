import React, { useState, useEffect, useRef } from 'react';

import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import { Dropdown } from 'primereact/dropdown';

import { GET_JOBS_QUERY, GET_WEATHER_QUERY } from '../querys/Queries';
import { useLazyQuery } from '@apollo/client';

import { Toast } from 'primereact/toast';
import { classNames } from 'primereact/utils';

import { Button } from 'primereact/button';

import { StatusJob } from './StatusJob';
export const DataJobSmsDetail = () => {


    const toast = useRef(null);

    const [dataJobs, setDataJobs] = useState([]);
    const [detailJob, setDetailJob] = useState([]);
    const [filtersJob, setFiltersJob] = useState({});
    const [filtersDetailJob, setFiltersDetailJob] = useState({});
    const [idJobs, setIdJobs] = useState('');

    const [findAllJobs, { loading, data: dataAll, error: errorAll }] = useLazyQuery(GET_JOBS_QUERY,
        {
            fetchPolicy: 'no-cache',
        }
      , );

    const [findJobById, { data: dataById, error: errorById }] = useLazyQuery(GET_WEATHER_QUERY,
        {
            fetchPolicy: 'no-cache',
        }, {
        variables: { "idJob": idJobs },
    });



    useEffect(() => {
        if (dataAll) {

            setDataJobs(dataAll.jobsmsList);

        }
    }, [dataAll]);




    const [selectedJob, setSelectedJob] = useState(null);
    const [selectedJobEvent, setSelectedJobEvent] = useState(null);


    const [nbrDelivered, setNbrdelivered] = useState(0);
    const [nbrNonDelivered, setNbrNondelivered] = useState(0);
    const [nbrSmsTotal, setNbrSmsTotal] = useState(0);
    const onRowSelect = (event) => {
        setSelectedJobEvent(event.data);
        setDetailJob(event.data.detailJobList);




        toast.current.show({ severity: 'info', summary: 'Job Selected', detail: `Name: ${event.data.name}`, life: 3000 });
    }






    const onRowUnselect = (event) => {
        //alert(selectedJob);
        toast.current.show({ severity: 'warn', summary: 'Job Unselected', detail: `Name: ${event.data.name}`, life: 3000 });
    }


    const verifiedBodyTemplate = (rowData) => {
        let resDelivered = false;
        if (rowData.detailStatus === "DELIVERED") {
            resDelivered = true;
        }

        return <i className={classNames('pi', { 'text-green-500 pi-check-circle': resDelivered, 'text-pink-500 pi-times-circle': !resDelivered })}></i>;
    };

    let eventSource = undefined;
    const [listening, setListening] = useState(false);


    const [jsonObj, setJsonObj] = useState(null);

    const initFilters1 = () => {
        setFiltersJob({
            name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
            jobStatus: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
            idJob: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] }

        });

        setFiltersDetailJob({
            phoneNumber: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
            detailStatus: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
            message: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] }

        });

    };
    useEffect(async () => {

        initFilters1();

        if (!listening) {
            eventSource = new EventSource("http://192.168.100.218:8888/SMGS-SERVICE/api/event/subscribe", {

            });

            eventSource.addEventListener("latestNews", function (event) {
                //alert(event.data);
                const datailJson = JSON.parse(event.data);
                setJsonObj(datailJson);
                //updateObjectInArray  (datailJson)
                //setIdJobs(event.data);
                findAllJobs();
                //findJobById();


            });
            // renderElement();

            setListening(true);
        }
        return () => {
            eventSource.close();

        }

    }, []);
    useEffect(async () => {
        if (jsonObj !== null) {

            updateObjectInArray();
        }
    }, [jsonObj]);


    const updateObjectInArray = () => {
        console.log("datailJson : ", jsonObj);
        console.log("detailStatus : ", jsonObj.detailStatus);
        setDetailJob(current =>
            current.map(obj => {
                if (obj.idDetail === jsonObj.idDetail) {
                    return { ...obj, detailStatus: jsonObj.detailStatus };
                }

                return obj;
            }),
        );
    };
    useEffect(async () => {
        setNbrdelivered(0);
        setNbrNondelivered(0);
        setNbrSmsTotal(0);
        detailJob.map(obj => {
            if (obj.detailStatus === "DELIVERED") {
                setNbrdelivered(nbrDelivered => nbrDelivered + 1);
            } else {
                setNbrNondelivered(nbrNonDelivered => nbrNonDelivered + 1);
            }

            setNbrSmsTotal(nbrSmsTotal => nbrSmsTotal + 1);

        });
    }, [detailJob]);



    const statuses = ['CREATED', 'STARTED', 'TERMINATED', 'FAILED', 'EXPIREDTIME'];
    const statusFilterTemplate = (options) => {
        return <Dropdown value={options.value} options={statuses} onChange={(e) => options.filterCallback(e.value, options.index)} itemTemplate={statusItemTemplate} placeholder="Select a Status" className="p-column-filter" showClear />;
    };


    const statusesdetail = ['CREATED', 'RUNNING', 'VALIDGATEWAY', 'DELIVERED', 'NOTDELIVERED', 'INQUEUE'];
    const statusFilterTemplateDetail = (options) => {
        return <Dropdown value={options.value} options={statusesdetail} onChange={(e) => options.filterCallback(e.value, options.index)} itemTemplate={statusItemTemplate} placeholder="Select a Status" className="p-column-filter" showClear />;
    };

    const statusItemTemplate = (option) => {
        return <span className={`customer-badge status-${option}`}>{option}</span>;
    };
    return (
        <>
            <Toast ref={toast} />

            <div className="p-grid">

                <div className="p-fluid grid formgrid">

                    <div className="field col-12 md:col-3">
                        <div className="card">
                            <div className="overview-text">Find All Jobs</div>
                            <Button icon="pi pi-search" id="datarefresh" label="Search" onClick={() => findAllJobs()}></Button>

                        </div>
                    </div>
                    <div className="field col-12 md:col-9">
                        <div className="card">


                            <DataTable
                                value={dataJobs}
                                paginator
                                className="p-datatable-gridlines"
                                showGridlines
                                rows={10}
                                dataKey="idJob"
                                filters={filtersJob}
                                filterDisplay="menu"
                                responsiveLayout="scroll"
                                emptyMessage="No jobs found."
                                selectionMode="single" selection={selectedJob} onSelectionChange={e => setSelectedJob(e.value)}
                                onRowSelect={onRowSelect} onRowUnselect={onRowUnselect}>
                                <Column key="name" field="name" header="NAME" filter filterPlaceholder="Search by name" />
                                <Column key="jobStatus" field="jobStatus" header="STATUS" filter filterElement={statusFilterTemplate} filterPlaceholder="Search by status" />
                                <Column key="idJob" field="idJob" header="ID Jobs" filter filterPlaceholder="Search by Id" />


                            </DataTable>

                        </div>
                    </div>


                </div>



                {selectedJobEvent === null ? '' : <StatusJob jobname={selectedJobEvent.name}
                    statusjob={selectedJobEvent.jobStatus} totalsms={nbrSmsTotal} nbrdelivered={nbrDelivered} nbrnomdelivered={nbrNonDelivered} />}


                <div className="p-col-12">
                    <div className="card">

                        <DataTable



                            className="p-datatable-gridlines"
                            showGridlines
                            rows={10}
                            filterDisplay="menu"
                            responsiveLayout="scroll"
                            value={detailJob}
                            paginator
                            dataKey="idDetail"
                            filters={filtersDetailJob}
                            emptyMessage="No Detail jobs found."

                        >

                            <Column key="phoneNumber" field="phoneNumber" header="Phone Number" filter filterPlaceholder="Search by Phone Number" />
                            <Column key="message" field="message" header="Message" filter filterPlaceholder="Search by Message" />
                            <Column key="detailStatus" field="detailStatus" header="STATUS" filter filterElement={statusFilterTemplateDetail} filterPlaceholder="Search by Message" />
                            <Column field="detailStatus" header="Verified" bodyClassName="text-center" style={{ minWidth: '8rem' }} body={verifiedBodyTemplate} />
                        </DataTable>
                    </div>
                </div>
            </div>


        </>
    );
}