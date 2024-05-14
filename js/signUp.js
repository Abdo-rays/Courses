function getInputValues() {
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let password = document.getElementById("pass");
  let repeatPassword = document.getElementById("re_pass");
  let checkbox = document.getElementById("agree-term");
  return {
    name: name.value,
    email: email.value,
    password: password.value,
    repeatPassword: repeatPassword.value,
    checkbox: checkbox.checked,
  };
}
function validateInput(values) {
  let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  let passwordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;
  if (values.name == "") return "Please enter your name.";
  if (!emailRegex.test(values.email))
    return "Please enter a valid email address.";
  if (!passwordRegex.test(values.password))
    return "Please enter a password that meets the requirements.";
  if (values.password !== values.repeatPassword)
    return "The passwords do not match.";
  if (!values.checkbox) return "Please agree to the terms and conditions.";
  return "The input is valid.";
}
function handleSubmit(event) {
  event.preventDefault();
  let values = getInputValues();
  let result = validateInput(values);
  localStorage.setItem("name", getInputValues().name);
  localStorage.setItem("email", getInputValues().email);
  localStorage.setItem("password", getInputValues().password);
  alert(result);
}

let form = document.getElementById("register-form");
form.addEventListener("submit", handleSubmit);
