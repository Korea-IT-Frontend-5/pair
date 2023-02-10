import GSGCard from "./Card/Card";

export const GSG_LIST = [
  {
    id: 1,
    title: "게시글1",
    content: "게시글내용1",
    state: false,
    edit: false,
  },
  {
    id: 2,
    title: "게시글2",
    content: "게시글내용2",
    state: false,
    edit: false,
  },
  {
    id: 3,
    title: "게시글3",
    content: "게시글내용3",
    state: false,
    edit: false,
  },
  {
    id: 4,
    title: "게시글4",
    content: "게시글내용4",
    state: false,
    edit: false,
  },
];

function GSGList() {

    return (
        <div>
            {/* {GSG_LIST.map((todo) => <GSGCard/>)} */}
            {GSG_LIST.map((todo) => {
              return <GSGCard key={todo.id} todo={todo} example={"test"} />;
              // https://itprogramming119.tistory.com/entry/React-Warning-Each-child-in-a-list-should-have-a-unique-key-prop-%ED%95%B4%EA%B2%B0-%EB%B0%A9%EB%B2%95
            })}
            {/*
            상위 컴포넌트에서 하위 컴포넌트로 데이터를 전달하기 위해
            props(속성)을/를 이용하여 데이터를 전달 
             */}
        </div>
    );
}
export default GSGList;