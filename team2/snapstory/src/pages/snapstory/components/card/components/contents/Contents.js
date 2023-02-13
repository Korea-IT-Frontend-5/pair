import styled from 'styled-components';

function Contents() {
  return (
    <Content>
      <p>내용</p>
      <span>작성시간</span>
    </Content>
  )
}

export default Contents;

const Content = styled.div`
  flex: 1;
  span {
    display: block;
    margin-top: 5px;
    font-size: 11px;
    color: #bbb;
  }
  /* background-color: green; */
`;