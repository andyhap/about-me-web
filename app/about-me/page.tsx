"use client";

import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Image from "next/image";

const AboutMe = () => {
    useEffect(() => {
        if (typeof window !== "undefined") {
        import("aos").then((AOS) => {
            AOS.default.init({
            duration: 1000,
            once: false,
            offset: 120,
            });
            setTimeout(() => {
            AOS.default.refresh();
            }, 100);
        });
        }
    }, []);

    return (
        <main className="text-white min-vh-100">
            <div className="container d-flex justify-content-center align-items-center min-vh-100">
                <div data-aos="fade-up">
                    <div className="row align-items-center g-4 flex-column flex-md-row">
                        {/* foto */}
                        <div className="col-md-5 text-center text-md-start mb-4 mb-md-0">
                            <div className="profile-image-container">
                                <Image
                                data-aos="fade-right"
                                src="/image/diriku.jpg"
                                alt="Foto Profil"
                                width={400}
                                height={400}
                                className="profile-image"
                                />
                            </div>
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
                                    I&apos;m deeply interested in the world of programming, especially in web development.
                                    I constantly strive to learn and improve myself in building better and more
                                    efficient websites to enhance the user experience.
                                </p>
                                <p>
                                    I aspire to become a Full-Stack Web Developer, as I&apos;ve always been fascinated since
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
            </div>

            <div className="project-section container text-center d-flex flex-column justify-content-center align-items-center min-vh-100 pb-5">
                <div data-aos="fade-up">
                    <div className="splice-layered mb-4">
                        <span className="splice-stroke">Toolbox</span>
                        <span className="splice-fill">Toolbox</span>
                    </div>

                    <div className="row row-cols-1 row-cols-md-2 g-4 mb-4">
                        {/* Bahasa Pemrograman */}
                        <div className="mb-5">
                            <h4 className="mb-3 ">Programming language</h4>
                            <div className="d-flex justify-content-center gap-2">
                                <div data-aos="fade-right" data-aos-delay="0">
                                    <Image width={40} height={40} src="/image/programming-language/html.svg" alt="HTML icon" />
                                </div>
                                <div data-aos="fade-right" data-aos-delay="100">
                                    <Image width={40} height={40} src="/image/programming-language/css.svg" alt="CSS icon" />
                                </div>
                                <div data-aos="fade-right" data-aos-delay="200">
                                    <Image width={40} height={40} src="/image/programming-language/javascript.svg" alt="JavaScript icon" />
                                </div>
                                <div data-aos="fade-right" data-aos-delay="300">
                                    <Image width={40} height={40} src="/image/programming-language/typescript.svg" alt="TypeScript icon" />
                                </div>
                                <div data-aos="fade-right" data-aos-delay="400">
                                    <Image width={40} height={40} src="/image/programming-language/php-dark.svg" alt="PHP icon" />
                                </div>
                                <div data-aos="fade-right" data-aos-delay="500">
                                    <Image width={40} height={40} src="/image/programming-language/python-dark.svg" alt="Python icon" />
                                </div>
                            </div>
                        </div>

                        {/* Framework & Library */}
                        <div className="mb-5">
                            <h4 className="mb-3">Framework & Library</h4>
                            <div className="d-flex justify-content-center gap-2">
                                <div data-aos="fade-right" data-aos-delay="0">
                                    <Image width={40} height={40} src="/image/framework-and-library/react-dark.svg" alt="React icon" />
                                </div>
                                <div data-aos="fade-right" data-aos-delay="100">
                                    <Image width={40} height={40} src="/image/framework-and-library/nodejs-dark.svg" alt="NodeJS icon" />
                                </div>
                                <div data-aos="fade-right" data-aos-delay="200">
                                    <Image width={40} height={40} src="/image/framework-and-library/laravel-dark.svg" alt="Laravel icon" />
                                </div>
                                <div data-aos="fade-right" data-aos-delay="300">
                                    <Image width={40} height={40} src="/image/framework-and-library/nextjs-dark.svg" alt="NextJS icon" />
                                </div>
                                <div data-aos="fade-right" data-aos-delay="400">
                                    <Image width={40} height={40} src="/image/framework-and-library/bootstrap.svg" alt="Boothstrap icon" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {/* db-img */}
                        <div className="mb-5">
                            <h4 className="mb-3">Database</h4>
                            <div className="d-flex justify-content-center flex-wrap gap-3">
                                <div data-aos="fade-right" data-aos-delay="0">
                                    <Image width={40} height={40} src="/image/db-img/mysql-dark.svg" alt="MySQL icon" />
                                </div>
                                <div data-aos="fade-right" data-aos-delay="100">
                                    <Image width={40} height={40} src="/image/db-img/postgresql-dark.svg" alt="PostgreSQL icon" />
                                </div>
                                <div data-aos="fade-right" data-aos-delay="200">
                                    <Image width={40} height={40} src="/image/db-img/mongodb.svg" alt="MongoDB icon" />
                                </div>
                            </div>
                        </div>

                        {/* Tools & Platforms */}
                        <div className="mb-5">
                            <h4 className="mb-3">Tools & Platforms</h4>
                            <div className="d-flex justify-content-center flex-wrap gap-3">
                                <div data-aos="fade-right" data-aos-delay="0">
                                    <Image width={40} height={40} src="/image/tools-platforms/git.svg" alt="Git icon" />
                                </div>
                                <div data-aos="fade-right" data-aos-delay="100">
                                    <Image width={40} height={40} src="/image/tools-platforms/github-dark.svg" alt="GitHub icon" />
                                </div>
                                <div data-aos="fade-right" data-aos-delay="200">
                                    <Image width={40} height={40} src="/image/tools-platforms/gitlab-dark.svg" alt="GitLab icon" />
                                </div>
                                <div data-aos="fade-right" data-aos-delay="300">
                                    <Image width={40} height={40} src="/image/tools-platforms/postman.svg" alt="Postman icon" />
                                </div>
                                <div data-aos="fade-right" data-aos-delay="400">
                                    <Image width={40} height={40} src="/image/tools-platforms/notion-dark.svg" alt="Notion icon" />
                                </div>
                            </div>
                        </div>

                        {/* Design Tools */}
                        <div className="mb-5">
                            <h4 className="mb-3">Design Tools</h4>
                            <div className="d-flex justify-content-center flex-wrap gap-3">
                                <div data-aos="fade-right" data-aos-delay="0">
                                    <Image width={40} height={40} src="/image/design/figma-dark.svg" alt="Figma icon" />
                                </div>
                                <div data-aos="fade-right" data-aos-delay="100">
                                    <Image width={40} height={40} src="/image/design/photoshop.svg" alt="Photoshop icon" />
                                </div>
                                <div data-aos="fade-right" data-aos-delay="200">
                                    <Image width={40} height={40} src="/image/design/premiere.svg" alt="Premiere Pro icon" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        
    );
};

export default AboutMe;