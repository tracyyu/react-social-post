import React, {Component} from 'react';
import Header from './Header/Header';
import Section from './Section/Section';
import Social from './Social/Social';

class Post  extends Component {
    state = {
        isLiked : false,
        isHidden : false
    }

    onLikeHandler = () => {
        this.setState({ isLiked: !this.state.isLiked });
    }

    onShowPostHandler = () => {
        this.setState({ isHidden: !this.state.isHidden });
    }

    render() {
        return (
            <div className="post">
                <Header 
                    logo={this.props.logo}
                    user={this.props.user}
                    timestamp={this.props.timestamp}
                />
                { !this.state.isHidden ? 
                    <Section 
                    headline={this.props.headline}
                    image={this.props.image}
                    summary={this.props.summary}
                    showPost={this.state.isHidden}
                    /> : null
                }
                <Social  
                    isLiked={this.state.isLiked}
                    onLikeHandler={this.onLikeHandler} 
                    isHidden={this.state.isHidden}
                    onShowPostHandler={this.onShowPostHandler}
                />
            </div>
        );
    }
}

export default Post;