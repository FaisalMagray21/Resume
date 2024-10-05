import React from "react";
import { Heart } from "lucide-react";
import Section from "./Section";

function Hobbies() {
  return (
    <Section icon={<Heart />} sectiontitle="Hobbies & Interests">
      <ol className="list-disc m-4 text-lg">
        <li>Cricket</li>
        <li>Vollyball</li>
        <li>Reading Book</li>
      </ol>
    </Section>
  );
}

export default Hobbies;
