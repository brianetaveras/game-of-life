import React, { Component } from 'react';

import Viewer from '../components/3DViewer';

import { OBJLoader } from 'three-obj-mtl-loader';

class Home extends Component {
  componentDidMount() {
    // const width = this.mount.clientWidth;
    // const height = this.mount.clientHeight;
    // this.scene = new THREE.Scene();

    // this.renderer = new THREE.WebGLRenderer({ antialias: true });
    // this.renderer.setClearColor('#00000');
    // this.renderer.setSize(width, height);
    // this.mount.appendChild(this.renderer.domElement);

    // this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    // new OrbitControls(this.camera, this.renderer.domElement);
    // this.camera.position.z = 150;
    // this.camera.position.y = -150;
    // this.camera.position.x = 150;
    // this.camera.rotateX(1);
    // this.camera.rotateY(0);
    // this.camera.rotateZ(45);

    // var lights = [];
    // lights[0] = new THREE.PointLight(0x304ffe, 1, 0);
    // lights[1] = new THREE.PointLight(0xffffff, 1, 0);
    // lights[2] = new THREE.PointLight(0xffffff, 1, 0);
    // lights[0].position.set(0, 200, 0);
    // lights[1].position.set(100, 200, 100);
    // lights[2].position.set(-100, -200, -100);
    // this.scene.add(lights[0]);
    // this.scene.add(lights[1]);
    // this.scene.add(lights[2]);

    // this.gridSize = 100;

    // // for (let i = 0; i < this.gridSize; i++) {
    // //   for (let j = 0; j < this.gridSize; j++) {
    // //     const shape = new THREE.BoxBufferGeometry(1, 1, 1);
    // //     const material = new THREE.MeshBasicMaterial({ color: 0xfc8f34 });
    // //     let cube = new THREE.Mesh(shape, material);
    // //     cube.position.x = i + i;
    // //     cube.position.y = j + j;
    // //     this.scene.add(cube);
    // //   }
    // // }
    
    // this.renderScene();
    // this.start();
  }
  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  };
  stop = () => {
    cancelAnimationFrame(this.frameId);
  };
  animate = () => {
    if (this.brian) this.brian.rotation.y += 0.01;

    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  };
  renderScene = () => {
    if (this.renderer) this.renderer.render(this.scene, this.camera);
  };


  create2DArray(cols, rows){

  }

  render() {
    return (
      <div id="home-page">
      <Viewer />
      </div>
    );
  }
}

export default Home;
