import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import { Button } from 'antd';
import './Common.less';

class TaskCenter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '任务模块'
    };
  }

  render() {
    console.log('this is taskCenter.jsx at demo')
    console.log('this is projectDeatil.jsx at demo')
    let urlParams = this.props.match.params; // url匹配参数
    let urlQueries = queryString.parse(this.props.location.search); // url参数
    console.log(urlQueries)

    return (
      <div className="des-align-center">
        <p>This is taskCenter pages!</p>
        <div>{this.state.name}</div>
        <div>url匹配数据：{urlParams.projectCode}</div>
        <div>url参数数据：{urlQueries.orginType}</div>
        <div>获取全局变量：{global.G_COMPANY_TITLE}<small className="des-text-gray">（相比15.6多了global）</small></div>
        <Link to="/meet"><Button>跳转到meet</Button></Link>
      </div>
    );
  }
}

export default TaskCenter;
