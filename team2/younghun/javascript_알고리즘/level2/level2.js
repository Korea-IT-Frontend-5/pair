import { RESERVATION_LIST } from "./reservation .js";

function getParameter(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function search() {
  let cnt = 0;
  const p = document.getElementById("reservation-number");
  for (let i = 0; i < RESERVATION_LIST.length; i++) {
    if (
      getParameter("user-name") === RESERVATION_LIST[i].name &&
      getParameter("user-phone") === RESERVATION_LIST[i].phone
    ) {
      cnt++;
      p.innerHTML = RESERVATION_LIST[i].number;
    }
  }
  if (cnt === 0) {
    alert("예약 인원에 없습니다");
  }
}
if (window.location.search !== "") {
  search();
}

/* 
예약 고객확인하기


*/
