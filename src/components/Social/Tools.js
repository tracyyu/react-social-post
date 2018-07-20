import React, {Component} from 'react';

const Tools = props => (
    <div className="tools">
        { !props.isLiked ?
            <button className="button" onClick={props.onLikeHandler}><i className="far fa-heart"></i> Like </button> :
            <button className="button" onClick={props.onLikeHandler}><i className="fa fa-heart" style={{'color' : 'red'}}></i> Like </button>
        }
        <button className="button"><i className="fas fa-share"></i> Share </button>
        { !props.isHidden ?
            <button className="button" onClick={props.onShowPostHandler}><i className="far fa-eye-slash"></i> Hide </button> :
            <button className="button" onClick={props.onShowPostHandler}><i className="fas fa-eye"></i> Show </button>
        }
        { !props.showComment ?
            <button className="button" onClick={props.showCommentHandler}><i className="far fa-comment-dots"></i> Comment </button> :
            <button className="button" onClick={props.showCommentHandler}><i className="fas fa-comment-dots" style={{'color' : '#00bbe3'}}></i> Comment </button>
        }   
    </div>
);

export default Tools;