import './calendly.scss';

const Calendly = () => {
  return (
    <div id="calendly-section">
      <div className="calendly-header">
        <h4>Prefer to talk it through?</h4>
        <p>You can book a free 20-minute intro call with me:</p>
      </div>
      <div className="calendly-container">
        <iframe
          title="Calendly"
          src="https://calendly.com/asaeri3/30min?hide_event_type_details=1"
          className="calendly-iframe"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Calendly;
