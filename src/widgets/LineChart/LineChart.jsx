import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
);

export const data = {
    labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
    datasets: [
        {
            label: "Salse",
            data: [15, 30, 55, 45, 70, 65, 85],
            backgroundColor: "rgba(235, 22, 22, .7)",
            fill: true,
            borderColor: '#000',
        },
        {
            label: "Revenue",
            data: [99, 135, 170, 130, 190, 180, 270],
            backgroundColor: "rgba(235, 22, 22, .5)",
            fill: true,
            borderColor: '#000',
        }
    ],
    options: {
        responsive: true
    }
};

const LineChart = () => {
  return <Line data={data} />
}

export default LineChart;
