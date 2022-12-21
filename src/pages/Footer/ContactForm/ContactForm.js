import axios from "axios";
import { useState, useEffect } from "react";
import "/Users/vinhnguyen/Documents/DevMountain/f25/spec/Week 3/css-basic-clone/portfolio/src/pages/Footer/ContactForm/ContactForm.css";
import { TbSend } from 'react-icons/tb'
import { MdMailOutline } from 'react-icons/md'


export default function ContactForm() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    console.log(userName);
    console.log(userEmail);
    console.log(message);
  }, [userName, userEmail, message]);

  // const eventHandler = (name, email, message) => {
  //   if (!userName == "" && !userEmail == "" && !message == "") {
  //     const user = {
  //       name: name,
  //       email: email,
  //       message: message,
  //     };
  //     console.log(user)
  //     axios.post("http://localhost:5050/user", user)
  //     .then((res) => {
  //     console.log(res);
  //     alert('Thank You for reaching out! I will reply to you very soon!')
  //   });
  //   } else {
  //     alert("Please fill all fields correctly.");
  //   }
  // };

  return (
    <div id="contact" className="contact-form-div">
      <form action="https://formsubmit.co/gatorfl2014@gmail.com" method="POST">
        <h2 className="">CONTACT<span id="contact_icon"><MdMailOutline/></span></h2>
        <h3 className="">
          Have a question?<span>LET'S CONNECT!</span>
        </h3>
       
        <div style={{position:'relative'}}>
        <span className="inputs_label" id="username_label">Name</span>
        <input
          type="text"
          id="username"
          name="name"
          placeholder="Name"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        >  
        </input>
        </div>
      

        <div style={{position:'relative'}}>
        <span className="inputs_label">Mail</span>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter email"
          onChange={(e) => {
            setUserEmail(e.target.value);
          }}
        />
        </div>
       

        <div style={{position:'relative'}}>
        <span className="inputs_label">Message</span>
        <textarea
        id="message"
          type="text"
          name="message"
          placeholder="Your Message"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        ></textarea>
        </div>
    
        <button
          className="submit-button"
          type="submit"
          // onClick={(e) => {
          //   e.preventDefault();
          //   eventHandler(userName, userEmail, message);
          // }}>
          >
            submit<span id="send_icon"><TbSend/></span>
        </button>
      </form>
    </div>
  );
}
