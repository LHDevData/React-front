import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Database } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 px-6 bg-black relative">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-8">
                    <Terminal className="text-cyber-green" />
                    <h2 className="text-3xl md:text-4xl font-mono font-bold text-white">
                        <span className="text-cyber-green">./</span>SOBRE_MIM
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6 text-gray-300 leading-relaxed font-sans"
                    >
                        <p>
                            <strong className="text-white">Olá! Eu sou o Lucas.</strong> 👋
                        </p>
                        <p>
                            Sou um entusiasta de Data Science e Machine Learning, focado em transformar dados brutos em insights acionáveis. Minha jornada envolve a criação de modelos preditivos, automação de processos e desenvolvimento de aplicações web que integram inteligência artificial.
                        </p>
                        <p>
                            Atualmente explorando o universo de Deep Learning e otimização de algoritmos com Python e GPUs, sempre buscando simplificar a complexidade através de código limpo e eficiente.
                        </p>

                        <div className="p-4 border border-cyber-green/20 bg-cyber-green/5 rounded">
                            <h3 className="text-cyber-green font-mono font-bold mb-2 flex items-center gap-2">
                                <Database size={16} /> Tech Stack
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {['Python', 'Pandas', 'Scikit-Learn', 'React', 'SQL', 'Git', 'Docker'].map(tech => (
                                    <span key={tech} className="text-xs font-mono text-gray-400 bg-black px-2 py-1 rounded border border-gray-800">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-cyber-green/20 blur-3xl rounded-full opacity-20"></div>
                        <div className="relative border border-gray-800 bg-gray-900/50 p-6 rounded-xl font-mono text-sm text-green-400/80 shadow-2xl">
                            <div className="flex gap-2 mb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <div>
                                <p className="mb-2"><span className="text-purple-400">class</span> <span className="text-yellow-400">DataScientist</span>:</p>
                                <p className="pl-4 mb-1">def <span className="text-blue-400">__init__</span>(self):</p>
                                <p className="pl-8 text-gray-400">self.skills = [</p>
                                <p className="pl-12 text-orange-400">'Machine Learning',</p>
                                <p className="pl-12 text-orange-400">'Data Analysis',</p>
                                <p className="pl-12 text-orange-400">'Web Dev'</p>
                                <p className="pl-8 text-gray-400">]</p>
                                <p className="pl-8 text-gray-400">self.mission = <span className="text-orange-400">'Solve problems'</span></p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
