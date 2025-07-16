import { useState, useEffect } from 'react';

function AuthPage() {
    const [activeTab, setActiveTab] = useState('login-form');
    
    useEffect(() => {
        const tabs = document.querySelectorAll('.tab');
        const togglePassword = document.getElementById('toggle-password');
        const passwordInput = document.getElementById('login-password');

        const handleTabClick = (event) => {
            const targetId = event.currentTarget.getAttribute('data-target');
            setActiveTab(targetId);
        };

        const handleTogglePassword = () => {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            togglePassword.classList.toggle('fa-eye');
            togglePassword.classList.toggle('fa-eye-slash');
        };

        tabs.forEach(tab => tab.addEventListener('click', handleTabClick));
        if (togglePassword) {
            togglePassword.addEventListener('click', handleTogglePassword);
        }

        return () => {
            tabs.forEach(tab => tab.removeEventListener('click', handleTabClick));
            if (togglePassword) {
                togglePassword.removeEventListener('click', handleTogglePassword);
            }
        };
    }, []); 

    return (
        <main className="site-main">
            <div className="container">
                <div className="breadcrumbs">
                    <a href="/">Trang chủ</a> / 
                    <a href="/">Danh mục</a> / 
                    <a href="/">Tài khoản</a> / 
                    <span>Đăng nhập</span>
                </div>
                <div className="form-account-wrapper">
                    <h2 className="page-title">ĐĂNG NHẬP TÀI KHOẢN</h2>
                    <div className="form-box"> 
                        <div className="form-tabs">
                            <div className={`tab ${activeTab === 'login-form' ? 'active' : ''}`} data-target="login-form">ĐĂNG NHẬP</div>
                            <div className={`tab ${activeTab === 'register-form' ? 'active' : ''}`} data-target="register-form">ĐĂNG KÝ</div>
                        </div>
                        
                        <form id="login-form" className={`inner-form ${activeTab === 'login-form' ? '' : 'hidden'}`}>
                            <div className="inner-group"> 
                                <input className="inner-control" type="tel" placeholder="Nhập số điện thoại" required/>
                            </div>
                            <div className="inner-group"> 
                                <input className="inner-control" id="login-password" type="password" placeholder="Mật khẩu" required/>
                                <i className="fa-regular fa-eye inner-icon" id="toggle-password"></i>
                            </div>
                            <button type="submit" className="inner-button">ĐĂNG NHẬP</button>
                            <a href="/" className="inner-forgot-password">Quên mật khẩu?</a>
                        </form>
            
                        <form id="register-form" className={`inner-form ${activeTab === 'register-form' ? '' : 'hidden'}`}>
                            <div className="inner-group"> 
                                <input className="inner-control" type="tel" placeholder="Nhập số điện thoại" required/>
                            </div>
                            <button type="submit" className="inner-button">GỬI MÃ XÁC NHẬN</button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default AuthPage;