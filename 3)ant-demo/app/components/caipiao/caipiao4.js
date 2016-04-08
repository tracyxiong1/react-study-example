import React, {Component} from 'react';
import Echarts from 'echarts';

export default class Caipiao4 extends Component {
	componentDidMount() {
		var myChart = Echarts.init(this.refs.main);
		myChart.setOption({
		    title: { text: 'ECharts Test' },
		    tooltip: {},
		    xAxis: {
		        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
		    },
		    yAxis: {},
		    series: [{
		        name: '销量',
		        type: 'bar',
		        data: [5, 20, 36, 10, 10, 20]
		    }]
		});
	}

	render() {
		return (
			<div ref="main" style={{width: "600px",height:"400px"}}></div>
		)
	}
}