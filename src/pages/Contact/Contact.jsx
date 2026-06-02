import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-header">
        <h4>Get In Touch</h4>
        <h1>Contact Me</h1>
        <p>
          Feel free to reach out for collaborations, projects, or any inquiries.
        </p>
      </div>

      <form className="contact-form">
        <div className="form-row">
          <div className="form-group">
            <label>First Name</label>
            <input type="text" required />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input type="text" required />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Email</label>
            <input type="email" required />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" required />
          </div>
        </div>

        <div className="form-group">
          <label>Choose a Topic</label>
          <select>
            <option>Select One...</option>
            <option>Web Development</option>
            <option>UI/UX Design</option>
            <option>Project Collaboration</option>
            <option>Other</option>
          </select>
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea rows="8" placeholder="Type your message..."></textarea>
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>

      <div className="contact-info">
        <h2>Other Ways to Reach Me</h2>

        <p>
          Email:{" "}
          <a href="mailto:natnaelakalewold@gmail.com">
            natnaelakalewold@gmail.com
          </a>
        </p>

        <p>
          Phone: <a href="tel:+251946366664">+251 946 366 664</a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
