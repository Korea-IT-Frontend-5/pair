/*
배열 나누기
함수 division 특정한 배열을 내가 원하는 원소의 갯수를 길이로 가진 배열들로 분해하려고한다
이후, 해당 배열들을 요소로 갖는 배열을 반환한다
ex) 길이기 80인 배열은 길이가 5로 분해한다면 16개의 배열을 요소로 갖는 배열을 반환한다
*/
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function division(arr, num) {
  const array = [];
  let tmp = [];
  let cnt = 0;
  for (let i = 0; i < arr.length; i++) {
    if (cnt !== num) {
      tmp.push(arr[i]);
      cnt++;
      console.log(i, cnt, tmp, arr[i]);
    } else {
      array.push(tmp);
      tmp = [];
      tmp.push(arr[i]);
      cnt = 1;
      console.log(i, cnt, tmp, arr[i]);
    }
    if (i === arr.length - 1) {
      array.push(tmp);
    }
  }
  return array;
}

console.log(division(arr, 3));
// divition(arr, 2); === [ [1,2], [3,4], [5] ]
