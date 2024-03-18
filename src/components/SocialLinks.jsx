import { IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io"
import SocialMediaLink from "./SocialMediaLink"

export default function SocialLinks() {
	return (
		<ul className="max-w-[100dvw] list-none flex flex-wrap justify-center md:flex-col gap-y-2 gap-x-7 md:gap-4">
			<SocialMediaLink
				Icon={<IoLogoInstagram className="fill-white w-6 h-6" />}
				linkTitle="Instagram"
				link="https://www.instagram.com/hopewaydesign/"
			/>
			<SocialMediaLink
				Icon={<IoLogoTwitter className="fill-white w-6 h-6" />}
				linkTitle="Twitter"
				link="https://twitter.com/hopewaydesign"
			/>
			<SocialMediaLink
				Icon={<IoLogoLinkedin className="fill-white w-6 h-6" />}
				linkTitle="LinkedIn"
				link="https://www.linkedin.com/in/thiago-morais-b00b84221/"
			/>
		</ul>
	)
}
