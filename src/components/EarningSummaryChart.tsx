import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  type ScriptableContext,
  Title,
  Tooltip,
} from 'chart.js';
import { type FC } from 'react';
import { Line } from 'react-chartjs-2';
import { colors } from '../styles/colors';

ChartJS.register(
  CategoryScale,
  LinearScale,
  Filler,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const labels = ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Last 6 months',
      data: [12, 23, 12, 33, 11, 21],
      borderColor: colors.blue,
      lineTension: 0.5, // smooth line
      fill: true,
      backgroundColor: (context: ScriptableContext<'line'>) => {
        const chartCtx = context.chart.ctx;
        const gradient = chartCtx.createLinearGradient(0, 0, 0, 300);
        gradient.addColorStop(0, colors.blue);
        gradient.addColorStop(1, '#fff');
        return gradient;
      },
      order: 2,
    },
    {
      label: 'Same period last year',
      data: [93, 41, 70, 12, 2, 55],
      borderColor: '#656575',
      backgroundColor: '#656575',
      lineTension: 0.5,
      borderWidth: 1,
      borderDash: [10, 5], // dotted line
      order: 1, // prevent overlap lines
    },
  ],
};
export const EarningSummaryChart: FC = () => {
  return (
    <Line
      width={'600px'}
      height={'150px'}
      data={data}
      // title="Earnint"
      options={{
        scales: {
          y: {
            grid: {
              display: false,
            },
          }
        },
        animation: false,
        plugins: {
          tooltip: {
            // подсказка при наведение
            enabled: false,
          },
          legend: {
            labels: {
              color: '#656575',
              usePointStyle: true,
            },
          },
        },
      }}
    />
  );
};
