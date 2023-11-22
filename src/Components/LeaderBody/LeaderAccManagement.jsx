import React, { useState } from 'react';
import './LeaderAccManagement.css';

const LeaderAccManagement = () => {
    const [showAddModal, setShowAddModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [users, setUsers] = useState([
        { username: 'user1', password: 'pass1', fullname: 'Full Name 1', role: 'Staff', creationDate: '2023-01-01' },
        // Thêm dữ liệu người dùng mẫu ở đây
    ]);

    const [newUserData, setNewUserData] = useState({
        username: '',
        password: '',
        fullname: '',
        role: '',
        creationDate: '',
    });

    const [usernameToDelete, setUsernameToDelete] = useState('');

    const handleCloseAddModal = () => setShowAddModal(false);
    const handleShowAddModal = () => setShowAddModal(true);

    const handleCloseDeleteModal = () => setShowDeleteModal(false);
    const handleShowDeleteModal = (username) => {
        setUsernameToDelete(username);
        setShowDeleteModal(true);
    };

    const handleAddUser = () => {
        const currentDate = new Date().toISOString().split('T')[0]; // Lấy ngày hiện tại (YYYY-MM-DD)
        const userWithDate = { ...newUserData, creationDate: currentDate };
        setUsers([...users, userWithDate]);
        setNewUserData({
            username: '',
            password: '',
            fullname: '',
            role: '',
            creationDate: '',
        });
        handleCloseAddModal();
    };


    const handleDeleteUser = () => {
        const updatedUsers = users.filter(user => user.username !== usernameToDelete);
        setUsers(updatedUsers);
        handleCloseDeleteModal();
    };

    return (
        <div className="home-background">
            <h1>Quản lý nhân viên</h1>

            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Password</th>
                        <th>Tên người dùng</th>
                        <th>Vai trò</th>
                        <th>Ngày cấp tài khoản</th>
                        <th>Xóa tài khoản</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.username}</td>
                            <td>{user.password}</td>
                            <td>{user.fullname}</td>
                            <td>{user.role}</td>
                            <td>{user.creationDate}</td>
                            <td>
                                <button onClick={() => handleShowDeleteModal(user.username)}>Xóa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <button onClick={handleShowAddModal}>Thêm tài khoản</button>

            {showAddModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={handleCloseAddModal}>&times;</span>
                        <input type="text" placeholder="Username" value={newUserData.username} onChange={(e) => setNewUserData({ ...newUserData, username: e.target.value })} />
                        <input type="password" placeholder="Password" value={newUserData.password} onChange={(e) => setNewUserData({ ...newUserData, password: e.target.value })} />
                        <input type="text" placeholder="Fullname" value={newUserData.fullname} onChange={(e) => setNewUserData({ ...newUserData, fullname: e.target.value })} />
                        <input type="text" placeholder="Role" value={newUserData.role} onChange={(e) => setNewUserData({ ...newUserData, role: e.target.value })} />
                        <button onClick={handleAddUser}>Tạo</button>
                    </div>
                </div>
            )}

            {showDeleteModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={handleCloseDeleteModal}>&times;</span>
                        <p>Bạn có chắc là muốn xóa người dùng này chứ ?</p>
                        <button onClick={handleDeleteUser}>Xóa</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LeaderAccManagement;
