import client from './client';

export const writePost = ({ title, text }) => client.post('/', { title, text });
