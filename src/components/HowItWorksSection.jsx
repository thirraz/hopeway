import Step from "./Step"
import StepsContainer from "./StepsContainer"
import EmailForm from "./EmailForm"
import SocialLinks from "./SocialLinks"
import Subheading from "./Subheading"
import ContactsContainer from "./ContactsContainer"

const stepsData = [
	{
		stepNumber: 1,
		stepName: "Pesquisa de mercado",
		stepProcess:
			"Vamos entender a competição e descobrir o que os clientes procuram."
	},
	{
		stepNumber: 2,
		stepName: "O trabalho começa aqui",
		stepProcess:
			"Trata-se da criação do site que o fará se destacar na sua área."
	},
	{
		stepNumber: 3,
		stepName: "Lançamento do site",
		stepProcess: "O site ficará online, e aberto para novos clientes!"
	}
]

export default function HowItWorksSection() {
	return (
		<section className="max-w-[100dvw] flex flex-col gap-10 md:gap-24  md:px-12 lg:px-16">
			<div className="flex gap-4">
				<Subheading />
			</div>
			<StepsContainer>
				{stepsData.map(({ stepName, stepNumber, stepProcess }, i) => (
					<Step
						key={stepNumber}
						stepNumber={stepNumber}
						stepName={stepName}
						stepProcess={stepProcess}
						custom={i}
					/>
				))}
			</StepsContainer>
			<ContactsContainer>
				<SocialLinks />
				<EmailForm />
			</ContactsContainer>
		</section>
	)
}
