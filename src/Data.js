// const Board = [
//   {
//     id: 1,
//     title: '제목1',
//     text: '내용1',
//   },
//   {
//     id: 2,
//     title: '제목2',
//     text: '내용2',
//   },
// ];

// export default Board;

// import { useRef, useState } from 'react';

// const Board = () => {
//   const [boards, setBoards] = useState([
//     {
//       id: 1,
//       title: '제목1',
//       text: '내용1',
//     },
//     {
//       id: 2,
//       title: '제목2',
//       text: '내용2',
//     },
//   ]);

//   const nextId = useRef(3);

//   const nextBoard = {
//     id: nextId.current,
//     title: 'g',
//     text: 'gw',
//   };
//   setBoards(boards.concat(nextBoard));
//   nextId.current += 1;
// };

// export default Board;

const boardList = [
  {
    id: 1,
    title: '첫번째 게시글입니다.',
    text: '첫번째 게시글 내용입니다.',
  },
  {
    id: 2,
    title: '두번째 게시글입니다.',
    text: '두번째 게시글 내용입니다.',
  },
];

const getPostId = no => {
  const array = boardList.filter(x => x.no === no);
  if (array.length === 1) {
    return array[0];
  }
  return null;
};

export { boardList, getPostId };
