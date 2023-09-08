function triggerSms() {
  const napikey = document.getElementById("napikey").value
  const number = document.getElementById("phoneNumber").value
  const message = document.getElementById("message").value
  const flashSms = document.getElementById("flashSms").checked


  var data = JSON.stringify({
    "numberPhone": number,
    "message": message,
    "flashSms": flashSms
  });

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      console.log(this.responseText);
    }
  });

  xhr.open("POST", `https://api.nvoip.com.br/v2/sms?napikey=${napikey}`);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("Authorization", "access_token");

  xhr.send(data);
}