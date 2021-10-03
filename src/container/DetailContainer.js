import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { readPost, unloadPost } from '../modules/post';
import DetailMain from '../components/details/DetailMain';

const DetailContainer = ({ match }) => {
  // 처음 마운트 될 때 포스트 읽기 API 요청
  const { postId } = match.params;
  console.log(postId, 'postID가 뭔데!');
  const dispatch = useDispatch();

  const { post, error, loading } = useSelector(({ post, loading }) => ({
    post: post.post,
    error: post.error,
    loading: loading['post/READ_POST'],
  }));
  console.log(post, '여기서 post가 몬데ㅜㅜ');

  useEffect(() => {
    dispatch(readPost(postId));
    // 언마운트 될 때 리덕스에서 포스트 데이터 없애기.
    return () => {
      dispatch(unloadPost());
    };
  }, [dispatch, postId]);

  return <DetailMain post={post} error={error} loading={loading} />;
};

export default withRouter(DetailContainer);
