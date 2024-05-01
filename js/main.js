form = document.querySelector("form");
submitBtn = document.querySelector('button[type="submit"]');
password = document.querySelector("#password");
confirmPassword = document.querySelector("#confirm_password");
errorMsg = document.querySelector(".error-msg");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  // run default validation
  form.reportValidity();

  // check if passwords match
  if (password.value !== confirmPassword.value) {
    password.setCustomValidity("Passwords do not match.");
    confirmPassword.setCustomValidity("Passwords do not match.");
    errorMsg.style.visibility = "visible";
  } else {
    form.submit();
  }
})