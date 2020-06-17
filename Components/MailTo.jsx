import React, { Component } from "react";
import "./Styles/App.css";
import "../../node_modules/antd/dist/antd.min.css";

class MailTo extends Component {
	initialState = {};

	state = {
		Email: "",
	};

	handleChange = (event) => {
		event.preventDefault();
		this.initialState.Email = event.target.value;
		// console.log(this.initialState)
	};

	submitComp = () => {
		this.props.ToAddress(this.initialState);
		this.initialState = this.state;
	};

	render() {
		const { Email } = this.initialState;

		return (
			<div>
				<form method="post">
					<br />
					<h1>To Address</h1>
					<br />
					<label htmlFor=""> Email Id </label>
					<input
						type="text"
						className="inputTo"
						onChange={this.handleChange}
						value={Email}
					/>
					<input
						type="button"
						value="Submit"
						className="btn ant-btn-primary"
						onClick={this.submitComp}
					/>
				</form>
			</div>
		);
	}
}

export default MailTo;
