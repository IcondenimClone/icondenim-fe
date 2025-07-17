import { FaPhone } from "react-icons/fa6";
import { MdKeyboardArrowUp } from "react-icons/md";
import { useEffect, useState } from "react";
function FloatingButtons() {
  const [showButtons, setShowButtons] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (window.pageYOffset > 35) {
        setIsLeaving(false);
        setShowButtons(true);
      } else {
        if (showButtons) { 
          setIsLeaving(true);
          setTimeout(() => {
            setShowButtons(false);
          }, 500); 
        }
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [showButtons]);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  if (!showButtons) {
    return null; 
  }

  const containerClass = `floating-buttons-container ${isLeaving ? 'is-leaving' : ''}`;
  return (
    <div className={containerClass}>
      <a href="tel:02873066060" className="floating-button call">
        <FaPhone />
        <div className="pulsing-circle"></div>
        <div className="pulsing-circle"></div>
      </a>
      <button onClick={scrollToTop} className="floating-button scroll-top">
        <MdKeyboardArrowUp />
      </button>
    </div>
  );
}
export default FloatingButtons;