import footerLogo from '../assets/images/logo_footer.webp';
import fanpageImg from '../assets/images/FF.png';
import dmcaImg from '../assets/images/dmca.png';
import bctImg from '../assets/images/dathongbao.webp';
function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-column">
            <a href="/" className="footer-logo">
              <img src={footerLogo} alt="ICONDENIM Logo" />
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
              <a href="#"><i className="fa-brands fa-yahoo"></i></a>
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
              <img src={fanpageImg} alt="Fanpage Facebook" />
            </div>
            <h4 className="footer-title">PHƯƠNG THỨC THANH TOÁN</h4>
            <div className="payment-methods">
              <span>VNPAY</span>
              <span>COD</span>
            </div>
            <div className="certifications">
              <img src={bctImg} alt="Đã Thông Báo Bộ Công Thương" />
              <img src={dmcaImg} alt="DMCA Protected" className='dmca'/>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© Bản quyền thuộc về ICONDENIM</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;