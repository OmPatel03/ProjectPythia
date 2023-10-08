import { TrackballControls } from '//unpkg.com/three/examples/jsm/controls/TrackballControls.js';
import { OBJLoader } from '//unpkg.com/three/examples/jsm/loaders/OBJLoader.js';
Object.assign(THREE , { TrackballControls });
Object.assign(THREE , { OBJLoader });

// Gen random data
const N = 50;
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

// Setup renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('root').appendChild(renderer.domElement);

// Setup scene
const scene = new THREE.Scene();
scene.add(Globe);
scene.add(new THREE.AmbientLight(0xcccccc, Math.PI));
scene.add(new THREE.DirectionalLight(0xffffff, 0.6 * Math.PI));

// Setup camera
const camera = new THREE.PerspectiveCamera();
camera.aspect = window.innerWidth/window.innerHeight;
camera.updateProjectionMatrix();
camera.position.z = 500;

// Add camera controls
const tbControls = new THREE.TrackballControls(camera, renderer.domElement);
tbControls.minDistance = 101;
tbControls.rotateSpeed = 5;
tbControls.zoomSpeed = 0.8;

const objLoader = new OBJLoader();
objLoader.load('/assets/triana-concept.obj', (root) => {
    root.scale.setScalar(1);
    scene.add(root);
});

// scale 


// Kick-off renderer
(function animate() { // IIFE
  // Frame cycle
  tbControls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
})();