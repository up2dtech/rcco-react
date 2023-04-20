import "./Team.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import TeamImg1 from "../../assets/Images/riaz.jpeg";
import TeamImg2 from "../../assets/Images/Umer.jpeg";
import TeamImg3 from "../../assets/Images/asif.jpeg";
import TeamImg4 from "../../assets/Images/mehwish.jpg";
import TeamImg5 from "../../assets/Images/ruhan.jpeg";
import TeamImg6 from "../../assets/Images/bob.png";

export default function Team() {
  return (
    <section
      className="team"
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
      data-aos-duration="500"
      id="team-section"
    >
      <h1>Our Expert Team</h1>
      {/* <hr></hr> */}
      {/* =====Content==== */}
      <div className="container">
         {/* ====Row1==== */}
        <div className="row">    
             
          {/* ======== */}
          <div className="col-lg-4 col-md-4 col-sm-12 d-flex align-items-stretch tcol">
            <div className="member">
              <div className="member-img">    
                <img className="img-fluid" src={TeamImg1}  alt="Riaz"/>
              </div>
              <div className="member-info">
                <h5>RIAZ AHMED CHISHTI</h5>
                <span>EXPERT INVESTMENT ADVISORY</span>
                <p>Founding Member, Ex.Vice President Habib Bank Ltd</p>
              </div>
              <div className="social">
                <a href="">
                <FontAwesomeIcon icon={faTwitter} className="fa-1x" />
                </a>
                <a href="">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="">
                <FontAwesomeIcon icon={faInstagram} className="fa-1x" />
                </a>
                <a href="">
                <FontAwesomeIcon icon={faLinkedin} className="fa-1x" />
                </a>
              </div>
            </div>
          </div>
          {/* ======== */}
          <div className="col-lg-4 col-md-4 col-sm-12 d-flex align-items-stretch tcol">
            <div className="member">
              <div className="member-img">
              <img className="img-fluid" src={TeamImg2}  alt="Umer"/>
              </div>
              <div className="member-info">
                <h5>MUHAMMAD UMER RIAZ</h5>
                <span>MANAGING PARTNER</span>
                <p>ACCA Member, M.com,Bsc</p>
              </div>
              <div className="social">
                <a href="">
                <FontAwesomeIcon icon={faTwitter} className="fa-1x" />
                </a>
                <a href="">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="">
                <FontAwesomeIcon icon={faInstagram} className="fa-1x" />
                </a>
                <a href="">
                <FontAwesomeIcon icon={faLinkedin} className="fa-1x" />
                </a>
              </div>
            </div>
          </div>
          {/* ======== */}
          <div className="col-lg-4 col-md-4 col-sm-12 d-flex align-items-stretch tcol">
            <div className="member">
              <div className="member-img">
              <img className="img-fluid" src={TeamImg3}  alt="Asif"/>
              </div>
              <div className="member-info">
                <h5>DR. ASIF CHISHTI</h5>
                <span>DIRECTOR FINANCIAL ADVISORY</span>
                <p>
                  MD, Master in Management & Leadership (Harvard University),
                  Master in Policy & Development (London School of Economics){" "}
                </p>
              </div>
              <div className="social">
                <a href="">
                <FontAwesomeIcon icon={faTwitter} className="fa-1x" />
                </a>
                <a href="">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="">
                <FontAwesomeIcon icon={faInstagram} className="fa-1x" />
                </a>
                <a href="">
                <FontAwesomeIcon icon={faLinkedin} className="fa-1x" />
                </a>
              </div>
            </div>
          </div>
          {/* ======== */}
          </div>
          {/* =======end row1==== */}
       
          {/* ====2nd row=== */}
          <div class="row">
          
     <div class="col-lg-4 col-md-4 col-sm-12 tcol">
        <div class="member">
          <div class="member-img">
          <img className="img-fluid" src={TeamImg4}  alt="Mehwish"/>
           </div>
          <div class="member-info">
            <h5>MEHVISH MASOUD</h5>
            <span>MANAGER AUDIT & ASSURANCE</span>
            <p>CA(finalist), Bsc</p>
          </div>
          <div className="social">
                <a href="">
                <FontAwesomeIcon icon={faTwitter} className="fa-1x" />
                </a>
                <a href="">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="">
                <FontAwesomeIcon icon={faInstagram} className="fa-1x" />
                </a>
                <a href="">
                <FontAwesomeIcon icon={faLinkedin} className="fa-1x" />
                </a>
              </div>
        </div>
      </div>
        {/* ======== */}
      <div class="col-lg-4 col-md-4 col-sm-12 d-flex align-items-stretch tcol">
        <div class="member">
          <div class="member-img">
          <img className="img-fluid" src={TeamImg5}  alt="Ruhan"/>
          </div>
          <div class="member-info">
            <h5>MUHAMMAD RUHAN AFZAL</h5>
            <span>SPECIALIST LEGAL & COPORATE AFFAIRS</span>
            <p>Advocate High Court</p>
          </div>
          <div className="social">
                <a href="">
                <FontAwesomeIcon icon={faTwitter} className="fa-1x" />
                </a>
                <a href="">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="">
                <FontAwesomeIcon icon={faInstagram} className="fa-1x" />
                </a>
                <a href="">
                <FontAwesomeIcon icon={faLinkedin} className="fa-1x" />
                </a>
              </div>
        </div>
      </div>
      {/* ======== */}
      <div class="col-lg-4 col-md-4 col-sm-12 d-flex align-items-stretch tcol">
        <div class="member">
          <div class="member-img">
          <img className="img-fluid" src={TeamImg4}  alt="Abbas"/>
          </div>
          <div class="member-info">
            <h5>RABIA RIAZ</h5>
            <span>HR & IT SPECIALIST</span>
            <p>Experienced HR Manager from the Aviation Industry</p>
          </div>
          <div className="social">
                <a href="">
                <FontAwesomeIcon icon={faTwitter} className="fa-1x" />
                </a>
                <a href="">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="">
                <FontAwesomeIcon icon={faInstagram} className="fa-1x" />
                </a>
                <a href="">
                <FontAwesomeIcon icon={faLinkedin} className="fa-1x" />
                </a>
              </div>
        </div>
      </div>
      </div>  
          {/* ====end container== */}
      </div>
    </section>
  );
}
