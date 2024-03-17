import { motion } from "framer-motion"
import ProjectInfos from "./ProjectInfos"

const projectsData = [
	{
		projectCover: "/huge_bobcat.jpg",
		projectName: "Huge Bobcat",
		projectDescription:
			"A streaming service with a HUGE amount of movies, with a great price. Don't waste more time spending so much to see bad movies anymore."
	},
	{
		projectCover: "/desert_global.png",
		projectName: "Desert Global",
		projectDescription:
			"Do you want auto tools, pieces to improve or fix your car? Desert Global can provide this to you!"
	},
	{
		projectCover: "/nexter.jpg",
		projectName: "Nexter",
		projectDescription:
			"You deserve a comfortable house, with beautiful views and in a good neighborhood. Nexter will make you happier!"
	}
]

export default function Projects({ scrollYProgress }) {
	// const item = {
	// 	hidden: { y: 100 },
	// 	show: index => ({
	// 		y: 0,
	// 		transition: {
	// 			delay: 0.3 * index,
	// 			duration: 1,
	// 			ease: [0.6, 0.01, -0.05, 0.95]
	// 		}
	// 	})
	// }

	return (
		<motion.section
			className="max-w-[100dvw] grid grid-rows-projects 
			gap-36  justify-items-center lg:justify-items-start items-stretch 
			md:justify-items-start"
		>
			{projectsData.map(
				({ projectCover, projectDescription, projectName }, i) =>
					i == 1 ? (
						<ProjectInfos
							key={i}
							projectCover={projectCover}
							projectName={projectName}
							projectDescription={projectDescription}
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
