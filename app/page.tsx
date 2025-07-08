"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Page() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const navigationButtons = ["About", "Project", "Contact"];

  return (
    <main className="text-white min-vh-100">
      {/* Hero Section */}
      <section  data-aos="fade-up" className="container text-center d-flex flex-column justify-content-center align-items-center min-vh-100">
        <h1 className="my-name fw-bold mb-4">
          Andy Hikmal Parakkasi
        </h1>
        <p className="description lead mb-4">
          Hi, my name is Hikmal. I am someone who is interested in the field of
          website creation.
        </p>

        <div className="d-flex justify-content-center gap-3 flex-wrap mb-5">
          {navigationButtons.map((label, idx) => (
            <a
              key={idx}
              href={`#${label.replace(/\s+/g, '')}`}
              className="hero-btn btn fw-bold px-4 py-2"
            >
              {label}
            </a>
          ))}
        </div>
      </section>

      {/* About Me */}
      <section data-aos="fade-up" id="About" className="container text-center d-flex flex-column justify-content-center align-items-center min-vh-100">
        <h2 className="about-me-title display-5 fw-bold mb-4">About Me</h2>
        <p className="about-me-text fs-5">
          Hello, I am Hikmal and I am a student of Informatics Engineering at the State
          University of Surabaya. I am interested in making websites and will continue
          to develop myself to make better websites.
        </p>
      </section>

      {/* Project Section */}
      <section data-aos="fade-up" id="Project" className="container text-center d-flex flex-column justify-content-center align-items-center min-vh-100">
        <h2 className="project-title display-5 fw-bold mb-5">Project</h2>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            {/* Kotak abu-abu */}
            <div className="bg-project rounded p-5 mb-4">
              <h3 className="text-white fw-semibold fs-4 mb-3">
                HikmalAir - college project
              </h3>
              {/* gambar project */}
              <div className="bg-dark rounded overflow-hidden mb-3" style={{ aspectRatio: '2 / 1' }}>
                <img
                  src="/image/HikmalAir-dashbord.png"
                  alt="HikmalAir screenshot"
                  className="w-100 h-100 object-fit-cover"
                />
              </div>
              <p><a href="https://hikmalair-production.up.railway.app/login" className="text-decoration-none btn hero-btn">Go to HikmalAir</a></p>
            </div>
            <p className="fst-italic fs-5 text-white">
              Upcoming projects will be added soon.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section data-aos="fade-up" id="Contact" className="container text-center d-flex flex-column justify-content-center align-items-center min-vh-100">
        <h2 className="contact-title display-5 fw-bold mb-4">Let's Talk</h2>
        <p className="fs-5 mb-4">
          Want to say hi or get in touch? Feel free to send me an email by
          clicking the button below.
        </p>

        <a href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=andyhikmalparakkasi@gmail.com" className="contact-btn btn fw-bold px-4 py-2">
          Say Hello
        </a>

        {/* Social Media Buttons */}
        <div data-aos="fade-up" className="sosmed-btn d-flex gap-3 justify-content-center mt-3 py-3">
          <a
            href="https://www.instagram.com/andy.hap_/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn rounded-circle d-flex align-items-center justify-content-center"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://linkedin.com/in/andy-hikmal-p"
            target="_blank"
            rel="noopener noreferrer"
            className="btn rounded-circle d-flex align-items-center justify-content-center"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://github.com/andyhap"
            target="_blank"
            rel="noopener noreferrer"
            className="btn rounded-circle d-flex align-items-center justify-content-center"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </section>
    </main>
  );
}

