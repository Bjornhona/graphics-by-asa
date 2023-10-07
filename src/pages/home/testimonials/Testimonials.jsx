import './testimonials.scss';

const Testimonials = ({ animate, localRef }) => {

  return (
    <div className={`home-inner-container__centered ${!!animate && 'animation'}`} ref={localRef}>
      <h3>Client testimonials</h3>
      <div id="testimonials">
        <div className="testimonial">
          <div className="testimonial__inner">
            <p>I have worked with several different firms over time and I think Åsa is the Graphic Designer which I have the most confidence in. She has been responsive to my wishes and has always delivered a very good end product. Working with Åsa has really given me value for my money!</p>
            <h6>Tomas Levin CEO and founder of TLW Real Estate</h6>
          </div>
        </div>
        <div className="testimonial">
          <div className="testimonial__inner">
            <p>Åsa is an excellent professional, with very high skills in product design, project coordination and as a problem solver. She is extremely responsible with her work. Åsa has an excellent attitude and always assumes a motivating role in meetings. I can highly recommend her!</p>
            <h6>Enrique Frisancho Founder of Tambakunda [Innodesign Tank]</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials;