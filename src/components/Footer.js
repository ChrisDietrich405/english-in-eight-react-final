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
          {/* <Link to="/noun-categories/noun-definition">
              <div className="noun-examples">
                <i className="fas fa-tree" aria-hidden="true"></i>
                <p className="content-title-second-row">Nouns</p>
                <p className="content-definition">people, places and things</p>
                <p>woman, tree, car</p>
              </div>
            </Link> */}
        </div>
        <div className="email">
          {" "}
          <p>englishineight@gmail.com</p>
        </div>
      </div>
      {/* <div className="logo-contact-container">
        <div className="logo-email">
          <div className="logo-container">
            <a className="footer-logo" href="#">
              <img
                style={{ width: "130px" }}
                src="/images/logo.svg"
                alt="English in Eight Minutes Logo"
              />
            </a>
          </div>
        </div>
        <div className="contact-info-container">
          <p>englishineight@gmail.com</p>
        </div>
      </div> */}
      <div className="contact-form-text-area-container">
        <div className="contact-form">
          <h3>Contact us</h3>
          <div className="mb-3">
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label"
            ></label>
            <input
              type="text"
              className="form-control footer-form-control"
              id="exampleFormControlInput1"
              placeholder="name"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label"
            ></label>
            <input
              type="email"
              className="form-control footer-form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
        </div>

        <div className="mb-3" id="text-area-container">
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label"
          ></label>

          <textarea
            placeholder="add your message here"
            className="form-control footer-form-control text-area"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button className="btn btn-primary footer-submit-btn" type="submit">
          Submit
        </button>
      </div>
    </div>
  );
}
