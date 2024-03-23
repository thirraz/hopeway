import { MdDesignServices, MdTextSnippet } from "react-icons/md"
import { SiReact, SiTailwindcss } from "react-icons/si"

import Light from "./Light"
import Process from "./Process"

const processesData = [
	{
		src: "/design-img.jpg",
		icon: <MdDesignServices className="fill-orange-500" />
	},
	{
		src: "/copy-img.jpg",
		icon: <MdTextSnippet className="fill-zinc-400" />
	},
	{
		src: "/code-img.jpg",
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
		<section className="relative min-h-screen bg-black space-y-24">
			<Light className="absolute bottom-0 right-0 scale-50 md:scale-100 md:top-[-50%] md:left-[-70%] lg:left-[-18%] z-40" />
			<h2 className="text-[clamp(2rem,6vw,3rem)] text-white text-center font-bold uppercase">
				We make everything!
			</h2>
			<div className="flex gap-8 flex-wrap items-center justify-center">
				{processesData.map(({ src, icon }, i) => (
					<Process imgSrc={src} icon={icon} key={i} />
				))}
			</div>
		</section>
	)
}
