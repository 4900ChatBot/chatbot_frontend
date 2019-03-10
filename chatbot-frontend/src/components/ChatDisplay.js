import React from 'react';
import './ChatDisplay.css';
import ReactDOM from 'react-dom';
import Message from './Message';
import MessageForm from './MessageForm';

class ChatDisplay extends React.Component {
	constructor(props){
		super(props);

		const chats = [{
				username: "Dana, BC Bot",
				content: <p>Hello World!</p>,
				img: "https://s3.amazonaws.com/sidearm.sites/brooklyncollegeathletics.com/responsive_2018/images/svgs/main_logo.svg",
			},{
				username: "Student",
				content: <p>YO!</p>,
				img: "https://s3.amazonaws.com/sidearm.sites/brooklyncollegeathletics.com/responsive_2018/images/svgs/main_logo.svg",
			}]
		this.state = {
			messages:chats
		};

		this.submitMessage = this.submitMessage.bind(this);

	}

	

	submitMessage(userInput){
		userInput.preventDefault();

		this.setState({
			chats: this.state.chats.concat([{
				username:"Student",
				content: <p>{ReactDOM.findDOMNode(this.refs.msg).value}</p>
			}])
		}, () => {
			ReactDOM.findDOMNode(this.refs.msg).value = "";
		});
	}


	render(){
		return(
			<div className="App">
				<div className="college-theme">
					<h1>Chat Room</h1>
					<Message messages={this.state.messages}/>
				</div>
			</div>
		);
	}
};

export default ChatDisplay;