import "./AboutUs.css";
import video from "../../assets/Images/About.mp4";
import image from "../../assets/Images/full-logo.png";
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
          <hr></hr>
          <div className="row">
            <div className="col-lg-6 video-box venobox">
              {/* <img
              src={image}
              className="img-fluid"
              alt=""
            /> */}
              {/* <a href={video} target="_blank" className="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true" ></a> */}
              {/* <video width="500" height="500" controls>
              <source src={video} type="video/mp4" />
            </video> */}
              <iframe
                src={video}
                height="350px"
                width="500px"
                controls
                className="venobox mt-5 col-sm-12"
                data-vbtype="video"
                data-autoplay="false"
              ></iframe>
            </div>

            <div className="col-lg-6 d-flex flex-column justify-content-center p-5">
              <div className="icon-box">
                <div className="icon">
                  {/* <i className="fa fa-fingerprint"></i> */}
                  <i className="fa fa-lightbulb"></i>
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
                  <i className="fa fa-star"></i>
                </div>
                <h4 className="title">
                  <a href="">OUR Values</a>
                </h4>
                <p className="description" data-toggle="collapse">
                  Our philosophy can be described as our commitment to: Provide
                  the highest standard of services & to support specialized
                  needs of our clients Follow the international and local laws
                  as applicable to the profession Enhance skills of our staff
                  and partners through specialized courses Provide continuing
                  professional education to our staff, encourage personal growth
                  and expand professional horizon of the entire team Utilise our
                  resources in the most efficient manner to benefit our clients
                  and ourselves
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
