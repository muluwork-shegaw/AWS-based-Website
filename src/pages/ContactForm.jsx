// ContactForm.jsx
import React, { useState } from "react";
import "./styles/ContactForm.css";

const ContactForm = () => {
	const [formData, setFormData] = useState({
		messageTitle: "",
		message: "",
		email: "",
		guestName: "",
		phone: "",
	});

	const [successMessage, setSuccessMessage] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const handleChange = (event) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		// Perform client-side validation
		if (
			!formData.messageTitle ||
			!formData.message ||
			!formData.email ||
			!formData.guestName
		) {
			setErrorMessage("All fields are required");
			return;
		}

		// Reset previous messages
		setSuccessMessage("");
		setErrorMessage("");

		// Assume 'your-lambda-api-endpoint' is the Lambda API endpoint
		try {
			const response = await fetch("your-lambda-api-endpoint", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			const data = await response.json();

			if (response.ok) {
				setSuccessMessage(data.message);
			} else {
				setErrorMessage(data.error);
			}
		} catch (error) {
			console.error("Error calling Lambda function:", error);
			setErrorMessage("An error occurred while submitting the form.");
		}
	};

	return (
		<div className="contact-form">
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="messageTitle"
					value={formData.messageTitle}
					onChange={handleChange}
					placeholder="Message Title"
				/>
				<textarea
					name="message"
					value={formData.message}
					onChange={handleChange}
					placeholder="Message"
				/>
				<input
					type="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					placeholder="Email address"
				/>
				<input
					type="text"
					name="guestName"
					value={formData.guestName}
					onChange={handleChange}
					placeholder="Guest Name"
				/>
				<input
					type="tel"
					name="phone"
					value={formData.phone}
					onChange={handleChange}
					placeholder="Phone (Optional)"
				/>
				<button
					type="submit"
					disabled={
						!formData.messageTitle ||
						!formData.message ||
						!formData.email ||
						!formData.guestName
					}
				>
					Submit
				</button>
			</form>
			{successMessage && (
				<p className="success-message">{successMessage}</p>
			)}
			{errorMessage && <p className="error-message">{errorMessage}</p>}
		</div>
	);
};

export default ContactForm;
