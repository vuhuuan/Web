import React, { useState } from 'react';
import './StaffCreateOrder.css';
import ConfirmationModal from './ConfirmationModal'; // Tạo một component Modal tương ứng

const StaffCreateOrder = ({ confirmedOrders }) => {
  const [orders, setOrders] = useState(confirmedOrders);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  const handleCreateOrder = () => {
    // Xử lý tạo đơn hàng tại đây
    setShowConfirmationModal(false);
  };

  const handleOpenConfirmationModal = (orderId) => {
    setSelectedOrderId(orderId);
    setShowConfirmationModal(true);
  };

  const handleCloseConfirmationModal = () => {
    setShowConfirmationModal(false);
  };

  return (
    <div>
      <h2>Danh sách đơn hàng đang được xác nhận</h2>
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
                <button onClick={() => handleOpenConfirmationModal(order.id)}>Tạo đơn hàng</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showConfirmationModal && (
        <ConfirmationModal
          message="Bạn chắc chắn muốn tạo đơn hàng?"
          onConfirm={handleCreateOrder}
          onCancel={handleCloseConfirmationModal}
        />
      )}
    </div>
  );
};

export default StaffCreateOrder;
