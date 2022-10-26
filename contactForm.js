// DOM selecetion
const form = document.querySelector("form");
const fullNameElm = document.querySelector(".fullName");
const fNameMsg = document.querySelector(".fNamemsg");
const inputEmailElm = document.querySelector(".inputEmail");
const inputEmailMsg = document.querySelector(".inputemailmsg");
const phoneNumberElm = document.querySelector(".phoneNumber");
const phoneNumberMsg = document.querySelector(".phonenumbermsg");
const passwordElm = document.querySelector(".password");
const strongPasswordElm = document.querySelector(".strongPassword");
const copyTextElm = document.querySelector(".copyText");
const showPasswordElm = document.querySelector(".showPassword");
const strongPassordMsg = document.querySelector(".strongpasswordmsg");
const geneartePasswordElm = document.querySelector(".generategPassword");
const geneartePasswordMsg = document.querySelector(".generatePasswordmsg");
const genPassword = document.querySelector(".Gen-password");
const validUrlElm = document.querySelector(".validUrl");
const validUrlMsg = document.querySelector(".validurlmsg");
const submitBtnElm = document.querySelector(".submitBtn button");
const generatPassParent = document.querySelector(".passwordGenerator");
const passwordGenerateField = document.querySelector("#generated");
// console.log(passwordGenerateField);
const passGenMsg = document.querySelector("#generateMsg");
const passwordField = document.querySelector("#password");
const passwordMsg = document.querySelector("#passwordMsg");
const confirmPassField = document.querySelector("#confirm");
const conPassMsg = document.querySelector("#confirmMsg");
const conedPassMsg = document.querySelector("#confirmedMsg");

// getting regular expression
let fullNameRegx = /^[a-zA-Z\s]+$/gi;
let phoneNumberRegex = /\+?(88)?01[6-9]\d-?\d{3}-?\d{4}/;
let emailReg = /\w{2,20}@\w{2,20}\.\w{2,5}/;
let paasswordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[=@<&:.%#$*!?;,]).{10,20}/;
let urlRegex = /(http:\/\/|https:\/\/|www.)?\w{2,20}\.\w{2,3}/;

function receiveInput() {
  const inputuserName = fullNameElm.value;
  const inputEmail = inputEmailElm.value;
  const inputPhoneNumber = phoneNumberElm.value;
  const inputPassword = strongPasswordElm.value;
  const inputUrl = validUrlElm.value;

  return {
    inputuserName,
    inputEmail,
    inputPhoneNumber,
    inputPassword,
    inputUrl,
  };
}

function showMessage(msg, action = "success") {
  const textMsg = `<div class="alert alert-${action}" role="alert">
        ${msg}
      </div>`;
  fNameMsg.insertAdjacentHTML("afterbegin", textMsg);
}

function validateInput(
  inputuserName,
  inputEmail,
  inputPhoneNumber,
  inputPassword,
  inputUrl
) {
  //let isValid = true;
  if (fullNameRegx.test(inputuserName)) {
    fNameMsg.textContent = "";
  } else {
    fNameMsg.textContent = "invalid Name";
  }

  if (phoneNumberRegex.test(inputPhoneNumber)) {
    phoneNumberMsg.textContent = "";
  } else {
    phoneNumberMsg.textContent = "invalid Number";
  }

  if (emailReg.test(inputEmail)) {
    inputEmailMsg.textContent = "";
  } else {
    inputEmailMsg.textContent = "invalid email";
  }

  if (paasswordRegex.test(inputPassword)) {
    strongPassordMsg.textContent = "";
  } else {
    strongPassordMsg.textContent = "invalid Password";
  }

  if (urlRegex.test(inputUrl)) {
    validUrlMsg.textContent = "";
  } else {
    validUrlMsg.textContent = "invalid URL";
  }
}

function reserInput() {
  fullNameElm.value = "";
  inputEmailElm.value = "";
  phoneNumberElm.value = "";
  strongPasswordElm.value = "";
  validUrlElm.value = "";
}

function handleFormSubmit(evt) {
  evt.preventDefault();

  // receiving value
  const {
    inputuserName,
    inputEmail,
    inputPhoneNumber,
    inputPassword,
    inputUrl,
  } = receiveInput();

  // checking validation
  validateInput(
    inputuserName,
    inputEmail,
    inputPhoneNumber,
    inputPassword,
    inputUrl
  );
  // reset values
  reserInput();
}

// functions for generating and copying password
function createPassword(len = 12) {
  const chars =
    "abcdefghijklmnopqrstuvwxyz123456789001234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ!§$%&/?#+-_@(){}[]:;<>*";
  const arr = new Uint32Array(len);
  const maxRange = Math.pow(2, 32);
  let passwd = "";
  window.crypto.getRandomValues(arr);

  for (let i = 0; i < len; i++) {
    let c = Math.floor((arr[i] / maxRange) * chars.length + 1);
    passwd += chars.charAt(c);
  }
  return passwd;
}
function generatePassword() {
  passwordGenerateField.value = createPassword();
  //showMessage("Pasword generated", "green", passGenMsg);
}
function copyPassword() {
  if (passwordGenerateField.value) {
    console.log("copiedd");
    passwordGenerateField.select();
    passwordGenerateField.setSelectionRange(0, 99);
    document.execCommand("copy");
    //showMessage("Pasword copied", "green", passGenMsg);
    passwordGenerateField.value = "";
  } else {
    //showMessage("Nothing found to copy", "red", passGenMsg);
    console.log("copied");
  }
}

function generateAndCopyPassword(evt) {
  if (evt.target.classList.contains("generate")) {
    console.log("generate");
    generatePassword();
  }
  if (evt.target.classList.contains("copy")) {
    console.log("generate");
    copyPassword();
  }
}

generatPassParent.addEventListener("click", generateAndCopyPassword);

form.addEventListener("submit", handleFormSubmit);
