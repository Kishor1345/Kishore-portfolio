import "../component/Skill.css"

const Skill = () => {
  return (
    <section
      className="container d-flex flex-column justify-content-center align-items-center fw-bold"
      id="Skill"
    >
      <div
        className="container  skillContainer "
        style={{ backgroundColor: "#25152a" }}
      >
        <div className="row">
           <div className="d-flex justify-content-center text-white mb-5">
            <p className="display-5 fw-bold">Technical <span style={{ color: "#ae8af8ff" }}>Skills</span></p>
          </div>
        </div>
        <div className="row text-white">
          <div className="col-6  col-sm-6 col-md-4 col-lg-3 d-flex flex-column align-items-center p-sm-2 ">
            <img  src="https://img.icons8.com/color/480/html-5--v1.png" className="allSkillIcon" alt="html-5--v1"/>
            <p>HTML</p>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3 d-flex flex-column gap-3 align-items-center p-sm-2   ">
            <img  src="https://img.icons8.com/color/480/css3.png" className="allSkillIcon" alt="css3"/>
            <p>CSS</p>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3 d-flex flex-column gap-3 align-items-center p-sm-2   ">
            <img  src="https://img.icons8.com/color/480/bootstrap--v2.png" className="allSkillIcon" alt="bootstrap--v2"/>
            <p>BOOTSTRAP</p>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3 d-flex flex-column gap-3 align-items-center p-sm-2   ">
            <img  src="https://img.icons8.com/color/480/javascript--v1.png" className="allSkillIcon" alt="javascript--v1"/>
            <p>JAVA SCRIPT</p>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3 d-flex flex-column gap-3 align-items-center p-sm-2   ">
            <img  src="https://img.icons8.com/color/480/react-native.png" className="allSkillIcon" alt="react-native"/>
            <p>REACT JS</p>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3 d-flex flex-column gap-3 align-items-center p-sm-2   ">
            <img  src="https://img.icons8.com/color/480/git.png" className="allSkillIcon" alt="git"/>
            <p>GIT</p>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3 d-flex flex-column gap-3 align-items-center p-sm-2   ">
            <img  src="https://img.icons8.com/3d-fluency/94/github-logo.png" className="allSkillIcon" alt="github-logo"/>
            <p>GITHUB</p>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3 d-flex flex-column gap-3 align-items-center p-sm-2   ">
            <img  src="https://img.icons8.com/color/480/java-coffee-cup-logo--v1.png" className="allSkillIcon" alt="java-coffee-cup-logo--v1"/>
            <p>JAVA</p>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3 d-flex flex-column gap-3 align-items-center p-sm-2   ">
            <img  src="https://img.icons8.com/color/480/python--v1.png" className="allSkillIcon" alt="python--v1"/>
            <p>PYTHON</p>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3 d-flex flex-column gap-3 align-items-center p-sm-2   ">
            <img  src="https://img.icons8.com/color/480/spring-logo.png" className="allSkillIcon" alt="spring-logo"/>
            <p>SPRING BOOT</p>
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-3 d-flex flex-column gap-3 align-items-center p-sm-2   ">
            <img  src="https://img.icons8.com/color/480/mysql-logo.png" className="allSkillIcon" alt="mysql-logo"/>
            <p>MYSQL</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
