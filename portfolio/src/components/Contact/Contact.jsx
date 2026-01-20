import React from 'react'
import "./Contact.css";
import Header from "./../Header/Header.jsx"
import Footer from "./../Footer/Footer.jsx"
import contactVector from "./../../assets/contact_anime.png";
import gitHub from "./../../assets/gh.png";
import gmail from '../../assets/gmail.png';
import linkedIn from "./../../assets/li.png";

function Contact() {

  return (
    <div className='section-container'>
      <Header
        heading="Get in touch."
        subHeading="Interested to collaborate? Feel free to drop me an email.">
      </Header>
      <div className='social-icons-container'>
        <a
          href="https://github.com/saran-27"
          className='social-icon'
          target="_blank"
          rel="noreferrer"
        >
          <img src={gitHub} alt='github' loading="lazy" />
        </a>

        <a
          href="https://www.linkedin.com/in/saravanan-pm/"
          className='social-icon'
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedIn} alt='linkedin' loading="lazy" />
        </a>
        <a
          href="mailto:pmsaravanan2727@gmail.com"
          className='mail-icon'
          target="_blank"
          rel="noreferrer"
        >
          <img src={gmail} alt='gmail' loading="lazy" />
        </a>
      </div>

      <Footer
        phrase="Read more "
        link="about me."
        toAddress="/about">
      </Footer>

      <div className='vector-frame'>
        <img
          src={contactVector}
          alt="contact"
          loading="lazy"
          className='about-vector'
        />
      </div>

    </div>
  )
}

export default Contact;
