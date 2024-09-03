import { useState } from "react";
import { FaChevronUp } from "react-icons/fa";

const ScrollButton = () => {

  const [Visible, setVisible] = useState(false)

  const toggleVisible = () => { 
    const scrolled = document.documentElement.scrollTop; 
    if (scrolled > 300){ 
      setVisible(true) 
    }  
    else if (scrolled <= 300){ 
      setVisible(false) 
    } 
  }; 

  const scrollToTop = () =>{ 
    window.scrollTo({ 
      top: 0,  
      behavior: 'smooth'
    }); 
  }; 
  
  window.addEventListener('scroll', toggleVisible); 

  return (
    <div className={"ScrollButton" + (Visible ? " visible" : "")} onClick={scrollToTop}>
      <FaChevronUp />
    </div>
  )
}
export default ScrollButton