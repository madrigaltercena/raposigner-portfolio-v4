import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import { faRobot, faCogs } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Power Automate",
    "Power Apps",
    "Copilot Studio",
    "Power Platform",
    "Dataverse",
    "SharePoint",
    "Azure",
    "Microsoft 365"
];

const labelsSecond = [
    "OpenClaw",
    "GitHub",
    "Git",
    "TypeScript",
    "JavaScript",
    "Python",
    "REST APIs",
    "JSON"
];

const labelsThird = [
    "Technical Troubleshooting",
    "Bug Investigation",
    "Code Review",
    "Customer Support",
    "Knowledge Base",
    "Team Collaboration",
    "Problem Solving"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faMicrosoft} size="3x"/>
                    <h3>Power Platform</h3>
                    <p>Specialized in Microsoft Power Platform solutions, helping organizations automate workflows, build custom apps, and create intelligent chatbots with Copilot Studio.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faRobot} size="3x"/>
                    <h3>OpenClaw & Automation</h3>
                    <p>Building and deploying AI-powered automation solutions with OpenClaw, integrating intelligent agents into business workflows for enhanced productivity.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faCogs} size="3x"/>
                    <h3>Technical Support & Engineering</h3>
                    <p>Expert in debugging complex Power Platform issues, investigating bugs, and helping development teams deploy fixes for Microsoft customers worldwide.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Skills:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;