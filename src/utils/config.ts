import { ReactComponent as GitHubIcon } from "assets/github.svg";
import { ReactComponent as InstagramIcon } from "assets/instagram.svg";
import { ReactComponent as LinkedInIcon } from "assets/linkedIn.svg";
import { ReactComponent as ToolsIcon } from "assets/tools.svg";
import { ReactComponent as DatabaseIcon } from "assets/database.svg";
import { ReactComponent as CodeIcon } from "assets/code.svg";
import { ReactComponent as ComputerIcon } from "assets/computer.svg";
import { TJobList, TSkillList } from "types/config.types";

const companyList: TJobList = [
  {
    label: "Visa Inc.",
    href: "https://www.visa.co.in/",
    designations: [
      {
        company: "Visa",
        title: "Senior Software Engineer",
        duration: "Oct 2023 - Present",
        location: "Bengaluru, Karnataka, India",
        description: [
          "Building robust and responsive user interfaces using Angular & React.",
          "Implementing RESTful APIs for seamless communication between frontend and backend systems.",
          "Collaborating closely with cross-functional teams to deliver innovative solutions that meet user requirements and business objectives.",
        ],
        skills: [
          "AngularJS",
          "ReactJS",
          "HTML & CSS",
          "Typescript",
          "Javascript",
          "Java",
          "Springboot",
          "Microservices",
          "Bitbucket",
          "Git",
        ],
      },
    ],
  },
  {
    label: "HighRadius Technologies",
    href: "https://highradius.com/",
    designations: [
      {
        title: "Software Engineer - I",
        company: "HighRadius",
        duration: "Jan 2023 - Oct 2023 \u2022 10 mos",
        location: "Hyderabad, Telangana, India",
        description: [
          'Developed "LiveCube", a no-code platform tailored for the office of the CFO, extending standard functionality with an intuitive Excel-like spreadsheet interface usable across Enterprise Applications.',
          "Successfully delivered multiple complex use cases for the platform, improving overall performance by 30% through optimization initiatives.",
          "Provided mentorship to junior developers, overseeing their user story development and ensuring adherence to best practices and project timelines.",
        ],
        skills: [
          "ReactJS",
          "HTML & CSS",
          "Typescript",
          "Webpack",
          "Git",
          "Gitlab",
        ],
      },
      {
        title: "Associate Software Engineer - II",
        company: "HighRadius",
        duration: "July 2022 - January 2023 \u2022 7 mos",
        location: "Bhubaneswar, Odisha, India",
        description: [
          "Planned and executed the creation of a design system and a modular and reusable ReactJS component library for the CFOTech application suite.",
          "Improved the stability and performance and delivered several use cases for APaaS, a Low Code/No Code platform.",
          "Collaborated with multiple stakeholders to plan and deliver several use cases for the application suite.",
          "Mentored several junior developers, did code reviews, and supervised the development process for several user stories.",
        ],
        skills: ["ReactJS", "HTML & CSS", "Typescript", "Git", "Gitlab"],
      },
      {
        title: "Associate Software Engineer - I",
        company: "HighRadius",
        duration: "June 2021 - July 2022 \u2022 1 yr",
        location: "Bhubaneswar, Odisha, India",
        description: [
          "Managed and mentored a team of 9 interns to ensure high-quality delivery of product features.",
          "Analyzed requirements, proposed technical designs, and supervised the development and testing processes for various user stories.",
          "Led the initial planning and creation of APaaS, a Low Code/No Code platform enabling dynamic UI rendering through configuration-based solutions.",
          "Developed UI applications for the company's CFOTech initiative using Spring Boot, Hibernate, Java, ReactJS, Redux, TypeScript, and MySQL, contributing to technological advancement and market competitiveness.",
        ],
        skills: [
          "ReactJS",
          "Typescript",
          "Java",
          "Javascript",
          "Springboot",
          "Git",
          "Gitlab",
        ],
      },
      {
        title: "Software Engineer Intern",
        company: "HighRadius",
        duration: "July 2020 - June 2021 \u2022 1 yr",
        location: "Bhubaneswar, Odisha, India",
        description: [
          "Worked with Autonomous team on live projects.",
          "Spearheaded the development of innovative features using JavaScript, ReactJS, Redux, and Material UI to enhance application functionality.",
          "Proactively tackled and resolved critical bugs and defects, ensuring seamless user experience.",
          "Implemented the transformative Trifecta design system, elevating visual aesthetics and usability across the application.",
        ],
        skills: ["ReactJS", "Javascript", "Redux", "Redux Saga", "Git"],
      },
      {
        title: "Summer Intern",
        company: "HighRadius",
        duration: "April - June 2020 \u2022 3 mos",
        location: "Bhubaneswar, Odisha, India",
        description: [
          "Developed an AI-Enabled FinTech B2B Invoice Management Application that empowers AR analysts to efficiently monitor and manage payments in the dynamic B2B environment.",
          "Designed intuitive UI with ReactJS and Material-UI for seamless user experience.",
          "Built backend infrastructure with JSP and MySQL database for robust data handling.",
          "Implemented machine learning models in Python to predict partial payments accurately.",
          "Developed a ChatBot using DialogFlow to enhance customer interaction and support within the application.",
        ],
        skills: [
          "ReactJS",
          "Javascript",
          "Java",
          "JSP",
          "MySQL",
          "Python",
          "ML & AI",
          "Dialogflow",
        ],
      },
    ],
  },
  {
    label: "HCL Technologies",
    href: "https://www.hcltech.com/",
    designations: [
      {
        title: "Software Engineer Intern",
        company: "HCL",
        duration: "June - July 2019 \u2022 2 mos",
        location: "Lucknow, Uttar Pradesh, India",
        description: [
          "Developed a Java AWT based Application using MySQL database and Java for backend.",
          "The Event Hub application is a Event Management System for institutions to keep track of the various events happening in the campus.",
          "Performed a key role in the development of backend of the application.",
        ],
        skills: ["Java", "Java AWT", "MySQL", "JSP"],
      },
    ],
  },
];

export const jobList = companyList
  .map((comp) =>
    comp.designations.map((job) => ({
      ...job,
      href: comp.href,
    }))
  )
  .flat();

export const skillList: TSkillList = [
  {
    label: "Languages",
    Icon: CodeIcon,
    skills: [
      {
        label: "HTML",
        icon: "https://www.clipartkey.com/mpngs/m/210-2104705_html-logo-png-transparent-background.png",
        percent: 90,
      },
      {
        label: "CSS",
        icon: "https://p1.hiclipart.com/preview/980/312/965/html-logo-css3-javascript-web-design-css-grid-layout-html5-electric-blue-symbol-png-clipart-thumbnail.jpg",
        percent: 90,
      },
      {
        label: "JavaScript",
        icon: "https://th.bing.com/th/id/R.e6d82362f50c26c1b0e6186b99e18e3c?rik=ZkiNhqWudt2EYQ&riu=http%3a%2f%2f3.bp.blogspot.com%2f-PTty3CfTGnA%2fTpZOEjTQ_WI%2fAAAAAAAAAeo%2fKeKt_D5X2xo%2fs1600%2fjs.jpg&ehk=uLz7cG48BbXqyb7LS1GN3v3uFyOhkFlskPBBnFx4ryc%3d&risl=&pid=ImgRaw&r=0",
        percent: 95,
      },
      {
        label: "TypeScript",
        icon: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
        percent: 95,
      },
      {
        label: "Java",
        icon: "https://softsuave-assets.s3.amazonaws.com/images/2020/android/java-logo.png",
        percent: 70,
      },
    ],
  },
  {
    label: "Frameworks",
    Icon: ComputerIcon,
    skills: [
      {
        label: "ReactJS",
        icon: "https://th.bing.com/th/id/R.f81a6f373c244b1f70f4b7402b5ab372?rik=rbXh4ieLuKt%2bmA&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f09%2fReact_logo_logotype_emblem.png&ehk=QhGOkKcUKCU7FBQgHOajOiJqJBACUTD2Ni6LsfqzCEA%3d&risl=&pid=ImgRaw&r=0",
        percent: 95,
      },
      {
        label: "AngularJS",
        icon: "https://icon2.cleanpng.com/20190715/koz/kisspng-angularjs-scalable-vector-graphics-portable-networ-voice-broadcasting-dataoxy-technologies-5d2d16295f9384.6540886915632358813915.jpg",
        percent: 70,
      },
      {
        label: "Redux",
        icon: "https://raw.githubusercontent.com/reactjs/redux/master/logo/logo.png",
        percent: 95,
      },
      {
        label: "Redux Saga",
        icon: "https://w7.pngwing.com/pngs/375/686/png-transparent-redux-saga-hd-logo.png",
        percent: 90,
      },
      {
        label: "Spring Boot",
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Ylz7W_BiLQErAS8pGHwNeup8vgwXVI2gag&s",
        percent: 65,
      },
      {
        label: "Express",
        icon: "https://expressjs.com/images/express-facebook-share.png",
        percent: 75,
      },
      {
        label: "Node.js",
        icon: "https://banner2.cleanpng.com/20180425/jrw/kisspng-node-js-javascript-web-application-express-js-comp-5ae0f84e2a4242.1423638015246930701731.jpg",
        percent: 80,
      },
    ],
  },
  {
    label: "Databases",
    Icon: DatabaseIcon,
    skills: [
      {
        label: "MySQL",
        icon: "https://p7.hiclipart.com/preview/747/798/387/mysql-database-web-development-computer-software-dolphin.jpg",
        percent: 70,
      },
      {
        label: "MongoDB",
        icon: "https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png",
        percent: 50,
      },
    ],
  },
  {
    label: "Tools & Technologies",
    Icon: ToolsIcon,
    skills: [
      {
        label: "Webpack",
        icon: "https://w1.pngwing.com/pngs/518/449/png-transparent-react-logo-webpack-babel-javascript-npm-github-nodejs-front-and-back-ends-thumbnail.png",
        percent: 80,
      },
      {
        label: "Git",
        icon: "https://w7.pngwing.com/pngs/646/324/png-transparent-github-computer-icons-github-logo-monochrome-head-thumbnail.png",
        percent: 85,
      },
    ],
  },
];

export const headerNavList = [
  {
    label: "About",
    to: "/about",
  },
  {
    label: "Experience",
    to: "/experience",
  },
  {
    label: "Skills",
    to: "/skills",
  },
  {
    label: "Contact",
    to: "/contact",
  },
];

export const socialsList = [
  {
    label: "GitHub",
    href: "https://github.com/dev-bugger/",
    Icon: GitHubIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/throughraweyes/",
    Icon: InstagramIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/anjali-rawat24/",
    Icon: LinkedInIcon,
  },
];
