import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, Wifi, Battery } from 'lucide-react';

const Header = () => {
    const [time, setTime] = useState(new Date());
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);

        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            clearInterval(timer);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const sysLogs = [
        "INITIALIZING SYSTEM...",
        "CHECKING INTEGRITY...",
        "CONNECTING TO SERVER...",
        "ESTABLISHING SECURE LINK...",
        "ACCESS GRANTED.",
        "LOAD COMPLETE."
    ];

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-cyber-green/20' : 'bg-transparent'}`}>
            {/* Top decorative line */}
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyber-green/50 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between font-mono text-xs md:text-sm text-cyber-green/80">

                {/* Left: System Status / Logs */}
                <div className="flex items-center gap-4 w-1/3 overflow-hidden">
                    <Terminal size={16} />
                    <div className="flex-1 overflow-hidden relative h-5">
                        <motion.div
                            animate={{ y: [0, -20 * (sysLogs.length - 1)] }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear", repeatType: "loop" }}
                            className="absolute top-0 left-0"
                        >
                            {sysLogs.map((log, i) => (
                                <div key={i} className="h-5 flex items-center whitespace-nowrap">
                                    <span className="opacity-70 mr-2">SYS.LOG:</span> {log}
                                </div>
                            ))}
                            {/* Duplicate for seamless loop if needed, but simple vertical slide works for logs */}
                        </motion.div>
                    </div>
                </div>

                {/* Center: Time / Identity */}
                <div className="hidden md:flex items-center gap-4 justify-center w-1/3">
                    <div className="flex items-center gap-2 px-3 py-1 border border-cyber-green/30 rounded bg-cyber-green/5">
                        <Shield size={14} />
                        <span>SEC.LEVEL: 01</span>
                    </div>
                    <div>
                        {time.toLocaleTimeString([], { hour12: false })}
                    </div>
                </div>

                {/* Right: Controls / Nav */}
                <div className="flex items-center justify-end gap-6 w-1/3">
                    <nav className="hidden md:flex gap-6">
                        <a href="#projects" className="hover:text-white transition-colors hover:underline decoration-cyber-green underline-offset-4">PROJECTS</a>
                        <a href="#about" className="hover:text-white transition-colors hover:underline decoration-cyber-green underline-offset-4">ABOUT</a>
                        <a href="#contact" className="hover:text-white transition-colors hover:underline decoration-cyber-green underline-offset-4">CONTACT</a>
                    </nav>
                    <div className="flex items-center gap-3 text-cyber-green/60">
                        <Wifi size={14} />
                        <Battery size={14} />
                    </div>
                </div>
            </div>

            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-cyber-green"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-cyber-green"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-cyber-green opacity-50"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-cyber-green opacity-50"></div>
        </header>
    );
};

export default Header;
