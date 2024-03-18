import { motion, useInView } from "framer-motion"
import EmptyTestimonial from "./EmptyTestimonial"
import Testimonial from "./Testimonial"
import { useRef } from "react"

export default function TestimonialsSection() {
	const innerWidth = window.innerWidth
	const ref = useRef()
	const isInView = useInView(ref, { once: true })

	const testimonalsVariant = {
		hidden: { y: 150 },
		visible: {
			y: 0,
			transition: {
				ease: [0.6, 0.01, -0.05, 0.95],
				duration: 1
			}
		}
	}

	return (
		<motion.div className="max-w-[100dvw] flex flex-col gap-[5rem] items-center md:items-stretch">
			<h2 className="text-white text-center text-[clamp(1.2rem,2vw,3rem)] font-semibold">
				We do not have many clients yet 😑, but you can help us to complete
				them 😉
			</h2>
			<motion.section
				ref={ref}
				variants={testimonalsVariant}
				initial="hidden"
				animate={isInView ? "visible" : null}
				className="text-3xl text-white min-h-screen grid grid-rows-projects gap-8"
			>
				<div className="max-w-[100dvw] flex flex-col lg:flex-row gap-8">
					<Testimonial />
					<EmptyTestimonial />
				</div>
				<div className="max-w-[100dvw] flex flex-col lg:flex-row gap-8 md:justify-self-end">
					<EmptyTestimonial />
					<EmptyTestimonial />
				</div>
				{innerWidth > 960 && (
					<div className="max-w-[100dvw] flex flex-col lg:flex-row gap-8">
						<EmptyTestimonial />
						<EmptyTestimonial />
					</div>
				)}
			</motion.section>
		</motion.div>
	)
}
