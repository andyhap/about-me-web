"use client"

import React, { useEffect } from 'react';
import AOS from 'aos'; 
import 'aos/dist/aos.css';
// import Image from 'next/image';

const MyHobyPage = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });
    }, []);

    return (
        <main className="text-white min-vh-100">
            {/* Foto */}
            <div className="container text-center d-flex flex-column justify-content-center align-items-center min-vh-100">
                <div data-aos="fade-up">
                    <div className="splice-layered mb-4">
                        <span className="splice-stroke">Fotografi</span>
                        <span className="splice-fill">Fotografi</span>
                    </div>
                </div>
            </div>

            {/* Design */}
            <div className="container text-center d-flex flex-column justify-content-center align-items-center min-vh-100">
                <div data-aos="fade-up">
                    <div className="splice-layered mb-4">
                        <span className="splice-stroke">Design</span>
                        <span className="splice-fill">Design</span>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default MyHobyPage;

