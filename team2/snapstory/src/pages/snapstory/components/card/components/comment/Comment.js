import styled from 'styled-components';

function Comment() {
  return (
    <>
      <CommentList>
        <li>
          <p>댓글</p>
          <span>작성 시간</span>
        </li>
      </CommentList>
    </>
  )
}

export default Comment;

export const CommentList = styled.ul`
  margin-bottom: 5px;
  padding: 5px 0 5px 10px; 
  border-radius: 5px;
  background-color: #f2f2f2;
  .noDate {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 132px;
    p {
      font-size: 12px;
      padding: 10px 0;
      color: #777;
    }
  }
  ul {
    display: block;
    overflow-y: auto;
    height: 132px;
    li {
      font-size: 12px;
      padding: 10px 0;
      color: #777;
      & + li {
        border-top: 1px dotted #dbdbdb;
      }
      span {
        display: block;
        margin-top: 5px;
        font-size: 11px;
        color: #bbb;
      }
    }
  }
`