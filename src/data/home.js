import ActTeamPhoto from "../assets/act1.webp";
import ActWorkshopPhoto from "../assets/act2.webp";
import ActStagePhoto from "../assets/act3.webp";
import StatYearsImage from "../assets/card1.webp";
import StatTaImage from "../assets/card3.webp";
import StatStackImage from "../assets/image2.webp";
import InternshipTeamPhoto from "../assets/int1.webp";
import InternshipOfficePhoto from "../assets/int2.webp";
import ItscPhoto from "../assets/ITSC.webp";
import LinkPhoto from "../assets/link.webp";
import SupportFinityPhoto from "../assets/sf.webp";
import TaPhoto from "../assets/ta.webp";

export const stats = [
  {
    title: "+2 years",
    copy: "of experience as a software engineer, plus 2 years of internships across 3 companies",
    image: StatYearsImage,
    alt: "Reaction still for years of software engineering",
  },
  {
    title: "Full stack",
    copy: "React, Node, Express, Angular, Spring Boot, Flutter · C/C++, Python · SQL, MySQL, MongoDB, PostgreSQL · GCP",
    image: StatStackImage,
    alt: "Split still of full-stack work, left and right",
    imageCaptions: ["Backend engineer", "Frontend engineer"],
  },
  {
    title: "TA mode",
    copy: "Taught Languages & Compilers, Programming Techniques, and Software Engineering",
    image: StatTaImage,
    alt: "Reaction still for teaching assistant work",
    tutorialUrl: "https://youtu.be/Ddg59fk_Pfs?si=yFwqKHfB9ajJbtz3",
    tutorialLabel: "Watch a tutorial",
  },
];

export const stack = [
  "C/C++",
  "JavaScript",
  "Python",
  "Java",
  "Dart",
  "HTML",
  "CSS",
  "SASS",
  "React.js",
  "Node.js",
  "Express.js",
  "Angular",
  "Spring Boot",
  "Flutter",
  "SQL",
  "MySQL",
  "MongoDB",
  "PostgreSQL",
  "GCP",
  "Azure",
];

export const timeline = [
  {
    role: "Software Engineer",
    org: "SupportFinity",
    time: "July 2023 - Present",
    copy: "Two years of production work: building and maintaining product features, keeping front-end and back-end conversations civil, and making performance problems explain themselves.",
    image: SupportFinityPhoto,
    alt: "SupportFinity",
  },
  {
    role: "Teaching Assistant",
    org: "Cairo University, Faculty of Engineering",
    time: "Oct 2024 - Jan 2025",
    copy: "Helped students survive Languages, Compilers, Programming Techniques, and Software Engineering. This is where patience, debugging, and drawing weird diagrams became an actual job requirement.",
    image: TaPhoto,
    alt: "Teaching assistant work",
  },
  {
    role: "Frontend Developer Intern",
    org: "Link Development",
    time: "July 2023 - Aug 2023",
    copy: "Built, tested, and integrated UI work with APIs during a very compressed internship sprint. Coffee was involved. Naturally.",
    image: LinkPhoto,
    alt: "Link Development internship",
  },
  {
    role: "Full Stack Developer Intern",
    org: "Information Technology Solutions Center",
    time: "July 2022 - Oct 2022",
    copy: "Worked on risk assessment software, refreshed dashboards, improved responsiveness, and squeezed around 10% more performance out of a key dashboard page.",
    image: ItscPhoto,
    alt: "ITSC internship",
  },
];

export const cincinnatiPhotos = [
  {
    image: InternshipOfficePhoto,
    alt: "ITSC team in the Cincinnati office",
  },
  {
    image: InternshipTeamPhoto,
    alt: "ITSC intern group photo outdoors",
  },
];

export const campusPhotos = [
  {
    image: ActTeamPhoto,
    alt: "Honoring the Energia Powered team",
    caption: "Honoring my Energia team",
  },
  {
    image: ActWorkshopPhoto,
    alt: "Onboarding the CUFE Magazine Club team",
    caption: "Magazine Club onboarding",
  },
  {
    image: ActStagePhoto,
    alt: "Last day speech at Energia Powered",
    caption: "Energia farewell speech",
  },
];

export const campusStats = [
  {
    value: "6",
    label: "NGOs & student orgs",
    copy: "IEEE WIE, IEEE CUSB, CURT, CUFE Student Club, Energia Powered, Teens Club.",
  },
  {
    value: "5 yrs",
    label: "Class representative",
    copy: "Listen, escalate, close the loop. Repeat until graduation.",
  },
  {
    value: "President",
    label: "CUFE Magazine Club",
    copy: "Ran the club, onboarded the team, and kept the magazine from becoming a group chat.",
  },
];

export const principles = [
  "I like clean interfaces, but I like honest interfaces more.",
  "I will refactor a confusing function and then emotionally recover.",
  "I can explain a bug to a rubber duck, a teammate, or a classroom.",
  "I care about the boring details because users always find them first.",
  "Five years as class representative taught me how to listen, escalate, and close the loop.",
];
