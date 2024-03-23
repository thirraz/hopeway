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
					toast.success("MESSAGEM ENVIADA!")
				},
				() => {
					toast.error(
						"Ocorreu um erro... Caso persista, tente me contactar pelas redes sociais :)"
					)
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
						placeholder="SEU NOME"
						className="px-4 py-4 w-full bg-black text-white border-[1px] border-white text-lg rounded-[200px]  outline-none"
					/>

					<input
						required
						type="email"
						name="from_email"
						placeholder="SEU E-MAIL"
						className=" md:px-12 lg:px-16 py-4 w-full bg-black text-white border-[1px] border-white text-lg rounded-[200px] outline-none"
					/>
				</div>

				<textarea
					required
					name="message"
					placeholder="MENSAGEM"
					className="px-4 py-4 min-h-56 bg-black text-white border-[1px] border-white text-lg rounded-2xl outline-none"
				/>

				<button className="absolute bottom-0 right-0 md:bottom-0 md:left-[-140px] bg-white max-w-fit font-bold uppercase text-sm md:text-base py-9 px-[.9rem] px md:py-11 md:px-5 rounded-full rotate-[-15deg] active:border-[1px] border-white active:bg-black active:text-white hover:bg-slate-300 transform hover:translate-y-[-5px] transition-transform">
					Enviar <br /> Mensagem
				</button>
			</form>
		</>
	)
}
