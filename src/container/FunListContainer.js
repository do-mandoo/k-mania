import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listPostsFun } from '../modules/postsFun';
import FreeTalkMain from '../components/freetalk/FreeTalkMain';
import { withRouter } from 'react-router-dom';

const FunListContainer = ({ match }) => {
  console.log(match, 'matchalkdjf29323');
  const { postId } = match.params;
  const dispatch = useDispatch();
  const { postsFun, errorFun, loading } = useSelector(({ postsFun, loading }) => ({
    postsFun: postsFun.postsFun,
    errorFun: postsFun.errorFun,
    loading: loading['postsFun/LIST_POSTS_FUN'],
  }));
  console.log(postsFun, 'freetalk처음에posts뭔데!');
  useEffect(() => {
    dispatch(listPostsFun(postId));
  }, [dispatch, postId]);

  return (
    <>
      <FreeTalkMain postsFun={postsFun} errorFun={errorFun} loading={loading} />
    </>
  );
};

export default withRouter(FunListContainer);
