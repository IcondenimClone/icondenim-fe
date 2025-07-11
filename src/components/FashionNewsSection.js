import bannerFashionNew1 from '../assets/images/banner-fashion-new-1.jpg';
import bannerFashionNew2 from '../assets/images/banner-fashion-new-2.jpg';
import bannerFashionNew3 from '../assets/images/banner-fashion-new-3.jpg';
function FashionNewsSection(){
    return (
        <>
        <section className='fashion-new-section'>
            <div className='container'>
                <h2 className='inner-title'>
                    Tin Thời Trang
                </h2>
                <div className='inner-group'>
                    <div className='inner-item'>
                        <a href='#'>
                            <img src={bannerFashionNew1}></img>
                            <div className='overlay'></div>
                        </a>
                        <div className='inner-title'>
                            Gợi ý outfit thời trang mùa hè nam 2025 đẹp, dẫn đầu xu hướng
                        </div>
                        <div className='inner-date'>
                            26/05/2025
                        </div>
                        <p className='inner-desc'>
                            Bạn đã bao giờ thắc mắc vì sao vào mùa hè, mặc áo đen lại khiến bạn cảm thấy nóng hơn so với áo trắng? 
                        </p>
                    </div>
                    <div className='inner-item'>
                        <a href='#'>
                            <img src={bannerFashionNew2}></img>
                            <div className='overlay'></div>
                        </a>
                        <div className='inner-title'>
                            Màu nào hấp thụ nhiệt nhiều nhất? Cơ chế hấp thụ nhiệt của màu sắc
                        </div>
                        <div className='inner-date'>
                            26/05/2025
                        </div>
                        <p className='inner-desc'>
                            Bạn đã bao giờ thắc mắc vì sao vào mùa hè, mặc áo đen lại khiến bạn cảm thấy nóng hơn so với áo trắng? Bạn đã bao giờ thắc mắc vì sao vào mùa hè, mặc áo đen lại khiến bạn cảm thấy nóng hơn so với áo trắng? 
                        </p>
                    </div>
                    <div className='inner-item'>
                        <a href='#'>
                            <img src={bannerFashionNew3}></img>
                            <div className='overlay'></div>
                        </a>
                        <div className='inner-title'>
                            Phong cách layer - Nghệ thuật phối đồ nhiều lớp dẫn đầu xu hướng
                        </div>
                        <div className='inner-date'>
                            26/05/2025
                        </div>
                        <p className='inner-desc'>
                            Bạn đã bao giờ thắc mắc vì sao vào mùa hè, mặc áo đen lại khiến bạn cảm thấy nóng hơn so với áo trắng? 
                        </p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
};
export default FashionNewsSection;
