import React from 'react';
// import { useState } from 'react';
import './LeaderOrderManagement.css'
import { Bar } from 'react-chartjs-2';
import { Chart, registerables} from 'chart.js';


const LeaderOrderManagement = () => {
    Chart.register(...registerables);

  // Dữ liệu mẫu (bạn có thể lấy dữ liệu từ API hoặc trạng thái của React)
    const data = {
        labels: ['Đã chuyển đến', 'Đã chuyển đi', 'Chưa chuyển'],
        datasets: [
        {
            label: 'Số lượng',
            backgroundColor: ['#36A2EB', '#FFCE56', '#FF6384'],
            borderColor: '#000',
            borderWidth: 1,
            hoverBackgroundColor: ['#36A2EB', '#FFCE56', '#FF6384'],
            hoverBorderColor: '#000',
            data: [30, 20, 10], // Thay bằng dữ liệu thực tế
        },
        ],
    };

    const options = {
        scales: {
            y: {
                type: "linear",
                beginAtZero: true,
                ticks: {
                    color: 'white',
                }
            },
        },
    };

    return (
        <div className="chart-container">
            <h1>Thống kê hàng đi đến</h1>
            <Bar data={data} options={options} />
        </div>
    );
}

export default LeaderOrderManagement