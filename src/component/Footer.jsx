import "../component/Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="container-fluid footercontainer text-white d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xxl-4">
              <p className="fs-3 fw-bold">
                KishoreKumar{" "}
                <span style={{ color: "#ae8af8ff" }}>Portfolio</span>
              </p>
              <p>Thanks for visiting keep coding and keep creating</p>
              <p>Get in Touch</p>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xxl-4">
              <p className="fs-3 fw-bold" style={{ color: "#ae8af8ff" }}>
                Links
              </p>
              <p>
                <a href="#" className="text-white ">
                  Home
                </a>
              </p>
              <p>
                <a href="#About" className="text-white ">
                  About
                </a>
              </p>
              <p>
                <a href="#Skill" className="text-white ">
                  Skill
                </a>
              </p>
              <p>
                <a href="#project" className="text-white ">
                  Project
                </a>
              </p>
              <p>
                <a href="#contact" className="text-white ">
                  Contact
                </a>
              </p>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xxl-4">
              <p className="fs-3 fw-bold">
                Contact <span style={{ color: "#ae8af8ff" }}>Info</span>
              </p>
              <p>
                <img
                  width="25"
                  height="25"
                  src="https://img.icons8.com/ios-filled/50/FFFFFF/apple-phone.png"
                  alt="apple-phone"
                  className="me-2"
                />
                8124392988
              </p>
              <p>
                <img
                  width="25"
                  height="25"
                  src="https://img.icons8.com/ios-filled/50/FFFFFF/apple-mail.png"
                  alt="apple-mail"
                  className="me-2"
                />
                kishoredinesh0803@gmail.com
              </p>
              <p>
                <img
                  width="25"
                  height="25"
                  src="https://img.icons8.com/fluency-systems-filled/48/FFFFFF/marker.png"
                  alt="marker"
                  className="me-2"
                />
                Chennai,Tamilnadu
              </p>
            </div>
          </div>
          <div className="row mt-4 ">
            <div className="d-flex justify-content-center">
              <p>© 2025 Kishore Kumar.<span style={{ color: "#ae8af8ff" }}>All Rights Reserved.</span></p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
