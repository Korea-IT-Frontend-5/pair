import { useCallback, useState } from "react";

function UseCallback() {
  const [count, setCount] = useState(0);
  const [state, setState] = useState(false); // 조건 추가

  const onAddNumber = useCallback(() => {
    if (!state) return; // state 값이 없으면(false이면) 연산하지 않음
    setCount(count + 1);
  }, [state, count]); // useCallback으로 감싸줄 것임
  // if usecallback 없이 + 버튼을 누르면 증가하는가? state값이 false이므로
  // 그냥 종료 활성화 버튼을 누름 그 상태에서 +버튼을 누르면 증가함
  // 이 함수는 처음에 렌더링 될 때 만들어지고 재선언이 되지 않음
  // 이 함수는 state값을 false로 기억되고 있음 즉 화면이 렌더링되어도 이 함수의 기억된 스코프의 값은 false고 true로 바뀌어도 false임
  // 어느 때 재선언 시켜주면 됨 = 따라서 [] state값을 넣어 state값에 따라 재실행 시켜주면 한번 밖에 되지 않음
  // count는 처음에 증가된 값을 기억하고 있음 따라서 [state, count]로 해야 함
  // 처음에 만들어진 값을 기억한다.

  const onMinusNumber = useCallback(() => {
    if (!state) return;
    setCount(count - 1);
  }, [state, count]);
  // console.log(count); // console가 찍히지 않음
  /*안에서 활용되는 state값을 의존성 배열에 넣어주면 된다.
  해당 함수와 연관 없는 state가 변동 되었을 때 
  해당 함수를 재선언할 필요는 없다 
  따라서 이를 캐싱하고 있다가 재선언하지 않고
  가져다가 사용하는 것을 useCallback이라 한다.
  렌더링 최적화의 장점
   
  <면접 질문>
  메모아이제이션을 이용한 메모리 최적화 
  리액트에서 렌더링을 최적화 할 수 있는 방법으로 어떤 것이있는가?
  usememo와 usecallback을 이용하여 어떻게 렌더링 최적화할 수 있을까요?
  
  
  렌더링 최적화
  코스트(비용)이 존재한다.
  강사님의 경우, 
  백엔드나 api 통신이 아닌 이상 사용하지 않는다. 
  캐싱으로 어딘가에 계속 자리를 차리하고 있으므로, 
  반면 계속 재선언 시키는 것은 캐싱되어 있지는 않지만 다시 계속 기억시키는 과정이 있음 
  */
  return (
    <>
      <div>
        <button onClick={onAddNumber}>+</button>
        {count}
        <button onClick={onMinusNumber}>-</button>
      </div>
      <button onClick={() => setState((prev) => !prev)}>
        {state ? "비활성화" : "활성화"}
      </button>
    </>
  );
}

export default UseCallback;
