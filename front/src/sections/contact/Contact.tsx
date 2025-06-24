import React, { useState } from 'react';
import SectionButton from '../../components/UI/SectionButton';
import SeparatorBlack from '../../components/UI/SeparatorBlack';
import InputData from '../../components/UI/InputData';
import { Bounce, Flip, ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

const initialState = {
  name: '',
  email: '',
  number: '',
  message: '',
};

const serviceId = 'service_0vh1k1q';
const templateId = 'template_y7bjm8t';
const publicKey = 'J91kbS12o1Gm3No_x';

const Contact = () => {
  const [messageData, setMessageData] = useState(initialState);

  const data = {
    service_id: serviceId,
    template_id: templateId,
    user_id: publicKey,
    template_params: {
      name: messageData.name,
      email: messageData.email,
      number: messageData.number,
      message: messageData.message,
    },
  };

  const notify = () =>
    toast.success('Message Sent', {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
      transition: Flip,
    });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value, name } = e.target;

    setMessageData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://api.emailjs.com/api/v1.0/email/send', data);
      console.log(res.data);
    } catch (e) {
      console.error(e);
    }

    notify();
    setMessageData(initialState);
  };
  return (
    <div className="contact container" id="contact">
      <SectionButton value="contact" />
      <p className="contact-text">
        If you're interested in my work, feel free to reach out at +1 (571) 352-7048. I'd be happy to connect!
      </p>
      <SeparatorBlack />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      <div className="contact-form">
        <form action="" className="contact-form-tag" onSubmit={onSubmit}>
          <InputData name="name" onChange={onChange} value={messageData} type={'text'} />
          <InputData name="email" onChange={onChange} value={messageData} type={'email'} />
          <InputData name="number" onChange={onChange} value={messageData} type={'number'} />
          <InputData name="message" onChange={onChange} value={messageData} type={'text'} />
          <button className="contact-submit-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
