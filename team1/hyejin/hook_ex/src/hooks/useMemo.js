import { useMemo, useState, useRef } from "react";

function UseMemo() {
  const [state1, setState1] = useState(false);
  const [state2, setState2] = useState(false); // button 유지에 대한 것
  const arr = useRef([1, 2, 3, 4]);

  const MemoCount = useMemo(() => {
    arr.current.push(arr.length + 1);
    console.log(arr);
    return arr.current;
  }, [state1]);

  // state1을 누를 때마다 콘솔로그 찍힘
  //유지 버튼 누르면 콘솔로그 찍히지 않음
  //state1이 바뀔 때마다 재연산하므로 state2가 바뀌면 값 캐싱 대신 state1값은 유지 됨 (렌더링 되어도)

  // arr.push(arr.length + 1); 이게 실행되었어도 이미 렌더링이 되기 이전에
  //이 과정을 기억하고 리턴 값을 기억하고 있다가
  //렌더링이 되어도 이 과정을 거치지 않고 결과 값만 주는 것
  /*console.log(arr);
    return arr;*/

  // 특정한 상황= 다시 연산을 해야 할 경우 []에 state를 넣으면 state가 바뀔 때 마다 연산을 다시함
  // 의존성 배열 []에 state가 없다면 연산을 다시 안함 어떠한 렌더링이 되어도 연산을 하지 않음

  // 렌더링이 되어도 값을 기억하고 있다가 연산을 하지말자 = > useMemo

  /*
  본래 렌더링이 되었을 때 
  함수 내 모든 기능, 연산 및 변수 선언을 다시 하게 됨 
  그래서 useMemo가 없다면 재연산이 필요 없는 부분도 다시 연산을 하게 됨
  지금을 예시로 들면 
  arr.push(arr.Length +1 )은 첫 렌더링 이후에는 다시는 연산하지 않아도 되는 값 
  이유는 나는 길이가 4인 배열의 길이를 보여주고 싶은 것이 아니라 
  처음 렌더링 시 길이가 5인 배열을 보여주고 싶다. 
  그리고 해당 값은 렌더링 되어도 5가 유지 된다.

  <핵심> 

  => **한 번 렌더링 이후로 연산할 필요가 없다. (렌더링 최적화, 렌더링 시간을 감소 시킬 수 있다.)
  => 그러나 특정 state가 바뀌었을 때는 해당 연산을 다시 해야만 한다
  그렇다면 의존성 배열에 해당 state 값을 넣어서 그 state가 변경되었을 때만 연산을 재실행 시킬 수 있다.
  */

  // arr.push(5);
  // const MemoCount = arr;
  // console.log(arr); // (5) 결과 값이 달라지지 않음 렌더링이 될 때마다 연산이 이루어짐,
  //console로그로 결과는 렌더링이 되도 5로 유지 되어야 함
  //그러므로 값을 기억하고 있다가 연산을 하지말자 = > useMemo

  //const [count, setCount] = useState() --- x 항상 최상위 루트 혹은 렌더링 함수
  //훅 함수 안에 훅함수를 넣을 수 없음.
  //why? 훅함수는 항상 렌더링 컴포넌트 혹은 최상위 함수에 있어야 함 또다른 함수 안으로 들어갈 수 없음
  /* UseMemo = 연산된 결과 값을 반환하여 캐싱하고(저장)
    화면이 렌더링 되어도 연산 과정을 거치지 않고
    해당 값을 재사용할 수 있도록 해주는 함수 */
  // useMemo가 없어도 콘솔로 찍었을 때 count +1씩 실행됨
  // 첫 렌더링 때 연산을 해야하기 때문에 = useMemo 사용 count=0이므로 count를 1로 보여주고 싶으므로 반드시 연산을 거쳐야 함
  // 렌더링 될 때 한번은 걸쳐야 함 렌더링 될 때마다 연산이 되는 것이 아니라, 한 번 했을 때 반드시 보여줘야 함.
  // 5여야 함,

  /*첫 화면 렌더링 -> useMemo실행-> 의존성 배열 비어 있으면 -> 렌더링 되어도 실행 x 
  의존성 배열에 sate가 추가되면 -> 해당 state가 바뀔 때마다 실행 
  만약 useMemo가 없다면 값은 계속 똑같겠지만, 렌더링 될 때마다 해당 함수를 계속 실행하기 때문에 렌더링이 오래 걸린다.
  why? 의존성 배열인가, 배열이므로 다양한 값을 넣을 수 있음 
  단, 메모리냐 cpu냐 하는 것은 개발자의 이견에 따라 다르다
  캐싱도 코스트(비용)가 든다.
  의존성 배열 = 의존성 배열안에 값의 실행여부를 결정한다고 해서 의존성 배열   */
  return (
    <>
      <div>{MemoCount.length}</div>
      <button onClick={() => setState1((prev) => !prev)}>+</button>
      <button onClick={() => setState2((prev) => !prev)}>유지</button>
    </>
    /*유지버튼을 누르면 값을 유지 +버튼을 누를때마다 useMemo의 연산을 재실행 
+ 나 유지버튼을 누르면 화면 렌더링 됨 
+버튼만 눌렀을 때만 재연산을 했으면 좋겠다 =>의존성 배열에 state1을 넣고 state1이 바뀌었을 때마다 useMemo 재실행 시켜주면 
값은 바뀌지 않음 why? 함수를 재선언 하므로 (const arr= [1,2,3,4])
따라서 두가지 방법 =  함수를 빼거나 
두번째 방법 UseRef를 활용하는 방법  */
  );
}
export default UseMemo;

//렌더링이 될 때 렌더함수가 처음부터 끝까지 재실행된다.
// state가 바뀌면 렌더함수가 처음부터 끝까지 재실행
// useMemo는 연산이 오래 걸릴 때만 사용
// useMemo는 메모리와 cpu에 따라 결정 사용 여부
