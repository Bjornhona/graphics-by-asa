import nineteen from "../../styles/images/skills/19.png";
import seventeen from "../../styles/images/skills/17.png";

import upperIntermediateLanguage from "../../styles/images/skills/LanguageUpperIntermediate.png";
import fluentLanguage from "../../styles/images/skills/LanguageFluent.png";
import nativeLanguage from "../../styles/images/skills/LanguageNative1.png";

import mailIcon from "../../styles/icons/resumeIcons/Email.png";
import homeIcon from "../../styles/icons/resumeIcons/Home.png";
import gitIcon from "../../styles/icons/resumeIcons/Github.png";
import phoneIcon from "../../styles/icons/resumeIcons/PhoneNumber.png";

export const expertiseData = [
  // 'Frontend Development',
  "React & Next.js Development",
  "UI/UX Design",
  // 'Design-to-Code Implementation',
  "Responsive Web Design",
  // "Tailwind & Shadcn components",
  "Frontend Performance Optimization",
  "Tailwind CSS & TypeScript",
  "Design Systems & Component Libraries",
  "Landing Pages & Sales Funnels",
  // "Brand Identity & Visual Design",
  "API Integration & Frontend Architecture",
];

export const programmingSkillsData = [
  "Next.js",
  "React",
  "TypeScript",
  // "JavaScript (ES6+)",
  "Tailwind CSS",
  // "Shadcn/UI",
  "CSS Modules",
  "HTML5",
  // "REST APIs",
  // "Axios",
  // "Redux Toolkit",
  "CSS3",
  "SASS",
  // "Ant Design",
  // "Material UI",
  "Framer Motion",
  "Sanity CMS",
  // "React Native",
  // "Node.js",
  // "Express",
  // "MongoDB",
  // "MySQL",
  // "PostgreSQL",
  // "Docker",
];

export const softwareSkillsData = [
  {
    tool: "Figma",
    image: seventeen,
  },
  // {
  //   tool: 'Sketch',
  //   image: nineteen
  // },
  // {
  //   tool: 'Adobe XD',
  //   image: nineteen
  // },
  // {
  //   tool: 'Photoshop',
  //   image: fourteen
  // },
  // {
  //   tool: 'InDesign',
  //   image: fifteen
  // },
  {
    tool: "Illustrator",
    image: nineteen,
  },
  {
    tool: "Wordpress",
    image: seventeen,
  },
];

export const languageSkillsData = [
  {
    languages: ["Swedish"],
    image: nativeLanguage,
    level: "Native level",
  },
  {
    languages: ["English", "Spanish"],
    image: fluentLanguage,
    level: "Fluent level",
  },
  {
    languages: ["German"],
    image: upperIntermediateLanguage,
    level: "Upper Intermediate level",
  },
  // {
  //   languages: ['French'],
  //   image: basicLanguage,
  //   level: 'Basic level'
  // },
];

export const contactData = [
  {
    type: "mail",
    icon: mailIcon,
    component: (
      <a href="mailto:info@graphicsbyasa.com">info@graphicsbyasa.com</a>
    ),
  },
  {
    type: "home",
    icon: homeIcon,
    component: (
      <a href="https://www.graphicsbyasa.com">www.graphicsbyasa.com</a>
    ),
  },
  {
    type: "git",
    icon: gitIcon,
    component: (
      <a href="https://github.com/Bjornhona">https://github.com/Bjornhona</a>
    ),
  },
  {
    type: "phone",
    icon: phoneIcon,
    component: (
      <p>
        <span className="protectedNumber" title="+34 - 676 49 69 19"></span>
      </p>
    ),
  },
];
