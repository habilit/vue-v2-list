import { isEmpty } from 'lodash';

export const apiKey = '003c95ab1b2249ee93d00948b55200f7';
// export const apiKey = '099148be22804e849a0c6fe022b7cf5e';

export const allHeadlineApi = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
const apiUrl = 'https://newsapi.org/v2/sources?apiKey=';
export const newApi = apiUrl + apiKey;

export const getHeadlineApi = (val) => {
  if (!isEmpty(val)) {
    return `https://newsapi.org/v2/top-headlines?q=${val}&apiKey=${apiKey}`;
  }

  return allHeadlineApi;
};

export const getCategories = (data) => {
  if (isEmpty(data)) {
    return [];
  }
  return data.map((news) => news?.source?.name);
};

export const makeid = (length) => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};
