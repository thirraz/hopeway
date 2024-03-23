import { MdDesignServices, MdTextSnippet } from "react-icons/md"
import { SiReact, SiTailwindcss } from "react-icons/si"

import Light from "./Light"
import Process from "./Process"

const processesData = [
	{
		src: "/design-img.jpg",
		processName: "Design",
		icon: <MdDesignServices className="fill-orange-500" />
	},
	{
		src: "/copy-img.jpg",
		processName: "Copy",
		icon: <MdTextSnippet className="fill-zinc-400" />
	},
	{
		src: "/code-img.jpg",
		processName: "Code",
		icon: (
			<div className="flex gap-2">
				<SiTailwindcss className="fill-[hsl(183.1,74.88%,40.59%)]" />
				<SiReact className="fill-[#5fd4f4]" />
			</div>
		)
	}
]

export default function OurProcessContainer() {
	return (
		<section className="relative w-[100dvw] min-h-auto bg-black space-y-20">
			<Light className="absolute top-[-30%] scale-[1.4] right-[-10%] md:top-[-50%] md:left-[-70%] lg:left-[-20%] z-40" />
			<h2 className="text-[clamp(2rem,6vw,3rem)] text-white text-center font-bold uppercase">
				Nós fazemos tudo! ✨
			</h2>
			<div className="w-full flex gap-8 flex-wrap items-center justify-center">
				{processesData.map(({ src, icon, processName }, i) => (
					<Process
						imgSrc={src}
						processName={processName}
						icon={icon}
						key={i}
					/>
				))}
			</div>
		</section>
	)
}
