import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Editor from '../components/Write/Editor';
import { changeField, initialize } from '../modules/write';
import { useLocation } from 'react-router-dom';

const EditorContainer = () => {
  const dispatch = useDispatch();
  const { title, text } = useSelector(({ write }) => ({
    title: write.title,
    text: write.text,
  }));

  const onChangeField = useCallback(payload => dispatch(changeField(payload)), [dispatch]);

  const location = useLocation();
  useEffect(() => {
    return () => {
      console.log(location, '여기서location을 찾자');
      dispatch(initialize());
    };
  }, [dispatch, location]);

  return <Editor onChangeField={onChangeField} title={title} text={text} />;
};

export default EditorContainer;
