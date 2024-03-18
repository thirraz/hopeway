import { Toaster } from "react-hot-toast"
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
		<Toaster
			position="bottom-right"
			gutter={12}
			containerStyle={{ margin: "8px" }}
			toastOptions={{
				success: { duration: 3000 },
				error: { duration: 3000 },
				style: {
					fontFamily: '"Public Sans", sans-serif',
					padding: "16px 24px",
					backgroundColor: "#fff",
					color: "#000",
					fontWeight: "bold"
				}
			}}
		/>{" "}
	</React.StrictMode>
)
