import React from 'react';
import SectionButton from '../../components/UI/SectionButton';
import SeparatorBlack from '../../components/UI/SeparatorBlack';

const Contact = () => {
  return (
    <div className="contact container" id="contact">
      <SectionButton value="contact" />
      <p className="contact-text">
        If you are interested in my works please be kind to feel free to reach out on +1(571)352-7048
      </p>
      <SeparatorBlack />
      <div className="contact-form">
        <form action="" className="contact-form-tag">
          <div className="custom-input-group">
            <label htmlFor="name" className="custom-label"></label>
            <input name="name" id="name" type="text" className="custom-input" placeholder="Name" />
          </div>
          <div className="custom-input-group">
            <label htmlFor="email" className="custom-label"></label>
            <input name="email" id="email" type="text" className="custom-input" placeholder="Email" />
          </div>
          <div className="custom-input-group">
            <label htmlFor="number" className="custom-label"></label>
            <input name="number" id="number" type="text" className="custom-input" placeholder="Number" />
          </div>
          <div className="custom-input-group">
            <label htmlFor="message"></label>
            <textarea name="message" id="message" className="custom-input" placeholder="Message" rows={5}></textarea>
          </div>

          <button className="contact-submit-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
