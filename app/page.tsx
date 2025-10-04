"use client";

import FloatingFab from "./components/fab";
import SideNav from "./components/sidenav";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function Page() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const navigationButtons = ["About", "Experience","Project", "Contact"];

  return (
    <main className="text-white min-vh-100">
      <div className="sidenav-container">
        <SideNav />
      </div>
      {/* Hero Section */}
      <section className="container text-center d-flex flex-column justify-content-center align-items-center min-vh-100">
        <div data-aos="fade-up">
          <div className="splice-layered my-name display-5 fw-bold mb-4">
              <span className="splice-stroke">Andy Hikmal Parakkasi</span>
              <span className="splice-fill">Andy Hikmal Parakkasi</span>
          </div>
          {/* <h1 className="my-name fw-bold mb-4">
            Andy Hikmal Parakkasi
          </h1> */}
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
        </div>
      </section>

      {/* About Me */}
      <section id="About" className="container text-center d-flex flex-column justify-content-center align-items-center min-vh-100">
        <div data-aos="fade-up">
          <div className="splice-layered display-5 fw-bold mb-4">
              <span className="splice-stroke">About Me</span>
              <span className="splice-fill">About Me</span>
          </div>
          {/* <h2 className="about-me-title display-5 fw-bold mb-4">About Me</h2> */}
          <p className="about-me-text fs-5">
            Hello, I am Hikmal and I am a student of Informatics Engineering at the State<br/>
            University of Surabaya. I am interested in making websites and will continue<br/>
            to develop myself to make better websites.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section id="Experience" className="container text-center d-flex flex-column justify-content-center align-items-center min-vh-100">
        <div data-aos="fade-up">
          <div className="splice-layered display-5 fw-bold mb-4">
              <span className="splice-stroke">Experience</span>
              <span className="splice-fill">Experience</span>
          </div>
          {/* <h2 className="experience-title display-5 fw-bold mb-4">Experience</h2> */}
          <div className="row w-100 text-center text-md-start">
            {/* Kiri: Judul */}
            <div className="col-md-5 d-flex align-items-start justify-content-center mb-4 mb-md-0">
              <h3 className="fw-bold text-md-start text-center">
                Organizational <br/> Experience
              </h3>
            </div>

            {/* Kanan: Semua kotak pengalaman */}
            <div className="col-md-7 d-flex flex-column gap-4">
              {/* Pengalaman 1 */}
              <div className="organization-card p-4 rounded">
                <h5 className="text-white fw-semibold mb-1">Head of the media and information department</h5>
                <p className="text-light mb-2">Himpunan Mahasiswa Bontang Surabaya | 2025-Present</p>
                <p className="text-white mb-0">
                  Lead the team in creating designs and content for social media and <br/>
                  event documentation,Coordinate with other departments to ensure <br/>
                  effective information delivery, Manage the organization&apos;s content <br/>
                  calendar and visual identity
                </p>
              </div>

              {/* Pengalaman 2 */}
              <div className="organization-card p-4 rounded">
                <h5 className="text-white fw-semibold mb-1">Member of the Department of Media and Information</h5>
                <p className="text-light mb-2">Himpunan Mahasiswa Bontang Surabaya | 2024</p>
                <p className="text-white mb-0">
                  Assist in content creation and documentation of activities. Participate<br/>
                  in the poster editing and design process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Project Section */}
      <section id="Project" className="project-section container text-center d-flex flex-column justify-content-center align-items-center min-vh-100">
        <div data-aos="fade-up">
          <div className="splice-layered display-5 fw-bold mb-4">
              <span className="splice-stroke">Project</span>
              <span className="splice-fill">Project</span>
          </div>
          {/* <h2 className="project-title display-5 fw-bold mb-5">Project</h2> */}
          <div className="row justify-content-center">
            <div className="col-lg-10">
              {/* Kotak abu-abu */}
              <div className="bg-project rounded p-5 mb-4">
                <h3 className="text-white fw-semibold fs-4 mb-3">
                  HikmalAir - college project
                </h3>
                {/* gambar project */}
                <div className="bg-dark rounded overflow-hidden mb-3" style={{ aspectRatio: '2 / 1' }}>
                <Image
                  src="/image/HikmalAir-dashbord.png"
                  alt="HikmalAir screenshot"
                  width={800}
                  height={400}
                  className="w-100 h-100 object-fit-cover rounded"
                />
                </div>
                <p>HikmalAIr is a flight ticket booking website created to fulfill a college assignment. This application is created using Laravel and integrated with a MySQL database.</p>
                <p><a href="https://hikmalair-production.up.railway.app/login" className="text-decoration-none btn hero-btn">Go to HikmalAir</a></p>
              </div>
              <p className="fst-italic fs-5 text-white">
                Upcoming projects will be added soon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="Contact" className="container text-center d-flex flex-column justify-content-center align-items-center min-vh-100">
        <div data-aos="fade-up">
          <div className="splice-layered display-5 fw-bold mb-4">
              <span className="splice-stroke">Let&apos;s Talk</span>
              <span className="splice-fill">Let&apos;s Talk</span>
          </div>
          {/* <h2 className="contact-title display-5 fw-bold mb-4">Let&apos;s Talk</h2> */}
          <p className="fs-5 mb-4">
            Want to say hi or get in touch? Feel free to send me an email by
            clicking the button below.
          </p>
          
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <a href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=andyhikmalparakkasi@gmail.com" className="hero-btn contact-btn btn fw-bold px-4 py-2">
              Say Hello
            </a>

            <a className="hero-btn contact-btn btn fw-bold px-4 py-2">
              Download My Resume
            </a>
          </div>

          {/* Social Media Buttons */}
          <div className="sosmed-btn d-flex gap-3 justify-content-center mt-3 py-3">
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
        </div>
      </section>
      <div className="fab-container">
        <FloatingFab />
      </div>
    </main>
  );
}

