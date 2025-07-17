import "./Team.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import TeamImg1 from "../../assets/Images/riaz.jpeg";
import TeamImg2 from "../../assets/Images/Umer.jpeg";
import TeamImg3 from "../../assets/Images/asif.jpeg";
import TeamImg4 from "../../assets/Images/mehwish.jpg";
import TeamImg5 from "../../assets/Images/ruhan.jpeg";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col } from "react-bootstrap";

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
          {/* <div className="col-lg-4 col-md-4 col-sm-12 d-flex align-items-stretch tcol">
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
          </div> */}

         <Col md={4} lg={4}>
           <Card className="card">
            <Card.Img variant="top" src={TeamImg1}  alt="Riaz" height={400}/>
             <Card.Body>
             <Card.Title className="title">RIAZ AHMED CHISHTI</Card.Title>
               <Card.Text className="teaminfo">
                <span className="tspan">EXPERT INVESTMENT ADVISORY</span><br/>
                   Founding Member, Ex.Vice President Habib Bank Ltd
              </Card.Text>       
             </Card.Body>
             </Card>
           </Col>
          {/* ======== */}
          <Col md={4} lg={4}>
           <Card >
            <Card.Img variant="top" src={TeamImg2}  alt="Riaz" height={400}/>
             <Card.Body>
             <Card.Title className="title">MUHAMMAD UMER RIAZ</Card.Title>
               <Card.Text className="teaminfo">
                <span className="tspan">MANAGING PARTNER</span><br/>
                ACCA Member, M.com,Bsc
              </Card.Text>       
             </Card.Body>
             </Card>
           </Col>
          {/* ======== */}

    <Col md={4} lg={4}>
           <Card >
            <Card.Img variant="top" src={TeamImg4}  alt="Riaz" height={400}/>
             <Card.Body>
             <Card.Title className="title">MEHVISH MASOUD</Card.Title>
               <Card.Text className="teaminfo">
                <span className="tspan">MANAGER AUDIT & ASSURANCE</span><br/>
                CA(finalist), Bsc
              </Card.Text>       
             </Card.Body>
             </Card>
           </Col>

          {/* <Col md={4} lg={4}>
           <Card >
            <Card.Img variant="top" src={TeamImg3}  alt="Riaz" height={400}/>
             <Card.Body>
             <Card.Title className="title">DR. ASIF CHISHTI</Card.Title>
               <Card.Text className="teaminfo">
                <span className="tspan">DIRECTOR FINANCIAL ADVISORY</span><br/>
                MD, Master in Management & Leadership (Harvard University),
                  Master in Policy & Development (London School of Economics)
              </Card.Text>       
             </Card.Body>
             </Card>
           </Col> */}

          {/* ======== */}
          </div> 
          {/* =======end row1==== */}
       
          {/* ====2nd row=== */}
          <div class="row mt-3">
          
      
        {/* ======== */}
        <Col md={4} lg={4}>
           <Card >
            <Card.Img variant="top" src={TeamImg5}  alt="Riaz" height={400}/>
             <Card.Body>
             <Card.Title className="title">MUHAMMAD RUHAN AFZAL</Card.Title>
               <Card.Text className="teaminfo">
                <span className="tspan">SPECIALIST LEGAL & COPORATE AFFAIRS</span><br/>
                Advocate High Court
              </Card.Text>       
             </Card.Body>
             </Card>
           </Col>
      {/* ======== */}
      <Col md={4} lg={4}>
           <Card >
            <Card.Img variant="top" src={TeamImg4}  alt="Riaz" height={400}/>
             <Card.Body>
             <Card.Title className="title">RABIA RIAZ</Card.Title>
               <Card.Text className="teaminfo">
                <span className="tspan">HR & IT SPECIALIST</span><br/>
                Experienced HR Manager from the Aviation Industry
              </Card.Text>       
             </Card.Body>
             </Card>
           </Col>
      </div>  
          {/* ====end container== */}
      </div>
    </section>
  );
}
