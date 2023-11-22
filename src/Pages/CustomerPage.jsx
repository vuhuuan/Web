import React from 'react';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import './Normalize.css';
import './CustomerPage.css';
import { useState } from 'react';
import BodyContent from '../Components/BodyContent';

const CustomerPage = () => {
    const [selectedItem, setSelectedItem] = useState('customerHome');

    const handleSidebarItemClick = (item) => {
        setSelectedItem(item);
    };

    const customerItems = [
        { key: 'customerHome', label: 'Trang chủ', iconClass: 'home-icon' },
        { key: 'checkOrder', label: 'Đơn hàng của tôi', iconClass: 'order-icon' },
      ];

    return (
        <div className="customer-page">
            <div className="sidebar">
                <Sidebar items={customerItems} selectedItem={selectedItem} onSidebarItemClick={handleSidebarItemClick} />
            </div>
            <div className="content-container">
                <Header />
                <BodyContent selectedItem={selectedItem} />
            </div>
        </div>
    );
};

export default CustomerPage;
