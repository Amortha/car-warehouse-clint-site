import React from 'react';
import './contactUs.css';

const ContactUs = () => {
    return (
        <div>
            <h2 className='contact-title'>Contuct With Us</h2>
            <div className='contact-way'>
                <p><span>Address: </span>123# Mirpur,
                Dhaka, Bangladesh</p>
                <p><span>Phone: </span> (+880) 01829704087</p>
                <p><span>Fax: </span>(+880) 01829704087</p>
                <p><span>Mail: </span>amitsharma1998k@gmail.com</p>
                <p><span>Openning: </span>8:00 - 19:00, Mon - Sat</p>
            </div>
        </div>
    );
};

export default ContactUs;