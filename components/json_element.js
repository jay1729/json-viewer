import React from 'react';
import RightArrow from '../static/icons/right_arrow';
import DownArrow from '../static/icons/down_arrow';

class JsonElement extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			rightArrow: true,
			childrenDisplay: 'none'
		};
		this.renderArrow = this.renderArrow.bind(this);
		this.toggleChildren = this.toggleChildren.bind(this);
		this.expandCallback = this.expandCallback.bind(this);
		this.minifiedText = this.minifiedText.bind(this);
		this.jsonPath = this.jsonPath.bind(this);
	}

	renderArrow(clickCallback) {
		if (this.state.rightArrow) {
			return <RightArrow clickCallback={clickCallback} />;
		}
		return <DownArrow clickCallback={clickCallback} />;
	}

	toggleChildren() {
		if (this.state.rightArrow) {
			this.setState({
				rightArrow: false,
				childrenDisplay: 'block'
			});
		} else {
			this.setState({
				rightArrow: true,
				childrenDisplay: 'none'
			});
		}
	}

	makeChildrenVisible() {
		if (this.state.rightArrow) {
			this.setState({
				rightArrow: false,
				childrenDisplay: 'block'
			});
		}
	}

	expandCallback() {
		this.makeChildrenVisible();
		if (this.props.expandCallback !== null && this.props.expandCallback !== undefined) this.props.expandCallback();
	}

	minifiedText(text) {
		if (text.length < 80) {
			return <div>{text}</div>;
		}
		return (
			<div>
				{text.slice(0, 80)}
				<span data-toggle="popover" data-content={text}>
					...
				</span>
			</div>
		);
	}

	jsonPath() {
		var output = '';
		var path = this.props.path;
		if(Object.keys(this.props.obj).length < 2) {
			path = this.props.path.slice(0, this.props.path.length-1);
		}
		path.map((value) => {
			output += "['" + value + "']";
		});
		return output;
	}

	componentDidMount() {
		$(function() {
			$('[data-toggle="tooltip"]').tooltip();
		});
		$(function() {
			$('[data-toggle="popover"]').popover();
		});
	}

	render() {
		return (
			<div>
				<div id={this.props.obj.id} className="card bg-light">
					<div className="card-body d-flex">
						{Object.keys(this.props.obj).length > 1 ? this.renderArrow(this.toggleChildren) : null}
						{this.minifiedText(this.props.name)}
					</div>
					<div
						className="card bg-dark ml-auto"
						style={{ overflow: 'hidden', height: '100%', width: '7px', position: 'absolute', right: 0 }}
						data-toggle="popover"
						data-content={this.jsonPath()}
					/>
				</div>
				{Object.keys(this.props.obj).length > 1 ? (
					<div
						id={this.props.obj.id + '-children'}
						className="card"
						style={{ display: this.state.childrenDisplay }}
					>
						<div className="card-body">
							{Object.keys(this.props.obj).map((key) => {
								if (key === 'id') return null;
								if (this.props.obj[key] === null) return null;
								if (key.includes(this.props.searchTerm)) this.expandCallback();
								return (
									<JsonElement
										name={key}
										key={this.props.obj[key].id}
										obj={this.props.obj[key]}
										searchTerm={this.props.searchTerm}
										expandCallback={this.expandCallback}
										path={[ ...this.props.path, key ]}
									/>
								);
							})}
						</div>
					</div>
				) : null}
			</div>
		);
	}
}

export default JsonElement;
