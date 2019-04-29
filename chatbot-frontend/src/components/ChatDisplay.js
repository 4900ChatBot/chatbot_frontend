import React from 'react';
import './ChatDisplay.css';
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

		this.message = React.createRef();
		this.submitMessage = this.submitMessage.bind(this);

	}

	

	submitMessage(){
		let input = this.message.current.getInputEl()
		this.setState({
			messages: this.state.messages.concat([{
				username:"Student",
				content: <p>{input.value}</p>
			}])
		}, () => {
			input.value = "";
		});
	}


	render(){
		return(
			<div className="App">
				<div className="college-theme">
					<h1>Chat Room</h1>
					<Message ref={this.message}
						onSubmit={this.submitMessage} messages={this.state.messages}/>
				</div>
			</div>
		);
	}
};

export default ChatDisplay;