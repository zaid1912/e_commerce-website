import React from "react";
import "./contact.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

function Contact() {
  return (
    <div className="contact-form">
      <div className="form">
        <form action="" method="post">
          <div className="centre-heading">
            <p>Send Us A Message</p>
          </div>
          <div className="disp-block">
            <input
              type="email"
              name="mail"
              id="email-input"
              placeholder="Your Email Address"
            />
            <textarea
              name="message-area"
              id=""
              cols="30"
              rows="10"
              placeholder="How Can We Help You?"
            ></textarea>
          </div>
          <div className="submit-btn">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      <div className="contact-info">
        <div className="sub-info">
          <div className="sub-info-heading">
            <LocationOnIcon />
            <h3>Address</h3>
          </div>
          <p>
            Trendy Threads 8th floor, 379, Hudson St, New York, NY 100018 US
          </p>
        </div>
        <div className="sub-info">
          <div className="sub-info-heading">
            <PhoneIcon />
            <h3>Lets Talk</h3>
          </div>
          <p className="blue-text">+1 800 12345678</p>
        </div>
        <div className="sub-info">
          <div className="sub-info-heading">
            <EmailIcon />
            <h3>Sale Support</h3>
          </div>
          <p className="blue-text">contact@tredythreads.com</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
