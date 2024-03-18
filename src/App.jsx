import { useScroll, useTransform, useMotionValueEvent } from "framer-motion"
import HeroSection from "./components/HeroSection"
import { useState } from "react"
import ContentContainer from "./components/ContentContainer"

export default function App() {
	const { scrollYProgress } = useScroll()
	const scale = useTransform(scrollYProgress, [0, 0.3], [1, 4])
	const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])
	const [scrollProgressState, setScrollProgressState] = useState(0)

	useMotionValueEvent(scrollYProgress, "change", lat =>
		setScrollProgressState(lat)
	)

	console.log("teste")
	return (
		<div className="min-h-[200dvh] bg-black">
			<HeroSection
				scale={scale}
				opacity={opacity}
				display={scrollProgressState < 0.3 ? "flex" : "none"}
			/>
			<ContentContainer scrollYProgress={scrollProgressState} />
		</div>
	)
}
