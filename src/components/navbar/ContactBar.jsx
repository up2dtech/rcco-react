import "./ContactBar.css";
export default function ContactBar() {
  return (
    <>
      <div className="d-flex" id="contactbar">
        <div className="d-flex ">
          <i className="fa-solid fa-location-dot"></i>&nbsp;&nbsp;
          <p>68-A, Ali Block, New Garden Town, Lahore, Pakistan </p>
        </div>
        <div className="d-flex pright">
          <i className="fa-solid fa-phone"></i>&nbsp;<p>0321 4971186</p>
          <div className="Vcontact"></div>
          <i className="fa-solid fa-clock"></i>&nbsp;&nbsp;<p>Monday-Friday</p>
          &nbsp;&nbsp;<p>9:00 – 5:00pm</p>
        </div>
        {/* <div className="d-flex">          
          
          </div> */}
      </div>
    </>
  );
}
