import React, { Component } from 'react';

import LayoutDefault from '../../components/layout/Default';
import DesSider from './SideBar';
import DesMeetDefault from './components/Default';

import './Common.less';

class Meet extends Component {
  render() {
    console.log('this is meet.jsx')
    return (
      <LayoutDefault>
        <DesSider />
        <DesMeetDefault />
      </LayoutDefault>
    );
  }
}

export default Meet;
