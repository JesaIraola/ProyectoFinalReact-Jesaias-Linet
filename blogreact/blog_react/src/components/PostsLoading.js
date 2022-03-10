import React from 'react';

function PostsLoading(Component) {
    return function PostsLoadingComponent({ isLoading, ...props }) {
        if (!isLoading) return <Component {...props} />;
        return (
            <p style={{ fontSize: '25px' }}>
                Estamos esperando por los datos...
            </p>
        );
    };
}
export default PostsLoading;