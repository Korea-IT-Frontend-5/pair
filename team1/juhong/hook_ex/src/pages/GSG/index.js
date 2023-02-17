import Button from "components/Button/Button";
import styled from "styled-components";
import { flexAlignCenter, flexCenter } from "styles/common";
import GSGList from "./components/List/GSGList";
import TodoFormModal from "./components/Modal/TodoForm";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast} from 'react-toastify';
import { useRef, useState } from "react";
import {GSG_LIST} from "./components/List/GSGList";

export const print = () => {
    console.log('반갑습니다');
};

function GSGPage() {

  const onAddTodo = new Promise((resolve) => {
    setTimeout(() => resolve('todo', 1000));  // 3초 뒤 무조건 성공시킴
  });


  const showToastMessage = () => {    // 화살표 함수
    toast.promise(onAddTodo, {
      pending: "게시글" + GSG_LIST.length + " 추가 LOADING",
      success: "게시글" + GSG_LIST.length + " 추가 SUCCESS",
      error: "게시글" + GSG_LIST.length + " 추가 ERROR",
    }); 
  };

  const [isShow, setIsShow] = useState(false);

  const AddGSGBtn = () => {
    // 리랜더링
    setIsShow((prev) => !prev);
    console.log("게시글 추가 버튼 선택됨")
    console.log(GSG_LIST.length+1)
  }

    return (
      <>
        {isShow && (
          <TodoFormModal
            showToastMessage={showToastMessage}
            setIsShow={setIsShow}
          />
        )}
        <S.Wrapper>
          <S.Container>
            <S.Title>게시글 List</S.Title>
            <S.Content>
              <GSGList />
            </S.Content>
            <S.ButtonBox>
              <Button variant={"primary"} size={"full"} onClick={AddGSGBtn}>
                추가
              </Button>
            </S.ButtonBox>
          </S.Container>
          <ToastContainer autoClose={2000} theme="colored" />
        </S.Wrapper>
      </>
    );
}
export default GSGPage;

// const test = 'test';
// export default test;
// export default 되어있는 경우 경로만 맞으면 내 마음대로 이름을 정해서 가지고 올 수 있구요
// export 되어있는 경우는 {} 구조분해할당을 통해 해당 export된 변수명 혹은 함수명 등을 이용하여 key값으로 가지고온다.

const Wrapper = styled.div`
  height: calc(100vh - 60px);
  padding-bottom: 60px;
  ${flexCenter};
`;

const Container = styled.div`
  width: 420px;
  height: 100%;
  background-color: ${({ theme }) => theme.PALETTE.white};
  border-radius: 8px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  position: relative;
`;

const Title = styled.h1`
  background-color: ${({ theme }) => theme.PALETTE.primary[300]};
  color: ${({ theme }) => theme.PALETTE.fontColor};
  padding-left: 32px;
  height: 32px;
  ${flexAlignCenter};
`;

const Content = styled.div`
  width: 100%;
  height: calc(100% - 32px);
  padding-bottom: 64px;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ButtonBox = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
`;

const S = {
  Wrapper,
  Container,
  Title,
  ButtonBox,
  Content,
};