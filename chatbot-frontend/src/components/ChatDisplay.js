import React from 'react';
import './ChatDisplay.css';
import Message from './Message.js';

class ChatDisplay extends React.Component {
	constructor(props){
		super(props);

		const chats = [{
				username: "BC Bot",
				content: <p>Hello World!</p>,
				img: "https://s3.amazonaws.com/sidearm.sites/brooklyncollegeathletics.com/responsive_2018/images/svgs/main_logo.svg",
			},{
				username: "Student",
				content: <p>YOYOYOYOYO!</p>,
				img: "https://s3.amazonaws.com/sidearm.sites/brooklyncollegeathletics.com/responsive_2018/images/svgs/main_logo.svg",
			}]
		this.state = {
			messages:chats
		};

	}


	render(){
		return(
			<div className="college-theme">
				<h1>Chat Room</h1>
				<Message messages={this.state.messages}/>
			</div>
		);
	}
};

export default ChatDisplay;