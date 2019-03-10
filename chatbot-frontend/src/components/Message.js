import React from 'react';
import './ChatDisplay.css';
import MessageForm from './MessageForm';

const botName = 'Dana, BC Bot';
class Message extends React.Component {
	render(){
		return (
			<div>
			<ul className="chats">
			{this.props.messages.map(messages => {
				return (	
				<li className={`chat ${botName === messages.username ? "left" : "right"}`} key={messages.id}>
					<div>
						{messages.username}
					</div>
					<div>
						{messages.content}
					</div>
				</li>
				)
			})}
			</ul>
			<form className="input" onSubmit={(userInput) => this.submitMessage(userInput)}>
				<input type="text" ref="msg"/>
				<input type="submit" value="Submit"/>
			</form>
			</div>
		);
	}
}
export default Message;