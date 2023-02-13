import styled from 'styled-components';
import Button from 'components/common/button/Button'

function Regist() {
  return (
    <CommTextArea>
      <input type="text" />
      <Button children={"등록"}/>
    </CommTextArea>
  )
}

export default Regist;

const CommTextArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    margin-right: 5px;
  }
`