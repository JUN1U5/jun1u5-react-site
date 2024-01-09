import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="about-section" data-section="about">
            <div className="row">
              <div className="col-md-12">
                  <p className="skills-p">Currently using this site as a sandbox to learn <a href="https://react.dev/">React</a></p>
                  <p className="about-p">I'm a versatile leader with extensive experience in design, user experience, and corporate communications. I bring a powerful blend of creativity and strategic thinking to my work.</p>
                  <p className="about-p">As a UX Strategist, I work at the intersection of Human-Centered Design and AI. For more than a decade, I've focused on shaping user experience in a rapidly evolving technological landscape. I have a passion for driving UI/UX improvements and working with senior leaders to address emerging challenges posed by cutting-edge AI tools.</p>
                  <p className="about-p">I also hold a Ph.D. in <a href="http://english.illinois.edu">English</a> from the <a href="http://www.illinois.edu/">University of Illinois</a>.</p>
                  <p className="about-p">Currently, I work at <a href="http://company.researchsquare.com/">Research Square</a>, a company dedicated to improving the cycle of research, publishing, and discovery.</p>
                  <p className="skills-p">User Experience and Interface Design • UX Strategy • UX Writing • Information Architecture • Content Strategy</p>
              </div>
            </div>
        </section>
      </div>
    )
  }
}
