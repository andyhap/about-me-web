"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutMe = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });
    }, []);

    return (
        <main className="text-white min-vh-100">
            <div className="container d-flex justify-content-center align-items-center min-vh-100">
                <div className="row align-items-center g-4 flex-column flex-md-row">
                    {/* foto */}
                    <div className="col-md-5 text-center mb-4 mb-md-0">
                        <img
                            src="/image/diriku.jpg"
                            alt="Foto Profil"
                            className="img-fluid rounded"
                            style={{ maxWidth: "400px", borderRadius: "12px" }}
                        />
                    </div>

                    {/* about me */}
                    <div className="col-md-7 text-md-start text-center">
                        <div className="splice-layered mb-4">
                            <span className="splice-stroke">About Me</span>
                            <span className="splice-fill">About Me</span>
                        </div>
                        <div className="mb-4 about-me-text">
                            <p>
                                Hi! My name is Andy Hikmal Parakkasi, but you can call me Hikmal.
                                I'm deeply interested in the world of programming, especially in web development.
                                I constantly strive to learn and improve myself in building better and more
                                efficient websites to enhance the user experience.
                            </p>
                            <p>
                                I aspire to become a Full-Stack Web Developer, as I've always been fascinated since
                                childhood by how websites are built and function behind the scenes. In my free time,
                                I enjoy photography and design, which I usually do to relax or explore creativity
                                outside of playing games and watching videos.
                            </p>
                        </div>
                        <a
                            className="custom-btn contact-btn btn fw-bold px-4 py-2"
                            href="/resume.pdf"
                            download
                        >
                            Download My Resume
                        </a>
                    </div>
                </div>
            </div>

            <div className="project-section container text-center d-flex flex-column justify-content-center align-items-center min-vh-100 pb-5">
                <div data-aos="fade-up">
                    <div className="splice-layered mb-4">
                        <span className="splice-stroke">Toolbox</span>
                        <span className="splice-fill">Toolbox</span>
                    </div>

                    <div className="row row-cols-1 row-cols-md-2 g-">
                        {/* Bahasa Pemrograman */}
                        <div className="mb-5">
                            <h4 className="mb-3">Programming language</h4>
                            <div className="d-flex justify-content-center">
                                <img
                                src="https://skillicons.dev/icons?i=html,css,js,ts,php"
                                alt="Bahasa Pemrograman"
                                />
                            </div>
                        </div>

                        {/* Framework & Library */}
                        <div className="mb-5">
                            <h4 className="mb-3">Framework & Library</h4>
                            <div className="d-flex justify-content-center">
                                <img
                                src="https://skillicons.dev/icons?i=react,nextjs,nodejs,laravel,bootstrap"
                                alt="Framework & Library"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        {/* Database */}
                        <div className="mb-5">
                            <h4 className="mb-3">Database</h4>
                            <div className="d-flex justify-content-center">
                                <img
                                src="https://skillicons.dev/icons?i=mongodb,mysql,postgres"
                                alt="Database"
                                />
                        </div>
                        </div>

                        {/* Tools & Platforms */}
                        <div className="mb-5">
                            <h4 className="mb-3">Tools & Platforms</h4>
                            <div className="d-flex justify-content-center">
                                <img
                                src="https://skillicons.dev/icons?i=git,github,notion"
                                alt="Tools & Platforms"
                                />
                            </div>
                        </div>
                    </div>
                    {/* Design */}
                    <div className="mb-5">
                        <h4 className="mb-3">Design Tools</h4>
                        <div className="d-flex justify-content-center">
                            <img
                            src="https://skillicons.dev/icons?i=figma,photoshop,pr"
                            alt="Design Tools"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
        
    );
};

export default AboutMe;
