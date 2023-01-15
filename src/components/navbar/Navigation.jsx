import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


import "./Navigation.css";
import image from "../../assets/Images/full-logo.png";
export default function Navigation() {
  const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="d-flex ">
        <nav className="navbar sticky-top  d-flex justify-content-between  navbar-expand-lg col-lg-11 h-50 ">
          {/* <!-- ===logo== --> */}
          <div className="">
            <a className="navbar-brand" href="#">
              <img className="navimg" src={image} />
            </a>
          </div>
          {/* <!-- ===navbar=== --> */}
          <div className="">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon">
                <FontAwesomeIcon icon={faBars}/>
              </span>
            </button>
            {/* <!-- ===links=== --> */}
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="navbar-item active">
                  <a
                    style={{ cursor: "pointer" }}
                    onClick={() => handleClickScroll("home-section")}
                    className="mr-2 nav-link"
                  >
                    Home
                  </a>
                </li>
                <li className="navbar-item active">
                  <a
                    style={{ cursor: "pointer" }}
                    onClick={() => handleClickScroll("calculate-tax-section")}
                    className="mr-2 nav-link"
                  >
                    Calculate Tax
                  </a>
                </li>
                <li className="navbar-item active">
                  <a
                    style={{ cursor: "pointer" }}
                    onClick={() => handleClickScroll("updates-section")}
                    className="mr-2 nav-link"
                  >
                    Updates
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
                    className="nav-link"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleClickScroll("advisory-section")}
                  >
                    Advisory
                  </a>
                </li>
                <li className="navbar-item active">
                  <a
                    style={{ cursor: "pointer" }}
                    onClick={() => handleClickScroll("team-section")}
                    className="nav-link mr-5"
                  >
                    Team
                  </a>
                </li>
                <li className="navbar-item active">
                  <a
                    href="https://linkedin.com/company/riazchishtiandco"
                    className="nav-link mr-0"
                    target="_blank"
                  >
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li className="navbar-item active">
                  <a
                    href="https://www.facebook.com/riazchishtiandco"
                    className="nav-link mr-1"
                    target="_blank"
                  >
                    <i className="fa fa-facebook"></i>
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
