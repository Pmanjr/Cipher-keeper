import React, { useState } from "react";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler } from 'chart.js';
ChartJS.register(
    Title, LineElement, Legend, Tooltip, CategoryScale, LinearScale, PointElement, Filler
)

const BarChart = () => {
    const [data, setData] = useState({
        labels: ['A', 'B', 'C', 'D', 'E', 'F'],
        datasets: [
            {
                label: 'passwords',
                data: [1,2,1.5,1.7,2,1,2,2,3,1,],
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                borderColor: '#ffffff',
                borderWidth: 1,
                tension: 0.4,
                fill: true,
                pointBackgroundColor: '#ffffff',
                spanGaps: true,
                responsive: true,
                
            },
        ]
    })
    return (
        <div className="w-[75%] sm:w-[100%] font-poppins text-white">
            <Line data={data} />
        </div>
    )
}

export default BarChart;