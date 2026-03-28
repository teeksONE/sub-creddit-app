export const subreddits = ['news', 'science', 'fitness', 'finance', 'memes'];

export async function fetchCuratedPosts(filter = 'new') {
  const results = [];

  for (let subreddit of subreddits) {
    try {
      const response = await fetch(`/r/${subreddit}/${filter}.json?limit=1`);

      const data = await response.json(); // ✅ defines "data"

      if (data && data.data && data.data.children.length > 0) {
        results.push(data.data.children[0].data);
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