import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listPosts } from '../modules/posts';
import NewsMain from '../components/news/NewsMain';
import { withRouter, useLocation } from 'react-router-dom';

const NewsListContainer = ({ match }) => {
  console.log(match, 'matchalkdjf29323');
  const { postId } = match.params;
  // const location = useLocation();
  // console.log(location, 'location~~~');
  const dispatch = useDispatch();
  const { posts, error, loading } = useSelector(({ posts, loading }) => ({
    posts: posts.posts,
    error: posts.error,
    loading: loading['posts/LIST_POSTS'],
  }));
  console.log(posts, '처음에posts뭔데!');
  useEffect(() => {
    dispatch(listPosts(postId));
  }, [dispatch, postId]);

  return (
    <>
      <NewsMain posts={posts} error={error} loading={loading} />
    </>
  );
};

export default withRouter(NewsListContainer);
