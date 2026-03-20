import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import avatar from '../assets/images/avatar.jpeg';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={avatar} alt="Ricardo Alexandre" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/rquattro" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/ricardonevesalexandre/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Ricardo Alexandre</h1>
          <p>Power Platform SME</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/rquattro" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/ricardonevesalexandre/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;