import { useState } from "react";
function UseState() {
  // let count = 0;
  const [count, setCount] = useState(0);

  /*useState는 변수 react의 state로 관리하는 함수
  [변수명, 바꿀 수 있는 순수함수]=useState(기본값)
  Let/const 변수명 = 기본값;
  */
  const onAddNumber = () => {
    // count++;
    setCount(count + 1);
    // console.log(count);
  };

  const onMinusNumber = () => {
    setCount(count - 1);
  };
  console.log(count);
  // console.log(count); // console가 찍히지 않음
  return (
    <div>
      <button onClick={onAddNumber}>추가</button>
      {count}
      <button onClick={onMinusNumber}>삭제</button>
    </div>
  );
}

export default UseState;

// 컴포넌트 나누는 기준 렌더링 최적화
// atomic 디자인 유지보수 하기에 너무 많아져 현실상 불가능 시도는 좋지만 현실적 x
// 개발자는 스스로 탐구 생각,
// 어떻게 설명하는가가 중요!
// 유지보수 쉽게 단일책임 원칙
// 컴포넌트 구분에 답은 없지만 정도는 있어야 함
// 렌더링 체크 프로그램 크롬np 확장 프로그램
