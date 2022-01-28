let modal = document.getElementById("modal");
let logIn = document.getElementById("log-in");
let x = document.getElementsByClassName("x-button")[0];

logIn.onclick = function () {
  modal.style.display = "block";
};

x.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//redirect portion
const google = document.getElementById("google");
const bing = document.getElementById("bing");
const textBox = document.getElementById("text-box");

google.addEventListener("click", () => {
  window.location.href = "https://google.com/search?q=" + textBox.value.trim();
});

bing.addEventListener("click", () => {
  window.location.href = "https://bing.com/search?q=" + textBox.value.trim();
});

//logging in
const username = document.getElementById("username");
const password = document.getElementById("password");
const submit = document.getElementById("submit");
const signUp = document.getElementById("sign-up");
const passwordErrorDiv = document.getElementById('password-error');
const passwordErrorText = document.getElementById('password-error-text');
google.disabled = true;
bing.disabled = true;

submit.addEventListener("click", () => {
  if (username.value === "guest-1" && password.value === "password123") {
    google.disabled = false;
    bing.disabled = false;
    modal.style.display = "none";
    logIn.innerText = "Logged in";
    logIn.style.pointerEvents = "none";
    signUp.style.display = "none";
  } else if (username.value === "" || password.value === "") {
    passwordErrorText.innerText = "Fields can not be empty";
    passwordErrorDiv.style.display = "flex";
  } else {
    passwordErrorText.innerText = "Sorry the username or password is incorrect.";
    passwordErrorDiv.style.display = "flex";
  }
});
