import React from 'react';
import './Footer.css';

/* Multi idioma */
import {FormattedMessage} from 'react-intl';


const Footer = () =>{
    // Fecha
    let fecha = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="site-footer">
                <div className="copyright">
                    <p>
                        Page created by Sahil
                    </p>
                    <p>&copy; {fecha}. All Rights Reserved.</p>
                </div>
                <div className="redes-sociales">
                    <a href="https://www.linkedin.com/in/sahil-ansari-8b41041b8/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/itSahil1" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                    <a href="https://www.instagram.com/6023.sahil/?next=%2F" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                    <a href="https://api.whatsapp.com/send?phone=917678652133" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
                </div>
            </div>
        </footer>
    )
};

export default React.memo(Footer);