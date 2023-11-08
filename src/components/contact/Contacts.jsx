import "./contact.css";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineMail } from "react-icons/ai";
import { TbBrandMessenger } from "react-icons/tb";
import { AiOutlineLinkedin } from "react-icons/ai";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";

export const Contacts = () => {
  const form = useRef();
  const notify = () =>
    toast("Email was successfully sent", {
      type: "success",
    });
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mo5n2qd",
        "template_zdhbcgu",
        form.current,
        "kRvuZb_A3yfM_l3cI"
      )
      .then(
        (result) => {},
        (error) => {}
      );
    e.target.reset();
    notify();
  };
  return (
    <section id="contact">
      <h4 className="contact-h4">Get intouch</h4>
      <h2 className="contact-h2">Contact Me</h2>
      <div className="contact_container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail />
            <h4>Email</h4>
            <h5>andreiaxinoi1@gmail.com</h5>
            <a href="mailto:andreiaxinoi1@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <TbBrandMessenger />
            <h4>Messanger</h4>
            <h5>Andrei Axinoi</h5>
            <a href="https://facebook.com">Send a message</a>
          </article>
          <article className="contact__option">
            <AiOutlineLinkedin />
            <h4>LinkedIn</h4>
            <h5>Andrei Axinoi</h5>
            <a href="https://linkedin.com">Send a message</a>
          </article>
        </div>
        {/* End of contact Options */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your message ...."
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          <ToastContainer />
        </form>
      </div>
    </section>
  );
};
