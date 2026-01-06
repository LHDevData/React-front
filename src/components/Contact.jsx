import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 px-6 bg-cyber-dark border-t border-gray-900">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-5xl font-mono font-bold text-white mb-6">
                        Initialize Connection?
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto mb-10 text-lg">
                        Tem um projeto interessante ou quer conversar sobre dados e tecnologia?
                        Minha inbox está sempre aberta.
                    </p>

                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                        <a href="https://github.com/LHDevData" target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-3 px-8 py-4 bg-gray-900 border border-gray-700 hover:border-cyber-green hover:text-cyber-green text-white rounded transition-all group w-full md:w-auto justify-center">
                            <Github className="group-hover:scale-110 transition-transform" />
                            <span>GitHub</span>
                        </a>

                        <a href="https://www.linkedin.com/in/lucas-henrique-carvalho-de-oliveira-b6ab25173/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-4 bg-gray-900 border border-gray-700 hover:border-cyber-green hover:text-cyber-green text-white rounded transition-all group w-full md:w-auto justify-center">
                            <Linkedin className="group-hover:scale-110 transition-transform" />
                            <span>LinkedIn</span>
                        </a>

                        <a href="https://lhtecnologia.net.br/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-4 bg-gray-900 border border-gray-700 hover:border-cyber-green hover:text-cyber-green text-white rounded transition-all group w-full md:w-auto justify-center">
                            <ExternalLink className="group-hover:scale-110 transition-transform" />
                            <span>Website</span>
                        </a>

                        <a href="mailto:contato@lhtecnologia.com.br" className="flex items-center gap-3 px-8 py-4 bg-cyber-green text-black font-bold hover:bg-green-400 rounded transition-all group w-full md:w-auto justify-center shadow-neon">
                            <Mail className="group-hover:scale-110 transition-transform" />
                            <span>Email Me</span>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
