import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';


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
orbit.maxDistance = 150;

orbit.update();

// scene items

// grid
const gridHelper = new THREE.GridHelper(500, 25, 'green', 'green');


// Sun
const SunGeometry = new THREE.SphereGeometry(4, 10,10);
const SunMaterial = new THREE.MeshBasicMaterial({color: 'yellow'});
const Sun = new THREE.Mesh(SunGeometry, SunMaterial);

// Mercury
const MercuryGeometry = new THREE.SphereGeometry(0.38, 10,10);
const MercuryMaterial = new THREE.MeshStandardMaterial({color: 'grey'});
const Mercury = new THREE.Mesh(MercuryGeometry, MercuryMaterial);

const MercuryOrigin = new THREE.Object3D();

// Venus
const VenusGeometry = new THREE.SphereGeometry(0.95, 10,10);
const VenusMaterial = new THREE.MeshStandardMaterial({color: 'orange'});
const Venus = new THREE.Mesh(VenusGeometry, VenusMaterial);

const VenusOrigin = new THREE.Object3D();

// Earth
const EarthGeometry = new THREE.SphereGeometry(1, 10,10);
const EarthMaterial = new THREE.MeshStandardMaterial({color: 'blue'});
const Earth = new THREE.Mesh(EarthGeometry, EarthMaterial);

const EarthOrigin = new THREE.Object3D();

// Mars
const MarsGeometry = new THREE.SphereGeometry(0.53, 10,10);
const MarsMaterial = new THREE.MeshStandardMaterial({color: 'red'});
const Mars = new THREE.Mesh(MarsGeometry, MarsMaterial);

const MarsOrigin = new THREE.Object3D();

// Jupiter
const JupiterGeometry = new THREE.SphereGeometry(11.21, 10,10);
const JupiterMaterial = new THREE.MeshStandardMaterial({color: 'brown'});
const Jupiter = new THREE.Mesh(JupiterGeometry, JupiterMaterial);

const JupiterOrigin = new THREE.Object3D();

// Saturn
const SaturnGeometry = new THREE.SphereGeometry(9.45, 10,10);
const SaturnMaterial = new THREE.MeshStandardMaterial({color: 'brown'});
const Saturn = new THREE.Mesh(SaturnGeometry, SaturnMaterial);

const SaturnOrigin = new THREE.Object3D();

// Uranus
const UranusGeometry = new THREE.SphereGeometry(4.01, 10,10);
const UranusMaterial = new THREE.MeshStandardMaterial({color: 'cyan'});
const Uranus = new THREE.Mesh(UranusGeometry, UranusMaterial);

const UranusOrigin = new THREE.Object3D();

// Neptune
const NeptuneGeometry = new THREE.SphereGeometry(3.88, 10,10);
const NeptuneMaterial = new THREE.MeshStandardMaterial({color: 'blue'});
const Neptune = new THREE.Mesh(NeptuneGeometry, NeptuneMaterial);

const NeptuneOrigin = new THREE.Object3D();

// plane
// const planeGeometry = new THREE.PlaneGeometry(100,100);
// const planeMaterial = new THREE.MeshBasicMaterial({color: 'white'});
// const plane = new THREE.Mesh(planeGeometry, planeMaterial);

// lighting
const pointlight = new THREE.PointLight(0xFFFFFF, 10000, 300);

// add lights
scene.add(pointlight)

// add objects
// scene.add(plane);

// sun and planets
scene.add(Sun);

scene.add(MercuryOrigin)
scene.add(VenusOrigin)
scene.add(EarthOrigin)
scene.add(MarsOrigin)
scene.add(JupiterOrigin)
scene.add(SaturnOrigin)
scene.add(UranusOrigin)
scene.add(NeptuneOrigin)

MercuryOrigin.add(Mercury)
VenusOrigin.add(Venus)
EarthOrigin.add(Earth)
MarsOrigin.add(Mars)
JupiterOrigin.add(Jupiter)
SaturnOrigin.add(Saturn)
UranusOrigin.add(Uranus)
NeptuneOrigin.add(Neptune)


// add helpers
scene.add(gridHelper);

// rotate and translate objects

// sun translation
Sun.translateY(1);

// planets
Mercury.position.x = 10;

Venus.position.x = 15;

Earth.position.x = 20;

Mars.position.x = 25;

Jupiter.position.x = 50;

Saturn.position.x = 80;

Uranus.position.x = 100;

Neptune.position.x = 120;

// plane translation
// plane.rotation.x = -Math.PI / 2;
// plane.position.y = -10;


// scene animations
function animate(){
    orbit.update();
    Sun.rotateY(0.004);

    MercuryOrigin.rotateY(0.04)
    VenusOrigin.rotateY(0.025)
    EarthOrigin.rotateY(0.02)
    MarsOrigin.rotateY(0.015)
    JupiterOrigin.rotateY(0.008)
    SaturnOrigin.rotateY(0.006)
    UranusOrigin.rotateY(0.004)
    NeptuneOrigin.rotateY(0.003)

    renderer.render(scene, camera);
}

// scene rendering

renderer.setAnimationLoop(animate);