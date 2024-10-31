import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function LineChart() {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Workouts",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "#92f1f1",
        tension: 0.1, // Suaviza a linha do gráfico
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          color: "#64748B", // Cor da legenda
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#64748B", // Define a cor dos ticks do eixo X
        },
      },
      y: {
        ticks: {
          color: "#64748B", // Define a cor dos ticks do eixo Y
        },
      },
    },
  };

  return <Line data={data} options={options} />;
}
