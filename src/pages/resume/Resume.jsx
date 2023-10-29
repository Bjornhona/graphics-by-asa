import StyledContent from '../../components/styledContent/StyledContent';
import './resume.scss';
import SmallImageHeader from './smallImageHeader/SmallImageHeader';
import mailIcon from '../../styles/icons/resumeIcons/Email.png';
import homeIcon from '../../styles/icons/resumeIcons/Home.png';
import gitIcon from '../../styles/icons/resumeIcons/Github.png';
import phoneIcon from '../../styles/icons/resumeIcons/PhoneNumber.png';
import basicLanguage from '../../styles/images/skills/LanguageBasic.png';
import upperIntermediateLanguage from '../../styles/images/skills/LanguageUpperIntermediate.png';
import fluentLanguage from '../../styles/images/skills/LanguageFluent.png';
import nativeLanguage from '../../styles/images/skills/LanguageNative1.png';
import nineteen from '../../styles/images/skills/19.png';
import seventeen from '../../styles/images/skills/17.png';
import fifteen from '../../styles/images/skills/15.png';
import fourteen from '../../styles/images/skills/14.png';

const Resume = () => {
  
  return (
    <div id="resume">
      <StyledContent title='resume'>
        <SmallImageHeader />
        <div className="home-inner-content">
          <div className={'left-info-banner'}>
            <h5>Contact</h5>
            <div className='contact-content'>
              <div className='icon-row'><img src={mailIcon} alt='mail' /><a href='mailto:info@graphicsbyasa.com'>info@graphicsbyasa.com</a></div>
              <div className='icon-row'><img src={homeIcon} alt='home' /><a href='https://www.graphicsbyasa.com'>www.graphicsbyasa.com</a></div>
              <div className='icon-row'><img src={gitIcon} alt='git' /><a href='https://github.com/Bjornhona'>https://github.com/Bjornhona</a></div>
              <div className='icon-row'><img src={phoneIcon} alt='phone' /><p>+34 - 676 49 69 19</p></div>
            </div>

            <h5>Areas of expertise</h5>
            <div className='areas-of-expertise'>
              <p>Web Development · Graphic Design · Web Design · Product Design · UX/UI</p>
            </div>

            <h5>Programming skills</h5>
            <div className='programming-skills'>
              <p>Javascript · Node.js · Express · React · React Native · Python · C · Flask · SQL · MongoDB · Jest · Node.js · ES6 · HTML5 · CSS</p>
            </div>

            <h5>Software skills</h5>
            <div className='software-skills'>
              <p>Figma</p>
              <img src={seventeen} alt='Figma'/>
              <p>Sketch</p>
              <img src={nineteen} alt='Sketch'/>
              <p>Adobe XD</p>
              <img src={nineteen} alt='Adobe XD'/>
              <p>Photoshop</p>
              <img src={fourteen} alt='Photoshop'/>
              <p>Indesign</p>
              <img src={fifteen} alt='Indesign'/>
              <p>Illustrator</p>
              <img src={nineteen} alt='Illustrator'/>
              <p>Wordpress</p>
              <img src={seventeen} alt='Wordpress'/>
            </div>
            
            <h5>Language skills</h5>
            <div className='language-skills'>
              <div className='language'><img src={nativeLanguage} alt='basic language'/><p>Swedish</p></div>
              <div className='language'><img src={fluentLanguage} alt='basic language'/><p>English</p><p>Spanish</p></div>
              <div className='language'><img src={upperIntermediateLanguage} alt='basic language'/><p>German</p></div>
              <div className='language'><img src={basicLanguage} alt='basic language'/><p>French</p></div>
            </div>
            
            <button className="inverted">Download CV</button>
          </div>
          <div className="home-inner-container">
            <h5>Work Experience</h5>
            <div>
              <p><strong>Hexad Gmbh · Frontend Developer and UX/UI Designer · Jun 2019 -</strong></p>
              <p>Designing and developing customized software for larger clients. JavaScript, React, React Native, Jest, Agile, Jira and Adobe XD.</p>

              <p><strong>Grant Thornton · Frontend Developer and UX/UI Designer · Dec 2018 - Jun 2019</strong></p>
              <p>Designing and developing customized internal software adapted to company regulations and current laws. JavaScript, React, Node.js, TypeScript, Docker, Agile, DevOps and Adobe XD.</p>

              <p><strong>Graphics by Åsa · Graphics and Web Design · Aug 2017 - Jun 2019</strong></p>
              <p>Freelancer offering services in Graphic Design and Web Design. Photoshop, Illustrator, InDesign, Blender, WordPress, Premiere Pro and Sketch.</p>

              <p><strong>Swedish-Spanish Chamber of Commerce in Barcelona · Director · Apr 2014 - Jul 2017</strong></p>
              <p>Contracted to Digitalize and Maintain the Chamber. Expertise in Community Management, Online Marketing, International Relations and Public Relations. Organization of Networking activities.</p>

              <p><strong>ROLLS ROYCE AB, Kristinehamn, Sweden · R&D · Aug 1999 - Jun 2002</strong></p>
              <p>Design, construction, and maintenance of hydraulic systems in large- scale vessels and cruise ships. Manuals and AutoCAD drawings.</p>

              <h5>NON RELATED EXPERIENCE</h5>

              <p>
                Technical support at Brother Project by Sellbytel (2013-2014)<br/>
                Product Design and Innovation at Tambakunda (2012-2013)<br/>
                Co-founder of ViLetarUpp.se (2010-2012)<br/>
                Air hostess at Spanair (2003-2012)<br/>
                Research Associate at Chalmers University sponsored by Volvo and SAAB (1999)</p>

              <h5>EDUCATION</h5>

              <p><strong>Full-stack Developer, MERN</strong><br/>
                Ironhack Bootcamp, Barcelona, Sept – Nov 2018<br/>
                Web development MERN: JavaScript, MongoDB, Express, React, Node.js</p>

              <p><strong>Master of Digital Communications in Engineering Projects</strong><br/>
                Technical University of Cataluña, Cataluña, Spain<br/>
                Product Design and Project Management. 3D renderings and animations in CatiaV5, SolidWorks, Blender, Sketch-Up.</p>

              <p><strong>Graphic Design</strong><br/>
                distansskolan.se, Sweden, Aug 2012 – Aug 2013<br/>
                Graphic Design studies using Dreamweaver, Photoshop, Illustrator, InDesign and Flash.</p>

              <p><strong>Master of Science in Industrial Engineering and Technical Design</strong><br/>
                Luleå University of Technology, Luleå, Sweden<br/>
                Ergonomic Design, Product Design and Industrial Design of machinery considering ergonomic aspects.</p>
            </div>
          </div>
        </div>
      </StyledContent>
    </div>
  )
};

export default Resume;
