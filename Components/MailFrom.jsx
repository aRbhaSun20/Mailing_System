import React, { Component } from "react";
import "./Styles/App.css";
import "../../node_modules/antd/dist/antd.min.css";

class MailFrom extends Component {
	initialState = {};

	state = {
		Email: "",
		Password: "",
	};

	handleChange = (event) => {
		event.preventDefault();

		// eslint-disable-next-line
		if (event.target.id == "Password") {
			this.initialState.Password = event.target.value;
		} else {
			this.initialState.Email = event.target.value;
		}
		this.props.FromAddress(this.initialState);
		this.initialState = this.state;
	};

	render() {
		const { Email, Password } = this.initialState;
		return (
			<div>
				<form method="post">
					<h1>From Address</h1>
					<br />
					<label htmlFor=""> Email Id </label>
					<input
						type="text"
						name="Email"
						id="Email"
						className="inputFrom"
						onChange={this.handleChange}
						value={Email}
					/>
					<label htmlFor=""> Password </label>
					<input
						type="Password"
						name="Password"
						id="Password"
						className="inputFrom"
						onChange={this.handleChange}
						value={Password}
					/>
				</form>
			</div>
		);
	}
}

export default MailFrom;
