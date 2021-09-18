// import { useForm } from "react-hook-form";
import { useState } from "react";
import { send } from 'emailjs-com';


import LayoutFour from "../../components/Layout/LayoutFour";
import InstagramTwo from "../../components/Sections/Instagram/InstagramTwo";
import { Breadcrumb, BreadcrumbItem } from "../../components/Other/Breadcrumb";
import ContactInfoItem from "../../components/Pages/Contact/ContactInfoItem";
import contactData from "../../data/pages/contact.json";

export default function () {
  const [toSend, setToSend] = useState({
    name: '',
    email: '',
    message: '',
  });

  const submit = (e) => {
    e.preventDefault();
    send(
      'service_4iidfzt',
      'template_iy2e5jl',
      toSend,
      'user_Esgczx7P8YohGFg3DKtNq'
    )
    .then(response => {
      console.log('Success!', response.status, response.text);
    })
    .catch(err => {
      console.log('Failed....', err);
    });
  }

  const handleChange = (e) => {
    setToSend({...toSend, [e.target.name]: e.target.value });
  };

  return (
    <LayoutFour title="Contact us">
      <Breadcrumb title="Contact us">
        <BreadcrumbItem name="Home" />
        <BreadcrumbItem name="Contact us" current />
      </Breadcrumb>
      <div className="contact">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <h3 className="contact-title">Contact info</h3>
              {contactData &&
                contactData.map((item, index) => (
                  <ContactInfoItem
                    key={index}
                    iconClass={item.iconClass}
                    title={item.title}
                    detail={item.detail}
                  />
                ))}
            </div>
            <div className="col-12 col-md-6">
              <h3 className="contact-title">Get in touch</h3>
              <div className="contact-form">
                <form onSubmit={submit}>
                  <div className="input-validator">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={toSend.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-validator">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={toSend.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-validator">
                    <textarea
                      name="message"
                      id=""
                      cols="30"
                      rows="3"
                      placeholder="Message"
                      value={toSend.message}
                      onChange={handleChange}
                    />
                  </div>
                  <button type='submit' className="btn -dark">SEND MESSAGE</button>
                  
                </form>
              </div>
            </div>
            <div className="col-12">
              <iframe
                className="contact-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231206.5448449273!2d55.17143692418256!3d25.115321685599437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6d0b76b18181%3A0x3258cdee3e0825a9!2sAl%20Zain%20Residence!5e0!3m2!1sen!2sae!4v1629209142458!5m2!1sen!2sae"
                width="100%"
                height="450"
                frameBorder="0"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
      <InstagramTwo />
    </LayoutFour>
  );
}
