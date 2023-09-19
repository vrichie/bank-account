"use client"
import React, { useState, useEffect } from "react";
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

export default function Barchart() {
  const [ChartData, setChartData] = useState({
    datasets: [],
  });

  const [ChartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels:["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"],
      datasets:[
        {
          label: "Income",
          data:[113,244,375,496,467,578,689],
          backgroundColor:"rgb(59 ,130, 246 ,1 )",
          borderColor:"rgb(168 ,85 ,247, 1)"
        },
        {
          label: "Expenses",
          data: [123,234,345,456,567,678,789],
                  borderColor:'rgb(53, 162, 235)',
                  backgroundColor:"rgba(168, 85, 247)"
        },
        
      ]
    }
    )
    setChartOptions({
      plugins:{
        legend:{
          position: 'top'
        },
        title:{
          display: true,
          text:'Daily Revenue'
        }
      },
      maintainAspectRatio: false,
      responsive: true
    })
  }, []) 
  return <div className="bg-white rounded-md w-full h-[300px] px-4">
    <Bar data={ChartData} options={ChartOptions}/>
  </div>;
}
