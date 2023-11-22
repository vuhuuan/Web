import React, { useState } from 'react';
import './BodyContent.css';

import LeaderHome from './LeaderBody/LeaderHome.jsx';
import LeaderAccManagement from './LeaderBody/LeaderAccManagement.jsx';
import LeaderOrderManagement from './LeaderBody/LeaderOrderManagement.jsx';

import StaffHome from './StaffBody/StaffHome.jsx';
import StaffConfirmOrder from './StaffBody/StaffConfirmOrder.jsx';
import StaffCreateOrder from './StaffBody/StaffCreateOrder.jsx';

import CustomerHome from './CustomerBody/CustomerHome.jsx';
import CustomerCheckOrder from './CustomerBody/CustomerCheckOrder.jsx';

const BodyContent = ({ selectedItem }) => {
    const [confirmedOrders, setConfirmedOrders] = useState([]);
    const [pendingOrders, setPendingOrders] = useState([
      { id: 'TP123', source: 'Đại từ', destination: 'Cầu giấy', pickupPoint: 'Điểm tập kết A' },
      { id: 'TP124', source: 'Hùng Sơn', destination: 'Hai bà Trưng', pickupPoint: 'Điểm tập kết A' },
    
    ]);
  
    const handleOrderConfirm = (order) => {
      // Xác nhận đơn hàng: Chuyển từ pending sang confirmed
      setConfirmedOrders((prevOrders) => [...prevOrders, order]);
      setPendingOrders((prevOrders) => prevOrders.filter((prevOrder) => prevOrder.id !== order.id));
    };
  
    const handlePendingOrdersUpdate = (updatedPendingOrders) => {
      // Cập nhật danh sách đơn hàng chờ xác nhận
      setPendingOrders(updatedPendingOrders);
    };
    return (
        <main className="main-content">
            {/* Nội dung chính của trang */}
{/* leader */}
            {selectedItem === 'leaderHome' && <LeaderHome />}
            {selectedItem === 'account' && <LeaderAccManagement />}
            {selectedItem === 'order' && <LeaderOrderManagement />}

{/* staff */}
            {selectedItem === 'staffHome' && <StaffHome />}
            {selectedItem === 'confirmOrder' && <StaffConfirmOrder onOrderConfirm={handleOrderConfirm} pendingOrders={pendingOrders} onPendingOrdersUpdate={handlePendingOrdersUpdate} />}
            {selectedItem === 'createOrder' && <StaffCreateOrder confirmedOrders={confirmedOrders} />}

{/* customer */}
            {selectedItem === 'customerHome' && <CustomerHome />}     
            {selectedItem === 'checkOrder' && <CustomerCheckOrder />}     

        </main>
    );
};

export default BodyContent;
