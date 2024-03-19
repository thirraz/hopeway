// import IconStar from "./IconStar"
import { MdStar } from "react-icons/md"

export default function vTestimonial() {
	return (
		<div className="px-5 py-4 bg-black border-[1px] border-white flex flex-col gap-4 md:max-w-[30rem] rounded-xl">
			<div className=" ">
				<p className="text-[16px] leading-normal">Alberto N.</p>
				<div className="flex">
					<MdStar className="fill-yellow-400 w-4" />
					<MdStar className="fill-yellow-400 w-4" />
					<MdStar className="fill-yellow-400 w-4" />
					<MdStar className="fill-yellow-400 w-4" />
					<MdStar className="fill-yellow-400 w-4" />
				</div>
			</div>
			<p className="text-[16px] text-stone-300 leading-normal">
				Eu sou leigo em programação e tinha um problema. A HopeWay resolveu
				essa demanda muito bem, sendo educados, úteis e competentes. Fizeram
				todos os ajustes necessários para uma boa entrega. Mantiveram a
				comunicação sempre fluindo, dando feedback constante. Recomendo
				vivamente o trabalho da HopeWay e se precisar deles novamente, vou
				chamá-los porque sei que serei super bem atendido.
			</p>
		</div>
	)
}
