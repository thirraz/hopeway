import { motion } from "framer-motion"

import HowItWorksSection from "./HowItWorksSection"
import Projects from "./Projects"
import OurProcessContainer from "./OurProcessContainer"

export default function ContentContainer({ scrollYProgress }) {
	return (
		<motion.div className="min-h-screen fixed top-0 z-[10] bottom-0 overflow-y-scroll py-10 flex flex-col gap-24 md:gap-[10rem]">
			<Projects scrollYProgress={scrollYProgress} />
			<OurProcessContainer />
			<HowItWorksSection />
		</motion.div>
	)
}
