export const curatedSubreddits = [
  'news', 'science', 'fitness', 'finance', 'memes'
];

export async function fetchCuratedPosts(filter = 'best') {
  const results = [];

  for (let subreddit of curatedSubreddits) {
    try {
      let path = '';

      if (filter === 'best') {
        path = `/r/${subreddit}/.json?limit=1`;
      } else {
        path = `/r/${subreddit}/${filter}.json?limit=1`;
      }

      const response = await fetch(path);

      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }

      const data = await response.json(); // ✅ defines "data"
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