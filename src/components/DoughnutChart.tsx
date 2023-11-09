import React, { type FC } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { colors } from '../styles/colors';

ChartJS.register(ArcElement, Tooltip, Legend);

export const DoughnutChart: FC = () => {
  return (
    <Doughnut
      height={'146px'}
      width={'146px'}
      data={data}
      options={{
        animation: false,
        cutout: '80%',
        plugins: {
          tooltip: {
            enabled: false,
          },
          legend: {
            labels: {
              // color: '#656575',
              usePointStyle: true,
            },
          },
        },
      }}
    />
  );
};

export const data = {
  labels: ['Total Hired', 'Total Canceled', 'Total Pendig'],
  datasets: [
    {
      data: [54, 20, 26],
      backgroundColor: [colors.blue, colors.gree, colors.red],
      borderWidth: 0,
    },
  ],
};
