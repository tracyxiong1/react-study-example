import React, {Component} from 'react';
import {message, Button} from 'antd';
import $ from 'jQuery';



const info = function() {
	message.info('test');
};

export default class Caipiao123 extends Component {
	componentDidMount() {
		$.ajax({
			url: '/app/api/data1.json',
			method: 'GET',
			success: function(data) {
				message.info(data.retCode);
			}
		});
	}

	render() {
		return(
			<Button onClick={info}>点击test</Button>
		)
	}
}