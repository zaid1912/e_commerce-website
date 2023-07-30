import React from "react";
import "./footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-upper">
        <div className="footer-categories">
          <h3>CATEGORIES</h3>
          <a href="" className="women-link">
            Women
          </a>
          <a href="" className="men-link">
            Men
          </a>
          <a href="" className="shoes-link">
            Shoes
          </a>
          <a href="" className="watches-link">
            Watches
          </a>
        </div>
        <div className="help">
          <h3>HELP</h3>
          <a href="" className="track-link">
            Track Order
          </a>
          <a href="" className="rturns-link">
            Returns
          </a>
          <a href="" className="faqs-link">
            FAQs
          </a>
        </div>
        <div className="get-in-touch">
          <h3>GET IN TOUCH</h3>
          <p>
            Any question? Please let us know about your valuable thoughts here.
            Or call us at (+1)89 982 1398
          </p>
          <div className="socials">
            <FacebookIcon />
            <InstagramIcon />
            <EmailIcon />
          </div>
        </div>
      </div>
      <div className="footer-lower">
        <p>Copyright 2023 All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
