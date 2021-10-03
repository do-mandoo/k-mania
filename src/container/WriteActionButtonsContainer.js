import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { writePost } from '../modules/write';
import WrithActionButtons from '../components/Write/WrithActionButtons';

const WriteActionButtonsContainer = ({ history }) => {
  const dispatch = useDispatch();
  const { title, text, post, postError } = useSelector(({ write }) => ({
    title: write.title,
    text: write.text,
    post: write.post,
    postError: write.postError,
  }));

  // 포스트 등록
  const onPublish = () => {
    dispatch(
      writePost({
        title,
        text,
      })
    );
  };

  // 취소 (포스트 취소)
  const onCancel = () => {
    history.goBack();
  };

  console.log('123403095980220902');

  // 성공 혹은 실패 시 할 작업
  useEffect(() => {
    if (post) {
      const { _id } = post;
      history.push(`/@${_id}`);
    }
    if (postError) {
      console.log(postError, 'posterror');
    }
  }, [history, post, postError]);

  return <WrithActionButtons onPublish={onPublish} onCancel={onCancel} />;
};

export default withRouter(WriteActionButtonsContainer);
