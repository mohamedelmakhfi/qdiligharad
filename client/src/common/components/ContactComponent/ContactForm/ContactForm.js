import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact--">
      <div className="contact-form">
        <div className="contact-info">
          <div className="titre-p-contact">
            <h2>Contact Information</h2>
            <p>Say something to start a live chat!</p>
          </div>
          <div className="contact--info">
            <p>
              <i className="fas fa-phone"></i> +1012 3456 789
            </p>
            <p>
              <i className="fas fa-envelope"></i> demo@gmail.com
            </p>
            <p>
              <i className="fas fa-map-marker-alt"></i> 132 Dartmouth Street
              Boston, Massachusetts 02156 United States
            </p>
          </div>
          <div className="social-icons">
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-facebook"></i>
          </div>
          
            <div className=" yellow-circle"></div>
            <div className=" yell-circle"></div>
        </div>

        <form className="contact-form-form">
          <div className="contactform-titre">
            <h2>Contact Us</h2>
            <p>Any question or remarks? Just write us a message!</p>
          </div>
          <div className="contactform-group">
            <div className="form-group">
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
              />
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
              />
            </div>
            <div className="form-group">
              <input type="email" id="email" name="email" placeholder="Email" />
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Phone Number"
              />
            </div>

            <div className="form-group">
              <textarea
                id="message"
                name="message"
                placeholder="Write your message.."
              ></textarea>
            </div>
          </div>
          <button className="buttonform" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
