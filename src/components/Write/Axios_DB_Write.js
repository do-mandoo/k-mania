// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import Editor from './Editor';

// function Axios_DB_Write() {
//   const [content, setContent] = useState({
//     title: '',
//     text: '',
//   });

//   const [viewContent, setViewContent] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:4001/api/get').then(response => {
//       setViewContent(response.data);
//     });
//   }, [viewContent]);

//   const submitReview = () => {
//     axios
//       .post('http://localhost:8000/api/insert', {
//         title: content.title,
//         text: content.text,
//       })
//       .then(() => {
//         alert('등록 완료!');
//       });
//   };

//   const getValue = e => {
//     const { name, value } = e.target;
//     setContent({
//       ...content,
//       [name]: value,
//     });
//   };

//   return (
//     <div>
//       <Editor
//         data='<p>hello world</p>'
//         onChange={e => {
//           const data = editor.getData;
//         }}
//       />
//     </div>
//   );
// }

// export default Axios_DB_Write;
