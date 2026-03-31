import React from 'react';

function LeftCommunityList() {
  const communities = [
    {
      name: 'AskAnAmerican',
      description: 'Learn about America, straight from the mouths of Americans',
    },
    {
      name: 'AskAnAustralian',
      description: 'This is the place to ask thousands of Australians',
    },
    {
      name: 'AskEurope',
      description: 'Ask Europeans about their countries',
    },
    {
      name: 'AskAChinese',
      description: 'Ask any question about China and get Chinese peoples opinions',
    },
    {
      name: 'askSouthAfrica',
      description: 'Ask anything to get a perspective or answer from a South African perspective',
    },
    {
      name: 'asklatinamerica',
      description: 'Subreddit dedicated to Latin America and the Caribbean',
    },
    {
      name: 'AskMiddleEast',
      description: 'Place to ask any question you might have about the Middle East and North Africa',
    }
  ];

  return (
    <aside
      style={{
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        borderRadius: '12px',
        padding: '16px',
        height: 'fit-content',
      }}
    >
      <h2
        style={{
          marginTop: 0,
          marginBottom: '16px',
          fontSize: '1.1rem',
          color: '#1a1a1b',
        }}
      >
        Communities
      </h2>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}
      >
        {communities.map((community) => (
          <a
            key={community.name}
            href={`https://www.reddit.com/r/${community.name}/`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'block',
              textDecoration: 'none',
              color: '#1a1a1b',
              border: '1px solid #eee',
              borderRadius: '10px',
              padding: '12px',
              backgroundColor: '#fafafa',
            }}
          >
            <div
              style={{
                fontWeight: '600',
                marginBottom: '4px',
              }}
            >
              r/{community.name}
            </div>

            <div
              style={{
                fontSize: '0.9rem',
                color: '#555',
                lineHeight: 1.4,
              }}
            >
              {community.description}
            </div>
          </a>
        ))}
      </div>
    </aside>
  );
}

export default LeftCommunityList;