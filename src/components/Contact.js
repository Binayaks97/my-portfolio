import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pvm4vmh",
        "template_pcdem2e",
        form.current,
        "SEXW1saKu3TD-808E"
      )
      .then(
        () => {
          toast.success("✅ Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          toast.error("❌ Failed to send message. Try again!");
          console.error(error);
        }
      );
  };

  return (
    <div
      className="position-relative banner text-white overflow-hidden parallax"
      data-aos="fade-up"
    >
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>
      <div className="position-relative container" style={{ zIndex: 1 }}>
        <h2 className="mb-4 text-center">
          <span role="img" aria-label="mail">
            📬
          </span>{" "}
          Contact Me
        </h2>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="p-4 rounded bg-dark bg-opacity-75 shadow mx-auto"
          style={{ maxWidth: "600px" }}
        >
          <div className="mb-3 text-start">
            <label className="form-label fw-semibold">Name</label>
            <input
              type="text"
              name="user_name"
              className="form-control"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="mb-3 text-start">
            <label className="form-label fw-semibold">Email</label>
            <input
              type="email"
              name="user_email"
              className="form-control"
              placeholder="example@email.com"
              required
            />
          </div>

          <div className="mb-3 text-start">
            <label className="form-label fw-semibold">Subject</label>
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="What's this message about?"
              required
            />
          </div>

          <div className="mb-3 text-start">
            <label className="form-label fw-semibold">Message</label>
            <textarea
              name="message"
              rows="4"
              className="form-control"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-outline-light w-100">
            Send Message
          </button>
        </form>

        <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      </div>
    </div>
  );
};

export default Contact;