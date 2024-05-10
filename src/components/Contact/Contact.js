import React, { useState } from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission here, such as sending the data to a backend server or via email
        console.log(formData);
        // Reset form after submission
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div className="contact"  id='contact'>
            <header>
                <h1 style={{color:"white"}}>Contact Me</h1>
            </header>
            <main>
                <section>
                    <h2>Get in Touch</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required />
                        </div>
                        <button type="submit">Send Message</button>
                        <br/>
                        <br/>
                    </form>
                      <center>
                      <p ><FaUser /><b> Name : V.Dinesh</b></p>
                       <p className='con'><FaPhoneAlt /><b> Phone : 8825651406</b></p>
                       <p ><MdEmail /><b> Email : dineshvijay1410@gmail.com</b></p>
                      
                      </center>
                </section>
            </main>
            <footer>
                <p>&copy; 2024 [V.Dinesh]</p>
            </footer>
        </div>
    );
}

export  default Contact;