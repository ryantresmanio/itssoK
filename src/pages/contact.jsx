import React from "react";
import "./contact.css";
import {GithubLogo} from "phosphor-react";
import {FacebookLogo} from "phosphor-react";

import {InstagramLogo} from "phosphor-react";
export const Contact = () => {
  return (
    <div className="contact">
      <form action="ewan.com" method="post" id="gmail_form">
        <fieldset>
          <label htmlFor="name" id="name-label">
            Enter your Name:
            <input
              id="name"
              type="text"
              placeholder="ex. Justin Bieber"
              required
            />
          </label>
        </fieldset>

        <fieldset>
          <label htmlFor="email" id="email-label">
            Enter your Email:
            <input
              id="email"
              type="text"
              placeholder="ex. justinbieber@gmail.com"
              required
            />
          </label>
        </fieldset>

        <fieldset>
          <label htmlFor="message">
            <textarea
              style={{ opacity: "60%" }}
              id="introduction"
              name="introduction"
              rows="8"
              cols="81"
              placeholder="Type something here..."
            ></textarea>
          </label>
        </fieldset>

        <label htmlFor="button">
          <button id="send_btn">Send</button>
        </label>
      </form>

      <div className="socials">
        <div className="git"><GithubLogo size={32} /></div>
        <div className="fb"><FacebookLogo size={32} /></div>
        <div className="ig"><InstagramLogo size={32} /></div>
      
      </div>
    </div>
  );
};

