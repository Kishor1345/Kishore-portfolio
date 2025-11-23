import "../component/Contact.css";
import ContactImage from "../assets/ContactImage.png";
import { useState } from "react";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange=(e)=>{
    const{ name,value }= e.target;
    setFormData({
      ...formData,
      [name]:value
    });
  }
  const submitData=()=>{
    const existing = JSON.parse(localStorage.getItem("mailResponse")) || [];
    const update=[...existing,formData]
    localStorage.setItem("mailResponse",JSON.stringify(update))

    setFormData({
      name:"",
      email:"",
      message:""
    })
  }
  return (
    <section
      className="container d-flex justify-content-center align-items-center p-5"
      id="contact"
    >
      <div className="container  contactContainer rounded-5">
        <div className="row">
          <div className="col-12 text-white d-flex justify-content-center">
            <h1 className="display-5 fw-bold mb-5">
              Get in <span style={{ color: "#ae8af8ff" }}>Touch</span>
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 d-flex justify-content-center align-items-center">
            <img src={ContactImage} alt="" className="contactimg" />
          </div>
          <div className="col-12 col-sm-12  col-md-12 col-lg-6  d-flex justify-content-center flex-column formcontainer rounded-5">
            <h1 className=" text-white display-6 fs-2 fw-bold text-center mt-3">
              Contact<span style={{ color: "#ae8af8ff" }}>Me</span>
            </h1>
            <form action="" className="p-lg-5 p-md-5" onSubmit={(e)=>{e.preventDefault()}}>
              <div className="form-floating ">
                <input
                  type="text"
                  className=" form-control mb-4"
                  placeholder="Enter Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <label htmlFor="">Name</label>
              </div>
              <div className="form-floating">
                <input
                  type="email"
                  className=" form-control mb-4"
                  placeholder="Enter Your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <label htmlFor="">Email</label>
              </div>
              <div className="form-floating">
                <textarea
                  name="message"
                  id=""
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="form-control textarea mb-4"
                  placeholder="Enter Your Message"
                ></textarea>
                <label htmlFor="">Message</label>
              </div>
              <div className="">
                <button
                  style={{ backgroundColor: "#ae8af8ff", padding: "10px" }}
                  onClick={submitData}
                  className="btn text-white"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
