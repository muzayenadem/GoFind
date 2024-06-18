// src/components/RentStatusChart.js
import React from 'react';
import { Doughnut } from 'react-chartjs-2';

import { Chart as ChartJS, ArcElement, Tooltip, Legend, SubTitle } from 'chart.js';


ChartJS.register(ArcElement, Tooltip, Legend);

const RentStatusChart = ({ data }) => {
  const chartData = {
    labels: ['Overdue', 'Paid', 'Upcoming'],
    datasets: [
      {
        label: 'Rent Status',
        data: [data.overdue, data.paid, data.upcoming],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        size:'3px',
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        borderWidth:2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 1.5, // Adjust the aspect ratio to control the chart's size
    cutout: '70%',
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 8,
            weight: 'bold',
          },
          color: '#333',
        },
      },
      title: {
        display: true,
        text: 'Rent Status Overview',
        font: {
          size: 12,
          weight: 'bold',
        },
        color: '#333',
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.label}: $${context.raw}`,
        },
        backgroundColor: '#FFF',
        titleColor: '#000',
        bodyColor: '#000',
        borderColor: '#CCC',
        borderWidth: 1,
      },
    },
  };


  return (
    <div className=" bg-white p-6  w-80 h-80 flex items-center justify-">
    <Doughnut data={chartData} options={options} />
    <div className="-ml-[58%] mt-[25%] inset-0 flex items-center justify-center">
      <div className="text-center">
        <p className="text-xl font-bold text-gray-700">Total</p>
        <p className="text-2xl font-bold text-gray-900">${data.overdue + data.paid + data.upcoming}</p>
      </div>
    </div>
  </div>
  );
};

export default RentStatusChart;
