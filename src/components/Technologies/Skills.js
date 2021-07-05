import { DiPython, DiTerminal } from "react-icons/di";
import { SiJava, SiJavascript, SiGit, SiLinux } from "react-icons/si";

export const Skills = [
  {
    slug: "Python",
    Component: DiPython,
    title: "Python",
    Description: () => <>Experience with Python.</>,
  },
  {
    slug: "JavaScript",
    Component: SiJavascript,
    title: "JavaScript",
    Description: () => <>Experience with JavaScript</>,
  },
  {
    slug: "java",
    Component: SiJava,
    title: "Java",
    Description: () => <>Experience with development</>,
  },
  {
    slug: "terminal",
    Component: DiTerminal,
    title: "Scripting",
    Description: () => <>Experience with writing shell scripts</>,
  },
  {
    slug: "Linux",
    Component: SiLinux,
    title: "Linux",
    Description: () => <>Experience in firebase with auth and database</>,
  },
  {
    slug: "git",
    Component: SiGit,
    title: "Git",
    Description: () => <>Experience with git commands and features</>,
  },
];
