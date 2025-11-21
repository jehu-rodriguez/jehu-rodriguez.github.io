import type { ReactElement } from "react"
import Banner from "./Banner"
import { FaGithub } from "react-icons/fa6"
import { motion } from "motion/react"

interface HeaderProfileProps {
  name: string,
  profileImage: string,
  bannerImage: string,
  age: number,
  title: string,
  links?: {
    github?: string,
    twitter?: string,
    linkedin?: string,
    resume?: string,
    email?: string
  }
}


export default function HeaderSection({ name, profileImage, age, title, links }: HeaderProfileProps): ReactElement {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.7 }}
      >
        <Banner />
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.7 }}
        className="flex items-center justify-center">
        <div className="absolute">
          <img src={profileImage} className="object-cover object-[50%_25%] w-35 h-35 md:w-40 md:h-40 rounded-full " alt="profile-picture" />
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col items-center justify-center mt-20 gap-2 py-2">
        <p className="font-bold text-4xl">{name}</p>
        <p className="text-sm">{age} • {title} • 🇵🇭</p>
        <a
          className="hover:opacity-80 touch-manipulation active:opacity-75"
          rel="noopener noreferrer"
          href={links?.github}
          style={{
            WebkitTapHighlightColor: 'transparent',
            WebkitTouchCallout: 'none',
            WebkitUserSelect: 'none',
            userSelect: 'none'
          }}
        >
          <FaGithub size={20} />
        </a>
      </motion.div>
    </>
  )
}
