import * as THREE from 'three';
import * as dat from 'dat.gui'

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const gui = new dat.GUI();
// renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// scene
const scene = new THREE.Scene();

// camera
const camera = new THREE.PerspectiveCamera(
    70,                                     // FOV
    window.innerWidth / window.innerHeight, // aspect ratio
    0.1,                                    // close clipping distance
    1000                                    // far clipping distance
)

const orbit = new OrbitControls(camera, renderer.domElement)

camera.position.set(0, 5, 10);
camera.lookAt(0, 0, 0);

// Vertical rotation limits
orbit.minPolarAngle = 0;
orbit.maxPolarAngle = Math.PI / 1.9;

// Zoom limits
orbit.minDistance = 3;
orbit.maxDistance = 50;

orbit.update();
// scene items

// grid
const gridHelper = new THREE.GridHelper(30, 30);

// box
const boxGeometry = new THREE.BoxGeometry(1,1,1); //width, height, depth (defaults are 1, so didnt really need to write 111)
const boxMaterial = new THREE.MeshBasicMaterial({color:'red'})
const box = new THREE.Mesh(boxGeometry, boxMaterial)

// sphere
const sphereGeometry = new THREE.SphereGeometry(1, 10,10);
const sphereMaterial = new THREE.MeshStandardMaterial({color: 'blue'});
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

// plane
const planeGeometry = new THREE.PlaneGeometry(20,20);
const planeMaterial = new THREE.MeshStandardMaterial({color: 'white'});
const plane = new THREE.Mesh(planeGeometry, planeMaterial);

// lighting
const ambientLight = new THREE.AmbientLight(0x333333);
const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 2);

// add lights
scene.add(directionalLight);
scene.add(ambientLight);

// add objects
scene.add(plane);
scene.add(sphere);
scene.add(box);

// add helpers
scene.add(gridHelper);

// rotate and translate objects

// plane translation
plane.rotation.x = -Math.PI / 2;
plane.position.y = -1;

// box translation
box.translateX(5);

// scene functions

// spin cube
function spin(){
    box.rotateX(.1);
    box.rotateY(.05);
    renderer.render(scene, camera);
}


// gui

// const options = {
//     sphereColor: '#ffea00',
// };

// gui works different now than how the video shows, see how to use gui


// scene rendering
renderer.setAnimationLoop(spin);