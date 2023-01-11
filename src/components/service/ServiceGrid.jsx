import Service from "./Service";
import "./Service.css";

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
              src="src\assets\Images\Accounts.jpg"
              alt="accounts"
              description={`Accountancy & \n Book Keeping`}
            />
          </div>
          <div className="service col-lg-2 col-sm-6 ">
            <Service
              src="src\assets\Images\tax1.jpg"
              alt="Tax"
              description="Tax Advisory"
            />
          </div>
          <div className="service col-lg-2 col-sm-6 ">
            <Service
              src="src\assets\Images\Bpo.jpg"
              alt="BPO"
              description="Business Process Outsourcing"
            />
          </div>
          <div className="service col-lg-2 col-sm-6 ">
            <Service
              src="src\assets\Images\corporate.jpg"
              alt="Corporate"
              description="Corporate Advisory"
            />
          </div>
          <div className="service col-lg-2 col-sm-6 ">
            <Service
              src="src\assets\Images\Bplan.jpg"
              alt="BPlanning"
              description={`Bussiness Planning & \n Investment Advisory`}
            />
          </div>
          <div className="service col-lg-2 col-sm-6 audit">
            <Service
              src="src\assets\Images\audit.jpg"
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
