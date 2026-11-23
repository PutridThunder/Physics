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


// Sun
const SunGeometry = new THREE.SphereGeometry(4, 10,10);
const SunMaterial = new THREE.MeshBasicMaterial({color: 'yellow'});
const Sun = new THREE.Mesh(SunGeometry, SunMaterial);

// Mercury
const MercuryGeometry = new THREE.SphereGeometry(0.38, 10,10);
const MercuryMaterial = new THREE.MeshStandardMaterial({color: 'grey'});
const Mercury = new THREE.Mesh(MercuryGeometry, MercuryMaterial);

// Venus
const VenusGeometry = new THREE.SphereGeometry(0.95, 10,10);
const VenusMaterial = new THREE.MeshStandardMaterial({color: 'orange'});
const Venus = new THREE.Mesh(VenusGeometry, VenusMaterial);

// Earth
const EarthGeometry = new THREE.SphereGeometry(1, 10,10);
const EarthMaterial = new THREE.MeshStandardMaterial({color: 'orange'});
const Earth = new THREE.Mesh(EarthGeometry, EarthMaterial);

// Mars
const MarsGeometry = new THREE.SphereGeometry(1, 10,10);
const MarsMaterial = new THREE.MeshStandardMaterial({color: 'orange'});
const Mars = new THREE.Mesh(MarsGeometry, MarsMaterial);

// plane
const planeGeometry = new THREE.PlaneGeometry(40,40);
const planeMaterial = new THREE.MeshStandardMaterial({color: 'white'});
const plane = new THREE.Mesh(planeGeometry, planeMaterial);

// lighting
const pointlight = new THREE.PointLight(0xFFFFFF, 1000, 300);

// add lights
scene.add(pointlight)

// add objects
scene.add(plane);

// sun and planets
scene.add(Sun);

Sun.add(Mercury)
Sun.add(Venus)

// add helpers
scene.add(gridHelper);

// rotate and translate objects

// sun translation
Sun.translateY(1);

// mercury translation
Mercury.position.x = 10;

// Venus translation
Venus.position.x = 15;

// plane translation
plane.rotation.x = -Math.PI / 2;
plane.position.y = -10;


// scene animations
function animate(){
    orbit.update();

    Sun.rotateY(0.04);

    renderer.render(scene, camera);
}

// scene rendering

renderer.setAnimationLoop(animate);