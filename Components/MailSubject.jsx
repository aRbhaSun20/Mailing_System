import React, { Component } from "react";
import "./Styles/App.css";
import "../../node_modules/antd/dist/antd.min.css";

class MailSubject extends Component {
	state = {};
	initialState = {};

	handleChange = (event) => {
		event.preventDefault();
		this.initialState.Subject = event.target.value;
		this.props.Subject(this.initialState);
	};

	render() {
		return (
			<div>
				<form method="post">
					<h1>Subject</h1>
					<label htmlFor="">Subject </label>
					<input
						type="text"
						name="Subject"
						id=""
						onChange={this.handleChange}
						className="SubjectInput"
					/>
				</form>
			</div>
		);
	}
}

export default MailSubject;
