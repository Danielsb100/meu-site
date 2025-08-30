import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.160.0/examples/jsm/loaders/GLTFLoader.js';

// Cena
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x222222);

// Câmera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 2;

// Renderizador
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Luz
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(2, 2, 2);
scene.add(light);

// Carregar modelo
const loader = new GLTFLoader();
loader.load(
  'modelo/meuModelo.glb', // Caminho do seu modelo
  (gltf) => {
    scene.add(gltf.scene);
  },
  undefined,
  (error) => {
    console.error('Erro ao carregar modelo:', error);
  }
);

// Animação
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();

// Responsivo
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
