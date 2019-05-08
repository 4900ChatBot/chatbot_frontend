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
					<div><b>supported responds:</b></div>
					<code>
						intent:greet
						intent:bye
						intent:course_list
						intent:info_major
						intent:info_news
						intent:calendar
					</code>
				</div>
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
				username: 'Student',
				content: <p>{input.value}</p>
			}])
		}, () => {
			axios.get(`/api/ask/${input.value}`).then((res) => {
				const {data} = res;
				if (data.length > 0) {
					this.setState({
						messages: this.state.messages.concat([{
							username: 'Dana, BC Bot',
							content: <p>{data[0].text}</p>
						}])
					});
				}
				input.value = '';
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