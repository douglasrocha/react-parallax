import React from 'react';
import Parallax from '../dist/Parallax';

export default class KitchenSink extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
		};
	}

	render() {
		let style = {
			backgroundColor: '#efefef',
			color: 'white',
			textAlign: 'center'
		};
		let fontStyle = {
			fontFamily: 'Helvetica Neue, Arial, sans-serif',
			textAlign: 'center',
			fontWeight: 100
		};
		let fontStyle2 = {
			fontFamily: 'Helvetica Neue, Arial, sans-serif',
			textAlign: 'center',
			fontWeight: 100,
			color: 'darkgrey'
		};
		return (
			<div style={style}>
				<div>
					<br/>
					<h1 style={fontStyle2}>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.</h1>
					<br/>
				</div>
				<Parallax bgVideo="http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4" strength={300} log={true}>
					<h1 style={fontStyle}>...</h1>
					<h1 style={fontStyle}>some content</h1>
				</Parallax>
			</div>
		);
	}


}
