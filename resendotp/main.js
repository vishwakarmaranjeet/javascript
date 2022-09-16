const otp = document.getElementById("otp");

otp.innerHTML = "Send OTP";
let initial = 59;
let timer = initial;
let intervalID;

const enabledDisabaledOtpBtn = (isDisabled) => {
  if (!isDisabled) {
    otp.innerHTML = `Resend OTP ${timer--}`;
    otp.disabled = true;
  } else {
    otp.innerHTML = `Send OTP`;
    otp.disabled = false;
  }
};

const otpCounter = () => {
  intervalID = setInterval(() => {
    if (timer < 1) {
      timer = initial;
      clearInterval(intervalID);
      enabledDisabaledOtpBtn(true);
    } else {
      enabledDisabaledOtpBtn(false);
    }
  }, 1000);
};

otp.addEventListener("click", otpCounter);
