import React from 'react';
import './CustomerCheckOrder.css';
import { useState, useEffect } from 'react';



const CustomerCheckOrder = () => {
    
    const [orders, setOrders] = useState([
        { date: '2023-01-01', source: 'Điểm giao dịch A1', destination: 'Xuân Thủy', status: 'Đang đến điểm tập kết A'},
        { date: '2023-02-01', source: 'Điểm giao dịch A1', destination: 'Tôn Thất Tùng', status: 'Đang đến điểm tập kết C'},
        // Thêm dữ liệu người dùng mẫu ở đây
    ]);

    return <>
    <h1>Đơn hàng đã gửi</h1>
            <table>
                <thead>
                    <tr>
                        <th>Ngày gửi</th>
                        <th>Điểm giao dịch</th>
                        <th>Địa chỉ đích</th>
                        <th>Trạng thái</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => (
                        <tr key={index}>
                            <td>{order.date}</td>
                            <td>{order.source}</td>
                            <td>{order.destination}</td>
                            <td>{order.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
    </>
    
}

export default CustomerCheckOrder