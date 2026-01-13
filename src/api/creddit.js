export const fetchPosts = async (subreddit = 'all') => {
    const path =
      subreddit === 'all'
        ? '/.json'
        : `/r/${subreddit}.json`;
  
    const response = await fetch(path);
  
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }
  
    const json = await response.json();
  
    if (!json?.data?.children) {
      return [];
    }
  
    return json.data.children.map((post) => post.data);
  };
  