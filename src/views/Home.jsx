import React, { Component } from 'react';

import Viewer from '../components/3DViewer';

class Home extends Component {

  render() {
    return (
      <div id="home-page">
      <Viewer />
      </div>
    );
  }
}

export default Home;
