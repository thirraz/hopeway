// import IconStar from "./IconStar"
import { MdStar } from "react-icons/md"

export default function Testimonial() {
	return (
		<div className="px-5 py-4 bg-black border-[1px] border-white flex flex-col gap-4 md:max-w-[30rem] rounded-xl">
			<div className=" ">
				<p className="text-[16px] leading-normal">Alberto N.</p>
				<div className="flex">
					{/* <IconStar />
					<IconStar />
					<IconStar />
					<IconStar />
					<IconStar /> */}
					<MdStar className="fill-yellow-400 w-4" />
					<MdStar className="fill-yellow-400 w-4" />
					<MdStar className="fill-yellow-400 w-4" />
					<MdStar className="fill-yellow-400 w-4" />
					<MdStar className="fill-yellow-400 w-4" />
				</div>
			</div>
			<p className="text-[16px] text-stone-400 leading-normal">
				I’m a layman in programming and had a problem. HopeWay solved this
				demand very well. It was polite, helpful and competent. Made all the
				necessary adjustments for a good delivery. Kept the communication
				always flowing, giving constant feedback. I strongly recommend the
				work of HopeWay and if I need it again, I will call them because I
				know I will be super well attended.
			</p>
		</div>
	)
}
