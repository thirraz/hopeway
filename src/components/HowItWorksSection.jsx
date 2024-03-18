import Step from "./Step"
import StepsContainer from "./StepsContainer"
import EmailForm from "./EmailForm"
import SocialLinks from "./SocialLinks"
import Subheading from "./Subheading"
import ContactsContainer from "./ContactsContainer"

const stepsData = [
	{
		stepNumber: 1,
		stepName: "Market Research",
		stepProcess:
			"We will analyse your market, understand your competition, and discover customer needs."
	},
	{
		stepNumber: 2,
		stepName: "Design & Develop",
		stepProcess:
			"The creation of your website that will make your brand stand out."
	},
	{
		stepNumber: 3,
		stepName: "Launch",
		stepProcess: "Get your site live and make your business standout!"
	}
]

export default function HowItWorksSection() {
	// const item = {
	// 	hidden: { y: 100 },
	// 	show: index => ({
	// 		y: 0,
	// 		transition: {
	// 			delay: 0.3 * index,
	// 			duration: 1,
	// 			ease: [0.6, 0.01, -0.05, 0.95]
	// 		}
	// 	})
	// }

	return (
		<section className="max-w-[100dvw] flex flex-col gap-24 px-4 md:px-0">
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
