import { motion } from "framer-motion"
import ProjectInfos from "./ProjectInfos"

const projectsData = [
	{
		projectCover: "/huge_bobcat.jpg",
		projectName: "Huge Bobcat",
		projectDescription:
			"Uma plataforma de streaming com uma ENORME quantidade de filmes, por um preço acessível. Não perca mais dinheiro, assine Huge Bobcat!",
		link: "https://huge-bobcat.vercel.app/"
	},
	{
		projectCover: "/desert_global.png",
		projectName: "Desert Global",
		projectDescription:
			"Você precisa de peças para o seu carro, ou alguma ferramenta para consertá-lo? A Desert Global tem isso e muito mais!",
		link: "https://desertglobal.netlify.app/"
	},
	{
		projectCover: "/nexter.jpg",
		projectName: "Nexter",
		projectDescription:
			"Você merece uma casa confortável, com uma bela vista, e em uma boa vizinhança. A Nexter pode lhe dar isso!",
		link: "https://lovely-quokka-749147.netlify.app/"
	}
]

export default function Projects({ scrollYProgress }) {
	return (
		<motion.section className="relative z-50 md:px-12 lg:px-16 max-w-[100dvw] grid grid-rows-projects gap-36  justify-items-center lg:justify-items-start items-stretch md:justify-items-start">
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
