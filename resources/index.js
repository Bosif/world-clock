function updateTime() {
  // Amsterdam
  let amsterdamElement = document.querySelector("#amsterdam");
  let amsterdamDateElement = amsterdamElement.querySelector(".date");
  let amsterdamTimeElement = amsterdamElement.querySelector(".time");
  let amsterdamTime = moment().tz("Europe/Amsterdam");

  amsterdamDateElement.innerHTML = amsterdamTime.format("MMMM Do YYYY");
  amsterdamTimeElement.innerHTML = amsterdamTime.format(
    "h:mm:ss [<small>]A[</small]"
  );

  // Seoul
  let seoulElement = document.querySelector("#seoul");
  let seoulDateElement = seoulElement.querySelector(".date");
  let seoulTimeElement = seoulElement.querySelector(".time");
  let seoulTime = moment().tz("Asia/Seoul");

  seoulDateElement.innerHTML = seoulTime.format("MMMM Do YYYY");
  seoulTimeElement.innerHTML = seoulTime.format("h:mm:ss [<small>]A[</small]");

  // Toronto
  let torontoElement = document.querySelector("#toronto");
  let torontoDateElement = torontoElement.querySelector(".date");
  let torontoTimeElement = torontoElement.querySelector(".time");
  let torontoTime = moment().tz("America/Toronto");

  torontoDateElement.innerHTML = torontoTime.format("MMMM Do YYYY");
  torontoTimeElement.innerHTML = torontoTime.format(
    "h:mm:ss [<small>]A[</small]"
  );
}
updateTime();
setInterval(updateTime, 1000);
