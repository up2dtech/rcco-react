import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockFour,faEnvelope,faLocationDot, faMobile, faMobileAndroidAlt, faPhone, faPhoneFlip } from '@fortawesome/free-solid-svg-icons';
import "./ContactBar.css";
export default function ContactBar() {
  return (
    <>
      <div className="d-flex" id="contactbar">
        <div className="d-flex text-align-centre">
        <FontAwesomeIcon icon={faLocationDot} className="fa-1x"/>&nbsp;&nbsp;
          <p> 68-A, Ali Block, New Garden Town, Lahore, Pakistan </p>
          <div className="Vcontact"></div>
          <FontAwesomeIcon icon={faPhone} /> &nbsp;<p>042 38938695</p>
          <div className="Vcontact"></div>
          <FontAwesomeIcon icon={faMobile} /> &nbsp;<p>0321 4971186</p>
          <div className="Vcontact"></div>
          <FontAwesomeIcon icon={faEnvelope} />&nbsp;&nbsp;<p>info@rcco.com.pk</p>
          <div className="Vcontact"></div>
          <FontAwesomeIcon icon={faClockFour} />&nbsp;&nbsp;<p>Monday-Friday</p>
          &nbsp;&nbsp;<p>9:00 – 5:00pm</p>
        
        </div>
       
       
      </div>
    </>
  );
}
