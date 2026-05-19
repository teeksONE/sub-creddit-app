import { safeFetchJson } from '../utils/safeFetch';

const SUBREDDIT_RE = /^[A-Za-z0-9_]{2,21}$/;

export const fetchPosts = async (subreddit = 'all') => {
  if (subreddit !== 'all' && !SUBREDDIT_RE.test(subreddit)) {
    throw new Error('Invalid subreddit name');
  }

  const path = subreddit === 'all' ? '/.json' : `/r/${subreddit}/.json`;
  const json = await safeFetchJson(path);

  if (!json?.data?.children) return [];
  return json.data.children.map((post) => post.data);
};
