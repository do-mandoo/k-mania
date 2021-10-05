import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter, useHistory, useLocation } from 'react-router-dom';
import { readPost, unloadPost } from '../modules/post';
import { readPostFun, unloadPostFun } from '../modules/postFun';
import DetailMain from '../components/details/DetailMain';
import FreeTalkMain from '../components/freetalk/FreeTalkMain';
// import qs from qs

const DetailContainer = ({ match }) => {
  // 처음 마운트 될 때 포스트 읽기 API 요청
  console.log(match, 'match를 알아보자능~');
  const { postId } = match.params;
  console.log(postId, 'postID가 뭔데!');
  // const history = useHistory();
  // console.log(history, ' history가 뭔질알아봥~~');
  // const location = useLocation();
  // console.log(location, 'location이 뭔뎅뎅ㅋㅋ');

  const dispatch = useDispatch();

  // const { post, error, loading } = useSelector(({ post, loading }) => ({
  //   post: post.post,
  //   error: post.error,
  //   loading: loading['post/READ_POST'],
  // }));

  const { postFun, errorFun } = useSelector(({ postFun }) => ({
    postsFun: postFun.postsFun,
    errorFun: postFun.errorFun,
    // loading: loading['postFun/LIST_POST_FUN'],
  }));
  // console.log(post, '여기서 post가 몬데ㅜㅜ');
  console.log(postFun, '여기서 postFun가 몬데ㅜㅜ');

  useEffect(() => {
    // dispatch(readPost(postId));
    dispatch(readPostFun(postId));
    // 언마운트 될 때 리덕스에서 포스트 데이터 없애기.
    return () => {
      // console.log(location, 'location이 뭔뎅뎅ㅋㅋ');
      // dispatch(unloadPost());
      dispatch(unloadPostFun());
    };
  }, [dispatch, postId]);

  return <FreeTalkMain postFun={postFun} errorFun={errorFun} />;
};
//post={post} error={error} loading={loading}
export default withRouter(DetailContainer);
