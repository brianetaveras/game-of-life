import React, { Component } from 'react';
import * as THREE from 'three';
import OrbitControls from 'three-orbitcontrols';

class Viewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: null,
      cols: 100,
      rows: 100,
      scene: null,
      width: 0,
      height: 0,
      renderer: null,
      camera: null,
    };
  }
  render() {
    return (
      <div
        style={{ width: '100%', height: '100vh' }}
        id="viewer"
        ref={(mount) => {
          this.mount = mount;
          this.state.height = this.mount.clientHeight
          this.state.width = this.mount.clientWidth
        }}
      ></div>
    );
  }

  componentDidMount() {
    this.initialize();
  }

  initialize() {
    this.state.grid = this.make2DArray(this.state.cols, this.state.rows);
    this.state.scene =  new THREE.Scene();
    this.state.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.state.renderer.setClearColor(0x00000);
    this.state.renderer.setSize(this.state.width, this.state.height);
    this.mount.append(this.state.renderer.domElement)
    this.state.camera = new THREE.PerspectiveCamera(75, this.state.width / this.state.height, 0.1, 1000);
    new OrbitControls(this.state.camera, this.state.renderer.domElement);
    this.state.camera.position.z = 150;
    this.state.camera.position.y = -150;
    this.state.camera.position.x = 150;
    this.state.camera.rotateX(1);
    this.state.camera.rotateY(0);
    this.state.camera.rotateZ(45);

    let lights = [];
    lights[0] = new THREE.PointLight(0x304ffe, 1, 0);
    lights[1] = new THREE.PointLight(0xffffff, 1, 0);
    lights[2] = new THREE.PointLight(0xffffff, 1, 0);
    lights[0].position.set(0, 200, 0);
    lights[1].position.set(100, 200, 100);
    lights[2].position.set(-100, -200, -100);
    this.state.scene.add(lights[0]);
    this.state.scene.add(lights[1]);
    this.state.scene.add(lights[2]);
    
    for (let i = 0; i < this.state.cols; i++) {
      for (let j = 0; j < this.state.rows; j++) {
        this.state.grid[i][j] = Math.round(Math.random(2))
      }
    }

    this.draw()
    this.renderScene();
    // this.startAnimation()


  }

  make2DArray(cols, rows) {
    let arr = new Array(cols);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = new Array(rows);
    }

    return arr
  }

  draw(){
    for (let i = 0; i < this.state.cols; i++) {
      for (let j = 0; j < this.state.rows; j++) {
        const shape = new THREE.BoxBufferGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({color: this.state.grid[i][j] == 1 ? 0xfc8f34 : 0xffffff});
        let cube = new THREE.Mesh(shape, material);
        cube.position.x = i + i;
        cube.position.y = j + j;
        this.state.scene.add(cube);
      }
    }

  }
  
  startAnimation(){
    if (!this.state.frameId){
      this.state.frameId = requestAnimationFrame(this.animate)
    }
    
  }
  animate(){
    this.renderScene();
    this.state.frameId = window.requestAnimationFrame(this.animate)
  }
  
  renderScene(){
    if(this.state.renderer) this.state.renderer.render(this.state.scene, this.state.camera)
    
  }



}

export default Viewer;
