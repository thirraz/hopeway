import { GoLinkExternal } from "react-icons/go"

export default function ProjectButton({ siteLink, selfStart }) {
	return (
		<a
			href={siteLink}
			target="_blank"
			className={`
			flex justify-center items-center
			 gap-2 px-8 py-2 bg-white font-semibold text-black
			 rounded-lg hover:bg-[hsl(0,0%,87%)] 
			 transform hover:translate-y-[-3px] transition-all self-center 
			 max-w-fit ${selfStart ? "lg:self-start" : "lg:self-end"}`}
		>
			Visitar site{" "}
			<span>
				<GoLinkExternal />
			</span>
		</a>
	)
}
