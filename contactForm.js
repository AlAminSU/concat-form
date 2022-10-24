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
const validUrlElm = document.querySelector(".validUrl");
const validUrlMsg = document.querySelector(".validurlmsg");
const submitBtnElm = document.querySelector(".submitBtn button");

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

  reserInput();
}

form.addEventListener("submit", handleFormSubmit);
