// a hero section that has two columns, for feeds, feeds are basically cards that have a title, description, and a link to the full article

// Path: components/Feed/DefaultFeed.tsx

import React from 'react';

import FeedCard from './FeedCard';

const DefaultFeed = () => {
    return (
        <div className="container mx-auto lg:px-8 max-w-7xl mb-8">
            <h2 className="text-3xl font-bold text-left mt-4 mb-4">Latest News</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FeedCard />
                <FeedCard />
                <FeedCard />
                <FeedCard />
                <FeedCard />
                <FeedCard />
            </div>
        </div>
    );
};

export default DefaultFeed;