import * as THREE from 'three';
import ThreeGlobe from 'three-globe';
import Stats from 'three/examples/jsm/libs/stats.module';
import { TrackballControls } from 'three/addons/controls/TrackballControls.js';
import * as dat from 'dat.gui';
import Globe from './Globe.jsx';
import Satellite from './Satellite.jsx';
import Simulation from './Simulation.jsx';

export default class World {
    constructor(scene, camera, renderer, tbControls, stats, gui) {
        this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;
        this.tbControls = tbControls;
        this.stats = stats;
        this.step = 0;
        this.currentkP = 0;

        this.globe = null;
        this.satellite = null;

        this.r = 100;
        this.theta = 0;
        this.dTheta = 2 * Math.PI / 5000;
    } 

    init() {
        const canvas = document.getElementById('display');

        this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);

        this.stats = new Stats();
        document.body.appendChild(this.stats.dom);
        
        window.addEventListener('resize', () => {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        }
        , false);

        // Setup scene
        this.scene = new THREE.Scene();
        this.scene.add(new THREE.AmbientLight(0xcccccc, Math.PI));
        this.scene.add(new THREE.DirectionalLight(0xffffff, 0.6 * Math.PI));

        // Setup camera
        this.camera = new THREE.PerspectiveCamera();
        this.camera.aspect = window.innerWidth/window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.camera.position.z = 500;

        // Add camera controls
        this.tbControls = new TrackballControls(this.camera, this.renderer.domElement);
        this.tbControls.minDistance = 101;
        this.tbControls.rotateSpeed = 5;
        this.tbControls.zoomSpeed = 0.8;


        this.scene.add(new THREE.AmbientLight(0xcccccc, Math.PI));
        this.scene.add(new THREE.DirectionalLight(0xffffff, 0.6 * Math.PI));

        const cubeTextureLoader = new THREE.CubeTextureLoader();
        const environmentMapTexture = cubeTextureLoader.load(
        [
            'https://closure.vps.wbsprt.com/files/earth/space/px.png',
            'https://closure.vps.wbsprt.com/files/earth/space/nx.png',
            'https://closure.vps.wbsprt.com/files/earth/space/py.png',
            'https://closure.vps.wbsprt.com/files/earth/space/ny.png',
            'https://closure.vps.wbsprt.com/files/earth/space/pz.png',
            'https://closure.vps.wbsprt.com/files/earth/space/nz.png',
        ],
        );
        
        this.scene.background = environmentMapTexture;

        // Globe 
        this.globe = new Globe(this.scene);

        // Satellite
        this.satellite = new Satellite(this.scene);

        // Simulation
        this.simulation = new Simulation(this.globe);
        
        this.gui = new dat.GUI();
        this.gui.add(this, 'step', 0, 2837 - 1).step(1).listen();
    }

    animate() {
        this.stats.update();
        this.renderer.render(this.scene, this.camera);

        // move satellite
        this.theta += this.dTheta;
        this.satellite.mesh.position.x = this.r * Math.cos(this.theta);
        this.satellite.mesh.position.z = this.r * Math.sin(this.theta);
        
        this.tbControls.update();

        // update simulation
        if (this.simulation.kP != []) {  
            // console.log(this.simulation.kP[this.currentDay])
            this.simulation.update(this.step);
        }

        
        window.requestAnimationFrame(this.animate.bind(this));
    }
}