import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { AiOutlineSend } from "react-icons/ai";
import { FiPhone, FiAtSign } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Swal from 'sweetalert2';

export default function Contactus() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      access_key: "8a997969-6666-43d9-9662-14fb9cab9015",
      name,
      email,
      message
    };

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(formData)
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success",
        text: "Message sent successfully!",
        icon: "success"
      });

      // Clear input fields
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div>
      <Container fluid className="certificate-section" id="about">
        <Container>
          <Row>
            <Col md={12} className="certificate-description d-flex justify-content-start">
              <Zoom left cascade>
                <h1 className="aboutme-heading">Contact me</h1>
              </Zoom>
            </Col>
            <Col md={12} id="contact" className="mt-3">
              <Row>
                <Col md={4}>
                  <div className="contacts-form" data-aos="fade-up">
                    <form onSubmit={onSubmit}>
                      <div className="input-container d-flex flex-column">
                        <label htmlFor="username" className="label-class">Full Name</label>
                        <input
                          type="text"
                          className="form-input input-class"
                          id="username"
                          name="name"
                          placeholder="Enter your name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                      <div className="input-container d-flex flex-column">
                        <label htmlFor="email" className="label-class">Email address</label>
                        <input
                          type="email"
                          className="form-input input-class"
                          id="email"
                          name="email"
                          placeholder="Enter email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="input-container d-flex flex-column">
                        <label htmlFor="userMessage" className="label-class">Message</label>
                        <textarea
                          className="form-message input-class"
                          id="userMessage"
                          name="message"
                          rows="3"
                          placeholder="Enter message"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          required
                        />
                      </div>

                      <div className="submit-btn">
                        <button type="submit" className="submitBtn">
                          Submit <AiOutlineSend className="send-icon" />
                        </button>
                      </div>
                    </form>
                  </div>
                </Col>
                <Col md={7}>
                  <div className="contacts-details">
                    <a href="mailto:vivekbhojani123@gmail.com" className="personal-details">
                      <div className="detailsIcon"><FiAtSign /></div>
                      <p style={{ color: "#fbd9ad" }}>vivekbhojani123@gmail.com</p>
                    </a>
                    <a href="tel:+919016167846" className="personal-details">
                      <div className="detailsIcon"><FiPhone /></div>
                      <p style={{ color: "#fbd9ad" }}>+91 90161 67846</p>
                    </a>
                    <a
                      href="https://maps.app.goo.gl/WAdHpzRPyspz61iMA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="personal-details"
                    >
                      <div className="personal-details">
                        <div className="detailsIcon"><HiOutlineLocationMarker /></div>
                        <p style={{ color: "#fbd9ad" }}>
                          Ramkrishna Apartment, OPP Purvi Apartment,<br />
                          H-Colony, Ambawadi,<br />
                          Ahmedabad-380015
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="contact-map">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.511196419218!2d72.5424634!3d23.0239414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e859e9632351d%3A0xd301afa3bf6bb541!2sRamkrishna%20Flats!5e0!3m2!1sen!2sin!4v1716467716576!5m2!1sen!2sin"
                      width="100%"
                      height="300"
                      style={{ border: 0, borderRadius: "12px" }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Ramkrishna Flats Location"
                    ></iframe>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
