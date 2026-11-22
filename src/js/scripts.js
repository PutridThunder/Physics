import * as THREE from 'three';
import * as dat from 'dat.gui'

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    70,                                     // FOV
    window.innerWidth / window.innerHeight, // aspect ratio
    0.1,                                    // close clipping distance
    1000                                    // far clipping distance
)

camera.position.set(0, 5, 10);
camera.lookAt(0, 0, 0);

const gridHelper = new THREE.GridHelper(30, 30);

const boxGeometry = new THREE.BoxGeometry(1,1,1); //width, height, depth (defaults are 1, so didnt really need to write 111)
const boxMaterial = new THREE.MeshBasicMaterial({color:'red'})
const box = new THREE.Mesh(boxGeometry, boxMaterial)

const sphereGeometry = new THREE.SphereGeometry(4, 10,10);
const sphereMaterial = new THREE.MeshStandardMaterial({color: 'blue'});
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

const planeGeometry = new THREE.PlaneGeometry(20,20);
const planeMaterial = new THREE.MeshStandardMaterial({color: 'white'});
const plane = new THREE.Mesh(planeGeometry, planeMaterial);

const ambientLight = new THREE.AmbientLight(0x333333);
const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 2);

scene.add(directionalLight);
scene.add(ambientLight);

scene.add(plane);
scene.add(sphere);
scene.add(box);

plane.rotateX(-1.57)
plane.translateZ(-1)

box.translateX(5);
scene.add(gridHelper);

function spin(){
    box.rotateX(.1);
    box.rotateY(.05);
    renderer.render(scene, camera);
}

// const options = {
//     sphereColor: '#ffea00',
// };

// gui works different now than how the video shows, see how to use gui


renderer.setAnimationLoop(spin);