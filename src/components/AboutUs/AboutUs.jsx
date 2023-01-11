import "./AboutUs.css";
export default function AboutUs() {
  return (
    <section class="why-us section-bg" data-aos="fade-up" date-aos-delay="200" id="about-section">
      <div className="why-us section-bg" data-aos="fade-up" date-aos-delay="200"> 
      <div class="container">
        <h1>About Us</h1>
        <hr></hr>
        <div class="row">
          <div class="col-lg-6 video-box venobox">
            {/* <img
              src="src\assets\Images\full-logo.png"
              class="img-fluid"
              alt=""
            /> */}
            {/* <a href="src\assets\Images\About.mp4" target="_blank" class="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true" ></a> */}
            {/* <video width="500" height="500" controls>
              <source src="src\assets\Images\About.mp4" type="video/mp4" />
            </video> */}
            <iframe src="src\assets\Images\About.mp4"  height="350px" width="500px" controls class="venobox mt-5 col-sm-12" data-vbtype="video" data-autoplay="false"></iframe>
          </div>

          <div class="col-lg-6 d-flex flex-column justify-content-center p-5">
            <div class="icon-box">
              <div class="icon">
                {/* <i class="fa fa-fingerprint"></i> */}
                <i class="fa fa-lightbulb"></i>
              </div>
              <h4 class="title">
                <a href="">Our Vision</a>
              </h4>
              <p class="description">
                Our Mission is to provide professional services of highest
                standard being in line with our core values.
              </p>
            </div>

            <div class="icon-box">
              <div class="icon">
                <i class="fa fa-star"></i>
              </div>
              <h4 class="title">
                <a href="">OUR Values</a>
              </h4>
              <p class="description" data-toggle="collapse">
                Our philosophy can be described as our commitment to: Provide
                the highest standard of services & to support specialized needs
                of our clients Follow the international and local laws as
                applicable to the profession Enhance skills of our staff and
                partners through specialized courses Provide continuing
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
