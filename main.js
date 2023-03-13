// import './style.css'

import * as THREE from 'https://unpkg.com/three@0.127.0/build/three.module'

import { OrbitControls } from 'https://unpkg.com/three@0.127.0/examples/jsm/controls/OrbitControls';

// import gsap from 'gsap';

// import * as r from 'https://unpkg.com/browse/redis@2.3.1/index.js'
// import { FlyControls } from 'three/addons/controls/FlyControls.js';

// import { gsap } from "gsap"
// let x = 0,y = 0;
// let redis = r.createClient();
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 10000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('.bg'),
});
renderer.setPixelRatio(2);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(100);
// camera.position.setX(-100);
renderer.render(scene, camera);
// let earth = new THREE.TextureLoader().load('sun.jpg');
const geometry = new THREE.SphereGeometry( 15, 64, 64 );
const material = new THREE.MeshStandardMaterial({ color:0x00dd88 ,roughness: 0.4});
const torus = new THREE.Mesh(geometry, material);

scene.add(torus);
const pointLight = new THREE.PointLight(0xfffffff,0.8);
pointLight.position.set(50, 40, 100);

// const ambientLight = new THREE.AmbientLight(0xffffff);
// scene.add(ambientLight);
const lightHelper = new THREE.PointLightHelper(pointLight)
// const gridHelper = new THREE.GridHelper(200, 50);

const controls = new OrbitControls(camera, document.querySelector('.bg'));
// const controls2 = new FlyControls(camera, document.querySelector('.bg'))

// controls2.dragToLook = true; 
// controls2.autoForward = true;
controls.enableDamping = true;
controls.enablePan = true;
controls.enableZoom = false;
controls.autoRotate = true;
// controls.autoRotateSpeed = 5;
scene.add(lightHelper,pointLight)
let star;
function addStar() {
  const geometry = new THREE.SphereGeometry(0.35, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffffffff });
  star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(150));
  
  star.position.set(x, y, z);
  scene.add(star);
}
// function moveCamera() {
//   const t = document.body.getBoundingClientRect().top;
//   console.log(t);
//   // camera.position.setZ(101);
//   // pointLight.position.set(t * -0.04, t * -0.04,40);
//   camera.position.x = t * -0.0002;
//   // camera.rotation.y = t * -0.0002;
//   // camera.positio
// }

// document.body.onscroll = moveCamera;
// // moveCamera();

 Array(200).fill().forEach(addStar);
function animate() {
    renderer.render(scene, camera);
    document.querySelector('.cur').style.opacity = `0`
    // pointLight.rotation.x += 0.01;
    // pointLight.rotation.y += 0.005;
    // pointLight.rotation.z += 0.01;
    // pointLight.position.x += 0.001;
    star.position.y += 5;
    star.position.x += 5;
    star.position.z += 5;


    controls.update()
    // controls2.update(2)
    // pointLight.position.z += 1;
    // x+= 0.1; //
    // y+= 0.1;
    // pointLight.position.set(40, 10 , 10,29);
    // pointLight.remove
    // console.log(x,y);
    requestAnimationFrame(animate);
    
  }
  
animate();

// let tl = gsap.timeline
// import '../github/style.css'
window.onmousemove = (e) => {
  let x = e.clientX
  let y = e.clientY
  document.querySelector('.cur').style.opacity = `1`
  document.querySelector('.cur').style.top = `${y}px`
  document.querySelector('.cur').style.left = `${x}px`
  document.querySelector('.cur').style.opacity = `1`


}

window.onresize = () => {
  location.reload()
}
// let tl = gsap.timeline({defaults:{duration: 1}})
// let t = gsap.timeline({defaults:{duration: 3}})
// tl.fromTo(torus.scale, { z: 0,x: 0,y: 0} ,{ z: 1,x: 1,y: 1})
// t.fromTo(controls.autoRotateSpeed, {a} ,{x:5})
// redis.set("string key", "string val")
