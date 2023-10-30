import { Fragment } from 'react';
import StyledContent from '../../components/styledContent/StyledContent';
import './resume.scss';
import SmallImageHeader from './smallImageHeader/SmallImageHeader';
import myCV from './CV-AsaEriksson2023.pdf';
import { saveAs } from 'file-saver';
import WorkExperience from './workExperience/WorkExperience';
import { softwareSkillsData, languageSkillsData, contactData } from './data';

const Resume = () => {

  const downloadCv = () => {
    saveAs(myCV, 'CV-AsaEriksson2023.pdf');
  }
  
  return (
    <div id="resume">
      <StyledContent title='resume'>
        <SmallImageHeader downloadCv={downloadCv} />
        
        <div className="home-inner-content">
          <div className={'left-info-banner'}>
            <h5>Contact</h5>
            <div className='contact-content'>
              {contactData.map((contact, index) => {
                return (
                  <div key={index} className='icon-row'>
                    <img src={contact.icon} alt={contact.type} />
                    {contact.component}
                  </div>
                )
              })}
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
              {softwareSkillsData.map((skill, index) => {
                return (
                  <Fragment key={index}>
                    <p>{skill.tool}</p>
                    <img src={skill.image} alt={skill.tool} />
                  </Fragment>
                )
              })}
            </div>
            
            <h5>Language skills</h5>
            <div className='language-skills'>
              {languageSkillsData.map((skill, index) => {
                return (
                  <div key={index} className='language'>
                    <img src={skill.image} alt={skill.level} />
                    {skill.languages.map((language, index) => <p key={index}>{language}</p>)}
                  </div>
                )
              })}
            </div>
            
            <button className="inverted" onClick={downloadCv}>Download CV</button>
          </div>

          <WorkExperience />
        </div>
      </StyledContent>
    </div>
  )
};

export default Resume;
