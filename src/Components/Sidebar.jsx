import React from 'react';
import './Sidebar.css';
// import { useState } from 'react';

const Sidebar = ({ items, selectedItem, onSidebarItemClick }) => {
    return (
      <aside className="sidebar">
        <div className="logo"></div>
  
        <div className="items">
          {items.map((item) => (
            <div
              key={item.key}
              className={`item ${item.key} ${selectedItem === item.key ? 'active' : ''}`}
              onClick={() => onSidebarItemClick(item.key)}
            >
              <div className={`icon ${item.iconClass}`}></div>
              <label className="item-name" htmlFor="">
                {item.label}
              </label>
            </div>
          ))}
        </div>
      </aside>
    );
  };

export default Sidebar;
