import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function Step({ stepNumber, stepName, stepProcess, custom }) {
	const stepVariant = {
		hidden: { y: 80 },
		show: index => ({
			y: 0,
			transition: {
				delay: 0.3 * index,
				duration: 1,
				ease: [0.6, 0.01, -0.05, 0.95]
			}
		})
	}

	const ref = useRef(null)
	const isInView = useInView(ref, { once: true })

	return (
		<motion.div
			ref={ref}
			variants={stepVariant}
			initial="hidden"
			animate={isInView ? "show" : null}
			custom={custom}
			className=" flex flex-col items-center gap-2 max-w-64 text-white text-center"
		>
			<h2 className="text-[4rem] font-bold text-white">{stepNumber}</h2>
			<h3 className="text-white text-[1.8rem] font-bold">{stepName}</h3>
			<p className="text-stone-400">{stepProcess}</p>
		</motion.div>
	)
}
