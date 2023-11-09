import React, { type FC } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
const randomNum = () => Math.floor(Math.random() * (235 - 52 + 1) + 52);

const randomRGB = () => `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;

export const options = {
  // responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      // display: true,
      // text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
// const datasets = [].map(item => (
//   {
//     label: item.label,
//     data: item.data, //[ 10, 55, 100, 3, 333, 14, 76],//labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//     borderColor: 'rgb(255, 99, 132)',
//     backgroundColor: 'rgba(255, 99, 132, 0.5)',
//   }))

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [10, 55, 100, 3, 333, 14, 76], // labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: randomRGB(),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    // {
    //   label: 'Dataset 2',
    //   data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
    //   borderColor: 'rgb(53, 162, 235)',
    //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
    // },
  ],
};

// console.log(randomRGB());
export const LineChart: FC = () => {
  return <Line options={options} data={data} width={'804px'} height={'90%'} />;
};
