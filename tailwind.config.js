/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,jsx}"],
	theme: {
		fontFamily: {
			sans: "'Public Sans', sans-serif"
		},
		extend: {
			gridTemplateRows: {
				projects: "repeat(3,min-content)"
			},
			fontFamily: {
				Geist: "'Geist', sans-serif"
			}
		}
	},
	plugins: []
}
