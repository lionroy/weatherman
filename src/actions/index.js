import axios from "axios";

const API_KEY = 'Your_openweather_com_api_key'
const BLOG_KEY = "UP20BLOG1234";

const WEATHER_ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`
const BLOG_ROOT_URL = "http://reduxblog.herokuapp.com/api";

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const FETCH_POSTS = "FETCH_POSTS";

export function fetchWeather(city) {
  const url = `${WEATHER_ROOT_URL}&q=${city},us`
  const request = axios.get(url)

  // console.log('Request:', request)
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}

export function fetchPosts() {
  const request = axios.get(`${BLOG_ROOT_URL}/posts/?key=${BLOG_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}
