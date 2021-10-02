import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Editor from '../components/Write/Editor';
import { changeField, initialize } from '../modules/write';

const EditorContainer = () => {
  const dispatch = useDispatch();
  const { title, text } = useSelector(({ write }) => ({
    title: write.title,
    text: write.text,
  }));

  const onChangeField = useCallback(payload => dispatch(changeField(payload)), [dispatch]);

  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);

  return <Editor onChangeField={onChangeField} title={title} text={text} />;
};

export default EditorContainer;
