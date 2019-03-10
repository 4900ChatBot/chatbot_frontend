import React from 'react';
import './ChatDisplay.css';

class Message extends React.Component {
	render(){
		return (
			<ul className="chats">
			{this.props.messages.map(messages => {
				return (
				<li className={`chat ${'BC Bot' === messages.username ? "left" : "right"}`} key={messages.id}>
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
		)
	}
}
export default Message;