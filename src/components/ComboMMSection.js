import bannerCB1 from "../assets/images/banner-cb-1.jpg";
import bannerCB2 from "../assets/images/banner-cb-2.jpg";
import bannerCB3 from "../assets/images/banner-cb-3.jpg";
import bannerCB4 from "../assets/images/banner-cb-4.jpg";
import addToCart from "../assets/images/add-to-cart.svg"
function ComboMMSection(){
    return (
        <section className="combo-mm-section">
            <div className="container">
                <h2 className="inner-title">
                    Combo Mix & Match
                </h2>
                <div className="inner-group">
                    <div className="inner-item">
                        <img src={bannerCB1}></img>
                        
                    </div>
                    <div className="inner-item">
                        <img src={bannerCB2}></img>
                        <div className="inner-icon">
                            <a href="#">
                                <img src={addToCart}></img>
                            </a>    
                        </div>
                    </div>
                    <div className="inner-item">
                        <img src={bannerCB3}></img>
                        <div className="inner-icon">
                            <a href="#">
                                <img src={addToCart}></img>
                            </a>    
                        </div>
                    </div>
                    <div className="inner-item">
                        <img src={bannerCB4}></img>
                        <div className="inner-icon">
                            <a href="#">
                                <img src={addToCart}></img>
                            </a>    
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ComboMMSection;