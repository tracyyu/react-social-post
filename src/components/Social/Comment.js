import React, { Component } from 'react';
import Aux from '../HOC/Aux';
import Logo from '../Header/Logo';
import classnames from 'classnames';

class Comment extends Component {
    render(){
        return (
            <Aux>
                {
                    this.props.showComment ? 
                        <div className="comment-section">
                            <ul>
                                <li>List of comments</li>
                            </ul>
                            <form className="comment">
                                <input type="text" placeholder="Write a comment"/>
                                <button type="Submit">Send</button>
                            </form>
                        </div> : null
                }
            </Aux>
        );
    }
}

export default Comment;