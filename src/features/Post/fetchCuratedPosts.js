import { safeFetchJson } from '../../utils/safeFetch';

const SUBREDDIT_RE = /^[A-Za-z0-9_]{2,21}$/;
const FILTER_RE = /^[a-z]{1,20}$/;

export const curatedSubreddits = [
  'news', 'science', 'fitness', 'finance', 'memes'
];

export async function fetchCuratedPosts(filter = 'best') {
  const safeFilter = FILTER_RE.test(filter) ? filter : 'best';
  const results = [];

  for (let subreddit of curatedSubreddits) {
    if (!SUBREDDIT_RE.test(subreddit)) {
      results.push(null);
      continue;
    }

    try {
      const path = safeFilter === 'best'
        ? `/r/${subreddit}/.json?limit=1`
        : `/r/${subreddit}/${safeFilter}.json?limit=1`;

      const data = await safeFetchJson(path);
      const children = data?.data?.children || [];

      if (children.length > 0) {
        results.push(children[0].data);
      } else {
        results.push(null);
      }

    } catch (err) {
      console.error(`Failed to fetch r/${subreddit}`, err);
      results.push(null);
    }
  }

  return results;
}