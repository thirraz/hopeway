export default function Process({ imgSrc, icon, processName }) {
	return (
		<div className="px-5 border-[1px] border-[#585858] py-8 text-white space-y-3 rounded-lg bg-white bg-opacity-[8%]">
			<h3 className="border-b-[1px] pb-1 px-4 w-fit mx-auto flex gap-5 text-3xl uppercase font-bold">
				{processName} {icon}
			</h3>

			<img src={imgSrc} className="max-w-72 w-72  rounded-xl mx-auto" />
		</div>
	)
}
