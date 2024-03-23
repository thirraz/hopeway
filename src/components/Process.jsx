export default function Process({ imgSrc, icon }) {
	return (
		<div className="px-5 py-8 text-white space-y-3 rounded-lg bg-white bg-opacity-[8%]">
			<h3 className="flex justify-center gap-5 text-3xl uppercase font-bold">
				Design {icon}
			</h3>

			<img src={imgSrc} className="max-w-72 w-72  rounded-xl mx-auto" />
		</div>
	)
}
