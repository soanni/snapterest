import React, { Component } from 'react';
import Tweet from './Tweet';
import TweetUtils from '../utils/TweetUtils';
import CollectionActionCreators from '../actions/CollectionActionCreators';

const listStyle = {
	padding: '0'
};

const listItemStyle = {
	display: 'inline-block',
	listStyle: 'none'
};

class TweetList extends Component {
	removeTweetFromCollection = tweet => {
		CollectionActionCreators.removeTweetFromCollecion(tweet.id)
	};

	getTweetElement = (tweetId) => {
		const { tweets } = this.props;
		onRemoveTweetFromCollection = this.removeTweetFromCollecion();
		const tweet = tweets[tweetId];
		let tweetElement;

		if (onRemoveTweetFromCollection) {
			tweetElement = (
				<Tweet
					tweet={tweet}
					onImageClick={onRemoveTweetFromCollection}
				/>
			);
		} else {
			tweetElement = <Tweet tweet={tweet}/>;
		}

		return (
			<li style={listItemStyle} key={tweet.id}>
				{tweetElement}
			</li>
		);
	}

	render() {
		const tweetElements = TweetUtils.getListOfTweetIds().map(this.getTweetElement);

		return (
			<ul style={listStyle}>
				{tweetElements}
			</ul>
		);
	}
}

export default TweetList;