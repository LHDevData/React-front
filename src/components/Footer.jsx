import React from 'react';

const Footer = () => {
    return (
        <footer className="py-8 bg-black text-center border-t border-gray-900 text-gray-600 font-mono text-sm">
            <p>
                &copy; {new Date().getFullYear()} LHDevData. Built with <span className="text-cyber-green">React</span> & <span className="text-cyber-green">Tailwind</span>.
            </p>
        </footer>
    );
};

export default Footer;
