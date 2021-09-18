import { useState } from "react";
import { send } from 'emailjs-com';

import SectionTitleOne from "../SectionTitle/SectionTitleOne";

export default function CTAOne() {
  const [toSend, setToSend] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
  });

  const submit = (e) => {
    e.preventDefault();
    send(
      'service_4iidfzt',
      'template_vvh4s1e',
      toSend,
      'user_Esgczx7P8YohGFg3DKtNq'
    )
    .then(response => {
      console.log('Success!', response.status, response.text);
      alert('Appointment booked!');
    })
    .catch(err => {
      console.log('Failed....', err);
    });
  }

  const handleChange = (e) => {
    setToSend({...toSend, [e.target.name]: e.target.value });
  };
  return (
    <div
      className="cta -style-1"
      style={{ backgroundImage: 'url("/assets/images/cta/CTAOne/1.png")' }}
      id="cta-section"
    >
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 mx-auto">
            <div className="cta__form">
              <SectionTitleOne align="center" spaceBottom="1.875em">
                Book Service
              </SectionTitleOne>
              <form
                onSubmit={submit}
                className="cta__form__detail"
              >
                <div className="input-validator">
                  <input
                    type="text"
                    placeholder="Your name"
                    name="name"
                    value={toSend.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-validator">
                  <input
                    type="text"
                    placeholder="Your phone"
                    name="phone"
                    value={toSend.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-validator">
                  <select
                    name="service"
                    className="customed-select"
                    defaultValue=""
                    onChange={handleChange}
                  >
                    <option value="" hidden>
                      Choose a service
                    </option>
                    {
                      [
                        "Haircuts & Styling",
                        "Beard Shave & Trim",
                        "Manicure & Pedicure",
                        "Face Spa & Foot Spa",
                        "Head Oil Massage",
                        "Hair Treatment & Coloring",
                        "Wax & Keratin"
                      ].map((item, index) => (
                      <option key={index} value={toSend.item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="input-validator">
                <input
                    type="date"
                    placeholder=""
                    name="date"
                    value={toSend.date}
                    onChange={handleChange}
                  />
                </div>
                <button type='submit' className="btn -light-red">Appointment</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
