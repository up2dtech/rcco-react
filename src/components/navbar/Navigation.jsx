import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faFacebookF, faFacebookSquare, faInstagram, faInstagramSquare, faLinkedin, faLinkedinIn, faSquareFacebook, faWhatsappSquare } from "@fortawesome/free-brands-svg-icons";
import "./Navigation.css";
import logoImage from "../../assets/Images/logo.png";
import { useState } from "react";

export default function Navigation() {
  const [toggle, setToggle] = useState(true);
  const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="d-flex  navigation">
        <nav className="navbar navbar-fixed justify-content-between  navbar-expand-lg col-lg-11 col-sm-12 ">
          {/* <!-- ===logo== --> */}
          <div className="col-sm-1 flex-grid">
            <a className="navbar-brand" href="#">
              <img className="navimg" src={logoImage} />
            </a>
          </div>
          {/* ===logo text=== */}
          <div className="textsec">
            <span className="logotext">Riaz Chishti & Co</span>
            <p className="logop">Audit - Accounts - Tax</p>
          </div>

          {/* <!-- ===navbar=== --> */}
          <div className=" toggle ">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setToggle(!toggle)}
            >
              <span className="navbar-toggler-icon">
                <FontAwesomeIcon icon={faBars} />
              </span>
            </button>
            {/* <!-- ===links=== --> */}
            <div
              className={toggle && "collapse navbar-collapse "}
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto navbar-navsm navleft">
                <li className="navbar-item active">
                  <a
                    style={{ cursor: "pointer" }}
                    onClick={() => handleClickScroll("testimonials")}
                    className="mr-2 nav-link"
                  >
                    Home
                  </a>
                </li>

                <li className="navbar-item active">
                  <a
                    style={{ cursor: "pointer" }}
                    onClick={() => handleClickScroll("about-section")}
                    className="mr-2 nav-link"
                  >
                    About
                  </a>
                </li>
                <li className="navbar-item active">
                  <a
                    style={{ cursor: "pointer" }}
                    onClick={() => handleClickScroll("service-section")}
                    className="mr-2 nav-link"
                  >
                    Services
                  </a>
                </li>
                <li className="navbar-item active">
                  <a
                    style={{ cursor: "pointer" }}
                    onClick={() => handleClickScroll("team-section")}
                    className="nav-link "
                  >
                    Team
                  </a>
                </li>

                <li className="navbar-item active">
                  <a
                    style={{ cursor: "pointer" }}
                    onClick={() => handleClickScroll("calculate-tax-section")}
                    className="mr-1 nav-link"
                  >
                    Calculate Tax
                  </a>
                </li>

                <li className="navbar-item active">
                  <a
                    className="nav-link mr-4"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleClickScroll("advisory-section")}
                  >
                    Business Sectors
                  </a>
                </li>

                {/* <li className="navbar-item active">
                  <a
                    style={{ cursor: "pointer" }}
                    onClick={() => handleClickScroll("updates-section")}
                    className="mr-2 nav-link"
                  >
                    Updates
                  </a>
                </li>
              */}

                <li className="navbar-item active">
                  <a
                    href="https://linkedin.com/company/riazchishtiandco"
                    className="nav-link mr-0"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </li>
                <li className="navbar-item active">
                  <a
                    href="https://www.facebook.com/riazchishtiandco"
                    className="nav-link mr-1 "
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faFacebookSquare} />
                  </a>
                </li>
                <li className="navbar-item active">
                  <a
                    href="https://www.instagram.com/riazchishtiandco/?igshid=YmMyMTA2M2Y%3D"
                    className="nav-link mr-1"
                    target="_blank"
                  >
                      <FontAwesomeIcon icon={faInstagramSquare}  />
                  </a>
                </li>
                <li className="navbar-item active">
                  <a
                    href="https://wa.me/message/TBP3TYA3OKL4E1 "
                    className="nav-link mr-1"
                    target="_blank"
                  >
                      <FontAwesomeIcon icon={faWhatsappSquare}  />
                  </a>
                </li>
              </ul>
            </div>
            {/* <!-- ====links====== --> */}
          </div>
        </nav>
      </div>
    </>
  );
}
