import React from 'react';
import './ChatDisplay.css';
import Message from './Message';
import axios from 'axios';

class ChatDisplay extends React.Component {
	constructor(props){
		super(props);
		
		const chats = [{
				username: 'Dana, BC Bot',
				content: <div>
					<div>Hi, this is BC bot,<br />how can I help you?<br />(type help for more info)</div>
				</div>
			}]
		this.state = {
			messages:chats
		};

		this.message = React.createRef();
		this.submitMessage = this.submitMessage.bind(this);
		this.scrollToBottom = this.scrollToBottom.bind(this);

	}

	scrollToBottom() {
		let list = document.querySelector('.chats-container');
		list.scrollTop = 1000000;
	}

	submitMessage(){
		let input = this.message.current.getInputEl()
		if (!input.value) {
			return;
		}
		this.setState({
			messages: this.state.messages.concat([{
				username: 'Student',
				content: <p>{input.value}</p>
			}])
		}, () => {
			this.scrollToBottom()
			axios.get(`/api/ask/${input.value}`).then((res) => {
				const {data} = res;
				if (data.length > 0) {
					this.setState({
						messages: this.state.messages.concat([{
							username: 'Dana, BC Bot',
							content: <p dangerouslySetInnerHTML={{__html: data[0].text}}></p>
						}])
					});
				} else {
					this.setState({
						messages: this.state.messages.concat([{
							username: 'Dana, BC Bot',
							content: <p>Sorry I don't understand</p>
						}])
					});
				}
				this.scrollToBottom()
				input.value = '';
				input.focus();
			})
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