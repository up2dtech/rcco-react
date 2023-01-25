import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockFour,faEnvelope,faLocationDot, faMobile, faMobileAndroidAlt, faPhone, faPhoneFlip } from '@fortawesome/free-solid-svg-icons';
import "./ContactBar.css";
export default function ContactBar() {
  return (
    <>
      <div className="d-flex" id="contactbar">
      
        <div className="d-flex text-align-centre">       
         
          <FontAwesomeIcon icon={faPhone}  /> &nbsp;<p>042 38938695</p>
          <div className="Vcontact "></div>
          <FontAwesomeIcon icon={faEnvelope} />&nbsp;&nbsp;<p>info@rcco.com.pk</p>
          <div className="Vcontact "></div>
          <FontAwesomeIcon icon={faLocationDot} className="fa-1x "/>&nbsp;&nbsp;         
          <p> 68-A, Ali Block, New Garden Town, Lahore, Pakistan </p>
          <div className="Vcontact hide"></div>
          <FontAwesomeIcon icon={faMobile} className='hide' /> &nbsp;<p className='hide'>0321 4971186</p>
          <div className="Vcontact hide"></div>
          <FontAwesomeIcon icon={faClockFour} className='hide'/>&nbsp;&nbsp;<p className='hide'>Monday-Friday</p>
          &nbsp;&nbsp;<p className='hide'>9:00 – 5:00pm</p>
        
        </div>
       
       
      </div>
    </>
  );
}
