document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("myForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const email = document.getElementById("email").value;
      const confirmEmail = document.getElementById("confirm-email").value;

      console.log("Email Address:", email);
      console.log("Confirm Email Address:", confirmEmail);

      if (email !== confirmEmail) {
        document.getElementById("confirm-email-label").style.color = "red";
      } else {
        document.getElementById("confirm-email-label").style.color = "";
      }
    });
});
