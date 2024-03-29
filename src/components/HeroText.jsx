import { motion } from "framer-motion"
import CTA from "./CTA"

export default function HeroText({ opacity }) {
	return (
		<motion.div
			className="font-sans text-white text-center relative flex flex-col items-center gap-1 md:gap-10"
			style={{ opacity }}
		>
			<h1 className="text-[clamp(2rem,5vw,4rem)] font-semibold md:leading-[3rem] lg:leading-[4.2rem] ">
				Aumente seus resultados <br />
				Com a HopeWay
			</h1>
			<p className="font-thin max-w-[55%] mb-4 md:mb-0">
				Precisa de uma{" "}
				<span className="text-orange-300 font-bold">Landing Page</span>, um
				site para divulgar seu produto{" "}
				<span className="text-red-400 font-bold">SaSS</span> ou seu próprio{" "}
				<span className="text-green-400 font-bold">e-commerce</span>? A
				HopeWay consegue ajudá-lo com isso!
			</p>
			<CTA />
		</motion.div>
	)
}
