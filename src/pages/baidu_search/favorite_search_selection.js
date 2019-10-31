import {push_cache, take_cache, clear_cache} from './favorite_selection'

const cache_key = 'favorite_home_search_list';
const distinct_key = 'name';
const max_size = 10;

export const setFavoriteHomeSearchKw = (u) => {
  push_cache(u, cache_key, distinct_key, max_size)
};
export const getFavoriteHomeSearchKw = (max = 10) => {
  return take_cache(max, cache_key)
};

export const clearFavoriteHomeSearchKw = () => {
  clear_cache(cache_key)
}
