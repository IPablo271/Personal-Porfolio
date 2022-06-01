//  icons
import {
  FiTwitter,
  FiInstagram,
  FiGithub,
  FiDribbble,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiMail,
  FiMapPin,
  FiServer,
  FiMonitor,
} from 'react-icons/fi';

// companies icons
import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
import UpworkBrandIcon from './assets/img/brands/upwork.png';
import FiverBrandIcon from './assets/img/brands/fiverr.png';
import BehanceBrandIcon from './assets/img/brands/behance.png';
import DribbbleBrandIcon from './assets/img/brands/dribbble.png';

// projects images
import Project1 from './assets/img/projects/memflix.jpeg';
import Project2 from './assets/img/projects/calcu8.png';
import Project3 from './assets/img/projects/microsoft3.png';
import Project4 from './assets/img/projects/gt.png';
import Project5 from './assets/img/projects/p4.png';
import Project6 from './assets/img/projects/m4.png';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/py2.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/java2.png';
import SkillImg8 from './assets/img/skills/figma.png';
import SkillImg10 from './assets/img/skills/git.png'

// testimonial images
import TestiImage1 from './assets/img/testimonials/testimonial-1.webp';
import TestiImage2 from './assets/img/testimonials/testimonial-2.webp';
import TestiImage3 from './assets/img/testimonials/testimonial-3.webp';

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'services',
    href: 'services',
  },
  {
    name: 'testimonials',
    href: 'testimonials',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiTwitter />,
    href: '',
  },
  {
    icon: <FiInstagram />,
    href: '',
  },
  {
    icon: <FiGithub />,
    href: '',
  },
  {
    icon: <FiDribbble />,
    href: '',
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: '',
  },
  {
    img: UpworkBrandIcon,
    href: '',
  },
  {
    img: FiverBrandIcon,
    href: '',
  },
  {
    img: BehanceBrandIcon,
    href: '',
  },
  {
    img: DribbbleBrandIcon,
    href: '',
  },
];

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'Memflix',
    category: 'web development',
    info:'Memflix is a project created to imitate a movie streaming system based on the rendering of components through a database hosted from AWS',
  },
  {
    id: '2',
    image: Project2,
    name: 'Calculator',
    category: 'web development',
    info:'This project is a copy of an iphone calculator that implements react and different web technologies. This project has different tests for the correct functioning of the page',
  },
  {
    id: '3',
    image: Project3,
    name: 'Clon Microsoft page',
    category: 'web development',
    info:'This project is a copy of the microsoft page implementing different web technologies such as react, css, html and eslint.',
  },
  {
    id: '4',
    image: Project4,
    name: 'Recycling app',
    category: 'UI/UX design',
    info:'GuateRecila is an app to help the people of Guatemala to reuse their waste through innovative products',
  },
  {
    id: '5',
    image: Project5,
    name: 'Recommendation system',
    category: 'Python',
    info:'Este proyecto es un sistema de recomendación implementado por medio de python y ne04j',
  },
  {
    id: '6',
    image: Project6,
    name: 'Memory',
    category: 'web development',
    info:'This project is a memory game implemented with different web technologies like react, css and html',
  },
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'UI/UX Design',
  },
  {
    name: 'web development',
  },
  {
    name: 'python',
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
  {
    image: SkillImg10,
  }
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Web Design',
    description:
      'With tools like figma I can make a web page design for my users so that they can see an initial prototype of their page and its different requirements.',
  },
  {
    icon: <FiSettings />,
    name: 'Web Development',
    description:
      'With tools like react, css, html, node among others I can make different interactive web pages with the clients requirements',
  },
  {
    icon: <FiMonitor />,
    name: 'Hosting',
    description:
      'I can host your website through servers like Aws or if you prefer another way, I can also work with firebase.',
  },
  {
    icon: <FiServer />,
    name: 'Databases',
    description:
      'I can work with different types of databases such as PostgresSQl and MySql and make a connection to your web page and thus be able to store all the required data',
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage2,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage3,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me at hello@youremail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Bucharest, Romania',
    description: 'Serving clients worldwide',
  },
];
