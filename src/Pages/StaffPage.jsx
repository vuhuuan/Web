import React from 'react';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import './Normalize.css';
import './StaffPage.css';
import { useState } from 'react';
import BodyContent from '../Components/BodyContent';

const StaffPage = () => {
    const [selectedItem, setSelectedItem] = useState('staffHome');

    const handleSidebarItemClick = (item) => {
        setSelectedItem(item);
    };

    const staffItems = [
        { key: 'staffHome', label: 'Trang chủ', iconClass: 'home-icon' },
        { key: 'confirmOrder', label: 'Xác nhận đơn hàng', iconClass: 'confirm-order-icon' },
        { key: 'createOrder', label: 'Tạo đơn chuyển hàng', iconClass: 'create-order-icon' },
      ];

    return (
        <div className="staff-page">
            <div className="sidebar">
                <Sidebar items={staffItems} selectedItem={selectedItem} onSidebarItemClick={handleSidebarItemClick} />
            </div>
            <div className="content-container">
                <Header />
                <BodyContent selectedItem={selectedItem} />
            </div>
        </div>
    );
};

export default StaffPage;
