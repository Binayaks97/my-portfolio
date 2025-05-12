import React from 'react';

const Footer = () => (
  <footer className="bg-custom-blue text-white text-center p-3 slide-footer">
    <p className="mb-2 small">
      &copy; {new Date().getFullYear()} Binayak Sahoo | All Rights Reserved
    </p>

    <div className="d-flex justify-content-center gap-4 fs-4">
      <a
        href="mailto:binayaksahoo1997@gmail.com"
        className="text-white social-icon"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="Email Me"
      >
        <i className="bi bi-envelope-fill"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/binayak-sahoo-12407814b/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white social-icon"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="LinkedIn Profile"
      >
        <i className="bi bi-linkedin"></i>
      </a>

      <button
        onClick={() => alert("📞 +91 9853765304")}
        className="btn btn-link text-white p-0 border-0 social-icon"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="Call Me"
      >
        <i className="bi bi-telephone-fill"></i>
      </button>
    </div>
  </footer>
);

export default Footer;
