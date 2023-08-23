function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Port : 587,
	Username :'lazydesigner54@gmail.com',
	Password : 'vrporvdmvsohldsu',
	To : 'vaish139@gmail.com',
	From : "vaish139@gmail.com",
	Subject : "Demo email",
	Body : "email body",
	}).then(
		message => alert("mail sent OK")
	);
}
