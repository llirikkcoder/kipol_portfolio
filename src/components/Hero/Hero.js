import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
  Link,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hey there,
        </SectionTitle>
        <SectionText>
          This is Kirill Pavlyashik! I am a skilled web developer with 4+ years
          of experience building responsive and user-friendly websites and
          applications. I am proficient in React and Redux and have a strong
          understanding of modern web development technologies and best
          practices. I am a quick learner and am always eager to stay up to date
          with the latest advancements in web development.
        </SectionText>
        <Button
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/files/resume.pdf";
          }}
        >
          My Resume
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
