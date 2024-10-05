import React from "react";
import Section from "./Section";
import { BriefcaseBusiness } from "lucide-react";
import Ecommerce from "./Ecommerce";
import SocialMedia from "./SocialMedia";
function Project() {
  return (
    <Section icon={<BriefcaseBusiness />} sectiontitle="Projects">
      <Ecommerce />
      <SocialMedia />
    </Section>
  );
}
export default Project;
