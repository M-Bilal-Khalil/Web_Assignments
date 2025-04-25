const form = document.getElementById("form");

function generateUserId() {
  const prefix = String.fromCharCode(65 + Math.floor(Math.random() * 26));
  const number = Math.floor(1000 + Math.random() * 9000);
  return `${prefix}${number}`;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  console.log(event.target.name.value);
  console.log(event.target.email.value);
  console.log(event.target.password.value);
  console.log(event.target["user-id"].value);
  console.log(event.target.address.value);
  console.log(event.target.phone.value);

  event.target.reset();

  document.getElementById("user-id").value = generateUserId();
});

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("user-id").value = generateUserId();
});
