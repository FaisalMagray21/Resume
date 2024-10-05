import React from "react";
import { Award } from "lucide-react";
import Section from "./Section";

function Extracuricular() {
  return (
    <Section icon={<Award />} sectiontitle="Extracurricular Activities">
      <ol className="list-disc mx-4 text-lg">
        <li>Volunteer at local coding bootcamp for underprivileged youth</li>
        <li>Memeber of the university cricket team </li>
        <li>Student Council</li>
      </ol>
    </Section>
  );
}

export default Extracuricular;
