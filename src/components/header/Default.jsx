import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Popover, Icon, Modal, Row, Col } from 'antd';
import _ from 'lodash';

import './Common.less';

class HeaderDefault extends Component {
  render() {
    const content = (
      <div className="des-header-user-detail-box">
        <div className="des-header-button-item">用户中心</div>
        <div className="des-content-block-u_d-small">状态：<span className="des-text-success">正常</span></div>
        <div className="des-content-block-u_d-small">角色：项目管理工程师</div>
      </div>
    );

    return (
      <div className="des-header-container">
        <div className="des-header-left-menu-box">
          <HeaderProjects />
          <HeaderApps />
        </div>
        <div className="des-header-right-menu-box">
          <Link className="des-header-menu-item" to="/console/home">管理控制台</Link>
          <Popover content={content} trigger="hover" placement="bottomRight">
            <span className="des-header-user">
              <Avatar className="des-header-img" icon="user" src="http://docs.cq-tct.com/94H58PICREX_1024.jpg?imageView2/1/w/100/h/100"/>
              <a>王轻姿</a>
            </span>
          </Popover>
        </div>
      </div>
    );
  }
}

// 切换应用
class HeaderApps extends Component {
  state = { visible: false }
  showModal = () => {
    this.setState({ visible: true });
  }
  handleOk = (e) => {
    this.setState({ visible: false });
  }
  handleCancel = (e) => {
    this.setState({ visible: false });
  }
  render() {
    let modularArrs = [
      {
        path: '/taskcenter/index',
        name: '我的任务',
        imgUrl: 'http://docs.cq-tct.com/desp/images/app_img01.png',
        isDisabled: false
      },
      {
        path: '/ipdTasks/home',
        name: '任务管理',
        imgUrl: 'http://docs.cq-tct.com/desp/images/app_img02.png',
        isDisabled: false
      },
      {
        path: '/meets/home',
        name: '会议管理',
        imgUrl: 'http://docs.cq-tct.com/desp/images/app_img03.png',
        isDisabled: false
      },
      {
        path: '/weeklyPlan/home',
        name: '双周计划',
        imgUrl: 'http://docs.cq-tct.com/desp/images/app_img04.png',
        isDisabled: false
      },
      {
        path: '/manage/projects/info/home',
        name: '项目信息',
        imgUrl: 'http://docs.cq-tct.com/desp/images/app_img05.png',
        isDisabled: false
      },
      {
        path: '',
        name: '风险与问题',
        imgUrl: 'http://docs.cq-tct.com/desp/images/app_img06.png',
        isDisabled: true
      },
      {
        path: '/knowledge/me-upload',
        name: '知识库',
        imgUrl: 'http://docs.cq-tct.com/desp/images/app_img07.png',
        isDisabled: false
      },
      {
        path: '/weeklyPlan/home',
        name: '商务管理',
        imgUrl: 'http://docs.cq-tct.com/desp/images/app_img08.png',
        isDisabled: false
      },
      {
        path: '/attemper/home',
        name: '调度平台',
        imgUrl: 'http://docs.cq-tct.com/desp/images/app_img09.png',
        isDisabled: false
      },
    ];

    return (
      <div className="des-float-left des-content-block-l_r-default">
        <span onClick={this.showModal} className="des-cursor">
          <Icon type="appstore" /> 应用
          <span className="des-text-gray"> / 会议模块</span>
        </span>
        <Modal
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer=""
        >
          <Row>
            {
              modularArrs.map((item, key) => {
                return (
                  <Col key={key} span={8} className="des-appicon-box">
                    <img src={item.imgUrl} alt={item.name} />
                    <div className="desp-icon-masklayer"></div>
                    {
                      item.isDisabled ?
                        <div className="desp-icon-masklayer-text"><Icon type="lock" /> 锁定</div>
                      :
                        <Link to={item.path} >
                          <div className="desp-icon-masklayer-text"><Icon type="unlock" /> 打开</div>
                        </Link>
                    }
                    <div>{item.name}</div>
                  </Col>
                )
              })
            }
          </Row>
        </Modal>
      </div>
    )
  }
}

// 切换项目
class HeaderProjects extends Component {
  render() {
    
    let projects = {
      '重庆子公司': [
        {name: '贵阳1号线项目'},
        {name: '成都3号线一期项目'},
        {name: '重庆环线项目'},
        {name: '乌鲁木齐1号线项目'},
        {name: '成都3号线二三期项目'},
        {name: '长沙1号线项目'},
        {name: '重庆3号线北延项目'},
        {name: '重庆3号线南延项目'},
        {name: '重庆3号线增车项目'},
        {name: '成都5号线一、二期项目'},
        {name: '重庆3号线二期项目'},
      ],
      '天津子公司': [
        {name: '北京14号线项目'},
        {name: '石家庄3号线项目'},
        {name: '大连旅顺线项目'},
        {name: '青岛13号线项目'},
        {name: '天津6号线项目'},
        {name: '北京16号线项目'},
        {name: '北京燕房线示范平台项目'},
        {name: '北京燕房线项目'},
        {name: '北京7号线二期项目'},
        {name: '北京5号线改造项目'},
        {name: '北京地铁昌平线项目'},
        {name: '北京7号线工程项目'},
        {name: '北京昌平线ATO节能优化项目'},
        {name: '北京昌平线新增5列车项目'},
      ],
      '深圳子公司': [
        {name: '深圳7号线项目'},
        {name: '汕头1号线项目'},
        {name: '南宁4号线项目'},
        {name: '越南河内项目'},
      ]
    };

    let departments = [
      {
        name: '工程部门管理层',
        department: '交控科技股份有限公司'
      },
      {
        name: '安全质量部',
        department: '重庆子公司'
      },
      {
        name: '工程项目管理层',
        department: '重庆子公司'
      },
      {
        name: '项目安质团队',
        department: '交控科技股份有限公司'
      },
      {
        name: '工程设计中心',
        department: '交控科技股份有限公司'
      }
    ];

    const content = (
      <Row className="des-change-project-container">
        <Col span={24}>
          <div className="des-title">
            <b>P. 项目</b>
          </div>
        </Col>
        {
          _.map(projects, (item1, key1) => {
            return (
              <div key={key1}>
                <Col span={24} className="des-sub-title">{key1}</Col>
                {
                  _.map(item1, (item2, key2) => {
                    return (
                      <Col key={key2} span={12} style={{margin:'3px auto', fontSize: 12}}>
                        <a title={item2.name}>{item2.name}</a>
                      </Col>
                    );
                  })
                }
              </div>
            )
          })
        }
        <Col span={24}>
          <div className="des-title">
            <b>D. 部门</b>
          </div>
        </Col>
        {
          _.map(departments, (item1, key1) => {
            return (
              <Col key={key1} span={12} style={{margin:'3px auto', fontSize: 12}}>
                <a title={item1.name}>{item1.name}<span className="des-text-gray">（{item1.department}）</span></a>
              </Col>
            )
          })
        }
      </Row>
    );

    return (
      <div className="des-float-left">
        <span>成都3号线二三期项目部</span>
        <Popover placement="bottomLeft" content={content} trigger="click">
          <a>【切换】</a>
        </Popover>
      </div>
    )
  }
}

export default HeaderDefault;