import React from "react";
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Professional Work</h1>
        <div className="projects-grid">
            <div className="project">
                <h2>Microsoft Power Platform Support</h2>
                <p>Helping Microsoft customers achieve their goals when facing technical blockers with Power Platform products. Investigating bugs, reproducing issues, and working with product development teams to find and deploy fixes.</p>
                <div className="flex-chips">
                    <span className="chip-title">Technologies:</span>
                    <span className="chip">Power Automate</span>
                    <span className="chip">Power Apps</span>
                    <span className="chip">Copilot Studio</span>
                </div>
            </div>
            <div className="project">
                <h2>Bug Investigation & Resolution</h2>
                <p>Deep dive into complex customer issues, analyze root causes, and collaborate with engineering teams to deliver hotfixes and product improvements for the Power Platform ecosystem.</p>
                <div className="flex-chips">
                    <span className="chip-title">Skills:</span>
                    <span className="chip">Debugging</span>
                    <span className="chip">Code Review</span>
                    <span className="chip">Technical Documentation</span>
                </div>
            </div>
            <div className="project">
                <h2>OpenClaw Development</h2>
                <p>Contributing to OpenClaw, an AI-powered automation platform that enables intelligent agent orchestration for business workflows.</p>
                <div className="flex-chips">
                    <span className="chip-title">Technologies:</span>
                    <span className="chip">TypeScript</span>
                    <span className="chip">Node.js</span>
                    <span className="chip">AI Agents</span>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Project;