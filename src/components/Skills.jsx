import React from "react";
import { Code } from "lucide-react";
import Section from "./Section";
import Pillskill from "./Pillskill";

function Skills() {
  const skill = ["JavaScript", "React", "NodeJS", "SQL", "GIT"];
  return (
    <Section icon={<Code />} sectiontitle="Skills">
      {skill.map((title) => (
        <Pillskill title={title} />
      ))}
    </Section>
  );
}

export default Skills;
