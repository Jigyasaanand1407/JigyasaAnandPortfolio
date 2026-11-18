import React, { useState } from "react";
import "./ContactPage.scss";
import { addContactMessage } from "../../services/contactService";
import SubmitButton from "../../components/SubmitButton/SubmitButton";

const ContactPage = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Loading, error and success states
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setSuccess(false);
  };

  // Handle form submission
 const handleSubmit = async (e) => {
  e.preventDefault();
  if (status !== "idle") return;

  setStatus("loading");
  setError("");
  setSuccess(false);

  try {
    await addContactMessage({
      name: formData.name.trim(),
      email: formData.email.trim(),
      subject: formData.subject.trim(),
      message: formData.message.trim(),
    });

    setSuccess(true);
    setStatus("success");
    setFormData({ name: "", email: "", subject: "", message: "" });
  } catch (error) {
    console.error("Contact form error:", error);
    setError(error.message || "Unable to send your message.");
    setStatus("error");
  } finally {
    // Return the button to its normal state after the animation
    setTimeout(() => setStatus("idle"), 2500);
  }
};

  return (
    <div className="contact-page">
      <div className="container-fluid px-5">
        <div className="contact-heading">
          <h1>Let's work together.</h1>

          <p>
            Have a project in mind? Let's discuss how we can create something
            amazing.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="form-group">
            <label htmlFor="name">Your Name</label>

            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="email">Email Address</label>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Subject */}
          <div className="form-group">
            <label htmlFor="subject">Subject</label>

            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Enter subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          {/* Message */}
          <div className="form-group">
            <label htmlFor="message">Your Message</label>

            <textarea
              id="message"
              name="message"
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            />
          </div>

          {/* Error Message */}
          {error && <p className="error-message">{error}</p>}

          {/* Success Message */}
          {success && (
            <p className="success-message">
              Your message has been sent successfully!
            </p>
          )}

          {/* Submit Button */}
          <SubmitButton status={status} label="Send Message" />
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
