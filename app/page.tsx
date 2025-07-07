"use client";
import React from "react";

export default function Page() {
  const navigationButtons = ["About Me", "Project", "Contact"];

  return (
    <main className="text-white min-vh-100">
      {/* Hero Section */}
      <section className="container text-center d-flex flex-column justify-content-center align-items-center min-vh-100">
        <h1 className="my-name fw-bold mb-4">
          Andy Hikmal Parakkasi
        </h1>
        <p className="description lead mb-4">
          Hi, my name is Hikmal. I am someone who is interested in the field of
          website creation.
        </p>

        <div className="d-flex justify-content-center gap-3 flex-wrap mb-5">
          {navigationButtons.map((label, idx) => (
            <button
              key={idx}
              className="hero-btn btn fw-bold px-4 py-2"
            >
              {label}
            </button>
          ))}
        </div>
      </section>

      {/* About Me */}
      <section className="container text-center d-flex flex-column justify-content-center align-items-center min-vh-100">
        <h2 className="about-me-title display-5 fw-bold mb-4">About Me</h2>
        <p className="about-me-text fs-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          auctor, quam ut pretium molestie, dui nisl fringilla lorem, vel
          molestie risus sapien a nisi. Cras nec lobortis massa. Pellentesque
          lacinia varius lacus non consequat. Nulla facilisi. Phasellus
          vehicula ligula et fringilla egestas. Ut vitae turpis volutpat,
          egestas ex ac, vehicula ligula. Vestibulum mattis ligula ut ante
          malesuada suscipit. Aliquam placerat nulla nec ligula elementum
          ornare id vitae urna.
        </p>
      </section>

      {/* Project Section */}
      <section className="container text-center d-flex flex-column justify-content-center align-items-center min-vh-100">
        <h2 className="project-title display-5 fw-bold mb-5">Project</h2>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            {/* Kotak abu-abu */}
            <div className="bg-secondary rounded p-5 mb-4">
              <h3 className="text-white fw-semibold fs-4 mb-3">
                HikmalAir - college project
              </h3>
              {/* Kotak hitam di dalam kotak abu-abu */}
              <div className="bg-dark rounded p-4">
                <p className="text-white mb-0">
                  Deskripsi singkat atau konten dari proyekmu bisa ditaruh di sini.
                </p>
              </div>
            </div>

            <p className="fst-italic fs-5 text-white">
              Upcoming projects will be added soon.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container text-center d-flex flex-column justify-content-center align-items-center min-vh-100">
        <h2 className="contact-title display-5 fw-bold mb-4">Let's Talk</h2>
        <p className="fs-5 mb-4">
          Want to say hi or get in touch? Feel free to send me an email by
          clicking the button below.
        </p>

        <button className="contact-btn btn fw-bold px-4 py-2">
          Say Hello
        </button>
      </section>
    </main>
  );
}

