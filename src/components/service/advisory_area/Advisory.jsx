import "./Advisory.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoltLightning, faBriefcase, faBus, faBusinessTime, faGraduationCap, faHandHoldingHeart, faHeartPulse, faHotel, faIndustry, faLaptop, faPeopleGroup, faPersonDigging, faPowerOff, faSeedling, faUserTie, faUtensils } from "@fortawesome/free-solid-svg-icons";

function Advisoryarea() {
  return (
    <div className="col-lg-12  mt-5" id="advisory-section">
      <h1 className="adh1">Business Sectors</h1>
      {/* <hr /> */}

      <div className="row">
        <div className="col-lg-1"></div>
        {/* ===list1=== */}
        <div className="col-lg-5 col-sm-10 list">
          <ul className="fa-ul">
            <li>
              <span className="fa-li">
                <FontAwesomeIcon icon={faSeedling} />
              </span>
              <a href="">Agriculture, Forestry and Fishing</a>
            </li>
            <li>
              <span className="fa-li">
                <FontAwesomeIcon icon={faHandHoldingHeart} />
              </span>
              <a href="">Charities and Non-Profit</a>
            </li>
            <li>
              <span className="fa-li">
                <FontAwesomeIcon icon={faGraduationCap} />
              </span>
              <a href="">Education</a>
            </li>
            <li>
              <span className="fa-li">
                <FontAwesomeIcon icon={faUtensils} />
              </span>
              <a href="">Food and Beverage</a>
            </li>
            <li>
              <span className="fa-li">
                <FontAwesomeIcon icon={faHeartPulse} />
              </span>
              <a href="">Healthcare</a>
            </li>
            <li>
              <span className="fa-li">
                <FontAwesomeIcon icon={faHotel} />
              </span>
              <a href="">Hospitality and Tourism</a>
            </li>
            <li>
              <span className="fa-li">
              <FontAwesomeIcon icon={faPeopleGroup} />
              </span>
              <a href="">Private Clients and Family Offices</a>
            </li>
          </ul>
        </div>
        {/* ====column 2=== */}

        <div className="col-lg-5 col-sm-10 list">
          <ul className="fa-ul">
            <li>
              <span className="fa-li">
                <FontAwesomeIcon icon={faIndustry} />
              </span>
              <a href="">Manufacturing & Distribution</a>
            </li>
            <li>
              <span className="fa-li">
                <FontAwesomeIcon icon={faBoltLightning} />
              </span>
              <a href="">Power Generation Units</a>
            </li>
            <li>
              <span className="fa-li">
                <FontAwesomeIcon icon={faBriefcase} />
              </span>
              <a href="">Professional Services</a>
            </li>
            <li>
              <span className="fa-li">
                <FontAwesomeIcon icon={faUserTie} />
              </span>
              <a href="">Government and Public Administration </a>
            </li>
            <li>
              <span className="fa-li">
                <FontAwesomeIcon icon={faPersonDigging} />
              </span>
              <a href="">Real Estate & Construction</a>
            </li>
            <li>
              <span className="fa-li">
                <FontAwesomeIcon icon={faLaptop} />
              </span>
              <a href="">Software Houses & Information Technology</a>
            </li>
            <li>
              <span className="fa-li">
                <i className="fa-solid fa-bus"></i>
                <FontAwesomeIcon icon={faBus} />
              </span>
              <a href="">Transport and Logistics </a>
            </li>
          </ul>
        </div>
        {/* ====end row===  */}
      </div>

      {/* =====end container====  */}
    </div>
  );
}

export default Advisoryarea;
