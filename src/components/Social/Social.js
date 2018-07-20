import React, { Component } from 'react';
import Tools from './Tools';
import Comment from './Comment';

class Social extends Component {
    state = {
        isShowComment : false
    }

    onShowCommentHandler = () => {
        this.setState({ isShowComment: !this.state.isShowComment });
    }

    render() {
        return (
            <div>
                <Tools 
                    showComment={this.state.isShowComment} 
                    showCommentHandler={this.onShowCommentHandler} 

                    isLiked={this.props.isLiked}
                    onLikeHandler={this.props.onLikeHandler} 
                    isHidden={this.props.isHidden}
                    onShowPostHandler={this.props.onShowPostHandler}
                />
                <Comment showComment={this.state.isShowComment} />
            </div>
        );
    }
}

export default Social;