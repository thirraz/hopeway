import { twMerge } from "tailwind-merge"

export default function Link({ Icon, link, linkTitle, className }) {
	return (
		<li
			className={twMerge("social-link cursor-pointer text-white", className)}
		>
			{Icon}
			<a
				// href="https://twitter.com/hopewaydesign"
				href={link}
				target="_blank"
			>
				{linkTitle}
			</a>
		</li>
	)
}
