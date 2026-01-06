import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code2, Cpu, Wifi, Activity } from 'lucide-react';
import UserLogo from '../assets/logo-lh.jpg';

const Hero = () => {
    const [randomData, setRandomData] = useState('000');

    // Simulate changing system data
    useEffect(() => {
        const interval = setInterval(() => {
            setRandomData(Math.floor(Math.random() * 999).toString().padStart(3, '0'));
        }, 150);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden p-6 bg-black text-white">

            {/* --- ADVANCED BACKGROUND & GRID --- */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,65,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,65,0.03)_1px,transparent_1px)] bg-[size:40px_40px] z-0 perspective-1000"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,20,0,0.8),#000000)] z-0"></div>

            {/* Data Streams / HUD Elements Background */}
            <div className="absolute top-10 left-10 font-mono text-xs text-cyber-green/40 hidden md:block select-none">
                <p>SYS.STATUS: ONLINE</p>
                <p>SEC.LEVEL: ALPHA</p>
                <p>MEM: {randomData} TB</p>
            </div>
            <div className="absolute bottom-10 right-10 font-mono text-xs text-cyber-green/40 hidden md:block text-right select-none">
                <p>COORD: 45.912, -12.004</p>
                <p>LINK: ESTABLISHED</p>
                <p>UPTIME: 99.99%</p>
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
                        className="absolute -inset-8 border border-cyber-green/20 rounded-full border-dashed"
                    ></motion.div>
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="absolute -inset-4 border border-cyber-green/10 rounded-full"
                    ></motion.div>

                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-cyber-green/20 rounded-full blur-xl group-hover:bg-cyber-green/40 transition-all duration-500"></div>

                    {/* Actual Logo Image */}
                    <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-2 border-cyber-green/50 shadow-[0_0_30px_rgba(0,255,65,0.2)]">
                        <img
                            src={UserLogo}
                            alt="LH Logo"
                            className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                        />
                        {/* Scanline Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-green/10 to-transparent animate-scan"></div>
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

                    <h1 className="font-mono text-5xl md:text-8xl font-black tracking-tighter mb-2 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 uppercase">
                        Lucas Henrique
                        <span className="text-cyber-green text-6xl md:text-9xl">.</span>
                    </h1>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-8 text-sm md:text-base font-mono text-cyber-green/80 mb-10 tracking-widest uppercase">
                        <div className="flex items-center gap-2">
                            <Activity size={14} />
                            <span>Data Analyst</span>
                        </div>
                        <div className="w-1 h-1 bg-gray-500 rounded-full hidden md:block"></div>
                        <div className="flex items-center gap-2">
                            <Cpu size={14} />
                            <span>Machine Learning</span>
                        </div>
                        <div className="w-1 h-1 bg-gray-500 rounded-full hidden md:block"></div>
                        <div className="flex items-center gap-2">
                            <Wifi size={14} />
                            <span>Full-Stack</span>
                        </div>
                    </div>

                    {/* --- ACTIONS --- */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a
                            href="#projects"
                            className="group relative px-8 py-4 bg-transparent border border-cyber-green text-cyber-green hover:bg-cyber-green hover:text-black transition-all duration-300 font-mono font-bold tracking-widest overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <Code2 size={18} />
                                [ VER PROJETOS ]
                            </span>
                            <div className="absolute inset-0 bg-cyber-green/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        </a>

                        <a
                            href="#contact"
                            className="text-gray-400 hover:text-white font-mono uppercase tracking-widest text-sm border-b border-transparent hover:border-cyber-green transition-all"
                        >
                            // Entrar em Contato
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
        </section>
    );
};

export default Hero;
