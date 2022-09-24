import React from 'react';
import "./styles/pay.css";
export default function PayNowButton({styles=false,head="Presented by E-Cell IITR",trigger=()=>{alert("Pay Now")}}) {
//   const [show, setShow] = useState(false);
  return (
    <div className='payNowButton' >
      
      <div
        className='pay-outer-container'
        style={styles.payOuterContainer && styles.payOuterContainer}
        onClick={() => {
         trigger();
        }}
      >
        <div className='pp-button' 
        style={styles?.ppButton && styles?.ppButton}
        >
          <div className='pp-text' style={styles?.ppText && styles?.ppText} >
            <h2 className='pp-text-1' style={styles?.ppText1 && styles?.ppText2} >PAY NOW</h2>
            <h3 className='pp-text-2' style={styles?.ppText2 && styles?.ppText2} >{head}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}