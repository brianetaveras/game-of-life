import React, { Component } from 'react';
import Viewer from '../components/3DViewer';
import Controls from '../components/Controls';
class Home extends Component {


  render() {
    return (

      <div id="home-page">
        <Controls {...this.props} />
        <Viewer {...this.props} />
      </div>


    );
  }
}

export default Home;
