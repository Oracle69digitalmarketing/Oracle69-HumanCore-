import React from 'react';

function ContentPreview({ content }) {
    return (
        <div>
            <h3>Generated Content</h3>
            <p>{content}</p>
        </div>
    );
}

export default ContentPreview;
