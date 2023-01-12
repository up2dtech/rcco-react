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
                <h3>Riaz Chishti & Co</h3>
                <p>
                  <i className="fa fa-clock"></i> &nbsp; 9:00 am - 5:00 pm
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
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="#" className="instagram" target="_blank">
                    <i className="fa fa-instagram"></i>
                  </a>
                  <a
                    href="https://linkedin.com/company/riazchishtiandco"
                    className="linkedin"
                    target="_blank"
                  >
                    <i className="fa fa-linkedin"></i>
                  </a>
                </div>
              </div>

              {/* ---useful links--- */}
              <div className="col-lg-2 col-md-5 col-sm-6 footer-links ">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="fa fa-chevron-right"></i>{" "}
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
                    <i className="fa fa-chevron-right"></i>{" "}
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
                    <i className="fa fa-chevron-right"></i>{" "}
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
                    <i className="fa fa-chevron-right"></i>{" "}
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
                    <i className="fa fa-chevron-right"></i>{" "}
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
                    <i className="fa fa-chevron-right"></i>{" "}
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
                    <i className="fa fa-chevron-right"></i>{" "}
                    <a href="#">Accounts & Book Keeping</a>
                  </li>
                  <li>
                    <i className="fa fa-chevron-right"></i>{" "}
                    <a href="#">Tax Advisory</a>
                  </li>
                  <li>
                    <i className="fa fa-chevron-right"></i>{" "}
                    <a href="#">Business Planning Outsourcing</a>
                  </li>
                  <li>
                    <i className="fa fa-chevron-right"></i>{" "}
                    <a href="#">Corporate Advisory</a>
                  </li>
                  <li>
                    <i className="fa fa-chevron-right"></i>{" "}
                    <a href="#">Business Planning & Investment Advisory</a>
                  </li>
                  <li>
                    <i className="fa fa-chevron-right"></i>{" "}
                    <a href="#">Audit & Assurance</a>
                  </li>
                </ul>
              </div>

              {/* ---contact-- */}

              <div className="col-lg-3 col-md-6 col-sm-6 footer-contact">
                <h4>Contact Us</h4>
                <p>
                  <i className="fa fa-phone"></i>&nbsp; 0321 4971186
                  <br />
                  <i className="fa fa-envelope"></i>&nbsp; info@rcco.com.pk
                  <br />
                  <br />
                  <i className="fa fa-location-dot"></i> &nbsp; 68-A, Ali Block,
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
