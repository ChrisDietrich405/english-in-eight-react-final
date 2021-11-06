import "../styles/components/footer.scss"

export default function Footer() {
    return (
        <div className="footer-container">
            <hr />
            <div className="footer">
                <div className="logo-email">
                    <div className="logo-container">
                        <a className="footer-logo" href="#">
			            	{/* <h1 style={{color: "red"}}>Hello Style!</h1> */}
			            		<img style={{width: "130px"}} src="/images/logo.svg" alt="English in Eight Minutes Logo" />
			            </a>
                    </div>
                    <div className="contact-info-container">
                        <p>englishineight@gmail.com</p>
                    </div>
                </div>
                <div className="contact-form">
                    <h3>Contact us</h3>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control footer-form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                    </div>
                </div>
                <div>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label"></label>
                        <textarea className="form-control footer-form-control text-area" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </div>
                <div>
                    <button className="btn btn-primary footer-submit-btn" type="submit">
							Submit
					</button>
                </div> 
            </div>
        </div>

    )
}