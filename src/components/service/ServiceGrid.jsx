import Service from "./Service";
import "./Service.css";
import accountsImage from "../../assets/images/Accounts.jpg";
import taxImage from "../../assets/images/tax1.jpg";
import bpoImage from "../../assets/images/Bpo.jpg";
import corporateImage from "../../assets/images/corporate.jpg";
import planImage from "../../assets/images/Bplan.jpg";
import auditImage from "../../assets/images/audit.jpg";

export default function ServiceGrid() {
  return (
    <>
      <section id="service-section">
        <h1>OUR SERVICES</h1>
        <hr></hr>
        <div className="container">
          <div className="row">
            <div className="service col-lg-2 col-sm-6 acc">
              <Service
                src={accountsImage}
                alt="accounts"
                description={`Accountancy & \n Book Keeping`}
              />
            </div>
            <div className="service col-lg-2 col-sm-6 ">
              <Service
                src={taxImage}
                alt="Tax"
                description="Tax Advisory"
              />
            </div>
            <div className="service col-lg-2 col-sm-6 ">
              <Service
                src={bpoImage}
                alt="BPO"
                description="Business Process Outsourcing"
              />
            </div>
            <div className="service col-lg-2 col-sm-6 ">
              <Service
                src={corporateImage}
                alt="Corporate"
                description="Corporate Advisory"
              />
            </div>
            <div className="service col-lg-2 col-sm-6 ">
              <Service
                src={planImage}
                alt="BPlanning"
                description={`Bussiness Planning & \n Investment Advisory`}
              />
            </div>
            <div className="service col-lg-2 col-sm-6 audit">
              <Service
                src={auditImage}
                alt="Audit"
                description="Audit & Assurance "
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
