import "./Team.css";

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
      <hr></hr>
      {/* =====Content==== */}
      <div className="container">
        <div className="row">
          {/* ======== */}
          <div className="col-lg-1"></div>
          {/* ======== */}
          <div className="col-lg-2 col-md-6 d-flex align-items-stretch tcol">
            <div className="member">
              <div className="member-img">
                <img
                  src="..\..\images\teamuser.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="member-info">
                <h5>RIAZ AHMED CHISHTI</h5>
                <span>EXPERT INVESTMENT ADVISORY</span>
                <p>Founding Member, Ex.Vice President Habib Bank Ltd</p>
              </div>
              <div className="social">
                <a href="">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="">
                  <i className="fa fa-instagram"></i>
                </a>
                <a href="">
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
          {/* ======== */}
          <div className="col-lg-2 col-md-6 d-flex align-items-stretch tcol">
            <div className="member">
              <div className="member-img">
                <img
                  src="..\..\images\teamuser.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="member-info">
                <h5>MUHAMMAD UMER RIAZ</h5>
                <span>MANAGING PARTNER</span>
                <p>ACCA Member, M.com,Bsc</p>
              </div>
              <div className="social">
                <a href="">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="">
                  <i className="fa fa-instagram"></i>
                </a>
                <a href="">
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
          {/* ======== */}
          <div className="col-lg-2 col-md-6 d-flex align-items-stretch tcol">
            <div className="member">
              <div className="member-img">
                <img
                  src="..\..\images\teamuser.jpg"
                  className="img-fluid"
                  alt=""
                />
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
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="">
                  <i className="fa fa-instagram"></i>
                </a>
                <a href="">
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
          {/* ======== */}
          <div className="col-lg-2 col-md-6 d-flex align-items-stretch tcol">
            <div className="member">
              <div className="member-img">
                <img
                  src="..\..\images\femaleteam.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="member-info">
                <h5>MEHVISH MASOUD</h5>
                <span>MANAGER AUDIT & ASSURANCE</span>
                <p>CA(finalist), Bsc</p>
              </div>
              <div className="social">
                <a href="">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="">
                  <i className="fa fa-instagram"></i>
                </a>
                <a href="">
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
          {/* ======== */}
          <div className="col-lg-2 col-md-6 d-flex align-items-stretch tcol">
            <div className="member">
              <div className="member-img">
                <img
                  src="..\..\images\teamuser.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="member-info">
                <h5>MUHAMMAD RUHAN AFZAL</h5>
                <span>SPECIALIST LEGAL & COPORATE AFFAIRS</span>
                <p>Advocate High Court</p>
              </div>
              <div className="social">
                <a href="">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="">
                  <i className="fa fa-instagram"></i>
                </a>
                <a href="">
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
          {/* ======== */}

          {/* =======end container==== */}
        </div>
      </div>
    </section>
  );
}