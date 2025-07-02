import logo from '../assets/images/logo.webp';
function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <button class="inner-menu-mobile">
            <i class="fa-solid fa-bars"></i>
          </button>
          <a href="/" className="header-logo">
            <img src={logo} alt="ICONDENIM Logo" />
          </a>
          <nav className="header-nav">
            <ul>
              <li><a href="/">Sản phẩm <i className="fas fa-chevron-down"></i></a></li>
              <li><a href="/">Hàng Mới <span className="new-tag">New</span></a></li>
              <li><a href="/">Áo Nam <i className="fas fa-chevron-down"></i></a></li>
              <li><a href="/">Quần Nam <i className="fas fa-chevron-down"></i></a></li>
              <li><a href="/">DENIM <i className="fas fa-chevron-down"></i></a></li>
              <li><a href="/">TechUrban <i className="fas fa-chevron-down"></i></a></li>
              <li><a href="/" className="outlet-link">OUTLET
                  <span className="outlet-percent">-50%</span>
                  </a>
              </li>
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
  );
}


export default Header;