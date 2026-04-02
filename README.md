# Sub-Creddit r/teeksone

A lightweight Reddit aggregator built on top of a Codecademy project, designed to surface interesting, diverse, and global content in one place.

## Overview

Sub-Creddit pulls together content from across Reddit into a simple three-column layout:

## Main Feed
### Browse Reddit’s homepage with filters for:
Newest

Best

Controversial

## Curated Feed
### A focused selection of posts from:
r/news

r/science

r/fitness

r/finance

r/memes

## Community Sidebar
### Quick access to “Ask” communities:
r/AskAnAmerican

r/AskAnAustralian

r/AskEurope

r/AskAChinese

r/AskSouthAfrica

#### sneaky link
couple funny clicks in there somewhere. just jokes.

### Purpose

We live in a world that is more globally connected than ever, yet people often remain isolated from perspectives outside their immediate environment.
We rely heavily on news media for our opinions however this frequently shapes a particular narrative, but it’s becoming increasingly clear that it isn’t always the best lens for forming opinions or understanding the world.

Sub-Creddit would first step to a platform of diverse opinions.
Aim to include;
real-time discussions, access to diverse global communities and a curated topic feed.

This app aims to make it easier to explore other viewpoints, cultures, and ideas beyond your own experience.

### Tech Stack
React
JavaScript (ES6+)
Reddit JSON API
Create React App (CRA)

### Features
Dynamic Reddit homepage feed
Filter switching (new, best, controversial)
Curated multi-subreddit aggregation
Responsive three-column layout
Image-rich post rendering
Direct links to Reddit posts and communities

#### Future Improvements
Global filter syncing across feeds
Search functionality
Improved post interactions (votes, comments preview)
Mobile responsiveness
User personalization

#### Installation 
git clone https://github.com/teeksONE/sub-creddit-app.git
cd sub-creddit
npm install
npm start


Note
This project uses a proxy to access Reddit’s public JSON endpoints.
Ensure your package.json includes:  "proxy": "https://www.reddit.com"
