import { useState, useEffect } from 'react';
function App() {
    const [activeTab, setActiveTab] = useState('login-form');
    useEffect(() => {
      const tabs = document.querySelectorAll('.tab');
      tabs.forEach(tab => {
        const handleTabClick = () => {
          const targetId = tab.getAttribute('data-target');
          setActiveTab(targetId);
        };
        tab.addEventListener('click', handleTabClick);
  
        return () => {
          tab.removeEventListener('click', handleTabClick);
        };
      });

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
        
        return () => {
          togglePassword.removeEventListener('click', handleTogglePassword);
        };
      }
    }, []); 
    return (
      <>
        <header className="header">
            <div className="container">
                <div className="header-inner">
                    <a href="/" className="header-logo">
                        <img src="assets/images/logo.webp" alt="ICONDENIM Logo" />
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
         <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-column">
            <a href="/" className="footer-logo">
              <img src="assets/images/logo_footer.webp" alt="ICONDENIM Logo" />
            </a>
            <p><i className="fas fa-phone"></i> Tổng đài CSKH: 02873066060</p>
            <p><i className="fas fa-envelope"></i> Email: cskh@icondenim.com</p>

            <h4 className="footer-title">ĐĂNG KÝ NHẬN TIN</h4>
            <p className="footer-desc">
              Hãy là người đầu tiên nhận khuyến mãi lớn!
            </p>
            <form className="subscribe-form">
              <input type="email" placeholder="Nhập địa chỉ email" />
              <button type="submit">ĐĂNG KÝ</button>
            </form>

            <h4 className="footer-title">KẾT NỐI VỚI CHÚNG TÔI</h4>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i class="fa-brands fa-yahoo"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
              <a href="#"><i className="fab fa-tiktok"></i></a>
            </div>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">HỖ TRỢ KHÁCH HÀNG</h4>
            <ul className="footer-links">
              <li><a href="#">Chính sách đổi hàng và bảo hành</a></li>
              <li><a href="#">Chính sách Membership</a></li>
              <li><a href="#">Chính sách ưu đãi sinh nhật</a></li>
              <li><a href="#">Chính sách bảo mật</a></li>
              <li><a href="#">Chính sách giao hàng</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">HỆ THỐNG CỬA HÀNG (11 CH)</h4>
            <ul className="footer-address">
              <li>
                <p>
                  <i className="fas fa-map-marker-alt"></i>
                  <strong>HỒ CHÍ MINH (9 CH)</strong>
                </p>
                <p className="address-detail">
                  477-479-481 Đ. Sư Vạn Hạnh, P.12, Q.10
                </p>
              </li>
              <li>
                <p>
                  <i className="fas fa-map-marker-alt"></i>
                  <strong>ĐỒNG NAI</strong>
                </p>
                <p className="address-detail">
                  1357 Phạm Văn Thuận, Thống Nhất, Biên Hòa
                </p>
              </li>
              <li>
                <p>
                  <i className="fas fa-map-marker-alt"></i>
                  <strong>BÌNH DƯƠNG</strong>
                </p>
                <p className="address-detail">
                  79 Yersin, P.Phú Cường, Thủ Dầu Một
                </p>
              </li>
            </ul>
            <a href="#" className="view-all-stores">XEM TẤT CẢ CỬA HÀNG</a>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">FANPAGE CHÚNG TÔI</h4>
            <div className="fanpage-widget">
              <img src="assets/images/FF.png" alt="Fanpage Facebook" />
            </div>
            <h4 className="footer-title">PHƯƠNG THỨC THANH TOÁN</h4>
            <div className="payment-methods">
              <span>VNPAY</span>
              <span>COD</span>
            </div>
            <div className="certifications">
              <img src="assets/images/dmca.png" alt="DMCA Protected" />
              <img src="assets/images/dathongbao.webp" alt="Đã Thông Báo Bộ Công Thương" />
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© Bản quyền thuộc về ICONDENIM</p>
        </div>
      </div>
    </footer>
      </>
    );
  }
  
  export default App;
