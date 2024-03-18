import { IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io"

export default function SocialLinks() {
	return (
		<ul className="max-w-[100dvw] list-none flex flex-wrap justify-center md:flex-col gap-y-2 gap-x-7 md:gap-4">
			<li className="social-link cursor-pointer">
				<IoLogoInstagram className="fill-white w-6 h-6" />
				<a
					href="https://www.instagram.com/hopewaydesign/"
					target="_blank"
					className="text-white"
				>
					Instagram
				</a>
			</li>
			<li className="social-link cursor-pointer">
				<IoLogoTwitter className="fill-white w-6 h-6" />
				<a
					href="https://twitter.com/hopewaydesign"
					target="_blank"
					className="text-white"
				>
					Twitter
				</a>
			</li>
			<li className="social-link cursor-pointer">
				<IoLogoLinkedin className="fill-white w-6 h-6" />

				<a
					href="https://www.linkedin.com/in/thiago-morais-b00b84221/"
					target="_blank"
					className="text-white"
				>
					LinkedIn
				</a>
			</li>
		</ul>
	)
}
