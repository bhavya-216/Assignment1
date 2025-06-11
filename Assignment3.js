document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registrationForm");
  form.addEventListener("submit", validateForm);
});

function validateForm(event) {
  event.preventDefault();

  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  alert("Form submitted successfully!");
  event.target.submit();
}

function togglePasswordVisibility() {
  const input = document.getElementById("confirmPassword");
  const icon = document.querySelector(".toggle-password");
  if (input.type === "password") {
    input.type = "text";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    input.type = "password";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
}
