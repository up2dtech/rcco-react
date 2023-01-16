import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faChevronRight, faClock, faEnvelope, faLocationDot, faMobileAndroid, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Footer.css";
export default function Footer() {
  return (
    <>
      <footer
        id="footer"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-duration="500"
      >
        <div className="footer-top">
          <div className="container">
            <div className="row">
              {/* ----About---- */}
              <div className="col-lg-3 col-md-6 col-sm-6 footer-info ">

              <div className="">
               <span className="logotext">Riaz Chishti & Co</span>
                {/* <p className="logop">Audit - Accounts - Tax</p> */}
                </div>
                <p className="infop ">
                  <FontAwesomeIcon icon={faClock} /> &nbsp; 9:00 am - 5:00 pm
                </p>
                <div className="social-links mt-3">
                  {/* <a href="#" className="twitter" title="twitter">
                    <i className="fa fa-twitter"></i>
                  </a> */}
                  <a
                    href="https://www.facebook.com/riazchishtiandco"
                    className="facebook"
                    target="_blank"
                  >
                   <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a href="#" className="instagram" target="_blank">
                  <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a
                    href="https://linkedin.com/company/riazchishtiandco"
                    className="linkedin"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                </div>
              </div>

              {/* ---useful links--- */}
              <div className="col-lg-2 col-md-5 col-sm-6 footer-links ">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                  <FontAwesomeIcon icon={faChevronRight} className="icon"  /> &nbsp;{" "}
                    <a
                      href="https://fbr.gov.pk/"
                      title="Federal Board of Revenue"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      FBR
                    </a>
                  </li>
                  <li>
                  <FontAwesomeIcon icon={faChevronRight} className="icon"  /> &nbsp;{" "}
                    <a
                      href="https://www.secp.gov.pk/"
                      title="Securities and Exchange Commission of Pakistan"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      SECP
                    </a>
                  </li>
                  <li>
                  <FontAwesomeIcon icon={faChevronRight} className="icon" /> &nbsp;{" "}
                    <a
                      href="https://e.pra.punjab.gov.pk/"
                      title="Punjab Revenue Authority"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      PRA
                    </a>
                  </li>
                  <li>
                  <FontAwesomeIcon icon={faChevronRight} className="icon" /> &nbsp; {" "}
                    <a
                      href="https://srb.gos.pk/"
                      title="Sindh Revenue Board"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      SRB
                    </a>
                  </li>
                  <li>
                  <FontAwesomeIcon icon={faChevronRight} className="icon" /> &nbsp; {" "}
                    <a
                      href="https://bra.gob.pk/"
                      title="Balochistan Revenue Authority"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      BRA
                    </a>
                  </li>
                  <li>
                  <FontAwesomeIcon icon={faChevronRight} className="icon" /> &nbsp; {" "}
                    <a
                      href="https://kpra.gov.pk/"
                      title="Khyber Pakhtunkhwa Revenue Authority"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      KPRA
                    </a>
                  </li>
                </ul>
              </div>
              {/* ---service--- */}
              <div className="col-lg-4 col-md-5 col-sm-6 footer-links ">
                <h4>Our Services</h4>
                <ul>
                  <li>
                  <FontAwesomeIcon icon={faChevronRight} className="icon" /> &nbsp;{" "}
                    <a href="#">Accounts & Book Keeping</a>
                  </li>
                  <li>
                  <FontAwesomeIcon icon={faChevronRight} className="icon" /> &nbsp;{" "}
                    <a href="#">Tax Advisory</a>
                  </li>
                  <li>
                  <FontAwesomeIcon icon={faChevronRight} className="icon"  /> &nbsp;{" "}
                    <a href="#">Business Planning Outsourcing</a>
                  </li>
                  <li>
                  <FontAwesomeIcon icon={faChevronRight} className="icon"  /> &nbsp;{" "}
                    <a href="#">Corporate Advisory</a>
                  </li>
                  <li>
                  <FontAwesomeIcon icon={faChevronRight} className="icon"  /> &nbsp;{" "}
                    <a href="#">Business Planning & Investment Advisory</a>
                  </li>
                  <li>
                  <FontAwesomeIcon icon={faChevronRight} className="icon" /> &nbsp;{" "}
                    <a href="#">Audit & Assurance</a>
                  </li>
                </ul>
              </div>

              {/* ---contact-- */}

              <div className="col-lg-3 col-md-6 col-sm-6 footer-contact">
                <h4>Contact Us</h4>
                <p>
                <FontAwesomeIcon icon={faMobileAndroid} /> &nbsp; 0321 4971186                 
                  <br />
                  <FontAwesomeIcon icon={faPhone} /> &nbsp; 042 38938695
                  <br />
                  <FontAwesomeIcon icon={faEnvelope} /> &nbsp; info@rcco.com.pk
                  <br />
                  <FontAwesomeIcon icon={faLocationDot} /> &nbsp; 68-A, Ali Block,
                  <br />
                  New Garden Town, Lahore
                  <br />
                  Pakistan <br />
                  <br />
                </p>
              </div>

              {/* end row*/}
            </div>
            {/* end container */}
          </div>
          {/* ==end footer top=== */}
        </div>
        <div className="container">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>Rcco 2022</span>
            </strong>
            . All Rights Reserved
          </div>
        </div>
      </footer>
      {/* <!-- End Footer --> */}
    </>
  );
}
