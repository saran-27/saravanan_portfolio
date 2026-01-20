import React from 'react'
import "./About.css";
import Header from "./../Header/Header.jsx"
import Footer from "./../Footer/Footer.jsx"
import aboutVector from "./../../assets/about_vector.png";
import aboutAnime from "./../../assets/about_anime.gif";
function About() {
  return (
    <div className='section-container'>
      <Header
        heading="About Me"
        subHeading="Full Stack Web Developer">
      </Header>
      <div className='about-main'>
        <div className='about-main-left'>
            <h3 className='about-sub-heading'>Developer,</h3>
            <p className='about-sub-heading-details'>
Fresher <u>Full Stack Web Developer </u>with hands-on experience in building responsive web applications using React.js for frontend and Python with Django / Django REST Framework for
backend development . Skilled in REST APIs, CRUD operations, MySQL database integration, and
tools like Git , GitHub, and Postman. Familiar with basic deployment using Netlify, Vercel, and
Render .
            </p>
        </div>
        <div className='about-main-right'>
            <img
                src={aboutAnime}
                alt="about-anime"
                className="about-anime"
                loading="lazy"
            />
        </div>
      </div>
      <Footer
        phrase="Check out my "
        link="projects!"
        toAddress="/projects">
      </Footer>
      {/* <div className='vector-frame'>
        <img src={aboutVector}
          alt="about"
          className='about-vector'
          loading="lazy"
        />
      </div> */}
    </div>
  )
}

export default About