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
			<p className="font-thin max-w-[70%] mb-4 md:mb-0">
				A HopeWay fornece o design, o texto que fará você vender mais, e o
				código. Tudo por um ótimo preço!
			</p>
			<CTA />
		</motion.div>
	)
}
