import { motion } from "framer-motion"

import HeroText from "./HeroText"

export default function HeroSection({ scale, opacity, display }) {
	const innerWidth = window.innerWidth

	return (
		<motion.section
			className="min-h-screen bg-black fixed z-[90] top-0 left-0 right-0 flex justify-center items-center  "
			style={{ display }}
		>
			<motion.video
				autoPlay
				muted
				loop
				className="absolute top-0 left-0 w-full h-full object-cover"
				style={{ scale }}
			>
				<source
					src={
						innerWidth > 960
							? "/portfolio_video_for_desktops.mp4"
							: "/portfolio_video_for_mobile.mp4"
					}
					type="video/mp4"
				/>
			</motion.video>
			<HeroText opacity={opacity} />
		</motion.section>
	)
}
