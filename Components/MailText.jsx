import React, { Component } from "react";
import "./Styles/App.css";
import "../../node_modules/antd/dist/antd.min.css";

class MailText extends Component {
	state = {};
	initialState = {};

	handleChange = (event) => {
		event.preventDefault();
		this.initialState.Text = event.target.value;
		this.props.Text(this.initialState);
	};

	render() {
		return (
			<div>
				<h1>Text</h1>
				<br />
				<label htmlFor="">Text</label>
				<br />
				<textarea
					name="text"
					id=""
					onChange={this.handleChange}
					className="inputText"
					cols="30"
					rows="10"
				></textarea>
			</div>
		);
	}
}

export default MailText;
