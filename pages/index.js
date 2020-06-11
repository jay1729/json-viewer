import Head from 'next/head';
import React from 'react';
import ParsedJsonViewer from '../components/json_viewer';

function GetJsonInput(parseJson) {
	return (
		<div className="d-flex flex-column input-group w-50 my-4" style={{ height: '100vh' }}>
			<div className="d-flex flex-row" style={{ height: '50vh' }}>
				<div className="input-group-prepend">
					<span className="input-group-text">
						Input <br /> JSON
					</span>
				</div>
				<textarea id="json" className="form-control" aria-label="Input JSON" />
			</div>
			<div>
				<button
					id="parse-json"
					type="button"
					onClick={function() {
						parseJson(document.getElementById('json').value);
					}}
					className="btn btn-dark my-4"
				>
					Parse
				</button>
			</div>
		</div>
	);
}

function ShowJson(json) {
	return (
		<div>
			<ParsedJsonViewer json={json} />
		</div>
	);
}

function MainComponent(inp) {
	if (inp.props.getInput) {
		return GetJsonInput(inp.parseCallback);
	}
	return ShowJson(inp.props.json);
}

class JsonViewer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			getInput: true,
			json: null
		};
		this.parseJson = this.parseJson.bind(this);
	}

	parseJson(jsonInput) {
		console.log('parsing...', jsonInput);
		this.setState({
			getInput: false,
			json: JSON.parse(jsonInput)
		});
	}

	componentDidMount() {
		$(function() {
			$('[data-toggle="tooltip"]').tooltip();
		});
		$(function() {
			$('[data-toggle="popover"]').popover();
		});
        console.log(process.env.NODE_ENV);
	}

	render() {
		return (
			<div className="Main" style={{ height: '500px' }}>
				<Head>
					<title>JSON Viewer</title>

					<link
						rel="stylesheet"
						href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
						integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
						crossOrigin="anonymous"
					/>
				</Head>
				<nav className="navbar navbar-dark bg-dark ">
					<div className="navbar-brand">JSON Viewer</div>
				</nav>
				<div className="d-flex justify-content-center h-100" style={{ height: '100vh' }}>
					<MainComponent props={this.state} parseCallback={this.parseJson} />
				</div>
				<script
					src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
					integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
					crossorigin="anonymous"
				/>
				<script
					src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
					integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
					crossorigin="anonymous"
				/>
				<script
					src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
					integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
					crossorigin="anonymous"
				/>
			</div>
		);
	}
}

export default JsonViewer;
