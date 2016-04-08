import React, {Component} from 'react';
import { Table } from 'antd';

const columns = [{
  title: '姓名',
  dataIndex: 'name',
  filters: [{
    text: '姓李的',
    value: '李',
  }, {
    text: '姓胡的',
    value: '胡',
  }, {
    text: '姓大的',
    value: '大',
  }, {
    text: '子菜单',
    value: '子菜单',
    children: [{
      text: '姓陈的',
      value: '陈',
    }, {
      text: '姓王的',
      value: '王',
    }]
  }],
  // 指定确定筛选的条件函数
  // 这里是名字中第一个字是 value
  onFilter(value, record) {
    return record.name.indexOf(value) === 0;
  },
  sorter(a, b) {
    return a.name.length - b.name.length;
  }
}, {
  title: '年龄',
  dataIndex: 'age',
  sorter(a, b) {
    return a.age - b.age;
  }
}, {
  title: '地址',
  dataIndex: 'address',
  filters: [{
    text: '南湖',
    value: '南湖'
  }, {
    text: '西湖',
    value: '西湖'
  }],
  filterMultiple: false,
  onFilter(value, record) {
    return record.address.indexOf(value) === 0;
  },
  sorter(a, b) {
    return a.address.length - b.address.length;
  }
}];

const data = [{
  key: '1',
  name: '胡斌',
  age: 32,
  address: '南湖区湖底公园1号'
}, {
  key: '2',
  name: '胡彦祖',
  age: 42,
  address: '西湖区湖底公园12号'
}, {
  key: '3',
  name: '李大嘴',
  age: 32,
  address: '南湖区湖底公园123号'
}, {
  key: '4',
  name: '李秀莲大嘴哥',
  age: 32,
  address: '西湖区湖底公园123号'
}, {
  key: '5',
  name: '大嘴哥',
  age: 32,
  address: '西湖区湖底公园123号'
}, {
  key: '6',
  name: '大大大',
  age: 32,
  address: '西湖区湖底公园123号'
}, {
  key: '7',
  name: '大大大',
  age: 32,
  address: '西湖区湖底公园123号'
}, {
  key: '8',
  name: '大大大',
  age: 32,
  address: '西湖区湖底公园123号'
}, {
  key: '9',
  name: '大大大',
  age: 32,
  address: '西湖区湖底公园123号'
}, {
  key: '10',
  name: '大大大',
  age: 32,
  address: '西湖区湖底公园123号'
}, {
  key: '11',
  name: '大大大',
  age: 32,
  address: '西湖区湖底公园123号'
}, {
  key: '12',
  name: '子菜单',
  age: 32,
  address: '西湖区湖底公园123号'
}, {
  key: '13',
  name: '大大大',
  age: 32,
  address: '西湖区湖底公园123号'
}, {
  key: '14',
  name: '大大大',
  age: 32,
  address: '西湖区湖底公园123号'
}, {
  key: '15',
  name: '大大大',
  age: 32,
  address: '西湖区湖底公园123号'
}, {
  key: '16',
  name: '大大大',
  age: 32,
  address: '西湖区湖底公园123号'
}, {
  key: '17',
  name: '大大大',
  age: 32,
  address: '西湖区湖底公园123号'
}, {
  key: '18',
  name: '大大大',
  age: 32,
  address: '西湖区湖底公园123号'
}];

function onChange(pagination, filters, sorter) {
  // 点击分页、筛选、排序时触发
  console.log('各类参数是', pagination, filters, sorter);
}

export default class Caipiao1 extends Component{
  render() {
    return (
      <Table columns={columns} dataSource={data} onChange={onChange} />
    )
  }
}