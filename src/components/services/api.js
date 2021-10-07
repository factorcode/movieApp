import axios from 'axios'
import qs from 'qs'
import { APP_KEY, BASE_URL } from '../config/api_config'

export const getSearchedItems = async (searchInput, type) => {
  const url = `${BASE_URL}search/${type}`;

  try {
    const params = {
      api_key: APP_KEY,
      query: searchInput
    }

    const res = await makeApiCall(url, params);

    return res.results;
  } catch (error) {
    throw error
  }

};

export const getMovie = async (id) => {
  const url = `${BASE_URL}movie/${id}`;

  try {
    const params = {
      api_key: APP_KEY
    }

    const res = await makeApiCall(url, params);
    return res;

  } catch (error) {
    throw error
  }
};

export const getTvShow = async (id) => {
  const url = `${BASE_URL}tv/${id}`;
  try {
    const params = {
      api_key: APP_KEY
    }

    const res = await makeApiCall(url, params);
    return res;

  } catch (error) {
    throw error
  }
};

const makeApiCall = async (url, params) => {
  
console.log(`making call to URL: ${url}`);

  const searchAxios = axios.create({
    paramsSerializer: params => qs.stringify(params)
  })

  const response = await searchAxios.get(url, { params })
  const formattedResponse = response.data;

  return formattedResponse;

}
