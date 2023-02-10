import React from 'react';
import Button from 'components/common/button/Button';

function Utils() {
  return (
    <>
     <div>
       <div>
         <img src="" alt="" />
         <span>이름</span>
        </div>
        <div>
          <Button children={"수정"} />
          <Button children={"삭제"} />
        </div>
     </div>
    </>
  )
}

export default Utils
