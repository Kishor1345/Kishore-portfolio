import "../component/Contact.css";

const Contact = () => {
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
            <img src="./src/assets/contact-8.png" alt="" className="contactimg" />
          </div>
          <div className="col-12 col-sm-12  col-md-12 col-lg-6  d-flex justify-content-center flex-column formcontainer rounded-5">
            <h1 className=" text-white display-6 fs-2 fw-bold text-center mt-3">Contact<span style={{ color: "#ae8af8ff" }}>Me</span></h1>
            <form action="" className="p-lg-5 p-md-5">
              <div className="form-floating ">
                <input
                  type="text"
                  className=" form-control mb-4"
                  placeholder="Enter Your Name"
                />
                <label htmlFor="">Name</label>
              </div>
              <div className="form-floating">
                <input
                  type="email"
                  className=" form-control mb-4"
                  placeholder="Enter Your email"
                />
                <label htmlFor="">Email</label>
              </div>
              <div className="form-floating">
                <textarea
                  name=""
                  id=""
                  rows={3}
                  className="form-control textarea mb-4"
                  placeholder="Enter Your Message"
                ></textarea>
                <label htmlFor="">Message</label>
              </div>
              <div className="">
                <a
                  href=""
                  className=" btn w-25 text-white "
                  style={{ backgroundColor: "#ae8af8ff", padding: "10px" }}
                >
                  Submit
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
