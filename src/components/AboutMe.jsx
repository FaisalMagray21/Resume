import Section from "./Section";
import { User } from "lucide-react";

function AboutMe() {
  return (
    <div className="mt-6">
      <Section icon={<User />} sectiontitle="About ME">
        <p>
          I'm a passionate full stack developer with 6 months of experience in
          building web application. I love creating efficent, scalabe and
          user-friendly solution to complex problem.
        </p>
      </Section>
    </div>
  );
}

export default AboutMe;
