import { toast } from "react-hot-toast"
import { useRef } from "react"
import { apiInfos } from "../../apiInfos"
import emailjs from "@emailjs/browser"

const { publicKey, serviceKey, templateKey } = apiInfos

export default function EmailForm() {
	const form = useRef()

	function sendEmail(e) {
		e.preventDefault()

		emailjs
			.sendForm(serviceKey, templateKey, form.current, {
				publicKey: publicKey
			})
			.then(
				() => {
					toast.success("MESSAGE SENT!")
				},
				() => {
					toast.error("Some error occurred, please try later...")
				}
			)
	}

	return (
		<>
			<form
				ref={form}
				onSubmit={sendEmail}
				className="relative flex flex-col gap-5 w-full md:w-fit"
			>
				<div className="flex flex-col gap-3 md:flex-row ">
					<input
						required
						type="text"
						name="from_name"
						placeholder="YOUR NAME"
						className="px-4 py-4 w-full bg-black text-white border-[1px] border-white text-lg rounded-[200px]  outline-none"
					/>

					<input
						required
						type="email"
						name="from_email"
						placeholder="YOUR E-MAIL"
						className="px-4 py-4 w-full bg-black text-white border-[1px] border-white text-lg rounded-[200px] outline-none"
					/>
				</div>

				<textarea
					required
					name="message"
					placeholder="MESSAGE"
					className="px-4 py-4 min-h-56 bg-black text-white border-[1px] border-white text-lg rounded-2xl outline-none"
				/>

				<button className="absolute bottom-0 right-0 md:bottom-0 md:left-[-125px] bg-white max-w-fit font-bold uppercase text-sm md:text-base py-7 px-3 px md:py-9 md:px-5 rounded-full rotate-[-15deg] active:border-[1px] border-white active:bg-black active:text-white hover:bg-slate-300 transform hover:translate-y-[-5px] transition-transform">
					Send <br /> Message
				</button>
				{/* <motion.div
					initial={{ translateX: "150%" }}
					animate={
						test
							? {
									translateX: ,
									transition: { duration: 0.8, ease: "anticipate" }
							  }
							: null
					}
					className="py-3 px-4 bg-green-200 text-black uppercase font-bold rounded-lg absolute bottom-2 right-0 flex gap-4 items-center"
				>
					<span>
						<IoCheckmarkCircleOutline className="w-7 h-7" />
					</span>
					<p>Message sent</p>
				</motion.div> */}
			</form>
		</>
	)
}
