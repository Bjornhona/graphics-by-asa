import { useState } from 'react';
import './section6.scss';
import AccordionChevron from '../images/AccordionChevron';

const FAQ = ({ text }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="section6">
      <h3>{text.title}</h3>
      <p className="subtitle">{text.subtitle}</p>
      <div className="faq-container">
        {text.questions.map((item, index) => (
          <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
            <button
              className="faq-question"
              onClick={() => toggleAccordion(index)}
              aria-expanded={openIndex === index}
            >
              <span className="question-text">{item.question}</span>
              <span className="accordion-icon">
                <AccordionChevron />
              </span>
            </button>
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQ;
