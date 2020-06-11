import React from 'react';
import JsonElement from './json_element';

class ParsedJsonViewer extends React.Component {
	constructor(props) {
		super(props);
		this.generateIdsInJson = this.generateIdsInJson.bind(this);
		this.processJson = this.processJson.bind(this);
        this.searchForString = this.searchForString.bind(this);
        this.expandCallback = this.expandCallback.bind(this);
		this.state = {
			json: {},
			searchTerm: null
		};
	}

	mergeJsons(json1, json2) {
		var output = JSON.parse(JSON.stringify(json1));
		for (var key in json2) {
			output[key] = json2[key];
		}
		return output;
	}

	generateIdsInJson(json) {
		console.log('JSON received', json);
		var output = JSON.parse(JSON.stringify(json));
		if (output === null) return null;
		if (typeof json === 'object') {
			output['id'] = Math.random().toString(36).substring(2);
		} else {
			var temp = {};
			temp[output] = { id: Math.random().toString(36).substring(2) };
			output = temp;
			output['id'] = Math.random().toString(36).substring(2);
			return output;
		}
		Object.keys(output).forEach((key, index) => {
			if (key === 'id') return;
			output[key] = this.generateIdsInJson(output[key]);
		});
		return output;
	}

	processJson(json) {
		this.setState({
			json: this.generateIdsInJson(json)
		});
	}

	componentDidMount() {
		this.processJson(this.props.json);
		$(function() {
			$('[data-toggle="tooltip"]').tooltip();
		});
		$(function() {
			$('[data-toggle="popover"]').popover();
		});
	}

	searchForString() {
		var searchTerm = document.getElementById('searchValue').value;
		this.setState({
			searchTerm: searchTerm
		});
    }
    
    expandCallback() {
        this.setState({
            searchTerm: null
        })
    }

	render() {
		console.log(this.state.json);
		return (
			<div className="my-5" style={{ minWidth: '500px' }}>
				<div className="input-group my-4">
					<input id="searchValue" className="form-control" />
					<div className="input-group-append">
						<button onClick={this.searchForString} className="btn btn-secondary">
							Search
						</button>
					</div>
				</div>
				{Object.keys(this.state.json).map((key) => {
					if (key === 'id') return null;
					if (this.state.json[key] === null) return null;
					return (
						<JsonElement
							name={key}
							key={this.state.json[key].id}
							obj={this.state.json[key]}
                            searchTerm={this.state.searchTerm}
							expandCallback={this.expandCallback}
							path={[key]}
						/>
					);
				})}
			</div>
		);
	}
}

export default ParsedJsonViewer;
