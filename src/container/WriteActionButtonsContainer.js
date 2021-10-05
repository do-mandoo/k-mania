import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, useLocation } from 'react-router-dom';
import { writePost } from '../modules/write';
import { writePostFun } from '../modules/writeFun';
import WrithActionButtons from '../components/Write/WrithActionButtons';

const WriteActionButtonsContainer = ({ history }) => {
  const dispatch = useDispatch();
  const { title, text, post, postError } = useSelector(({ write }) => ({
    title: write.title,
    text: write.text,
    post: write.post,
    postError: write.postError,
  }));

  const dispatchFun = useDispatch();
  const { titleFun, textFun, postFun, postErrorFun } = useSelector(({ writeFun }) => ({
    titleFun: writeFun.titleFun,
    textFun: writeFun.textFun,
    posFunt: writeFun.postFun,
    postError: writeFun.postErrorFun,
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
  const onPublishFun = () => {
    dispatchFun(
      writePostFun({
        titleFun,
        textFun,
      })
    );
  };

  // 취소 (포스트 취소)
  const onCancel = () => {
    history.goBack();
  };

  console.log('123403095980220902');

  const location = useLocation();
  // 성공 혹은 실패 시 할 작업
  useEffect(() => {
    if (post || postFun) {
      if (post) {
        const { _id } = post;
        // const { pathname } = location;
        console.log('s111alkjdofailoation', location);
        console.log(post, 'post아넹 패스네임잇기룰~');
        history.push(`/@${_id}}`);
      }
      if (postFun) {
        const { _id } = postFun;
        // const { pathname } = location;
        console.log('s111alkjdofailoation', location);
        console.log(postFun, 'postFun아넹 패스네임잇기룰~');
        history.push(`/@${_id}`);
      }
    }
    if (postError || postErrorFun) {
      if (postError) {
        console.log(postError, 'posterror');
      }
      if (postErrorFun) {
        console.log(postError, 'posterror');
      }
    }
  }, [history, post, postError, postFun, postErrorFun, location]);

  return (
    <WrithActionButtons onPublish={onPublish} onCancel={onCancel} onPublishFun={onPublishFun} />
  );
};

export default withRouter(WriteActionButtonsContainer);
