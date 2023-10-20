import StyledContent from '../../components/styledContent/StyledContent';
import './resume.scss';
import SmallImageHeader from './smallImageHeader/SmallImageHeader';

const Resume = () => {
  return (
    <div id="resume">
      <StyledContent title='resume'>
        <SmallImageHeader />
        <div className="home-inner-content">
          <div className={'left-info-banner'}>
            <h5>Contact</h5>
            {/*<a href='mailto:info@graphicsbyasa.com'>info@graphicsbyasa.com</a>*/}
            {/* <a href='https://www.graphicsbyasa.com'>www.graphicsbyasa.com</a> */}
            {/* <a href='https://github.com/Bjornhona'>https://github.com/Bjornhona</a> */}
            <p>+34 - 676 49 69 19</p>

            <h5>Areas of expertise</h5>
            <p>Web Development · Graphic Design · Web Design · Product Design · UX/UI</p>

            <h5>Programming skills</h5>
            <p>Javascript · Node.js · Express · React · React Native · Python · C · Flask · SQL · MongoDB · Jest · Node.js · ES6 · HTML5 · CSS</p>

            <h5>Software skills</h5>
            
            <h5>Language skills</h5>
            
            <button className="inverted">Download CV</button>
          </div>
          <div className="home-inner-container">
            <h5>Experience</h5>
            <div>
              <h6>Hexad Gmbh · Frontend Developer and UX/UI Designer · Jun 2019 -</h6>
              <p>Designing and developing customized software for larger clients. JavaScript, React, React Native, Jest, Agile, Jira and Adobe XD.</p>

              <h6>Grant Thornton · Frontend Developer and UX/UI Designer · Dec 2018 - Jun 2019</h6>
              <p>Designing and developing customized internal software adapted to company regulations and current laws. JavaScript, React, Node.js, TypeScript, Docker, Agile, DevOps and Adobe XD.</p>

              <h6>Graphics by Åsa · Graphics and Web Design · Aug 2017 - Jun 2019</h6>
              <p>Freelancer offering services in Graphic Design and Web Design. Photoshop, Illustrator, InDesign, Blender, WordPress, Premiere Pro and Sketch.</p>

              <h6>Swedish-Spanish Chamber of Commerce in Barcelona · Director · Apr 2014 - Jul 2017</h6>
              <p>Contracted to Digitalize and Maintain the Chamber. Expertise in Community Management, Online Marketing, International Relations and Public Relations. Organization of Networking activities.</p>

              <h6>ROLLS ROYCE AB, Kristinehamn, Sweden · R&D · Aug 1999 - Jun 2002</h6>
              <p>Design, construction, and maintenance of hydraulic systems in large- scale vessels and cruise ships. Manuals and AutoCAD drawings.</p>

              <h5>NON RELATED EXPERIENCE</h5>

              <p>Technical support at Brother Project by Sellbytel (2013-2014) Product Design and Innovation at Tambakunda (2012-2013) Co-founder of ViLetarUpp.se (2010-2012)
              Air hostess at Spanair (2003-2012)
              Research Associate at Chalmers University sponsored by Volvo and SAAB (1999)</p>

              <h5>EDUCATION</h5>

              <p>Full-stack Developer, MERN
                Ironhack Bootcamp, Barcelona, Sept – Nov 2018
                Web development MERN: JavaScript, MongoDB, Express, React, Node.js</p>

              <p>Master of Digital Communications in Engineering Projects
                Technical University of Cataluña, Cataluña, Spain
                Product Design and Project Management. 3D renderings and animations in CatiaV5, SolidWorks, Blender, Sketch-Up.</p>

              <p>Graphic Design
                distansskolan.se, Sweden, Aug 2012 – Aug 2013
                Graphic Design studies using Dreamweaver, Photoshop, Illustrator, InDesign and Flash.</p>

              <p>Master of Science in Industrial Engineering and Technical Design
                Luleå University of Technology, Luleå, Sweden
                Ergonomic Design, Product Design and Industrial Design of machinery considering ergonomic aspects.</p>
            </div>
          </div>
        </div>
      </StyledContent>
    </div>
  )
};

export default Resume;
