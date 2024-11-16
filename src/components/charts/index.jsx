import React from 'react';
import ReactApexChart from 'react-apexcharts';

const MyChart = ({ direction }) => {
    const chartData = {

        series: [{
            data: [12, 23, 34, 14]
        }],
        options: {
            chart: {
                type: 'bar',
                height: 430
            },
            plotOptions: {
                bar: {
                    distributed: true,
                    horizontal: direction,
                    dataLabels: {
                        position: 'top',
                    },
                }
            },
            colors: ['#FF0000', '#FF8A00', '#00C2FF', '#2ACE00'],
            dataLabels: {
                enabled: false,
                offsetX: -6,
                style: {
                    fontSize: '12px',
                    colors: ['#fff']
                }
            },
            stroke: {
                show: true,
                width: 1,
                colors: ['#fff']
            },
            tooltip: {
                enabled: false,
                shared: true,
                intersect: false
            },
            xaxis: {
                show: false,
                categories: ['Fail', 'Hard', 'Good', 'Easy'],
                labels: {
                    show: !direction,
                    style: {
                        colors: ['#fff', '#fff', '#fff', '#fff'],
                    }
                }
            },
        },


    };


    return (
        <div id="chart">
            <ReactApexChart
                options={chartData.options}
                series={chartData.series}
                type="bar"
                height={direction ? 320 : 220}
                width={direction ? 320 : 240}

            />
        </div>
    );
};
const PieChart = () => {
    const chartData = {
        series: [25, 75], // Specify your data here
        options: {
            plotOptions: {
                bar: {
                    distributed: true
                }
            },
            labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4'], // Labels for each data point
            colors: ['#ff4833', '#fee4df'],
            dataLabels: {
                enabled: false

            },
            tooltip: {
                enabled: false
            },
            stroke: {
                width: 4,
                colors: ['#ff4833']

            }
        },
    };

    return (
        <div id="chart">
            <ReactApexChart
                options={chartData.options}
                series={chartData.series}
                type="pie"
                height={320}
            />
        </div>
    );
};

export { MyChart, PieChart };