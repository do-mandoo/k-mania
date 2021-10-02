import React, { useEffect, useRef } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import styled from 'styled-components';
import Category from './Category';

const EditorWrapper = styled.div`
  padding: 30px;
  background-color: #fff;
  .titleInput {
    outline: none;
    border: none;
    border-bottom: 1px solid #aaa;
    width: 100%;
    font-size: 20px;
    padding-bottom: 8px;
    margin-bottom: 32px;
  }
  .quillWrapper {
    .ql-editor {
      padding: 0;
      min-height: 320px;
      font-size: 18px;
      line-height: 1.5;
    }
    .ql-editor .ql-blank::before {
      left: 0px;
    }
  }
`;

const Editor = ({ title, text, onChangeField }) => {
  const quillElement = useRef(null);
  const quillInstance = useRef(null);

  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      placeholder: '내용을 작성하세요',
      modules: {
        // 더 많은 옵션 ('https://quilljs.com/docs/modules/toolbar/')참고
        toolbar: [
          [{ header: 1 }, { header: 2 }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['blockquote', 'code-block', 'link', 'image'],
        ],
      },
      theme: 'snow',
    });
    //quill에 text-change 이벤트 핸들러 등록
    const quill = quillInstance.current;
    quill.on('text-change', (delta, oldDelta, source) => {
      // if (source === 'user') {
      onChangeField({ key: 'text', value: quill.root.innerHTML });
      // }
    });
  }, [onChangeField]);

  const onChangeTitle = e => {
    onChangeField({ key: 'title', value: e.target.value });
  };

  return (
    // <></>
    <EditorWrapper>
      <input
        className='titleInput'
        placeholder='제목을 입력하세요'
        onChange={onChangeTitle}
        value={title}
      />
      <div className='quillWrapper'>
        <div ref={quillElement} />
      </div>
      <Category />
    </EditorWrapper>
  );
};

export default Editor;
