import { GoLinkExternal } from "react-icons/go"

export default function ProjectButton({ selfStart }) {
	return (
		<a
			href="#"
			className={`
			flex justify-center items-center
			 gap-2 px-8 py-2 bg-white font-semibold text-black
			 rounded-lg hover:bg-[hsl(0,0%,87%)] 
			 transform hover:translate-y-[-3px] transition-all self-center 
			 max-w-fit ${selfStart ? "lg:self-start" : "lg:self-end"}`}
		>
			See live site here{" "}
			<span>
				<GoLinkExternal />
			</span>
		</a>
	)
}
