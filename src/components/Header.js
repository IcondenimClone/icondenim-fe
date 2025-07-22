import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.webp';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
// import { FaUser } from "react-icons/fa";
import useWindowSize from '../hooks/useWindowSize';
import { useMemo } from 'react';
const menuItems = [
  <li key="1" className='inner-item-product'><a href="/">Sản phẩm <i className="fas fa-chevron-down"></i></a>
    <ul>
      <li>
        ÁO
        <ul>
          <li><a href='/'>Áo thun</a></li>
          <li><a href='/'>Áo thun</a></li>
          <li><a href='/'>Áo thun</a></li>
          <li><a href='/'>Áo thun</a></li>
          <li><a href='/'>Áo thun</a></li>
          <li><a href='/'>Áo thun</a></li>
          <li><a href='/'>Áo thun</a></li>
          <li><a href='/'>Áo thun</a></li>
        </ul>
      </li>
      <li>
        QUẦN
        <ul>
          <li>Quần Jean</li>
          <li>Quần Jean</li>
          <li>Quần Jean</li>
          <li>Quần Jean</li>
          <li>Quần Jean</li>
          <li>Quần Jean</li>
          <li>Quần Jean</li>
        </ul>
      </li>
      <li>
        GiàY & PHỤ KIỆN
        <ul>
          <li>Giày dép</li>
          <li>Giày dép</li>
          <li>Giày dép</li>
          <li>Giày dép</li>
          <li>Giày dép</li>
          <li>Giày dép</li>
        </ul>
      </li>
      <li>BEST SELLER</li>
      <li>OUTLET-ƯU ĐÃI 30%-70%</li>
      <li>SMART JEANS</li>
    </ul>
  </li>,
  <li key="2"><a href="/" className='new-product'>Hàng Mới <span className="new-tag">New</span></a></li>,
  <li key="3"><a href="/">Áo Nam<i className="fas fa-chevron-down"></i></a>
    {/* <ul className='hidden'>
      <li>Áo Thun</li>
      <li>Áo Thun</li>
      <li>Áo Thun</li>
      <li>Áo Thun</li>
      <li>Áo Thun</li>
      <li>Tank TOp - Áo Ba Lỗ</li>
      <li>Áo Thun</li>
      <li>Áo Thun</li>
    </ul> */}
  </li>,
  <li key="4"><a href="/">Quần Nam <i className="fas fa-chevron-down"></i></a>
    {/* <ul className='hidden'>
      <li>Quần Jean</li>
      <li>Quần Jean</li>
      <li>Quần Jean</li>
      <li>Quần Kaki & Chino</li>
      <li>Quần Jean</li>
      <li>Quần Jean</li>
      <li>Quần Jean</li>
    </ul> */}
  </li>,
  <li key="5"><a href="/">DENIM <i className="fas fa-chevron-down"></i></a></li>,
  <li key="6"><a href="/">TechUrban <i className="fas fa-chevron-down"></i></a></li>,
  <li key="7">
    <a href="/" className="outlet-link">OUTLET
        <span className="outlet-percent">-50%</span>
    </a>
  </li>,
  <li key="8"><a href="/">Marvel & Disney<i className="fas fa-chevron-down"></i></a></li>,
  <li key="9"><a href="/">Collection<i className="fas fa-chevron-down"></i></a></li>,
  <li key="10"><a href='/'>Tin thời trang</a></li>
];

function chunkArray(array, size) {
  const chunkedArr = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArr.push(array.slice(i, i + size));
  }
  return chunkedArr;
}
function Header() {
  // const buttonMenuMobile=document.querySelector(".header .inner-menu-mobile")
  // if(buttonMenuMobile){
  //   const menu=document.querySelector(".header .header-nav")
  //   buttonMenuMobile.addEventListener("click",()=>{
  //     menu.classList.add("active")
  //   })
  //   const overlay=document.querySelector(".header .header-nav")
  //   overlay.addEventListener("click",()=>{
  //     menu.classList.remove("active")
  //   })
  // }
  const { width } = useWindowSize();
  const itemsPerPage = width >= 1250 ? 7 : 5;


  const menuPages = useMemo(() => {
    return chunkArray(menuItems, itemsPerPage);
  }, [itemsPerPage]);
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
            {/* <div className='inner-user'>
              <div className='inner-left'>
                <FaUser/>
              </div>
              <div className='inner-right'>
                <div className='inner-login'>Đăng nhập</div>
                <div className='inner-desc'>Nhận nhiều ưu đãi hơn</div>
              </div>
            </div> */}
            <Swiper
              direction={'vertical'}
              modules={[Navigation]}
              spaceBetween={10}
              slidesPerView={1}
              navigation={{
                nextEl: '.nav-arrow-right',
                prevEl: '.nav-arrow-left',
              }}
              className="menu-swiper-vertical"
            >
              {menuPages.map((page, pageIndex) => (
                <SwiperSlide key={pageIndex}>
                  <ul className="menu-list">
                    {page}
                  </ul>
                </SwiperSlide>
              ))}
              {/* <SwiperSlide> 
              <ul className='menu-list'>
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
              </ul>
              </SwiperSlide>   
              <SwiperSlide>
                  <ul  className='menu-list'>
                    <li><a href="/">Marvel & Disney <i className="fas fa-chevron-down"></i></a></li>
                    <li><a href="/">Collection <i className="fas fa-chevron-down"></i></a></li>
                    <li><a href='/'>Tin thời trang</a></li>
                  </ul>
              </SwiperSlide> */}
              </Swiper>
              {/* <li><a href="/">Sản phẩm <i className="fas fa-chevron-down"></i></a></li>
              <li><a href="/" className='new-product'>Hàng Mới <span className="new-tag">New</span></a></li>
              <li><a href="/">Áo Nam <i className="fas fa-chevron-down"></i></a></li>
              <li><a href="/">Quần Nam <i className="fas fa-chevron-down"></i></a></li>
              <li><a href="/">DENIM <i className="fas fa-chevron-down"></i></a></li>
              <li><a href="/">TechUrban <i className="fas fa-chevron-down"></i></a></li>
              <li><a href="/" className="outlet-link">OUTLET
                  <span className="outlet-percent">-50%</span>
                  </a>
              </li>  */}
              {/* <li><a href="/">Marvel & Disney</a></li>
              <li><a href="/">Collection</a></li> */}
              <div class="inner-overlay"></div>
          </nav>
          <div className="header-actions">
            <button className="nav-arrow nav-arrow-left">
              <MdChevronLeft />
            </button>
            <button className="nav-arrow nav-arrow-right">
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