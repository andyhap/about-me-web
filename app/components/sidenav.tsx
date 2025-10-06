"use client";

import { useEffect, useState } from "react";
import "./sidenav.css";

const sections = ["About", "Experience", "Project", "Contact"];

export default function SideNav() {
const [active, setActive] = useState<string>("About");

useEffect(() => {
    const handleScroll = () => {
    let current = "About";
    sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            current = id;
        }
        }
    });
    setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
}, []);

return (
    <div className="side-nav">
    <div className="line"></div>
    <ul>
        {sections.map((section) => (
        <li key={section} className={active === section ? "active" : ""}>
            <a href={`#${section}`}>{section}</a>
        </li>
        ))}
    </ul>
    </div>
);
}
