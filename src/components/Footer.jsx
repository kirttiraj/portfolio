import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={"https://i.ibb.co/kx5YXvL/329569562-731680415144416-9078927567789438374-n.jpg"}
          alt="Founder"
        />

        <h2>Kirttiraj Sahoo</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.youtube.com/@kirttiraj9836" target={"blank"}>
            <AiFillYoutube />
          </a>
          <a href="https://www.instagram.com/__kirttiraj__sahoo/?igshid=ZDc4ODBmNjlmNQ==" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/kirttiraj" target={"blank"}>
            <AiFillGithub />
          </a>
          <a href="https://www.linkedin.com/in/kirttiraj-sahoo-a32099219" target={"blank"}>
            <AiFillLinkedin />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
