const toggleButton = document.querySelector("#toggle-button");
const password = document.querySelector("#password");

toggleButton.addEventListener("click", function () {
  if (password.type === "password") {
    password.type = "text";
    toggleButton.innerText = "Passwort verbergen";
  } else {
    password.type = "password";
    toggleButton.innerText = "Passwort anzeigen";
  }
});
