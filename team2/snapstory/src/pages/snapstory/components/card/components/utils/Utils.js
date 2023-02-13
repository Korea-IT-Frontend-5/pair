import styled from 'styled-components';
import Button from 'components/common/button/Button';

function Utils() {
  return (
    <>
     <UtilsWrap>
       <UserWrap>
         <img src="" alt="" />
         <span>이름</span>
        </UserWrap>
        <div>
          <Button children={"수정"} />
          <Button children={"삭제"} />
        </div>
     </UtilsWrap>
    </>
  )
}

export default Utils;

const UtilsWrap = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  height: 44px ;
`;

const UserWrap = styled.div`
  display: flex;
  align-items: flex-end;
  img {
    display: block;
    overflow: hidden;
    width: 44px;
    height: 44px;
    margin-right: 15px;
    border: 0;
    border-radius: 50%;
    /* background-color: red;*/
  }
  p {
    font-size: 18px;
    font-weight: bold;
  }
`