import Service from "./Service";
import "./Service.css";
import accountsImage from "../../assets/Images/Accounts.png";
import taxImage from "../../assets/Images/Tax.png";
import bpoImage from "../../assets/Images/BusinessProcess.png";
import planImage from "../../assets/Images/Businessplan.png";
import auditImage from "../../assets/Images/Audit.png";

export default function ServiceGrid() {
  return (
    <>
      <section id="service-section">
        <h1>OUR SERVICES</h1>
        {/* <hr></hr> */}
        <div className="container">
          <div className="  d-flex row">
           <div className="col-lg-1"></div>
          <div className="service col-lg-2 col-sm-12 ">
              <Service
                src={auditImage}
                alt="Audit"
                description="Audit & Assurance "
              />
            </div>

            <div className="service col-lg-2 col-sm-12 ">
              <Service
                src={accountsImage}
                alt="accounts"
                description={`Accountancy & \n Book Keeping`}
              />
            </div>
            <div className="service col-lg-2 col-sm-12 ">
              <Service
                src={taxImage}
                alt="Tax"
                description="Tax & Corporate Compliance Advisory"
              />
            </div>
            <div className="service col-lg-2 col-sm-12 ">
              <Service
                src={planImage}
                alt="BPlanning"
                description={`Bussiness Planning & \n Investment Advisory`}
              />
            </div>

            <div className="service col-lg-2 col-sm-12 ">
              <Service
                src={bpoImage}
                alt="BPO"
                description="Business Process Outsourcing"
              />
            </div>
            {/* <div className="service col-lg-2 col-sm-6 ">
              <Service
                src={corporateImage}
                alt="Corporate"
                description="Corporate Advisory"
              />
            </div> */}
            
            
          </div>
        </div>
      </section>
    </>
  );
}
