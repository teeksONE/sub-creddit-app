import React, { useEffect, useState } from 'react';
import PostList from '../features/Post/PostList';
import { fetchCuratedPosts } from '../features/Post/curatedPosts';

const filters = ['new', 'best', 'controversial'];

function RightCuratedList() {
    const [filter, setFilter] = useState('new');
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function loadPosts() {
            setLoading(true);
            const curatedPosts = await fetchCuratedPosts(filter);
            setPost(curatedPosts.filter(Boolean));
            setLoading(false);
        }

        loadPosts();
    }, [filter]);

    return (
        <aside 
            style={{
                flex: 1,
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '8px',
                minWidth: '200px',
            }}
        >
            {/** Filter Buttons */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                {filters.map((f) => (
                    <button
                        key={f}
                        onClick={() => setFilter(f)}
                        style={{
                            padding: '4px 8px',
                            borderRadius: '4px',
                            border: filter === f ? '2px solid blue' : '1px solid #ccc',
                            background: filter === f ? '#e0f0ff' : 'white',
                            cursor: 'pointer',
                        }}
                    >
                        {f}
                    </button>
                ))}
            </div>

            {loading ? <p>Loading...</p> : <PostList post={post} />}
        </aside>
    )
}

export default RightCuratedList;