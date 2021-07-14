import React from 'react';
import Pic from '../../assests/pic.jpg';
import './footer.css';

function Footer() {
    return (
        <footer className="footer text-center p-3 fixed-bottom">
            <img src={Pic} alt="profile picture" />
        </footer>
    );
}

export default Footer;