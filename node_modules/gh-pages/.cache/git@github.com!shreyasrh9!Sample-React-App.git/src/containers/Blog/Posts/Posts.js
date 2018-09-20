import React, { Component } from 'react';
import axios from '../../../axios';
import { Route } from 'react-router-dom';

import Post from '../../../components/Post/Post';
import './Posts.css';
import FullPost from '../FullPost/FullPost';

class Posts extends Component {
    state = {
        posts: []
    }

    componentDidMount () {
        console.log( this.props );
        axios.get( '/posts' )
            .then( response => {
                const posts = response.data.slice( 0, 6 );
                this.setState( { posts: posts } );
                // console.log( response );
            } )
            .catch( error => {
                console.log( error );
            } );
    }

    postSelectedHandler = ( id ) => {
        this.props.history.push( '/posts/' + id );
    }

    render () {
        let posts = '';
        
            posts = this.state.posts.map( post => {
                return (
                    <Post
                        key={post.id}
                        title={post.title}
                        clicked={() => this.postSelectedHandler( post.id )} />
                );
            } );
        

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
            </div>
        );
    }
}

export default Posts;