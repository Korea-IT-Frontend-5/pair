import { useState } from 'react';

function UseState() {
  const [count, setCount] = useState(0);

  /* 
  useState는 변수를 react의 state로 관리하는 함수
  [변수명, 바꿀 수 있는 순수함수] = useState(기본값)
  let/const 변수명 = 기본값;
  */

  const onAddNumber = () => {
    // count++;
    setCount(count + 1);
  };

  const onMinusNumber = () => {
    setCount(count - 1);
  };

  console.log(count);

  // session 관리자(1), 회원(2), 비회원(3)
  // state  
  return (
    <div>
      <button onClick={onAddNumber}> 댓글 추가 </button>
      총 댓글 수 : {count}
      <button onClick={onMinusNumber}> 댓글 삭제 </button>
    </div>
  );
}
export default UseState;
