import React from 'react';
import './ChatDisplay.css';
import ReactDOM from 'react-dom';

const botName = 'Dana, BC Bot';
class Message extends React.Component {
	constructor(props) {
		super(props)
		this.msg = React.createRef();
		this.getInputEl = this.getInputEl.bind(this)
	}

	render(){
		return (
			<div>
			<ul className="chats">
			{this.props.messages.map((messages, idx) => {
				return (	
				<li className={`chat ${botName === messages.username ? "left" : "right"}`} key={idx}>
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
			<form className="input" onSubmit={(e)=>{e.preventDefault();this.props.onSubmit()}}>
				<input type="text" ref={this.msg}/>
				<input type="submit" value="Submit"/>
			</form>
			</div>
		);
	}

	getInputEl() {
		return ReactDOM.findDOMNode(this.msg.current)
	}
}
export default Message;