import React from "react";

import ContactForm from "./ContactForm";

function Contact() {
  const mailer = () => {
    window.location.href = "mailto:lidiiany92@gmail.com";
  };
  return (
    <div className="mainsection-wrapper">
      <div id="contact" className="contact-section">
        <a
          href="https://www.linkedin.com/in/lidiia-gallagher-4aa8a6140/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-linkedin mainsection-heading__sm contact-icon mg-right"></i>
        </a>
        <a
          href="https://github.com/Lidiia92"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-github-square mainsection-heading__sm contact-icon"></i>
        </a>
        <h3 className="mainsection-heading__sm email">lidiiany92@gmail.com</h3>
        <ContactForm />
      </div>
      <div>
        <p className="mainsection-heading__sm attribute pd-bottom">
          Vector images created by{" "}
          <a
            href="https://www.freepik.com/free-photos-vectors"
            className="mainsection-heading__sm link"
            target="_blank"
          >
            Freepik
          </a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
