export type SkillType = {
  name: string;
  imgUrl: string;
};

export type ProjectType = {
  name: string;
  imgUrl: string;
  description: string;
  skills: string[];
};

export const skillSet: SkillType[] = [
  { name: "React", imgUrl: "https://www.svgrepo.com/show/452092/react.svg" },
  {
    name: "TypeScript",
    imgUrl: "https://www.svgrepo.com/show/374144/typescript.svg",
  },
  { name: "Redux", imgUrl: "https://www.svgrepo.com/show/452093/redux.svg" },
  {
    name: "Javascript",
    imgUrl: "https://www.svgrepo.com/show/452045/js.svg",
  },
  { name: "HTML", imgUrl: "https://www.svgrepo.com/show/452228/html-5.svg" },
  { name: "CSS", imgUrl: "https://www.svgrepo.com/show/452185/css-3.svg" },
  { name: "SASS", imgUrl: "https://www.svgrepo.com/show/374061/sass.svg" },
  {
    name: "Bootstrap",
    imgUrl: "https://www.svgrepo.com/show/353498/bootstrap.svg",
  },
  {
    name: "MaterialUI",
    imgUrl: "https://www.svgrepo.com/show/330899/materialui.svg",
  },
  {
    name: "Tailwind",
    imgUrl: "https://www.svgrepo.com/show/374118/tailwind.svg",
  },
  {
    name: "Git",
    imgUrl: "https://www.svgrepo.com/show/452210/git.svg",
  },
  {
    name: "Sublime",
    imgUrl: "https://www.svgrepo.com/show/452109/sublime-text.svg",
  },
  {
    name: "VS Code",
    imgUrl: "https://www.svgrepo.com/show/452129/vs-code.svg",
  },
  {
    name: "Optimizely",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/Optimizely_Logo.png/220px-Optimizely_Logo.png",
  },
];

export const projects: ProjectType[] = [
  {
    name: "Flexcar",
    imgUrl: "flexcar.png",
    description:
      "Flexcar was a side project turned into a company. My main role as one of the first 4 devs was to be the primary front-end dev who focused on creating components in React/TypeScript. My contributions would become the foundation that the other components would be built on top of as the company grew.",
    skills: ["React", "Redux", "TypeScript", "MaterialUI"],
  },
  {
    name: "Zipcar",
    imgUrl: "flexcar.png",
    description:
      "Zipcar is a car sharing web application with an accomponying phone application. This codebase was already a decade old and well maintained, so I here learned to create meaningful contributions within an already existing structure.",
    skills: ["React", "Redux", "TypeScript", "SASS"],
  },
  {
    name: "RightTrack",
    imgUrl: "flexcar.png",
    description:
      "RightTrack is a drive monitoring app run by Liberty Mutual. This was my first introduction in React/React Native, but I was able to pick it up quickly and make sizable contributions to the project. My in-depth knowledge of the app helped me aid other members of the team when running into debugging issues.",
    skills: ["React Native", "Redux", "SASS"],
  },
  {
    name: "Hyundai Canada",
    imgUrl: "flexcar.png",
    description:
      "Hyundai Canada tasked me with creating a Special Offers page to show off any particular deals they might have. This was my first big project outside of college, and I was excited to put my skills to use. I worked with another Junior dev, and we created a web page that is live to this day",
    skills: ["HTML", "CSS", "Javascript"],
  },
];
