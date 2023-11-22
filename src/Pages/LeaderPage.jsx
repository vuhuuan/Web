import React from 'react';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import BodyContent from '../Components/BodyContent';
import './Normalize.css';
import './LeaderPage.css';
import { useState } from 'react';

const LeaderPage = () => {
    const [selectedItem, setSelectedItem] = useState('leaderHome');

    const handleSidebarItemClick = (item) => {
        setSelectedItem(item);
    };

    const leaderItems = [
        { key: 'leaderHome', label: 'Trang chủ', iconClass: 'home-icon' },
        { key: 'account', label: 'Nhân viên', iconClass: 'account-icon' },
        { key: 'order', label: 'Đơn hàng', iconClass: 'order-icon' },
      ];

    return (
        <div className="leader-page">
            <div className="sidebar">
                <Sidebar items={leaderItems} selectedItem={selectedItem} onSidebarItemClick={handleSidebarItemClick} />
            </div>
            <div className="content-container">
                <Header />
                <BodyContent selectedItem={selectedItem} />
            </div>
        </div>
    );
};

export default LeaderPage;
