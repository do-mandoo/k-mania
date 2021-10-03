import client from './client';

export const writePost = ({ title, text }) => client.post('/api/posts', { title, text });

export const readPost = id => client.get(`/api/posts/${id}`);
