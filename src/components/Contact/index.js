import { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import "./style.css";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [emailStatus, setEmailStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    const mailto = `mailto:biswarup14rick@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailto;
    setEmailStatus("sent");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact">
      <div className="page-header">
        <span className="page-tag">&lt;contact /&gt;</span>
        <h1>Get In Touch</h1>
        <p>Have a question or want to work together? Send me a message.</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Let's talk</h2>
          <p className="contact-intro">
            I'm currently open to new opportunities and freelance projects.
            Whether you have a question or just want to say hi, my inbox is
            always open — I'll get back to you as soon as I can.
          </p>

          <div className="contact-methods">
            <div className="contact-method">
              <div className="method-icon">
                <FiMail size={20} />
              </div>
              <div>
                <span className="method-label">Email</span>
                <a href="mailto:biswarup14rick@gmail.com">
                  biswarup14rick@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-method">
              <div className="method-icon">
                <FiMapPin size={20} />
              </div>
              <div>
                <span className="method-label">Location</span>
                <p>Kolkata, West Bengal, India</p>
              </div>
            </div>

            <div className="contact-method">
              <div className="method-icon">
                <FiPhone size={20} />
              </div>
              <div>
                <span className="method-label">Phone</span>
                <a href="tel:+918420157314">+91 8420157314</a>
              </div>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          {emailStatus && (
            <div className="form-notice" role="alert">
              Opening your email app to send the message. Thanks for reaching
              out!
            </div>
          )}
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              placeholder="Tell me about your project..."
              rows="5"
            />
          </div>
          <button type="submit" className="btn btn-primary submit-btn">
            Send Message <FiSend size={18} />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
