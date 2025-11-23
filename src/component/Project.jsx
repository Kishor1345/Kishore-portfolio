import "../component/Project.css";
import frontendimage from "../assets/frontendimage.jpg";
import backendimage from "../assets/backendimage.jpg";
import fullstackimage from "../assets/fullstackimage.jpg";
const Project = () => {
  return (
    <section className="projectcontainer container d-flex align-items-center" id="project">
      <div className="container d-flex flex-column align-items-center text-white">
        <div className="row mb-5">
          <p className=" display-5 fw-bold">My <span style={{ color: "#ae8af8ff" }}>Project</span></p>
        </div>
        <div className="row align-items-center justify-content-center">
          <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xxl-4 pb-sm-5 pb-5">
            <div className="card border-0">
              <img src={frontendimage} alt="" className="rounded-2" />
              <div className="card-body">
                <h className="card-title fw-bold">Front End Project</h>
                <p className="card-text">
                  Developed a fully interactive front-end CRUD application using React. Implemented reusable components, controlled forms, and efficient state management to add, edit, update, and delete data
                </p>
                <a href="https://github.com/Kishor1345/FrontEndCrudOperation.git" className="btn btn-dark rounded-3" target="_blank">code</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-12 col-sm-12 col-md-6 col-lg-4 col-xxl-4  pb-sm-5 pb-5">
            <div className="card border-0">
              <img src={backendimage} alt=""  className="rounded-2"/>
              <div className="card-body">
                <h className="card-title fw-bold">Back End Project</h>
                <p className="card-text">
                  Built a CRUD application using Java and JDBC to manage database records. Implemented features to add, view, update, and delete data with a structured code flow and proper database connectivity.
                </p>
                <a href="https://github.com/Kishor1345/EmployeeManagementSystem.git" className="btn btn-dark rounded-3" target="_blank">code</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-12 col-sm-12 col-md-6 col-lg-4 col-xxl-4  pb-sm-5 pb-5">
            <div className="card border-0" >
              <img src={fullstackimage} alt="" className="rounded-2"/>
              <div className="card-body">
                <h className="card-title fw-bold">Full Stack Project</h>
                <p className="card-text">
                  Developed a Student Management System using full-stack technologies, where admins can create, view, edit, and delete student records. Built a responsive front end and connected it to a secure backend API with a database for storing student information.
                </p>
                <a href="https://github.com/Kishor1345/FullStackStudentFacultyManagementSystem.git" className="btn btn-dark rounded-3" target="_blank">code</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
