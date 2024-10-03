import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AttendanceChart = (props) => {
  const { data } = props;

  if (!data || data.length === 0) {
    return <p>No attendance data available</p>;
  }

  // Prepare the chart data
  const chartData = {
    labels: data.map((item) => item.course_code),
    datasets: [
      {
        label: "% Attendance",
        data: data.map((item) => {
          return item.total_classes === 0
            ? 0
            : (item.present_classes / item.total_classes) * 100;
        }),
        borderRadius: 5,
        hoverBackgroundColor: "#54B07F",
        backgroundColor: "#E6EEF5",
      },
    ],
  };

  // Chart.js options
  const options = {
    responsive: true,
    maintainAspectRatio: false, // Ensures the height setting works
    plugins: {
      legend: {
        display: false, // Hide legend
      },
      tooltip: {
        enabled: true,
      },
      datalabels: {
        anchor: "end",
        align: "top",
        formatter: (value) => `${value}%`,
        color: "#333",
        font: {
          weight: "bold",
          size: 14,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        max: 100, // Maximum value of y-axis set to 100%
        ticks: {
          stepSize: 20,
          callback: (value) => `${value}%`,
        },
        grid: {
          color: "#EEEEEE", // Updated grid color to light gray
        },
      },
    },
  };

  return (
    <div style={{ height: "50vh" }}>
      {" "}
      {/* Set the chart container height */}
      <Bar key={JSON.stringify(data)} data={chartData} options={options} />
    </div>
  );
};

export default AttendanceChart;
