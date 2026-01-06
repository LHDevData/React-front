import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code2 } from 'lucide-react';

const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden p-6">
            {/* Matrix-like background effect (simplified) */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-cyber-dark to-black opacity-80 z-0"></div>

            <div className="z-10 max-w-4xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="border border-cyber-green/30 bg-cyber-dark/80 p-6 rounded-lg backdrop-blur-sm shadow-neon"
                >
                    <div className="flex items-center gap-2 mb-4 border-b border-cyber-green/20 pb-2">
                        <Terminal className="text-cyber-green" size={20} />
                        <span className="text-cyber-green font-mono text-sm">user@LHDevData:~/portfolio</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold mb-4 font-mono">
                        <span className="text-white">Olá, sou </span>
                        <span className="text-cyber-green glitch-text">Lucas Henrique</span>
                    </h1>

                    <div className="font-mono text-gray-400 text-lg md:text-xl mb-8 space-y-2">
                        <p>{'>'} Data Analyst</p>
                        <p>{'>'} Machine Learning Enthusiast</p>
                        <p>{'>'} Full-Stack Developer</p>
                    </div>

                    <div className="flex gap-4">
                        <a href="#projects" className="px-6 py-3 bg-cyber-green/10 border border-cyber-green text-cyber-green hover:bg-cyber-green hover:text-black transition-all duration-300 font-mono font-bold rounded flex items-center gap-2">
                            <Code2 size={18} />
                            VER PROJETOS
                        </a>
                        <a href="#contact" className="px-6 py-3 bg-transparent border border-gray-600 text-gray-400 hover:border-white hover:text-white transition-all duration-300 font-mono font-bold rounded">
                            CONTATO
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
