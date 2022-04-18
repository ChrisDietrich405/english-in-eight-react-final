import "../styles/components/footer.scss";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <hr />
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
        <div className="form">
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
            <label htmlFor="emailControlInput" className="form-label"></label>
            <input
              type="email"
              className="form-control"
              id="emailControlInput"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="textAreaControlInput"
              className="form-label"
            ></label>
            <textarea
              placeholder="add your message here"
              className="form-control text-area"
              id="textAreaControlInput"
              rows="3"
            ></textarea>
          </div>
          <div className="button-container">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
