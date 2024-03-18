import { motion } from "framer-motion"
import ProjectInfos from "./ProjectInfos"

const projectsData = [
	{
		projectCover: "/huge_bobcat.jpg",
		projectName: "Huge Bobcat",
		projectDescription:
			"A streaming service with a HUGE amount of movies, with a great price. Don't waste more time spending so much to see bad movies anymore.",
		link: "https://huge-bobcat.vercel.app/"
	},
	{
		projectCover: "/desert_global.png",
		projectName: "Desert Global",
		projectDescription:
			"Do you want auto tools, pieces to improve or fix your car? Desert Global can provide this to you!",
		link: "https://fantastic-longma-18b9b1.netlify.app/"
	},
	{
		projectCover: "/nexter.jpg",
		projectName: "Nexter",
		projectDescription:
			"You deserve a comfortable house, with beautiful views and in a good neighborhood. Nexter will make you happier!",
		link: "https://lovely-quokka-749147.netlify.app/"
	}
]

export default function Projects({ scrollYProgress }) {
	return (
		<motion.section
			className="max-w-[100dvw] grid grid-rows-projects 
			gap-36  justify-items-center lg:justify-items-start items-stretch 
			md:justify-items-start"
		>
			{projectsData.map(
				({ projectCover, projectDescription, projectName, link }, i) =>
					i == 1 ? (
						<ProjectInfos
							key={i}
							projectCover={projectCover}
							projectName={projectName}
							projectDescription={projectDescription}
							link={link}
							justifyEnd
							rowReverse
							btnSelfStart
							custom={i}
							scrollYProgress={scrollYProgress}
						/>
					) : (
						<ProjectInfos
							key={i}
							projectCover={projectCover}
							projectName={projectName}
							projectDescription={projectDescription}
							link={link}
							custom={i}
							scrollYProgress={scrollYProgress}
						/>
					)
			)}
			{/* <ProjectInfos />
			<ProjectInfos justifyEnd rowReverse btnSelfStart />
			<ProjectInfos /> */}
		</motion.section>
	)
}
