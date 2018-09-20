import React from 'react';

import './Post.css';

const post = (props) => (
    <div className="Post" onClick={props.clicked}>
        <h1>{props.title}</h1>
    </div>
);

export default post;