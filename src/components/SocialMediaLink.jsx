export default function Link({ Icon, link, linkTitle }) {
	return (
		<li className="social-link cursor-pointer">
			{Icon}
			<a
				// href="https://twitter.com/hopewaydesign"
				href={link}
				target="_blank"
				className="text-white"
			>
				{linkTitle}
			</a>
		</li>
	)
}
