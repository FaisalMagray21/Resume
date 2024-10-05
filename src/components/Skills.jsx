import React from "react";
import { Code } from "lucide-react";
import Section from "./Section";
import Pillskill from "./Pillskill";

function Skills() {
  const skill = ["JavaScript", "React", "NodeJS", "SQL", "GIT"];
  return (
    <Section icon={<Code />} sectiontitle="Skills">
      <div className=" flex flex-wrap gap-4">
        {skill.map((title, key) => (
          <Pillskill key={title} title={title} />
        ))}
      </div>
    </Section>
  );
}

export default Skills;
