import React from "react";
import { BookOpen } from "lucide-react";
import Section from "./Section";

function Education() {
  return (
    <Section icon={<BookOpen />} sectiontitle="Education">
      <h1 className="font-bold text-lg ">
        Bachelor of Science in Software Engineering
      </h1>
      <p>Barani Institute of information and technology, 2022-Present</p>
      <h1 className="font-bold text-lg pt-2">Full Stack Web Development </h1>
      <p>KG Coding, 2024</p>
    </Section>
  );
}

export default Education;
