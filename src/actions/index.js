export const SEARCH = 'SEARCH';
export const RESULT_POSTS = 'RESULT_POSTS';

export function search(keyword) {
    return {
        type: SEARCH,
        keyword : keyword,
    };
}

export function result_posts(posts) {
  return {
      type: RESULT_POSTS,
      posts : [],
  };
}
