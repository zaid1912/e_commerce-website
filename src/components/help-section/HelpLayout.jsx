import React from "react";
import "./help.css";
import { NavLink, Outlet } from "react-router-dom";
import Testimonials from "./testimonials/Testimonials";

function HelpLayout() {
  return (
    <div className="help-layout">
      <div className="help-header">
        <h1>Help</h1>
      </div>
      <div className="help-container">
        <div className="testimonials-section">
          <div className="testimonials-heading">
            <h2>Testimonials</h2>
          </div>
          {/* <Testimonials /> */}
        </div>
        <div className="help-links">
          <NavLink to="faqs">FAQs</NavLink>
          <NavLink to="contact">Contact</NavLink>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default HelpLayout;
