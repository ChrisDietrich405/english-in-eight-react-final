import { useState } from "react";
import "../styles/components/footer.scss";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const notify = () => toast("Email was successfully sent");

  const sendEmail = (e) => {
    e.preventDefault();

    var templateParams = {
      email,
      message,
      to_name: "Chris",
    };

    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          notify();
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div className="container">
        <hr />
      </div>
      <div className="footer">
        <div className="logo-email-container">
          <div className="logo">
            <Link to="/home" className="footer-logo">
              <img
                style={{ width: "130px" }}
                src="/images/logo.svg"
                alt="English in Eight Minutes Logo"
              />
            </Link>
          </div>
          <div className="email">
            {" "}
            <p>englishineight@gmail.com</p>
          </div>
        </div>
        <div className="contact-form-container">
          <h3>Contact us</h3>
          <form onSubmit={sendEmail} className="form">
            <div className="mb-3">
              <label htmlFor="nameControlInput" className="form-label"></label>
              <input
                type="text"
                className="form-control"
                id="nameControlInput"
                placeholder="name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1">Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className={`form-control`}
                type="email"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1">Message</label>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                id="exampleFormControlTextarea1"
                placeholder="Add message here"
                className={` form-control`}
              ></textarea>
            </div>
            <ToastContainer />
            <div className="button-container text-center">
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
