import React from 'react';
import '../styles/Footer.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedinIcon from '@mui/icons-material/LinkedIn';

function Footer() {
    return (
        <div className="footer">
            <div className="socialMediaIcons">
                <TwitterIcon />
                <FacebookIcon />
                <InstagramIcon />
                <LinkedinIcon />
            </div>
            <p>&copy; 2021 mnCreations.</p>
        </div>
    )
}

export default Footer;
