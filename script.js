document.getElementById('forms').addEventListener('submit', function(event) {
  event.preventDefault();

    let hasError = false;

    const name = document.getElementById("name").value;
    if (name === "") {
      document.getElementById('nameError').innerText = "Incorrect Name!";
      hasError = true;
    } else {
      document.getElementById('nameError').innerText = "";
    }

    const email = document.getElementById("email").value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      document.getElementById("emailError").innerText = "Incorrect email!";
      hasError = true;
    } else {
      document.getElementById("emailError").innerText = "";
    }

    const contact = document.getElementById("contact").value;
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(contact)) {
      document.getElementById("contactError").innerText =
        "Incorrect contact no!";
      hasError = true;
    } else {
      document.getElementById("contactError").innerText = "";
    }

    const age = Number(document.getElementById("age").value);
    if (isNaN(age) || age < 1 || age > 120) {
      document.getElementById("ageError").innerText = "Incorrect age!";
    } else {
      document.getElementById("contactError").innerText = "";
    }
    const pass = document.getElementById("password").value;
    const passCorrect = document.getElementById("confirmpassword").value;
    if (pass.length < 6) {
      document.getElementById("passwordError").innerText =
        "Incorrect password!";
      hasError = true;
    } else {
      document.getElementById("passwordError").innerText = "";
    }

    if (pass !== passCorrect) {
      document.getElementById("confirmpasswordError").innerText =
        "Incorrect, password not matched!";
      hasError = true;
    } else {
      document.getElementById("passwordError").innerText = "";
    }

    const fields = ["dob", "gender", "address", "city"];
    fields.forEach((field) => {
      if (document.getElementById(field).value === "") {
        document.getElementById(field + "Error").innerText =
          "This field is required";
        hasError = true;
      } else {
        document.getElementById(field + "Error").innerText = "";
      }
    });

    if (!hasError) {
      alert("Form submitted successfully!");
      document.getElementById('forms').value = '';
    }
  });
