import React, { useState, useEffect } from "react";
import { useFloating, offset, shift, flip, autoUpdate } from "@floating-ui/react-dom";
import "./fab.css"; // Import CSS for the FAB

export default function FloatingFab() {
    const [open, setOpen] = useState(false);

    const { x, y, refs, strategy } = useFloating({
        middleware: [offset(10), shift(), flip()],
        placement: 'left', 
        whileElementsMounted: autoUpdate,
    });

    // Menutup menu saat di-scroll
    useEffect(() => {
        const handleScroll = () => setOpen(false);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            {/* Tombol utama */}
            <button
                ref={refs.setReference}
                onClick={() => setOpen(!open)}
                className="fab-toggle"
            >
                {open ? "✕" : "⋯"}
            </button>

            {/* Tombol-tombol hero */}
            <div
                ref={refs.setFloating}
                style={{
                    position: strategy,
                    top: y ?? 0,
                    left: x ?? 0,
                    zIndex: 999,
                    opacity: open ? 1 : 0,
                    transform: open ? 'translateX(0)' : 'translateX(10px)',
                    transition: 'opacity 0.3s ease, transform 0.3s ease',
                    pointerEvents: open ? 'auto' : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'row',
                    gap: '8px',
                }}
            >
                <a href="#About" className="fab-menu-btn" onClick={() => setOpen(false)}>About</a>
                <a href="#Project" className="fab-menu-btn" onClick={() => setOpen(false)}>Project</a>
                <a href="#Contact" className="fab-menu-btn" onClick={() => setOpen(false)}>Contact</a>
            </div>
        </div>
    );
}