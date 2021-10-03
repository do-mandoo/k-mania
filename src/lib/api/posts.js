import qs from 'qs';
import client from './client';

export const writePost = ({ title, text }) => client.post('/api/posts', { title, text });

export const readPost = id => client.get(`/api/posts/${id}`);

export const listPosts = id => client.get(`/api/posts?${id}`);
