import { Box, Link } from '@mui/material';
import { IconType } from 'react-icons';
import {
  SiPython,
  SiJavascript,
  SiCsharp,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiMicrosoftazure,
  SiDotnet,
  SiFlask,
  SiMongodb,
  SiSqlite,
  SiJupyter,
  SiFirebase,
} from 'react-icons/si';
import { FaDocker, FaGitAlt, FaNodeJs } from 'react-icons/fa';
import { TbSql } from 'react-icons/tb';
import { DiMsqlServer } from 'react-icons/di';

interface Item {
  title: string;
  link: string;
  icon: IconType;
}

const languages: Item[] = [
  {
    title: 'JavaScript',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    icon: SiJavascript,
  },
  {
    title: 'TypeScript',
    link: 'https://www.typescriptlang.org',
    icon: SiTypescript,
  },
  { title: 'Python', link: 'https://www.python.org', icon: SiPython },
  {
    title: 'C#',
    link: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
    icon: SiCsharp,
  },
  { title: 'SQL', link: 'https://www.w3schools.com/sql/', icon: TbSql },
  {
    title: 'HTML',
    link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    icon: SiHtml5,
  },
  {
    title: 'CSS',
    link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    icon: SiCss3,
  },
];

const technologies: Item[] = [
  { title: 'React', link: 'https://react.dev', icon: SiReact },
  {
    title: 'Azure',
    link: 'https://azure.microsoft.com/en-us/',
    icon: SiMicrosoftazure,
  },
  { title: 'Node.js', link: 'https://nodejs.org/en', icon: FaNodeJs },
  {
    title: '.NET',
    link: 'https://dotnet.microsoft.com/en-us/',
    icon: SiDotnet,
  },
  {
    title: 'Flask',
    link: 'https://flask.palletsprojects.com/en/3.0.x/',
    icon: SiFlask,
  },
  { title: 'MongoDB', link: 'https://www.mongodb.com', icon: SiMongodb },
  {
    title: 'MS SQL Server',
    link: 'https://www.microsoft.com/en-nz/sql-server/sql-server-downloads',
    icon: DiMsqlServer,
  },
  { title: 'SQLite', link: 'https://www.sqlite.org', icon: SiSqlite },
  { title: 'Firebase', link: 'https://firebase.google.com', icon: SiFirebase },
  { title: 'Jupyter', link: 'https://jupyter.org', icon: SiJupyter },
  { title: 'Docker', link: 'https://www.docker.com', icon: FaDocker },
  { title: 'Git', link: 'https://git-scm.com', icon: FaGitAlt },
];

const Icons = ({ items }: { items: Item[] }) => (
  <Box sx={{ display: 'flex', flexDirection: 'row', maxHeight: '5vh' }}>
    {items.map((item) => (
      <Link
        key={item.title}
        href={item.link}
        target='_blank'
        rel='noreferrer'
        sx={{ margin: '1vh' }}
      >
        <item.icon size={20} />
      </Link>
    ))}
  </Box>
);

export default Icons;
export { languages, technologies };
