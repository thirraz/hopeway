export default function ContactsContainer({ children }) {
	return (
		<div className="max-w-[100dvw] flex flex-col items-center gap-7 md:items-start md:flex-row md:justify-between">
			{children}
		</div>
	)
}
