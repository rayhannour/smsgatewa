import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import { Button } from 'primereact/button';

import './ButtonDemo.css';

const AppRightPanel = (props) => {

	const [day, setDay] = useState(null);
	const [mounth, seMounth] = useState(null);
	const [year, setYear] = useState(null);

	const d = new Date();
	
    useEffect(async () => {
        setDay( d.getDate());
		seMounth( d.getMonth()+1);
		setYear(d.getFullYear());
    }, []);


	return (
		<div className={classNames('layout-rightmenu', { 'layout-rightmenu-active': props.rightMenuActive })} onClick={props.onRightMenuClick} >
			<button onClick={() => props.onRightMenuActiveChange(false)} className="layout-rightmenu-close p-link">
				<i className="pi pi-times"></i>
			</button>
			<div className="user-detail-wrapper">


				<div className="user-detail-content">

					<span className="user-name">المنظومات الأخرى</span>
					<span className="user-number">التاريخ</span>
				</div>

				<div className="user-tasks">
					<div className="user-tasks-item in-progress">
						<button className="task-number p-link">{day}</button>
						<span className="task-name"></span>
					</div>
					<div className="user-tasks-item">
						<button className="task-number p-link">{mounth}</button>
						<span className="task-name"></span>
					</div>
					<div className="user-tasks-item">
						<button className="task-number p-link">{year}</button>
						<span className="task-name"></span>
					</div>
				</div>

				<div className="user-tasks">
					<div className="col-12 md:col-12">
						<div className="card widget-overview-box ">
							<span className="overview-title">
								منظومة البريد التونسي
								<br />
							</span>
							<div >
								<div style={{ align: "center" }}>
									<Button style={{ width: "100px", height: "100px" }} icon="pi pi-euro" className="p-button-rounded p-button-success" aria-label="Search" />
								</div>
							</div>
							<br />
							<br />
		
						</div>
					</div>
				</div>

				<div className="user-tasks">
					<div className="col-12 md:col-12">
						<div className="card widget-overview-box ">
							<span className="overview-title">
								منظومة الأطفال الجانحين
								<br />
							</span>
							<div >
								<div style={{ align: "center" }}>
								<Button style={{ width: "100px", height: "100px" }}  icon="pi pi-user-minus" className="p-button-rounded p-button-danger" aria-label="Cancel" />
								</div>
							</div>
							<br />
							<br />
						</div>
					</div>
				</div>

				<div className="user-tasks">
					<div className="col-12 md:col-12">
						<div className="card widget-overview-box ">
							<span className="overview-title">
								منظومة التصرف في الأعوان
								<br />
							</span>
							<div >
								<div style={{ align: "center" }}>
								<Button style={{ width: "100px", height: "100px" }}  icon="pi pi-users" className="p-button-rounded p-button-warning" aria-label="Notification" />
								</div>
							</div>
							<br />
							<br />
						</div>
					</div>
				</div>


			</div>

		</div>
	)
}

export default AppRightPanel;