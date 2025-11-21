
import { FaCss3Alt, FaGitAlt, FaHtml5, FaPython, FaReact } from "react-icons/fa6";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { SiDjango, SiFlask, SiJavascript, SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { TbSql } from "react-icons/tb";

export default function Banner() {
  const frontendStackItems =
    [
      {
        icon: <SiJavascript size={50} />,
        title: "JavaScript"
      },
      {
        icon: <SiTypescript size={50} />,
        title: "TypeScript"
      },
      {
        icon: <FaReact size={50} />,
        title: "React"
      },
      {
        icon: <RiNextjsFill size={50} />,
        title: "Nextjs"
      },
      {
        icon: <FaHtml5 size={50} />,
        title: "HTML"
      },
      {
        icon: <FaCss3Alt size={50} />,
        title: "CSS"
      },
      {
        icon: <FaPython size={50} />,
        title: "Python"
      },
      {
        icon: <SiDjango size={50} />,
        title: "Django"
      },
      {
        icon: <SiFlask size={50} />,
        title: "Flask"
      },
      {
        icon: <TbSql size={50} />,
        title: "SQL"
      },
      {
        icon: <FaGitAlt size={50} />,
        title: "Git"
      },
    ]

  return (
    <div>
      <InfiniteMovingCards items={frontendStackItems}
        direction="left"
        speed="slow"
      />

    </div>

  )
}

