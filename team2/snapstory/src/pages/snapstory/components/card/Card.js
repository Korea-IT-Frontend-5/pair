import styled from 'styled-components';
import Comment from './components/comment/Comment'
import Contents from './components/contents/Contents'
import Regist from './components/regist/Regist'
import Swiper from './components/swiper/Swiper'
import Utils from './components/utils/Utils'

function Card() {
  return (
    <ListView>
      <Section>
        <Utils />
        <ContWrap>
          <Swiper/>
          <Contents/>
        </ContWrap>
        <Section>
          <Comment/>
          <Regist/>
        </Section>
      </Section>
    </ListView>
  )
}

export default Card;

const ListView = styled.div`
  width: 400px;
  margin: 10px;
  padding: 20px;
  border-radius: 20px;
  border: 1px solid #f2f2f2;
  box-shadow: 0 2px 4px rgba(0 0 0 / 10%), 0 8px 16px rgba(0 0 0 / 10%);
  
  @media only screen and (min-width: 1320px) {
    display: flex;
    justify-content: space-around;
    width: 640px;
  }
`;

const ContWrap = styled.div`
  display:flex;
  margin-top: 10px;
  // background-color: pink;
`;
const Section = styled.div`
  &:last-of-type {
    margin: 10px 0 0;
  }
  @media only screen and (min-width: 1320px) {
    width: calc(65% - 15px);
    & + & {
      width: 35%;
    }
    &:last-of-type {
      margin: 0;
    }
  }
`;