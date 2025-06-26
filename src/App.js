// src/App.js
import { useState, useEffect } from 'react';

function App() {
    // --- Phần JavaScript sẽ nằm ở đây ---
    const [activeTab, setActiveTab] = useState('login-form');
  
    // useEffect là cách React xử lý logic sau khi giao diện đã được vẽ ra.
    // Nó tương đương với document.addEventListener('DOMContentLoaded', ...)
    useEffect(() => {
      // Logic chuyển tab
      const tabs = document.querySelectorAll('.tab');
      tabs.forEach(tab => {
        // Dùng hàm bọc để không tạo listener mới mỗi lần re-render
        const handleTabClick = () => {
          const targetId = tab.getAttribute('data-target');
          setActiveTab(targetId);
        };
        tab.addEventListener('click', handleTabClick);
  
        // Cleanup function để gỡ listener khi component bị hủy
        return () => {
          tab.removeEventListener('click', handleTabClick);
        };
      });
  
      // Logic ẩn/hiện password
      const togglePassword = document.getElementById('toggle-password');
      const passwordInput = document.getElementById('login-password');
      if (togglePassword && passwordInput) {
        const handleTogglePassword = () => {
          const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
          passwordInput.setAttribute('type', type);
          togglePassword.classList.toggle('fa-eye');
          togglePassword.classList.toggle('fa-eye-slash');
        };
        togglePassword.addEventListener('click', handleTogglePassword);
        
        // Cleanup function
        return () => {
          togglePassword.removeEventListener('click', handleTogglePassword);
        };
      }
    }, []); // Mảng rỗng [] đảm bảo useEffect chỉ chạy 1 lần duy nhất sau khi component được mount
  
    // --- Phần JSX (HTML) sẽ nằm ở đây ---
    // Lưu ý: class -> className, for -> htmlFor, và mọi thẻ phải được đóng
    return (
      <>
        <header className="header">
            <div className="container">
                <div className="header-inner">
                    <a href="/" className="header-logo">
                        <img src="https://file.hstatic.net/1000360022/file/logo_svg_d91361b7b415484db4a26b68e7d4724d.svg" alt="ICONDENIM Logo" />
                    </a>
                    <nav className="header-nav">
                        <ul>
                            <li><a href="/">Sản phẩm <i className="fas fa-chevron-down"></i></a></li>
                            <li><a href="/">Hàng Mới <span className="new-tag">New</span></a></li>
                            <li><a href="/">Áo Nam <i className="fas fa-chevron-down"></i></a></li>
                            <li><a href="/">Quần Nam <i className="fas fa-chevron-down"></i></a></li>
                            <li><a href="/">DENIM <i className="fas fa-chevron-down"></i></a></li>
                            <li><a href="/">TechUrban <i className="fas fa-chevron-down"></i></a></li>
                            <li><a href="/" className="outlet-tag">-50% OUTLET</a></li>
                        </ul>
                    </nav>
                    <div className="header-actions">
                        <a href="/"><i className="fas fa-chevron-left"></i></a>
                        <a href="/"><i className="fas fa-chevron-right"></i></a>
                        <a href="/"><i className="fas fa-search"></i></a>
                        <a href="/"><i className="fas fa-user"></i></a>
                        <a href="/"><i className="fas fa-map-marker-alt"></i></a>
                        <a href="/" className="cart-icon"><i className="fas fa-shopping-cart"></i><span>0</span></a>
                    </div>
                </div>
            </div>
        </header>
  
        <main className="site-main">
            <div className="container">
                <div className="breadcrumbs">
                    <a href="/">Trang chủ</a> / 
                    <a href="/">Tài khoản</a> / 
                    <span>Đăng nhập</span>
                </div>
                <div className="form-account-wrapper">
                    <h1 className="page-title">ĐĂNG NHẬP TÀI KHOẢN</h1>
                    <div className="form-box"> 
                        <div className="form-tabs">
                            {/* Dùng state để quyết định tab nào active */}
                            <div className={`tab ${activeTab === 'login-form' ? 'active' : ''}`} data-target="login-form">ĐĂNG NHẬP</div>
                            <div className={`tab ${activeTab === 'register-form' ? 'active' : ''}`} data-target="register-form">ĐĂNG KÝ</div>
                        </div>
            
                        {/* Dùng state để quyết định form nào được hiển thị */}
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
      </>
    );
  }
  
  export default App;