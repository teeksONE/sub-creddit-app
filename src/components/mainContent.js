import PostList from "../features/Post/PostList";

function mainContent() {
    return (
        <main 
            style={{
                felx: 2,
                padding: '16px',
                minWidth: '0',
            }}
        >
            <PostList />
        </main>
    );
}

export default mainContent;