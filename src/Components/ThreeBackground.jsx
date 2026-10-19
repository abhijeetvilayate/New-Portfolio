import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './ThreeBackground.css';

export const ThreeBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // SCENE, CAMERA, RENDERER
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      2500
    );
    camera.position.z = 850;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 1. PARTICLE CONSTELLATION (Lilac, Amber, Cyan)
    const particleCount = 700;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    // Palette: Lilac (#c084fc), Sunset Amber (#f59e0b), Electric Cyan (#38bdf8)
    const colorPalette = [
      new THREE.Color(0xc084fc),
      new THREE.Color(0xf59e0b),
      new THREE.Color(0x38bdf8),
      new THREE.Color(0xa855f7),
      new THREE.Color(0xfbbf24),
    ];

    for (let i = 0; i < particleCount; i++) {
      // Scatter particles across 3D space
      positions[i * 3] = (Math.random() - 0.5) * 1800;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 1400;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 1200;

      const chosenColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i * 3] = chosenColor.r;
      colors[i * 3 + 1] = chosenColor.g;
      colors[i * 3 + 2] = chosenColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Custom circular soft glow texture for particles
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    grad.addColorStop(0, 'rgba(255,255,255,1)');
    grad.addColorStop(0.3, 'rgba(255,255,255,0.7)');
    grad.addColorStop(0.8, 'rgba(255,255,255,0.15)');
    grad.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 32, 32);

    const texture = new THREE.CanvasTexture(canvas);

    const material = new THREE.PointsMaterial({
      size: 7,
      map: texture,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // 2. FLOATING 3D WIREFRAME MESH OBJECTS (Positioned cleanly on flanks away from content)
    const objectsGroup = new THREE.Group();
    scene.add(objectsGroup);

    // 3D Octahedron (Cyan glow - Lower Right Flank)
    const octGeo = new THREE.OctahedronGeometry(85, 1);
    const octMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.2,
    });
    const octahedron = new THREE.Mesh(octGeo, octMat);
    octahedron.position.set(480, -320, -180);
    objectsGroup.add(octahedron);

    // 3D Dodecahedron (Lilac/Purple glow - Far Upper Left Margin above headers)
    const dodecGeo = new THREE.DodecahedronGeometry(80, 0);
    const dodecMat = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      wireframe: true,
      transparent: true,
      opacity: 0.2,
    });
    const dodecahedron = new THREE.Mesh(dodecGeo, dodecMat);
    dodecahedron.position.set(-460, 280, -150);
    objectsGroup.add(dodecahedron);

    // MOUSE PARALLAX TRACKING
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (event) => {
      mouseX = (event.clientX - window.innerWidth / 2) * 0.45;
      mouseY = (event.clientY - window.innerHeight / 2) * 0.45;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // RESIZE HANDLER
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', onResize);

    // ANIMATION LOOP
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth camera interpolation toward mouse
      targetX += (mouseX - targetX) * 0.04;
      targetY += (mouseY - targetY) * 0.04;
      camera.position.x = targetX;
      camera.position.y = -targetY;
      camera.lookAt(scene.position);

      // Slow organic rotations
      particles.rotation.y += 0.0006;
      particles.rotation.x += 0.0003;

      octahedron.rotation.y += 0.005;
      octahedron.rotation.z += 0.003;

      dodecahedron.rotation.x += 0.004;
      dodecahedron.rotation.y += 0.003;

      renderer.render(scene, camera);
    };

    animate();

    // CLEANUP
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animationFrameId);

      geometry.dispose();
      material.dispose();
      octGeo.dispose();
      octMat.dispose();
      dodecGeo.dispose();
      dodecMat.dispose();
      texture.dispose();

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="three-immersive-container" ref={mountRef}>
      {/* 3D Cyber Depth Grid Overlay */}
      <div className="cyber-3d-grid-horizon"></div>
    </div>
  );
};

export default ThreeBackground;
