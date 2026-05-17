import React from 'react';

function LeftCommunityList() {
  const communities = [
    {
      name: 'AskAnAustralian',
      description: 'This is the place to ask thousands of Australians',
    },
    {
      name: 'AskAnAmerican',
      description: 'Learn about America, straight from the mouths of Americans',
    },
    {
      name: 'AskBrits',
      description: 'Ask British people anything!',
    },
    {
      name: 'AskEurope',
      description: 'Ask Europeans about their countries',
    },
    {
      name: 'AskACanadian',
      description: 'No.1 resource frot answers to questions about anything Canadian',
    },
    {
      name: 'AskAChinese',
      description: 'Ask any question about China and get Chinese peoples opinions',
    },
    {
      name: 'AskIndia',
      description: 'The ultimate Q&A hub for curious minds in India',
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
    {
      name: 'AMA',
      description: 'Ask me anything',
    },
    {
      name: 'AskWomen',
      description: 'Asking women questions about their thoughts, lives and experiences',
    },
    {
      name: 'AskMen',
      description: 'A community to discuss mens lived experiences',
    },
    {
      name: 'AskAChristian',
      description: 'Ask Christians questions about their faith, beliefs and practices',
    },
    {
      name: 'askamuslim',
      description: 'A place to ask Muslims anything about Islam and their beliefs',
    },
    {
      name: 'hinduism',
      description: 'A community for discussion and questions about Hindu traditions and beliefs',
    },
    {
      name: 'Buddhism',
      description: 'A community for discussion of the teachings and practice of Buddhism',
    },
    {
      name: 'Sikh',
      description: 'A place to learn about and discuss Sikhi and the Sikh community',
    },
    {
      name: 'Judaism',
      description: 'A community for discussion of Judaism, Jewish life and tradition',
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
