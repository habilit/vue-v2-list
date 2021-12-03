import axios from 'axios';
import { getHeadlineApi, newApi } from '../shared/index';

export const getHeadlineNews = async (val) => {
  let response;
  const searchApi = getHeadlineApi(val);
  try {
    response = await axios.get(searchApi);
  } catch (e) {
    throw new Error(e.message);
  }

  return response?.data ? response?.data : null;
};

export const getNews = async () => {
  let response;

  try {
    response = await axios.get(newApi);
  } catch (e) {
    throw new Error(e.message);
  }

  return response?.data ? response?.data : null;
};

export const getWrongApi = async () => {
  const response = await axios.get('https://newsapi.org/v2/sources?apiKey');
  return response;
};
