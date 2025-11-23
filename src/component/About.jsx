import "../component/About.css";
import AboutImage from "../assets/pic-1.jpeg";
import Resume from "../assets/KishoreKumar resume Update.pdf";
const About = () => {
  return (
    <>
      <section
        className="container d-flex justify-content-center align-items-center aboutContainer text-white"
        style={{ backgroundColor: "#25152a" }}
        id="About"
      >
        <div className="container ">
          <div className="row">
            <div className="d-flex justify-content-center text-white abouttext mb-2 abouttext">
              <p className="display-5 fw-bold">
                About <span style={{ color: "#ae8af8ff" }}>Me</span>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 justify-content-center col-sm-12 col-lg-6 col-md-12 d-flex justify-content-sm-center ">
              <div className="d-flex justify-content-center align-items-center pt-sm-5">
                <img
                  src={AboutImage}
                  alt=""
                  className="aboutImage"
                />
              </div>
            </div>
            <div className="col-12 col-lg-6 col-sm-12  d-flex justify-content-md-center ">
              <div className="d-flex flex-column pt-sm-5 abouttext ">
                <h2 className=" fw-semibold">
                  Kishore<span style={{ color: "#ae8af8ff" }}> Kumar</span>
                </h2>
                <p className="fs-5  mt-2 fw-semibold">
                  Java <span style={{ color: "#ae8af8ff" }}> Developer</span>
                </p>
                <p className=" fw-semibold" style={{textAlign:"justify" }}>
                   Java Developer with strong skills in building clean and
                  efficient applications. I have completed my Bachelor’s degree
                  in Computer Science. I enjoy learning new technologies and
                  improving my development skills every day.
                </p>
                <p className="fs-6 fw-semibold ">
                  Email :
                  <span style={{ color: "" }}>
                    kishoredinesh0803@gmail.com
                  </span>
                </p>
                <p className="fs-6 fw-semibold ">
                  Place :
                  <span style={{ color: "" }}>Chennai,Tamilnadu</span>
                </p>
                <div>
                  <a
                    href={Resume}
                    download="Kishorekumar Resume.pdf"
                    target="_blank"
                    className=" btn w-25 text-white mt-2 "
                    style={{ backgroundColor: "#ae8af8ff", padding: "10px" }}
                  >
                    Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
