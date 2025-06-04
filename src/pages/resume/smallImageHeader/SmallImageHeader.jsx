import './smallImageHeader.scss';
import MeImage from '../../../styles/images/Image-me1.jpg';

const SmallImageHeader = ({ downloadCv }) => {

  const bodyBoxes = () => {
    return (
      <div className="body-boxes">
        <div className={'left-info-banner'}>
          <img src={MeImage} alt='me' />
          <h5>Åsa Eriksson</h5>
          <h6>Frontend & UI Developer</h6>
          <button className="inverted" onClick={downloadCv}>Download CV</button>
        </div>
        <div className="inner-text">
          <h5>Frontend & UI Developer</h5>
          <p>Frontend Developer with a strong foundation in React, blending technical expertise with a background in Industrial Engineering, Graphic Design, Product Design, and Web Design. My journey began as a freelance web designer, and over the years, I’ve continuously expanded my skills in web development and programming. Highly self-organized, proactive, and driven by continuous learning, I bring a unique mix of creative and strategic thinking—complemented by fluency in Swedish, Spanish, and English, and proven experience in senior-level leadership and project management.</p>
        </div>
      </div>
    )
  }

  return (
    <div id="image-header-reference">
      <div className="hidden-to-get-height">
        {bodyBoxes()}
      </div>
      <div className="body-image-over">
        {bodyBoxes()}
      </div>
      <div className="background-image"></div>
    </div>
  )
}

export default SmallImageHeader;




// import './smallImageHeader.scss';
// import MeImage from '../../../styles/images/Image-me1.jpg';

// const SmallImageHeader = () => {

//   const bodyBoxes = () => {
//     return (
//       <div className="body-boxes">
//         <div className={'left-info-banner'}>
//           <img src={MeImage} alt='me' />
//           <h5>Åsa Eriksson</h5>
//           <h6>Frontend Developer & UX/UI Designer</h6>
//           <button className="inverted">Download CV</button>
//         </div>
//         <div className="inner-text">
//           <h5>Frontend developer & UX/UI designer</h5>
//           <p>I am a Frontend Developer, specialized in React, with a solid background in Industrial Engineering, Graphic Design, Product Design and Web Design. After working as a web design freelancer I continue to develop my web and programming skills at Hexad SL since many years. I consider myself a self-organized person, eager to learn with senior management skills, fluent in Swedish, Spanish and English.</p>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div id="image-header-reference">
//       <div className="hidden-to-get-height">
//         {bodyBoxes()}
//       </div>
//       <div className="body-image-over">
//         {bodyBoxes()}
//       </div>
//     </div>
//   )
// }

// export default SmallImageHeader;
