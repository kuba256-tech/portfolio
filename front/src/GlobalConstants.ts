import designIcon from './assets/DesignIcon.svg';
import devIcon from './assets/DevIcon.svg';
import maintenanceIcon from './assets/MaintenanceIcon.svg';

import htmlIcon from './assets/HTMLICON.svg';
import cssIcon from './assets/CSSIcon.svg';
import sassIcon from './assets/SASSICON.svg';
import jsIcon from './assets/jsIcon.svg';
import muiIcon from './assets/MuiIcon.png';
import boostrapIcon from './assets/Bootstrap.svg';

import reactIcon from './assets/reactIcon.svg';
import vueIcon from './assets/vueIcon.svg';
import viteIcon from './assets/viteIcon.svg';

import nodeJs from './assets/NodeJs.svg';
import mySql from './assets/MySqlIcon.svg';
import mongoDbIcon from './assets/MONGOICON.svg';

import tsIcon from './assets/TSICON.svg';
import gitIcon from './assets/gitIcon.svg';
import reduxIcon from './assets/reduxIcon.png';
import routerIcon from './assets/reactRouterIcon.svg';

import linkedin from './assets/LinkedinIcon.svg';
import instagram from './assets/IgIcon.svg';
import messageMe from './assets/messageIcon.svg';

import linkedin_dark from './assets/linkedinIcon_dark.svg';
import gitDark from './assets/gitDark.svg';


export const socialLinks = [
  { title: 'Git', icon: gitDark, link: 'https://github.com/kuba256-tech' },
  {
    title: 'Linkedin',
    icon: linkedin_dark,
    link: 'https://www.linkedin.com/in/kubanychbek-abdashimov-6839a8343',
  },
];

export const aboutMeAbility = [
  {
    abilityPicture: designIcon,
    abilityTitle: 'design',
    abilityDescription:
      'I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.',
  },
  {
    abilityPicture: devIcon,
    abilityTitle: 'development',
    abilityDescription:
      'can develop responsive web pages, reusable UI components (e.g. buttons, cards, modals), basic forms with validation, navigation menus, interactive elements using JavaScript or React, and simple API-connected features like displaying data from a backend — all while following design mockups and best practices.',
  },
  {
    abilityPicture: maintenanceIcon,
    abilityTitle: 'maintenance',
    abilityDescription:
      ' can maintain UI components, fix layout and styling issues, update and refactor React components, manage navigation and forms, handle basic API integrations, clean up code, and use Git for version control—all while ensuring the user interface stays responsive, functional, and visually consistent.',
  },
];

export const skillsFrontEnd = [
  { title: 'HTML5', icon: htmlIcon },
  { title: 'CSS', icon: cssIcon },
  { title: 'JavaScript', icon: jsIcon },
  { title: 'SASS', icon: sassIcon },
  { title: 'MUI', icon: muiIcon },
  { title: 'Bootstrap', icon: boostrapIcon },
];

export const skillsFrameWork = [
  { title: 'React', icon: reactIcon },
  { title: 'Vue', icon: vueIcon },
];

export const skillsBack = [
  { title: 'NodeJs', icon: nodeJs },
  { title: 'MySql', icon: mySql },
  { title: 'MongoDb', icon: mongoDbIcon },
];

export const skillsOther = [
  { title: 'TypeScript', icon: tsIcon },
  { title: 'GitHub', icon: gitIcon },
  { title: 'redux', icon: reduxIcon },
  { title: 'Router', icon: routerIcon },
  { title: 'Vite', icon: viteIcon },
];

export const footerLinks = [
  { title: 'linkedin', icon: linkedin, link: 'https://www.linkedin.com/in/kubanychbek-abdashimov-6839a8343' },
  { title: 'instagram', icon: instagram, link: 'https://www.instagram.com/kubanych_4/' },
  { title: 'message', icon: messageMe, link: 'mailto:kuba256.tech@gmail.com' },
];
