import * as THREE from 'three';
import ThreeGlobe from 'three-globe';
import Stats from 'three/examples/jsm/libs/stats.module';
import { TrackballControls } from 'three/addons/controls/TrackballControls.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'; 

export default class World {
    constructor(scene, camera, renderer, tbControls, stats) {
        this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;
        this.tbControls = tbControls;
        this.stats = stats;
        this.globe = null;
        
        // satellite info 
        this.satellite = new THREE.Object3D();
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

        // Gen random data
        const N = 5;
        const gData = [...Array(N).keys()].map(() => ({
        lat: (Math.random() - 0.5) * 180,
        lng: (Math.random() - 0.5) * 360,
        maxR: Math.random() * 20 + 3,
        propagationSpeed: (Math.random() - 0.5) * 20 + 1,
        repeatPeriod: Math.random() * 2000 + 200
        }));

        const colorInterpolator = t => `rgba(255,100,50,${1-t})`;

        const Globe = new ThreeGlobe()
        .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
        .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
        .ringsData(gData)
        .ringColor(() => colorInterpolator)
        .ringMaxRadius('maxR')
        .ringPropagationSpeed('propagationSpeed')
        .ringRepeatPeriod('repeatPeriod');
        
        window.addEventListener('resize', () => {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        }
        , false);

        this.globe = Globe;

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

        this.scene.add(this.globe);
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
       
        const objLoader = new OBJLoader()
        objLoader.load(
            'assets/triana-concept.obj',
            (object) => {
                this.satellite = object;
                this.satellite.scale.set(0.01, 0.01, 0.01)
                this.satellite.position.set(80 , 80  ,80);
                let material = new THREE.MeshLambertMaterial({color: 0x777777});
                this.satellite.traverse( function ( child ) {
                    if ( child instanceof THREE.Mesh ) {
                        child.material = material;
                    }
                });
                this.scene.add(this.satellite)
            },
            (xhr) => {
                console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
            },
            (error) => {
                console.log(error)
            }
        )




    }
    

    animate() {
        this.stats.update();
        this.renderer.render(this.scene, this.camera);
        this.tbControls.update();
        this.theta += this.dTheta;
        this.satellite.position.x = this.r * Math.cos(this.theta);
        this.satellite.position.z = this.r * Math.sin(this.theta);
        
        window.requestAnimationFrame(this.animate.bind(this));
    }
}