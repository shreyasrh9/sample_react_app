import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';

class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <h1 style={{textAlign:"center"}}>Sample React App</h1>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                to="/posts/"
                                exact
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}>Posts</NavLink></li>
                        </ul>
                    </nav>
                </header>
                
                <Route path="/posts" component={Posts} />
                
            </div>
        );
    }
}

export default Blog;