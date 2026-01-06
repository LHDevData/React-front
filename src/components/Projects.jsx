import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Activity } from 'lucide-react';

const projects = [
    {
        title: 'Snake Game Machine Learning',
        desc: 'Um jogo da cobrinha controlado por Inteligência Artificial e Deep Learning.',
        tags: ['Python', 'PyTorch', 'Pygame', 'AI'],
        link: 'https://github.com/LHDevData/Snake-Game-Machine-Learning',
    },
    {
        title: 'Churn Prediction',
        desc: 'Modelo de previsão de cancelamento de clientes (Churn) utilizando algoritmos de ML.',
        tags: ['Jupyter', 'Scikit-Learn', 'Pandas', 'Data Science'],
        link: 'https://github.com/LHDevData/Prevendo-Churn-de-Clientes',
    },
    {
        title: 'XGBoost Classification GPU',
        desc: 'Classificação binária de alta performance utilizando XGBoost acelerado por GPU.',
        tags: ['XGBoost', 'CUDA', 'Python', 'Big Data'],
        link: 'https://github.com/LHDevData/XGBoost-Classificacao-Binaria-GPU',
    },
    {
        title: 'Currency Converter',
        desc: 'Conversor de moedas em tempo real consumindo API de cotações.',
        tags: ['React', 'API', 'Frontend'],
        link: 'https://github.com/LHDevData/Conversor-moeda-tempo-real',
    },
    {
        title: 'Cyber Portfolio',
        desc: 'Este site! Um portfólio desenvolvido com React, Tailwind CSS e Framer Motion.',
        tags: ['React', 'Tailwind', 'Framer Motion'],
        link: '#', // Self-reference
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 px-6 bg-cyber-dark relative">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-4 mb-12">
                    <Activity className="text-cyber-green" />
                    <h2 className="text-3xl md:text-4xl font-mono font-bold text-white">
                        <span className="text-cyber-green">./</span>PROJETOS_DESTAQUE
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className="group border border-gray-800 bg-cyber-gray/50 hover:border-cyber-green/50 p-6 rounded-xl transition-all duration-300 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
                                <Github className="text-gray-500 group-hover:text-cyber-green" />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyber-green transition-colors">{project.title}</h3>
                            <p className="text-gray-400 mb-4 h-12">{project.desc}</p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs font-mono px-2 py-1 bg-black/50 text-cyber-green border border-cyber-green/20 rounded">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-cyber-green transition-colors"
                            >
                                VER REPOSITÓRIO <ExternalLink size={14} />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
