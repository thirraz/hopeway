import { motion } from "framer-motion"
import Button from "./Button"

export default function HeroText({ opacity }) {
	return (
		<motion.div
			className="font-sans text-white text-center relative flex flex-col items-center gap-1 md:gap-10"
			style={{ opacity }}
		>
			<h1 className="text-[clamp(2rem,5vw,4rem)] font-semibold md:leading-[3rem] lg:leading-[4.2rem] ">
				Increase Your Results <br />
				With HopeWay
			</h1>
			<p className="font-thin max-w-[70%] mb-4 md:mb-0">
				HopeWay provides the design, the text that will make you sell more,
				and the code. Everything with a good price!
			</p>
			<Button text="Book a Call" />
		</motion.div>
	)
}
