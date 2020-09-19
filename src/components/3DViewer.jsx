import React, { Component } from 'react';
import * as THREE from 'three';
import OrbitControls from 'three-orbitcontrols';

class Viewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: null,
      cols: 40,
      rows: 40,
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
    this.state.scene = new THREE.Scene();
    this.state.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.state.renderer.setClearColor(0x00000);
    this.state.renderer.setSize(this.state.width, this.state.height);
    this.mount.append(this.state.renderer.domElement)
    this.state.camera = new THREE.PerspectiveCamera(30, this.state.width / this.state.height, 0.1, 1000);
    new OrbitControls(this.state.camera, this.state.renderer.domElement);
    this.state.camera.position.z = 100;
    this.state.camera.position.y = -150;
    this.state.camera.position.x = 50;
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
        this.state.grid[i][j] = Math.round(Math.random())
      }
    }

    this.draw()
    this.renderScene();
    this.startAnimation()


  }

  make2DArray(cols, rows) {
    let arr = new Array(cols);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = new Array(rows);
    }

    return arr
  }

  draw = () => {

   

    for (let i = 0; i < this.state.cols; i++) {
      for (let j = 0; j < this.state.rows; j++) {
        if (this.state.grid[i][j] === 1) {
          const shape = new THREE.BoxBufferGeometry(1, 1, 1);
          const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
          let cube = new THREE.Mesh(shape, material);
          cube.name = `cube-${i}-${j}`
          cube.position.x = i + i;
          cube.position.y = j + j;
          this.state.scene.add(cube);
        } else {

          this.state.scene.remove(this.state.scene.getObjectByName(`cube-${i}-${j}`))
        }
      }
    }

    let next = this.make2DArray(this.state.cols, this.state.rows);

    for (let i = 0; i < this.state.cols; i++) {
      for (let j = 0; j < this.state.rows; j++) {
        let state = this.state.grid[i][j];
        // Count live neighbors!
        let sum = 0;
        let neighbors = this.countNeighbors(this.state.grid, i, j);

        if (state == 0 && neighbors == 3) {
          next[i][j] = 1;
        } else if (state == 1 && (neighbors < 2 || neighbors > 3)) {
          next[i][j] = 0;
        } else {
          next[i][j] = state;
        }
      }
    }

    this.state.grid = next

  }

  startAnimation = () => {
    if (!this.state.frameId) {
      this.state.frameId = requestAnimationFrame(this.animate)
    }

  }

  countNeighbors = (grid, x, y) => {
    let sum = 0;
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        let col = (x + i + this.state.cols) % this.state.cols;
        let row = (y + j + this.state.rows) % this.state.rows;
        sum += grid[col][row];
      }
    }
    sum -= this.state.grid[x][y];
    return sum;
  }

  animate = () => {
    this.draw()

    this.renderScene();

    this.state.frameId = window.requestAnimationFrame(this.animate)
  }

  renderScene = () => {
    if (this.state.renderer) this.state.renderer.render(this.state.scene, this.state.camera)

  }



}

export default Viewer;
