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
		if (!formData.messageTitle) {
			setErrorMessage("Message Title is required");
			return;
		}

		if (!formData.message) {
			setErrorMessage("Message is required");
			return;
		}

		if (!formData.email || !validateEmail(formData.email)) {
			setErrorMessage("Please enter a valid email address");
			return;
		}

		if (!formData.guestName) {
			setErrorMessage("Guest Name is required");
			return;
		}

		// Reset previous messages
		setSuccessMessage("");
		setErrorMessage("");

		try {
			const response = await fetch(
				`https://k127r6dtwg.execute-api.us-east-1.amazonaws.com/prod/contact-form/${formData.email}`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						messageTitle: formData.messageTitle,
						message: formData.message,
						phone: formData.phone || "000000", // Set default phone value
						guestName: formData.guestName,
					}),
				}
			);

			const data = await response.json();

			if (response.ok) {
				setSuccessMessage(data.message);
				// Clear form fields after successful submission
				setFormData({
					messageTitle: "",
					message: "",
					email: "",
					guestName: "",
					phone: "",
				});
			} else {
				setErrorMessage(
					data.error || "An error occurred while submitting the form."
				);
			}
		} catch (error) {
			console.error("Error calling Lambda function:", error);
			setErrorMessage("An error occurred while submitting the form.");
		}
	};

	// Email validation function
	const validateEmail = (email) => {
		const re = /\S+@\S+\.\S+/;
		return re.test(email);
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
