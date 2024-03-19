import { motion } from "framer-motion"

import HowItWorksSection from "./HowItWorksSection"
import Projects from "./Projects"
import TestimonialsSection from "./TestimonialsSection"

export default function ContentContainer({ scrollYProgress }) {
	return (
		<motion.div className="min-h-screen fixed top-0 z-[10] bottom-0 overflow-y-scroll py-10 md:px-12 lg:px-16 flex flex-col gap-24 md:gap-[10rem]">
			<Projects scrollYProgress={scrollYProgress} />
			<TestimonialsSection />
			<HowItWorksSection />
		</motion.div>
	)
}
