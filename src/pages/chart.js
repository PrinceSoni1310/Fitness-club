// chart.js

import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    Title,
  } from 'chart.js';
  import { Doughnut } from 'react-chartjs-2';
  import React from 'react';
  
  ChartJS.register(ArcElement, Tooltip, Legend, Title);
  
  const MacroChart = ({ protein, carbs, fat }) => {
    const data = {
      labels: ['Protein', 'Carbs', 'Fat'],
      datasets: [
        {
          label: 'Macronutrient Ratio',
          data: [protein, carbs, fat],
          backgroundColor: ['#4CAF50', '#2196F3', '#FFC107'],
          borderColor: '#fff',
          borderWidth: 2,
          hoverOffset: 6,
        },
      ],
    };
  
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            color: '#444',
            font: {
              size: 14,
            },
          },
        },
        title: {
          display: true,
          text: 'Macronutrient Ratio',
          color: '#333',
          font: {
            size: 16,
            weight: 'bold',
          },
        },
      },
    };
  
    return <Doughnut data={data} options={options} />;
  };
  
  export default MacroChart;
  