import { RESERVATION_LIST } from "./reservation.js";
console.log(RESERVATION_LIST);

/* 
예약 고객확인하기
*/
window.addEventListener("DOMContentLoaded", function() {

  let userNameValue , userPhoneValue;
  let userName = document.getElementsByName('user-name');
  let userPhone = document.getElementsByName('user-phone');
  const reservationNum = document.getElementById('reservation-number');

  userName[0].addEventListener("change", function() {
    userNameValue = this.value;
    console.log(userNameValue);
  });
  userPhone[0].addEventListener("change", function() {
    userPhoneValue = this.value;
    console.log(userPhoneValue);
  });
  
  const checkBtn = document.querySelector('.btn_check');
  checkBtn.addEventListener("click", function() {
    // 1. 이름 & 번호가 있는지 확인 
    // 2. 이름 & 번호가 짝을 이루는지 확인
    // 3. 그 외
    let result = RESERVATION_LIST.map((item) => {
      if ((item.name === userNameValue) || (item.phone === userPhoneValue)) {
        if ((item.name === userNameValue) && (item.phone === userPhoneValue)) {
          return item.number;
        } else {
          console.log('검색할 수 없습니다');
          return'검색할 수 없습니다';
        }
      } else {
        return '일치하는 항목이 없습니다';
      }
    })
    reservationNum.innerText = result;
  });

})

  