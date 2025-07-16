import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.webp';
import { useState, useRef, useEffect } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'; // Dùng react-icons

function Header() {
  const navListRef = useRef(null); // Ref để kết nối với thẻ <ul>
  const [isLeftDisabled, setIsLeftDisabled] = useState(true);
  const [isRightDisabled, setIsRightDisabled] = useState(false);

  // 3. TẠO CÁC HÀM XỬ LÝ
  const handleScroll = (direction) => {
    const navList = navListRef.current;
    if (!navList) return;

    // Cuộn một khoảng 300px mỗi lần bấm
    const scrollAmount = 300; 
    
    // Dùng scrollBy để cuộn mượt mà
    navList.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth' 
    });
  };

  // Hàm này để kiểm tra xem có nên vô hiệu hóa các nút không
  const checkArrows = () => {
    const navList = navListRef.current;
    if (!navList) return;

    // Vô hiệu hóa nút trái nếu đang ở đầu (vị trí cuộn nhỏ hơn 10px để tránh sai số)
    setIsLeftDisabled(navList.scrollLeft < 10);

    // Vô hiệu hóa nút phải nếu đã cuộn đến cuối
    const maxScrollLeft = navList.scrollWidth - navList.clientWidth;
    setIsRightDisabled(navList.scrollLeft >= maxScrollLeft - 10);
  };

  // 4. DÙNG useEffect ĐỂ GẮN SỰ KIỆN VÀ KIỂM TRA LẦN ĐẦU
  useEffect(() => {
    const navList = navListRef.current;
    if (!navList) return;

    // Phải gọi checkArrows sau một khoảng trễ nhỏ để đảm bảo DOM đã render hoàn chỉnh
    const timer = setTimeout(checkArrows, 100);

    // Lắng nghe sự kiện 'scroll' để cập nhật lại trạng thái các nút
    navList.addEventListener('scroll', checkArrows);

    // Dọn dẹp listener và timer khi component bị hủy
    return () => {
      navList.removeEventListener('scroll', checkArrows);
      clearTimeout(timer);
    };
  }, []);

  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <button className="inner-menu-mobile">
            <i class="fa-solid fa-bars"></i>
          </button>
          <Link to="/" className="header-logo">
            <img src={logo} alt="ICONDENIM Logo" />
          </Link>
          
          <nav className="header-nav">
            <ul ref={navListRef}>
              <li><a href="/">Sản phẩm <i className="fas fa-chevron-down"></i></a></li>
              <li><a href="/" className='new-product'>Hàng Mới <span className="new-tag">New</span></a></li>
              <li><a href="/">Áo Nam <i className="fas fa-chevron-down"></i></a></li>
              <li><a href="/">Quần Nam <i className="fas fa-chevron-down"></i></a></li>
              <li><a href="/">DENIM <i className="fas fa-chevron-down"></i></a></li>
              <li><a href="/">TechUrban <i className="fas fa-chevron-down"></i></a></li>
              <li><a href="/" className="outlet-link">OUTLET
                  <span className="outlet-percent">-50%</span>
                  </a>
              </li> 
              {/* <li><a href="/">Marvel & Disney</a></li>
              <li><a href="/">Collection</a></li> */}
            </ul>
          </nav>
          <div className="header-actions">
            <button 
              className="nav-arrow" 
              onClick={() => handleScroll('left')} 
              disabled={isLeftDisabled}
            >
              <MdChevronLeft />
            </button>
            <button 
              className="nav-arrow" 
              onClick={() => handleScroll('right')}
              disabled={isRightDisabled}
            >
              <MdChevronRight />
            </button>

            <a href="/"><i className="fas fa-search"></i></a>
            <Link to="/login"><i className="fas fa-user"></i></Link>
            <a href="/"><i className="fas fa-map-marker-alt"></i></a>
            <a href="/" className="cart-icon"><i className="fas fa-shopping-cart"></i><span>0</span></a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;