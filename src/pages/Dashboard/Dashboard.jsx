import React, { useMemo } from 'react'
import SimpleTile from '../../widgets/SimpleTile/SimpleTile';
import BarChart from '../../widgets/BarChart/BarChart';
import Chart from '../../components/Chart/Chart';
import { Calendar, LineChart, Messages, RecentSeals, Tasks } from '../../widgets';

const Dashboard = () => {

    const renderSimpleTiles = useMemo(() => (
        <div className="row g-4">
            <SimpleTile 
                icon="fa-chart-line"
                label="Today Sale"
                value="$1234"
            />
            <SimpleTile 
                icon="fa-chart-bar"
                label="Total Sale"
                value="$1234"
            />
            <SimpleTile 
                icon="fa-chart-area"
                label="Today Revenue"
                value="$1234"
            />
            <SimpleTile 
                icon="fa-chart-pie"
                label="Today Revenue"
                value="$1234"
            />
        </div>
    ), []);

    const renderCharts = useMemo(() => (
        <div className="container-fluid pt-4 px-0">
            <div className="row g-4">
                <Chart label="Worldwide Sales">
                    <BarChart/>
                </Chart>
                <Chart label="Worldwide Sales">
                    <LineChart/>
                </Chart>
            </div>
        </div>
    ), []);

    const renderRecentSeals = useMemo(() => (
        <RecentSeals />
    ), []);

    const renderMessages = useMemo(() => (
        <Messages />
    ), []);

    const renderCalendar = useMemo(() => (
        <Calendar />
    ), []);

    const renderTasks = useMemo(() => (
        <Tasks />
    ), []);

    return (
        <div className="container-fluid pt-4 px-4">
            {renderSimpleTiles}
            {renderCharts}
            {renderRecentSeals}
            <div className="container-fluid pt-4 px-0">
                <div className="row g-4">
                    {renderMessages}
                    {renderCalendar}
                    {renderTasks}
                </div>
            </div>
        </div>
    )
}

export default Dashboard;