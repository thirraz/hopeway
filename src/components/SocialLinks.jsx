import { IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io"
import SocialMediaLink from "./SocialMediaLink"
import { ImWhatsapp } from "react-icons/im"

export default function SocialLinks() {
	const iconClassName = "fill-white w-7 h-7"

	return (
		<ul className="max-w-[100dvw] list-none flex flex-wrap justify-center md:flex-col gap-y-2 gap-x-7 md:gap-4">
			<SocialMediaLink
				Icon={<IoLogoInstagram className={iconClassName} />}
				linkTitle="Instagram"
				link="https://www.instagram.com/hopewaydesign/"
			/>
			<SocialMediaLink
				Icon={<IoLogoTwitter className={iconClassName} />}
				linkTitle="Twitter"
				link="https://twitter.com/hopewaydesign"
			/>
			<SocialMediaLink
				Icon={<IoLogoLinkedin className={iconClassName} />}
				linkTitle="LinkedIn"
				link="https://www.linkedin.com/in/thiago-morais-b00b84221/"
			/>
			<SocialMediaLink
				Icon={<ImWhatsapp className="fill-green-900 w-7 h-7" />}
				linkTitle="WhatsApp"
				link="https://wa.me/5511993985592?text=Olá!%20Tenho%20interesse%20em%20aumentar%20meus%20lucros%20com%20um%20belo%20site!%20Pode%20me%20ajudar?"
				className="font-semibold bg-green-300 text-green-900 hover:bg-green-500"
			/>
		</ul>
	)
}
