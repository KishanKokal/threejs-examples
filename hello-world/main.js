import * as THREE from "three";

const canvas = document.querySelector("canvas.threejs");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  30
);
const renderer = new THREE.WebGLRenderer({ canvas: canvas });
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: "yellow" });
const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);

camera.position.z = 5;
scene.add(camera);
scene.add(cubeMesh);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);
