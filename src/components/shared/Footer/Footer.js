import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            © Copyright {new Date().getFullYear()}. Developed by
            <a
                style={{ textDecoration: 'none' }}
                href="https://mdmostafa.com"
                target="_blank"
            > Mostafa
            </a>. All rights reserved.
        </div>
    );
};

export default Footer;