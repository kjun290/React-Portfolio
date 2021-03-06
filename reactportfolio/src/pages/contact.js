import React from 'react';
import { Link } from 'react-router-dom';
import Resume from '../assests/junresume.pdf'

let onLinkedInClick = () => {
    window.location.href = "https://www.linkedin.com/in/kevin-jun-2a210461/"
};

let onGitHubLinkClick = () => {
    window.location.href = "https://github.com/kjun290" 
};

let onEmailClick = () => {
    window.location.href = "mailto: kwjun90@gmail.com"
};

let onResumeClick = () => {
    window.open(Resume);
}

function Contact() {
    return (
        <div>
            <h1 className='text-center p-5 mt-2'>Contact Info</h1>
            <ul className='list-group'>
                <li className='text-center p-2'>Phone#: (847)636-2275</li>
                <li className='text-center p-2'><Link onClick={onEmailClick}>kwjun90@gmail.com</Link></li>
                <li className='text-center p-2'><Link onClick={onLinkedInClick}>LinkedIn</Link></li>
                <li className='text-center p-2'><Link onClick={onGitHubLinkClick}>GitHub</Link></li>
                <li className='text-center p-2'><Link onClick={onResumeClick}>Resume</Link></li>
            </ul>
        </div>
    );
}

export default Contact;