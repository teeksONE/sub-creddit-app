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
    },
  ];

  return (
    <aside className="mg-card mg-card-tight">
      <h2 className="mg-section-title" style={{ marginBottom: 14 }}>
        Communities
      </h2>

      <div className="mg-community-list">
        {communities.map((community) => (
          <a
            key={community.name}
            href={`https://www.reddit.com/r/${community.name}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="mg-community"
          >
            <div className="mg-community-name">r/{community.name}</div>
            <div className="mg-community-desc">{community.description}</div>
          </a>
        ))}
      </div>
    </aside>
  );
}

export default LeftCommunityList;
