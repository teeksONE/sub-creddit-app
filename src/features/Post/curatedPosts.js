export const subreddits = ['news', 'science', 'fitness', 'finance', 'memes'];

export async function fetchCuratedPosts(filter = 'new') {
    const results = [];
    for (let subreddit of subreddits) {
        try {
            const response = await fetch(`https://www.reddit.com/r/${subreddit}/${filter}.json?limit=1`);
            const sata = await response.json();
            if (data?.data?.children?.length) {
                results.push(data.data.children[0].data);
            } else {
                results.push(null);
            }
        } catch (err)  {
            console.error(`Failed to fetch r/${subreddit}:`, err);
            results.push(null)
        }
    }
    return results;
}