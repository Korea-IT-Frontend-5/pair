/* 
레시피 재료 추가하기
*/
function submit() {
  event.preventDefault();
  return false;
}
const form = document.getElementById("ingredient-form");
form.addEventListener("submit", submit);
const button = document.getElementsByTagName("button")[0];
button.addEventListener("click", add);
const input = document.getElementsByTagName("input");

const thead = document.getElementsByClassName("thead");
const table = thead[0].parentNode;
const ingredientList = document.getElementById("ingredient-list");
const submit_button = document.getElementById("submit_button");

const rowList = table.rows;
function add() {
  console.log(rowList);
  for (let i = 1; i < rowList.length; i++) {
    if (rowList[i].firstChild.innerHTML === input[0].value) {
      alert("재료가 중복됩니다");
      return false;
    }
  }
  if (input[0].value !== "" && input[1].value !== "") {
    const newRow = table.insertRow();
    const newCell1 = newRow.insertCell(0);
    const newCell2 = newRow.insertCell(1);
    const newCell3 = newRow.insertCell(2);

    newCell1.innerText = input[0].value;
    newCell2.innerText = input[1].value;
    newCell3.innerHTML = "<button>삭제</button>";
    newCell3.firstChild.addEventListener("click", deleteRow);
    input[0].value = "";
    input[1].value = "";
  } else {
    alert("값을 넣어주세요");
  }
}

function deleteRow(e) {
  const index = e.target.parentNode.parentNode.rowIndex;
  table.deleteRow(index);
}

submit_button.addEventListener("click", function () {
  const b = "ee";
  console.log("제출");
  for (let i = 1; i < rowList.length; i++) {
    const key = rowList[i].firstChild.innerHTML;
    const value = rowList[i].childNodes[1].innerHTML;
    const li = document.createElement("li");
    li.innerText = key + ":" + value;
    ingredientList.appendChild(li);
  }
});
