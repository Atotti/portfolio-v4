import { Skill } from '@/types'
import { FaPython, FaReact, FaLaravel, FaUnity, FaAws, FaCloudflare, FaDocker, FaVimeo, FaSlack, FaGithub } from 'react-icons/fa'
import { FaGolang, FaSwift, FaPhp, FaGitAlt } from 'react-icons/fa6'
import { SiTypescript, SiScala, SiKotlin, SiNextdotjs, SiAstro, SiFlask, SiPytorch, SiRubyonrails, SiGoogleappsscript, SiMysql, SiSqlite, SiNginx, SiGooglecloud, SiJetbrains, SiNotion, SiJira } from 'react-icons/si'
import { DiRuby, DiDjango } from 'react-icons/di'
import { TbBrandCpp, TbBrandCSharp } from 'react-icons/tb'
import { BiLogoPostgresql, BiLogoKubernetes } from 'react-icons/bi'
import { VscAzure, VscVscode } from 'react-icons/vsc'
import { GrHeroku } from 'react-icons/gr'
import { IoLogoFirebase } from 'react-icons/io5'

export const programmingLanguages: Skill[] = [
  { name: 'Python', icon: <FaPython />, percentage: 95 },
  { name: 'Go', icon: <FaGolang />, percentage: 80 },
  { name: 'TypeScript', icon: <SiTypescript />, percentage: 80 },
  { name: 'C++', icon: <TbBrandCpp />, percentage: 70 },
  { name: 'C#', icon: <TbBrandCSharp />, percentage: 75 },
  { name: 'Kotlin', icon: <SiKotlin />, percentage: 55 },
  { name: 'Swift', icon: <FaSwift />, percentage: 60 },
  { name: 'Ruby', icon: <DiRuby />, percentage: 55 },
  { name: 'PHP', icon: <FaPhp />, percentage: 60 },
  { name: 'Scala', icon: <SiScala />, percentage: 55 },
]

export const frameworks: Skill[] = [
  { name: 'React', icon: <FaReact />, percentage: 85 },
  { name: 'Next.js', icon: <SiNextdotjs />, percentage: 85 },
  { name: 'Astro', icon: <SiAstro />, percentage: 90 },
  { name: 'Django', icon: <DiDjango />, percentage: 95 },
  { name: 'Flask', icon: <SiFlask />, percentage: 95 },
  { name: 'PyTorch', icon: <SiPytorch />, percentage: 95 },
  { name: 'Laravel', icon: <FaLaravel />, percentage: 65 },
  { name: 'Rails', icon: <SiRubyonrails />, percentage: 65 },
  { name: 'GAS', icon: <SiGoogleappsscript />, percentage: 90 },
  { name: 'Unity', icon: <FaUnity />, percentage: 80 },
]

export const dataInfra: Skill[] = [
  { name: 'MySQL', icon: <SiMysql />, percentage: 75 },
  { name: 'PostgreSQL', icon: <BiLogoPostgresql />, percentage: 75 },
  { name: 'SQLite', icon: <SiSqlite />, percentage: 75 },
  { name: 'Nginx', icon: <SiNginx />, percentage: 70 },
  { name: 'AWS', icon: <FaAws />, percentage: 75 },
  { name: 'GCP', icon: <SiGooglecloud />, percentage: 85 },
  { name: 'Azure', icon: <VscAzure />, percentage: 65 },
  { name: 'Heroku', icon: <GrHeroku />, percentage: 85 },
  { name: 'Cloudflare', icon: <FaCloudflare />, percentage: 80 },
  { name: 'Firebase', icon: <IoLogoFirebase />, percentage: 80 },
]

export const tools: Skill[] = [
  { name: 'Docker', icon: <FaDocker />, percentage: 95 },
  { name: 'Kubernetes', icon: <BiLogoKubernetes />, percentage: 90 },
  { name: 'Git', icon: <FaGitAlt />, percentage: 95 },
  { name: 'VSCode', icon: <VscVscode />, percentage: 95 },
  { name: 'JetBrainsIDE', icon: <SiJetbrains />, percentage: 90 },
  { name: 'Vimeo', icon: <FaVimeo />, percentage: 60 },
  { name: 'Slack', icon: <FaSlack />, percentage: 100 },
  { name: 'GitHub', icon: <FaGithub />, percentage: 95 },
  { name: 'Notion', icon: <SiNotion />, percentage: 100 },
  { name: 'Jira', icon: <SiJira />, percentage: 90 },
]
