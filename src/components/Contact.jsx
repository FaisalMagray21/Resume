import React from "react";
import { Globe } from "lucide-react";
import Section from "./Section";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";
import { Facebook } from "lucide-react";

function Contact() {
  return (
    <Section icon={<Globe />} sectiontitle="Contact $ social Media">
      <p>
        <a
          href="https://mail.google.com/mail/u/0/#inbox"
          target="_blank"
          rel="noopener noreferrer"
        >
          Email:fmagray287@gmail.com
        </a>
        <br />
        Phone:+923485785805
      </p>
      <div className="flex mb-2 text-blue-600 hover:text-blue-700 font-bold ">
        <a href="https://www.linkedin.com/feed/" target="_blank">
          <Linkedin />
        </a>
        <a
          href="https://www.linkedin.com/feed/ "
          target="_blank"
          className="ml-1 text-xlg"
        >
          Linkdin
        </a>
        <br />
      </div>
      <div className="flex mb-2 text-blue-600 hover:text-blue-700 font-bold ">
        <a href="https://github.com/" target="_blank">
          <Github className=" rounded-full" />
        </a>

        <a href="https://github.com/" target="_blank" className="ml-2">
          Github
        </a>
        <br />
      </div>
      <div className="flex mb-1 text-blue-600 hover:text-blue-700 font-bold ">
        <a href="https://www.facebook.com/ " target="_blank">
          <Facebook className=" rounded-full border-spacing-2 " />
        </a>

        <a
          href="https://www.facebook.com/ "
          target="_blank"
          className="mb-8 font-bold text-xl"
        >
          Facebook
        </a>
        <br />
      </div>
    </Section>
  );
}

export default Contact;
