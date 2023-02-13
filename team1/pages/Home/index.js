import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { flexCenter } from '../../styles/common';
import LoginForm from './components/Form/Login/Login';
import SignUpForm from './components/Form/SignUp/SignUp';

function HomePage() {
  let form = 'login';

  const onFormChnage = (e) => {
    const { innerText } = e.target;
    form = innerText.toLowerCase();
    console.log(form);
  };

  return (
    <S.Wrapper>
      <S.Header>
        <S.LoginSelector mode={form} onClick={onFormChnage}>
          LOGIN
        </S.LoginSelector>
        <S.SignUpSelector mode={form} onClick={onFormChnage}>
          SIGN
        </S.SignUpSelector>
      </S.Header>
      {form === 'login' ? <LoginForm /> : <SignUpForm />}
      {/* <a href="/todo">일반 투두페이지로 이동</a>
      <Link to="/todo">라우터로 투두페이지 이동</Link> */}
    </S.Wrapper>
  );
}
export default HomePage;

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  padding-bottom: 60px;
  ${flexCenter}
  flex-direction: column;
`;

const Header = styled.header`
  background-color: ${({ theme }) => theme.PALETTE.primary[300]};
  width: 360px;
  height: 48px;
  position: relative;
  display: flex;

  div {
    height: 100%;
    width: 50%;
    ${flexCenter}
    cursor: pointer;

    :hover {
      background-color: #e0e0e0;
    }
  }
`;


const LoginSelector = styled.div`
  background-color: ${({ mode }) => (mode === 'login' ? '#e0e0e0' : '#f5f5f5')};
`;

const SignUpSelector = styled.div`
  background-color: ${({ mode }) => (mode === 'signUp' ? '#e0e0e0' : '#f5f5f5')};
`;

const S = {
  Wrapper,
  Header,
  LoginSelector,
  SignUpSelector,
};
