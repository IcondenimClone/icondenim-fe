import bannerInstagram1 from '../assets/images/banner-instagram-1.jpg';
import { FaInstagram } from "react-icons/fa";
function FollowInstagramSection(){  
    return (
        <>
            <section className="follow-instagram-section">
                <div className="container">
                    <h2 className="inner-title">
                        Follow Instagram @ICONDENIM
                    </h2>
                    <div className="inner-group">
                        <div className="inner-item">
                            <img src={bannerInstagram1}></img>
                            <div className='inner-icon'>
                                <FaInstagram className='icon-insta'></FaInstagram>
                            </div>
                        </div>
                        <div className="inner-item">
                            <img src={bannerInstagram1}></img>
                            <div className='inner-icon'>
                                <FaInstagram className='icon-insta'></FaInstagram>
                            </div>
                        </div>
                        <div className="inner-item">
                            <img src={bannerInstagram1}></img>
                            <div className='inner-icon'>
                                <FaInstagram className='icon-insta'></FaInstagram>
                            </div>
                        </div>
                        <div className="inner-item">
                            <img src={bannerInstagram1}></img>
                            <div className='inner-icon'>
                                <FaInstagram className='icon-insta'></FaInstagram>
                            </div>
                        </div>
                        <div className="inner-item">
                            <img src={bannerInstagram1}></img>
                            <div className='inner-icon'>
                                <FaInstagram className='icon-insta'></FaInstagram>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};
export default FollowInstagramSection;