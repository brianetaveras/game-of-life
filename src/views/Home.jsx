import React, { Component } from 'react';

import * as THREE from "three";
import { MTLLoader, OBJLoader } from "three-obj-mtl-loader";
import OrbitControls from "three-orbitcontrols";

class Home extends Component {

    componentDidMount() {


        const width = this.mount.clientWidth;
        const height = this.mount.clientHeight;
        this.scene = new THREE.Scene();

        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setClearColor("#263238");
        this.renderer.setSize(width, height);

        
        this.mount.appendChild(this.renderer.domElement);

        this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        this.camera.position.z = 8;
        this.camera.position.y = 5;
        const controls = new OrbitControls(this.camera, this.renderer.domElement);
        

        var lights = [];
        lights[0] = new THREE.PointLight(0x304ffe, 1, 0);
        lights[1] = new THREE.PointLight(0xffffff, 1, 0);
        lights[2] = new THREE.PointLight(0xffffff, 1, 0);
        lights[0].position.set(0, 200, 0);
        lights[1].position.set(100, 200, 100);
        lights[2].position.set(-100, -200, -100);
        this.scene.add(lights[0]);
        this.scene.add(lights[1]);
        this.scene.add(lights[2]);

        let objLoader = new OBJLoader()
        objLoader.load('/models/brian.obj', obj =>{
            this.brian = obj;
            this.brian.position.setY(3);
            this.brian.scale.set(5, 5, 5);
            this.brian.rotation.y = 180;
            this.brian.rotation.x = 180;
            this.scene.add(this.brian);
        })
    
      
        this.renderScene();

        this.start();

        
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
    

    render() {
        return (
            <div
                style={{ width: "100%", height: "100vh" }}
                id="home-page"
                ref={mount => { this.mount = mount }}>
            </div>
        )
    }
}

export default Home;