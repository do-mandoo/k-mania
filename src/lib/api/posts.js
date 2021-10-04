import qs from 'qs';
import client from './client';

export const writeNews = ({ title, text }) => client.post('/api/newsS', { title, text });
export const writeFun = ({ title, text }) => client.post('/api/funsS', { title, text });

export const readNews = id => client.get(`/api/newsS/${id}`);
export const readFun = id => client.get(`/api/funsS/${id}`);

export const listNews = id => client.get(`/api/newsS?${id}`);
export const listFun = id => client.get(`/api/funS?${id}`);
