import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Terminal, Code2, Cpu, Wifi, Activity, Database, Globe, Lock } from 'lucide-react';
import UserLogo from '../assets/avatar-fullstack.png';

// Helper hook for decrypting text effect
const useDecryptEffect = (text, startDelay = 0) => {
    const [displayText, setDisplayText] = useState('');
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";

    useEffect(() => {
        let iteration = 0;
        let interval = null;

        const startEffect = () => {
            interval = setInterval(() => {
                setDisplayText(text
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join("")
                );

                if (iteration >= text.length) {
                    clearInterval(interval);
                }

                iteration += 1 / 3;
            }, 30);
        };

        const timeout = setTimeout(startEffect, startDelay);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [text, startDelay]);

    return displayText;
};

const Hero = () => {
    const [randomData, setRandomData] = useState('000');
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 100]);
    const y2 = useTransform(scrollY, [0, 500], [0, -100]);

    // Decrypting titles
    const titleText = useDecryptEffect("LUCAS HENRIQUE", 500);
    const role1 = useDecryptEffect("DATA ANALYST", 1500);
    const role2 = useDecryptEffect("MACHINE LEARNING", 2000);
    const role3 = useDecryptEffect("FULL-STACK", 2500);

    // Simulate changing system data
    useEffect(() => {
        const interval = setInterval(() => {
            setRandomData(Math.floor(Math.random() * 999).toString().padStart(3, '0'));
        }, 150);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden p-6 bg-black text-white pt-24">

            {/* --- ADVANCED BACKGROUND & GRID --- */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,65,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,65,0.03)_1px,transparent_1px)] bg-[size:30px_30px] z-0 perspective-1000 transform scale-110"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,20,0,0.6),#000000)] z-0"></div>

            {/* Moving Code Curtain using Motion */}
            <motion.div
                style={{ y: y1 }}
                className="absolute top-0 right-10 text-[10px] text-cyber-green/10 font-mono hidden lg:block whitespace-pre select-none"
            >
                {`
function init() {
  const system = new System();
  system.connect();
  // accessing secure data
  return true;
}
                `.repeat(5)}
            </motion.div>

            {/* Data Streams / HUD Elements Background */}
            <div className="absolute top-20 left-10 font-mono text-xs text-cyber-green/40 hidden md:block select-none">
                <p>SYS.STATUS: <span className="text-white">ONLINE</span></p>
                <p>SEC.LEVEL: <span className="text-red-500 animate-pulse">ALPHA</span></p>
                <p>MEM: {randomData} TB</p>
                <div className="w-20 h-1 bg-cyber-green/20 mt-2 overflow-hidden">
                    <div className="h-full bg-cyber-green animate-progress w-full origin-left"></div>
                </div>
            </div>

            <div className="absolute top-1/2 left-4 w-6 h-32 border-l border-b border-cyber-green/30 hidden lg:block"></div>
            <div className="absolute bottom-32 right-4 w-6 h-32 border-r border-t border-cyber-green/30 hidden lg:block"></div>

            <div className="absolute bottom-10 right-10 font-mono text-xs text-cyber-green/40 hidden md:block text-right select-none">
                <p>COORD: 45.912, -12.004</p>
                <p>LINK: ESTABLISHED</p>
                <p>UPTIME: 99.99%</p>
                <div className="flex gap-1 justify-end mt-2">
                    {[1, 2, 3, 4].map(i => (
                        <div key={i} className={`w-1 h-3 ${i < 3 ? 'bg-cyber-green' : 'bg-cyber-green/30'}`}></div>
                    ))}
                </div>
            </div>

            {/* Connecting Lines Decoration */}
            <div className="absolute top-1/2 left-0 w-1/4 h-[1px] bg-gradient-to-r from-transparent to-cyber-green/30 hidden md:block"></div>
            <div className="absolute top-1/2 right-0 w-1/4 h-[1px] bg-gradient-to-l from-transparent to-cyber-green/30 hidden md:block"></div>

            <div className="z-10 w-full max-w-5xl flex flex-col items-center">

                {/* --- LOGO SECTION --- */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="relative mb-12 group"
                >
                    {/* Rotating Rings around Logo */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute -inset-12 border border-cyber-green/20 rounded-full border-dashed"
                    ></motion.div>
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="absolute -inset-4 border border-cyber-green/10 rounded-full"
                    ></motion.div>

                    {/* Floating Tech Icons */}
                    <motion.div className="absolute -top-8 -right-8 text-cyber-green/60"><Database size={20} /></motion.div>
                    <motion.div className="absolute -bottom-4 -left-8 text-cyber-green/60"><Globe size={20} /></motion.div>
                    <motion.div className="absolute top-0 -left-10 text-cyber-green/60"><Lock size={16} /></motion.div>

                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-cyber-green/20 rounded-full blur-xl group-hover:bg-cyber-green/40 transition-all duration-500"></div>

                    {/* Actual Logo Image */}
                    <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-2 border-cyber-green/50 shadow-[0_0_30px_rgba(0,255,65,0.2)] bg-black">
                        <img
                            src={UserLogo}
                            alt="LH Logo"
                            className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700 opacity-90"
                        />
                        {/* Scanline Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-green/10 to-transparent animate-scan"></div>
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')] opacity-50"></div>
                    </div>

                    {/* Floating Label */}
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black/80 border border-cyber-green/30 px-3 py-1 rounded text-xs text-cyber-green font-mono whitespace-nowrap">
                        ID: 8492-AX
                    </div>
                </motion.div>

                {/* --- MAIN CONTENT PANEL --- */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="relative w-full text-center px-4"
                >
                    {/* Decorative Brackets aligned with text */}
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-transparent to-cyber-green/50"></div>

                    <h1 className="font-mono text-5xl md:text-8xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 uppercase glitch-text">
                        {titleText}
                        <span className="text-cyber-green text-6xl md:text-9xl animate-pulse">.</span>
                    </h1>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-8 text-sm md:text-base font-mono text-cyber-green/80 mb-10 tracking-widest uppercase">
                        <div className="flex items-center gap-2 group">
                            <Activity size={14} className="group-hover:animate-spin" />
                            <span>{role1}</span>
                        </div>
                        <div className="w-1 h-1 bg-gray-500 rounded-full hidden md:block"></div>
                        <div className="flex items-center gap-2 group">
                            <Cpu size={14} className="group-hover:text-white transition-colors" />
                            <span>{role2}</span>
                        </div>
                        <div className="w-1 h-1 bg-gray-500 rounded-full hidden md:block"></div>
                        <div className="flex items-center gap-2 group">
                            <Wifi size={14} className="group-hover:animate-ping" />
                            <span>{role3}</span>
                        </div>
                    </div>

                    {/* --- ACTIONS --- */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a
                            href="#projects"
                            className="group relative px-10 py-5 bg-transparent border border-cyber-green text-cyber-green hover:bg-cyber-green hover:text-black transition-all duration-300 font-mono font-bold tracking-widest overflow-hidden skew-x-[-10deg] hover:skew-x-0"
                        >
                            <span className="relative z-10 flex items-center gap-2 skew-x-[10deg] group-hover:skew-x-0 transition-transform">
                                <Code2 size={18} />
                                INITIALIZE_PROJECTS()
                            </span>
                            <div className="absolute inset-0 bg-cyber-green/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            {/* Corner Accents */}
                            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </a>

                        <a
                            href="#contact"
                            className="text-gray-400 hover:text-white font-mono uppercase tracking-widest text-sm border-b border-transparent hover:border-cyber-green transition-all relative group"
                        >
                            // ESTABLISH_CONTACT
                            <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-cyber-green opacity-0 group-hover:opacity-100 transition-opacity rounded-full"></span>
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
        </section>
    );
};

export default Hero;
