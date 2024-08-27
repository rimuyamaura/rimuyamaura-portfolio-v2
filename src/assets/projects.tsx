import terra from '../assets/images/terramagotchi.png';
import terra2 from '../assets/images/terramagotchi-night.png';
import terra3 from '../assets/images/terramagotchi-start.png';
import terra4 from '../assets/images/terramagotchi-grown.png';
import social from '../assets/images/social.png';
import social2 from '../assets/images/social-light.png';
import social3 from '../assets/images/social-profile.png';
import social4 from '../assets/images/social-following.png';
import social5 from '../assets/images/social-chat.png';
import social6 from '../assets/images/social-login.png';
import joblog from '../assets/images/joblog.png';
import joblog2 from '../assets/images/joblog-light.png';
import joblog3 from '../assets/images/joblog-stats.png';
import joblog4 from '../assets/images/joblog-edit.png';
import joblog5 from '../assets/images/joblog-signup.png';
import comfy from '../assets/images/comfy.png';
import portfolio from '../assets/images/portfolio.png';
import portfolio2 from '../assets/images/portfolio-light.png';
import portfolio3 from '../assets/images/portfolio-projects.png';
import portfolio4 from '../assets/images/portfolio-projects2.png';
import portfolio5 from '../assets/images/portfolio-contact.png';
import oldPortfolio from '../assets/images/oldPortfolio.png';
import oldPortfolio2 from '../assets/images/oldPortfolio-light.png';
import music from '../assets/images/music.png';

export interface Project {
  id: number;
  img: string[];
  url: string | null;
  github: string | null;
  title: string;
  tech: string;
  description: string;
  text: string;
}

export const projects: Project[] = [
  {
    id: 1,
    img: [terra, terra2, terra3, terra4],
    url: 'https://terramagotchi-trofik-edition.web.app',
    github: null,
    title: 'Terramagotchi Trofik Edition',
    tech: 'JavaScript, TailwindCSS, Google Firebase',
    description:
      'Interactive 2D simulation where users can interact with the diverse elements within the soil ecosystem.',
    text: 'Terramagotchi Trōfik edition is a minimally interactive 2D web application showcasing the intricacies of the elements beneath the soil. Our goal is to educate users by illustrating the interactions among the elements in the soil ecosystem as users can watch how the plants and their root systems develop over time. The application comes in two parts, the main application featuring the 2D canvas, and a remote application accessible through the QR code displayed on the main interface. The remote application provides ways for users to interact with the main application with options such as controlling the weather and changing time.',
  },
  {
    id: 2,
    img: [social, social2, social3, social4, social5, social6],
    url: 'https://social-app-b8kg.onrender.com',
    github: 'https://github.com/rimuyamaura/social-app',
    title: 'Social-App',
    tech: 'React JS, Express.js, MongoDB, Socket.IO',
    description: 'Social media application with a realtime chat.',
    text: 'Social media website where users can View/Create/Edit/Delete posts, like and comment on posts, follow/unfollow users, and send messages and images to other users. The application is built with React JS, Node, Express, and MongoDB as the noSQL Database. Authorization is handled with JWT tokens and the chat feature is implemented with Socket.IO for real-time seen status, online status, and messaging.',
  },
  {
    id: 3,
    img: [joblog, joblog2, joblog3, joblog4, joblog5],
    url: 'https://job-log-fndaada8cth3f8bh.australiacentral-01.azurewebsites.net/',
    github: 'https://github.com/rimuyamaura/job-log',
    title: 'Job-Log',
    tech: 'React TS, MUI, .NET Core, Azure',
    description: 'Job Application tracker.',
    text: 'A job application tracking website designed to help users save and monitor their job application progress throughout their job search journey! Users are able to login to view, create, edit, and delete their job applications along with the ability to sort by status and view statistics for their own applications.',
  },
  {
    id: 4,
    img: [portfolio, portfolio2, portfolio3, portfolio4, portfolio5],
    url: 'https://rimuyamaura.netlify.app',
    github: 'https://github.com/rimuyamaura/rimuyamaura-portfolio-v2',
    title: 'Portfolio Website v2',
    tech: 'React TS, Redux, MUI, Framer Motion, React Three Fiber',
    description:
      'Updated portfolio website built using React TS with improved design.',
    text: 'New and revamped portfolio website, updated from JavaScript to Typescript, with a cleaner design and responsive animations. The website is built using React TS with redux for state management, MUI and Framer Motion for styling and animations, and React Three Fiber for the 3D background.',
  },
  {
    id: 5,
    img: [comfy],
    url: 'https://ry-comfy-store.netlify.app',
    github: 'https://github.com/rimuyamaura/comfy-store',
    title: 'Comfy Store',
    tech: 'React JS, DaisyUI, TailwindCSS',
    description: 'Furniture shopping website',
    text: 'A mock website with online shopping functionalities for furniture and beds. Connecting to the provided Comfy Store custom api server to fetch and store data. Browse, search, filter through products and register as a user to add products to cart and checkout.',
  },
  {
    id: 6,
    img: [music],
    url: null,
    github: 'https://github.com/rimuyamaura/music-library',
    title: 'Music Library',
    tech: 'Flask, Bootstrap, SQLalchemy, SQLite',
    description: '',
    text: "A full-stack Flask app where you can view and organize tracks from a library of music. Songs are searchable by artist, album, or genre. Users can favourite songs, add tracks to their playlist, view/like other user's playlists, and get recommended songs based on their liked songs.  The app is built using Flask and the SQLAlchemy ORM with an SQLite database. The app is styled with Bootstrap and Jinja templating.",
  },
  {
    id: 7,
    img: [oldPortfolio, oldPortfolio2],
    url: 'https://rimuyamaura-v1.netlify.app',
    github: 'https://github.com/rimuyamaura/rimuyamaura-portfolio',
    title: 'Portfolio Website',
    tech: 'React JS, Redux, DaisyUI, TailwindCSS, React Three Fiber',
    description: 'Old portfolio website.',
    text: "The first version of my portfolio website for showcasing my personal projects. Built using JavaScript and React with DaisyUI for styling and theming. React three fiber was used to design the 3D background and animations. The website is fully responsive and accessible on all devices, storing the user's preferred theme using Redux .",
  },
];
