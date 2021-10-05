import React from 'react';
import '../styles/Contact.css';

function Contact() {
    return (
        <div className="contact">
            <div className="left">

            </div>
            <div className="right">
                <h1>Contact Us</h1>
                <form>
                <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" placeholder="Enter Your Full Name..." />
                    </div>
                    <div className="form-group">
                    <label>Email</label>
                    <input type="email" placeholder="Enter Your Email Address..." />
                    </div>
                    <div className="form-group">
                    <label>Message</label>
                    <textarea placeholder="Place Your Message Here...."></textarea>
                    </div>
                    <div className="form-group">
                    <button type="submit">Send</button>
                    </div>
                    
                    
                </form>
            </div>
        </div>
    )
}

export default Contact
