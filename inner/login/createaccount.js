var frmvalidator = new Validator("myform");
 frmvalidator.addValidation("FirstName","req","Please enter your First Name");
 frmvalidator.addValidation("FirstName","maxlen=20",
		"Max length for FirstName is 20");

 frmvalidator.addValidation("LastName","req","Please enter last name");
 frmvalidator.addValidation("LastName","maxlen=20");

 frmvalidator.addValidation("Email","req","Email is if you forget your password");
 frmvalidator.addValidation("Email","maxlen=50");
 frmvalidator.addValidation("Email","email");

 frmvalidator.addValidation("Phone","maxlen=50");

const myInput = document.querySelector('input[name="Phone"]');
