import "../component/Home.css";
import { useEffect } from "react";
import gsap from "gsap";
import HomeImage from "../assets/pic-2.jpeg";
const Home = () => {
  useEffect(() => {
    gsap.fromTo(
      ".emoji",
      { rotation: -20 },
      {
        rotation: 20,
        duration: 1,
        repeat: Infinity,
        yoyo: true,
        ease: "power1.inOut",
      }
    );
  }, []);
  return (
    <>
      <main
        className="container d-flex align-items-center homeContainer "
        style={{ backgroundColor: "#25152a" }}
        id="Home"
      >
        <div className="container  text-white">
          <div className="row">
            <div className="col-12 col-lg-6 col-md-12  d-flex flex-column justify-content-lg-start justify-content-md-start homeText">
              <div className="d-flex flex-column align-items-center align-items-lg-start" style={{marginLeft:"0px",marginTop:"40px"}}>
                <p className="hometext" data-aos="fade-up">
                  Hi, I'm <span className="emoji">✌️</span>{" "}
                </p>
                <p className="display-5 fw-bold hometext"data-aos="fade-up" style={{ color: "#ae8af8ff" }}>
                  <span>Kishore Kumar</span>
                </p>
                <p className="hometext" data-aos="fade-up"><span style={{color:"#E2D4FF"}}>Java Developer</span></p>
                <a
                  href="#About"
                  className="btn p-2 text-white "
                  style={{ backgroundColor: "#ae8af8ff" }}
                  data-aos="fade-up"
                >
                  About Me
                </a>
                <div className="mt-4 d-flex gap-3" data-aos="fade-up" >
                  <a href="https://www.linkedin.com/in/kishore-kumar-2a26a82b1/" target="_blank" className="text-white">
                    <img
                    width="45"
                    className="linkedinicon"
                    height="45"
                    src="https://img.icons8.com/color/480/linkedin.png"
                    alt="linkedin"
                    style={{cursor:"pointer"}}
                  />
                  </a>
                 <a href="https://github.com/Kishor1345" target="_blank" className="text-white">
                   <img
                  className="mt-1 giticon"
                    width="40"
                    height="40"
                    src="https://img.icons8.com/ios-filled/50/FFFFFF/github.png"
                    alt="github"
                    style={{cursor:"pointer"}}
                  />
                 </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-md-12 col-sm-12  d-flex justify-content-center align-items-center">
              <div>
                <img
                  src={HomeImage}
                  alt=""
                  className="profileImage"
                   data-aos="fade-up"
                />
              </div>
            </div>
          </div>
        </div>
        
      </main>
    </>
  );
};

export default Home;