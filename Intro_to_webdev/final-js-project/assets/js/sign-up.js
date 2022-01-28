const $form = document.getElementById("sign-up-form");
const $firstName = document.getElementById("first-name");
const $lastName = document.getElementById("last-name");
const $age = document.getElementById("age");
const $email = document.getElementById("email");
const $submit = document.getElementById("sign-up-button");
let messageEl = document.getElementById("message");
let message = "";

//modal
let x = document.getElementsByClassName("x-button")[0];
let modal = document.getElementById("modal");

x.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

$submit.addEventListener("click", () => {
  let firstName = $firstName.value.trim();
  let lastName = $lastName.value.trim();
  let age = $age.value.trim();
  let email = $email.value.trim();
  let valid = true;
  let count = 0;
  const emailPattern =
    /^(?=^.{8,}$)[-_A-Za-z0-9]+([_.-][a-zA-Z0-9]+)*@[A-Za-z0-9]+([.-][a-zA-Z0-9]+)*\.[A-Za-z]{2,}$/;

  if (firstName === "") {
    message += "First name is required\n";
    valid = false;
    count++;
  }

  if (lastName === "") {
    message += "Last name is required\n";
    valid = false;
    count++;
  }

  if (age === "") {
    message += "Age is required\n";
    count++;
  } else {
    let ageInt = parseInt(age);

    if (isNaN(age) || ageInt < 16 || ageInt > 120) {
      message += "Age is not valid\n";
      valid = false;
    }
  }

  if (email === "") {
    message += "email is required\n";
    valid = false;
    count++;
  } else {
    if (!emailPattern.test(email)) {
      message += "Email is not valid\n";
      valid = false;
    }
  }

  if (count > 3) {
    modal.style.display = "flex";
    messageEl.innerText = "All fields are required.";
  } else if (!valid) {
    modal.style.display = "flex";
    messageEl.innerText = message;
    message = "";
  } else {
    window.location.href = "index.html";
    console.log("hi");
  }
});
