import "./AboutUs.css";
import video from "../../assets/Images/About.mp4";
import value from "../../assets/Images/value.png";
import vision from "../../assets/Images/vision.png";
import React from 'react';

export default function AboutUs() {
  return (
    <section
      className="why-us section-bg"
      data-aos="fade-up"
      date-aos-delay="200"
      id="about-section"
    >
      <div
        className="why-us section-bg"
        data-aos="fade-up"
        date-aos-delay="200"
      >
        <div className="container">
          <h1>About Us</h1>
          {/* <hr></hr> */}
          <div className="row">
            <div className="col-lg-6 video-box venobox">
               <video
                src={video}
                height="350px"
                width="550px"
                controls
                className="venobox mt-5 col-sm-12"
                data-vbtype="video"
                data-autoplay="false"
              ></video>
            </div>

            <div className="col-lg-6 d-flex flex-column justify-content-center p-5">
              <div className="icon-box">
                <div className="icon">
                  <img src={vision} alt="Vision"/>
                </div>
                <h4 className="title">
                  <a href="">Our Vision</a>
                </h4>
                <p className="description">
                  Our Mission is to provide professional services of highest
                  standard being in line with our core values.
                </p>
              </div>

              <div className="icon-box">
                <div className="icon">                  
                  <img src={value} alt="Value"/>
                </div>
                <h4 className="title">
                  <a href="">OUR Values</a>
                </h4>
                <p className="description" data-toggle="collapse">
                  Our philosophy can be described as our commitment to: 
                  <ul className="Aboutlink">
                    <li>
                    Provide the highest standard of services & to support specialized
                      needs of our clients.
                    </li>
                    <li>
                    Follow the international and local laws
                            as applicable to the profession.
                      </li>
                      <li>
                      Enhance skills of our staff
                        and partners through specialized courses.
                      </li>
                      <li>
                      Provide continuing professional education to our staff, 
                      encourage personal growth and expand professional horizon of the entire team.
                      </li>
                      <li>
                      Utilise our resources in the most efficient manner to benefit our clients and ourselves.
                      </li>
                    </ul>  
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <!-- End Why Us Section -->
    // </div>
  );
}
