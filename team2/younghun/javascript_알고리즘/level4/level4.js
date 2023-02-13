/* 
페이지네이션 구현하기
기초 변수
let totalPage = 80;
let currentPageIndx = 0;
let currentPage = new URLSearchParams(location.search).get('page') || 1;

*/
let totalPage = 80; //전체 페이지
let currentPageIndx = 0;
let currentPage = new URLSearchParams(location.search).get("page") || 1;

let pageCount = 10;

let startPage = Math.floor((currentPage - 1) / pageCount) * pageCount + 1;

let endPage = startPage - 1 + pageCount;

let page_list = document.querySelector(".page_list");
for (let i = startPage; i <= endPage; i++) {
  let aNode = document.createElement("a");
  aNode.innerHTML = i;
  aNode.id = i;
  aNode.href = "?page=" + i;
  aNode.className = "nav_page";
  page_list.appendChild(aNode);
}
let nextPage = currentPage * 1 + 1;
let prePage = currentPage * 1 - 1;

let pre = document.querySelector(".pre");
let next = document.querySelector(".next");

if (currentPage * 1 !== 1) {
  pre.href = "?page=" + prePage;
}
if (currentPage * 1 !== totalPage) {
  next.href = "?page=" + nextPage;
}

let currentA = document.getElementById(currentPage);
currentA.className = "nav_page on";
console.log(currentA);
