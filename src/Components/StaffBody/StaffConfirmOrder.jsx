import React, { useState, useEffect } from 'react';
import './StaffConfirmOrder.css';

const StaffConfirmOrder = ({ onOrderConfirm, pendingOrders, onPendingOrdersUpdate }) => {
    const [orders, setOrders] = useState(pendingOrders);

    const handleConfirmOrder = (orderId) => {
      const confirmedOrder = orders.find((order) => order.id === orderId);
  
      // Xóa đơn hàng từ danh sách chờ xác nhận
      setOrders(orders.filter((order) => order.id !== orderId));
  
      // Chuyển đơn hàng sang trang "StaffCreateOrder"
      onOrderConfirm(confirmedOrder);
  
      // Cập nhật danh sách đơn hàng chờ xác nhận ở BodyContent
      onPendingOrdersUpdate(orders.filter((order) => order.id !== orderId));
    };
  
    useEffect(() => {
      // Khởi tạo lại danh sách đơn hàng khi pendingOrders thay đổi
      setOrders(pendingOrders);
    }, [pendingOrders]);
    
      return (
        <div>
          <h2>Danh sách đơn hàng chờ xác nhận</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Địa chỉ nguồn</th>
                <th>Địa chỉ đích</th>
                <th>Điểm tập kết đích</th>
                <th>Xác nhận</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.source}</td>
                  <td>{order.destination}</td>
                  <td>{order.pickupPoint}</td>
                  <td>
                    <button onClick={() => handleConfirmOrder(order.id)}>Xác nhận</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
};

export default StaffConfirmOrder;
