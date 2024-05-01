form = document.querySelector("form");
submitBtn = document.querySelector('button[type="submit"]');

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  // run default validation
  form.reportValidity();
})