import { Line } from 'react-chartjs-2';
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from 'chart.js';
import { getDriftData } from '../symbolic/MirrorDriftEngine';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement);

export default function DriftChart() {
  const data = {
    labels: Array.from({ length: 20 }, (_, i) => i.toString()),
    datasets: [
      {
        label: 'Predicted Drift',
        data: getDriftData(),
        borderColor: '#0ff',
        backgroundColor: 'rgba(0,255,255,0.2)',
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: { labels: { color: '#0ff' } },
    },
    scales: {
      x: { ticks: { color: '#0ff' }, grid: { color: '#0ff3' } },
      y: { ticks: { color: '#0ff' }, grid: { color: '#0ff3' } },
    },
  } as const;
  return <Line data={data} options={options} />;
}
