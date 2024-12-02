import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  startup,
  carrent,
  jobit,
  tripguide,
  download,
  email,
  phone,
  linkedin,
  githubSocial,
  solidity,
  nextjs,
  nuxtjs,
  ai,
  vuejs,
} from '../assets'

const navLinks = [
  {
    id: 'home',
    title: 'Home',
  },
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
    class: 'bg-[#915EFF] rounded-full px-5 py-3 text-white',
  },
]

const socialMedias = [
  {
    icon: githubSocial,
    description: 'Github',
    link: 'https://github.com/DanielNeris',
  },
  {
    icon: linkedin,
    description: 'Linkedin',
    link: 'https://www.linkedin.com/in/danielneris',
  },
]

const contact = [
  {
    icon: githubSocial,
    description: 'Github',
    link: 'https://github.com/DanielNeris',
  },
  {
    icon: linkedin,
    description: 'Linkedin',
    link: 'https://www.linkedin.com/in/danielneris',
  },
  {
    icon: email,
    description: 'Email',
    link: 'mailto:danielneris01@gmail.com',
  },
  {
    icon: phone,
    description: 'Phone',
    link: 'tel:+5511988928000',
  },
]

const graphcInformations = [
  {
    time: '6+',
    description: 'Years of <br /> experience',
  },
  {
    time: '20+',
    description: 'Projects <br /> completed',
  },
  {
    time: '5',
    description: 'Technologies <br /> mastered',
  },
  // {
  //   time: '5',
  //   description: 'Technologies <br /> mastered',
  // },
]

const services = [
  {
    title: 'Full Stack Development',
    icon: web,
  },
  {
    title: 'Decentralized Application (DApp)',
    icon: creator,
  },
  {
    title: 'Mobile App Development',
    icon: mobile,
  },
  {
    title: 'DevOps & Infrastructure',
    icon: backend,
  },
]

const technologies = [
  {
    name: 'Node.js',
    icon: nodejs,
  },
  {
    name: 'ReactJS',
    icon: reactjs,
  },
  {
    name: 'AI',
    icon: ai,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'Solidity',
    icon: solidity,
  },
  {
    name: 'Next.js',
    icon: nextjs,
  },
  {
    name: 'Nuxt.js',
    icon: nuxtjs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Vue.js',
    icon: vuejs,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
  {
    name: 'React Native',
    icon: reactjs,
  },

  {
    name: 'Tailwind',
    icon: tailwind,
  },
]

const experiences = [
  {
    title: 'Co-Founder | Head of Technology',
    company_name: 'Zuvia',
    icon: startup,
    iconBg: '#383E56',
    date: 'Sep 2022 - Present',
    points: [
      'Joined Zuvia from its inception, contributing to all aspects of IT infrastructure and product development.',
      'Scaled operations, supporting 2,000 accounts and tokenizing R$25 million in digital assets.',
      'Designed scalable microservices with Node.js and MongoDB, integrated payment solutions, and optimized CI/CD pipelines on Azure.',
      'Managed front-end development using React.js and Vue.js, delivering dynamic and user-friendly experiences.',
    ],
  },
  {
    title: 'Co-Founder | Head of Technology',
    company_name: 'SkyDan',
    icon: startup,
    iconBg: '#E6DEDD',
    date: 'Sep 2021 - Aug 2024',
    points: [
      'Spearheaded the company’s Web3 and blockchain initiatives, aligning technology strategies with business objectives.',
      'Developed and deployed decentralized applications (DApps) and smart contracts using Solidity.',
      'Designed APIs with REST and GraphQL and implemented Node.js back-end solutions adhering to SOLID principles.',
      'Explored and implemented metaverse technologies to create immersive digital experiences.',
    ],
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Live On Solutions',
    icon: startup,
    iconBg: '#383E56',
    date: 'Jan 2019 - Oct 2021',
    points: [
      'Developed and maintained features for Bank-as-a-Service (BaaS) and Credit-as-a-Service (CaaS) platforms.',
      'Built secure back-end systems using Node.js with TypeScript, integrating third-party payment providers.',
      'Created intuitive front-end interfaces with React.js, enhancing user experience.',
      'Managed data with MongoDB and PostgreSQL, ensuring efficiency and scalability.',
    ],
  },
  {
    title: 'Trainee developer',
    company_name: 'Amais Terceiro Setor',
    icon: startup,
    iconBg: '#E6DEDD',
    date: 'Oct 2018 - Jan 2019',
    points: [
      'Developed new features and maintained existing systems using PHP and JavaScript.',
      'Designed responsive front-end interfaces with HTML5, CSS3, and Bootstrap.',
      'Optimized database queries and managed operations using MySQL.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
]

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
]

const projects = [
  {
    name: 'Car Rent',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Job IT',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    source_code_link: 'https://github.com/',
  },
]

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  navLinks,
  socialMedias,
  graphcInformations,
  contact,
}
