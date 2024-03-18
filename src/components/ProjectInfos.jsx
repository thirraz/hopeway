import { motion } from "framer-motion"

import ProjectButton from "./ProjectButton"

export default function ProjectInfos({
	projectCover,
	projectName,
	projectDescription,
	justifyEnd,
	link,
	rowReverse,
	btnSelfStart,
	custom,
	scrollYProgress
}) {
	const item = {
		hidden: { y: 100 },
		show: index => ({
			y: 0,
			transition: {
				delay: 0.3 * index,
				duration: 1,
				ease: [0.6, 0.01, -0.05, 0.95]
			}
		})
	}

	return (
		<motion.div
			variants={item}
			initial="hidden"
			animate={scrollYProgress > 0.3 ? "show" : null}
			custom={custom}
			className={` text-white max-w-[80%] h-auto flex flex-col gap-4 sm:items-center lg:items-stretch sm:text-center lg:text-left	lg:flex-row ${
				justifyEnd && rowReverse
					? "md:justify-self-end lg:flex-row-reverse"
					: null
			}`}
		>
			<img
				src={projectCover}
				alt="Project Cover"
				className={`h-full max-w-96 rounded-md object-contain object-left`}
			/>
			<div className="flex flex-col justify-between gap-8">
				<div>
					<h2 className="text-[clamp(1.9rem,2vw,3rem)] font-bold">
						{projectName}
					</h2>
					<p className="text-[18px] text-stone-400">
						{projectDescription}
					</p>
				</div>
				<ProjectButton selfStart={btnSelfStart} siteLink={link} />
			</div>
		</motion.div>
	)
}
