import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const ChartModule = () => {
  const data = {
    labels: ["CS Students", "Non-CS Students"],
    datasets: [
      {
        label: "Student Distribution",
        data: [56.8, 43.2],
        backgroundColor: [
          "rgba(54, 162, 235, 0.7)", // Blue for CS students
          "rgba(255, 99, 132, 0.7)", // Red for Non-CS students
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "top", // Position of the legend
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}%`;
          },
        },
      },
    },
  };

  return (
    <div style={{ width: "40%", margin: "0 auto" }}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default ChartModule;
