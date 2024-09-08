import { Canvas } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import React, { Suspense } from 'react';

const Model = () => {
  const gltf = useLoader(GLTFLoader, '../../public/projectjs.glb');
  return <primitive object={gltf.scene} scale={2.7} />;  {/* Increased scale */}
};

const ThreeJs = () => {
  return (
    <div className="h-screen w-full">
      <Canvas camera={{ position: [0, 1, 5], fov: 60 }} style={{ height: '100%', width: '100%' }}>
        <ambientLight intensity={0.5} />
        <directionalLight intensity={1} position={[0, 10, 5]} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls 
          enableZoom={true} 
          enablePan={false}   
          minDistance={3}      
          maxDistance={10}    
          target={[0, 1, 0]}  
        />
      </Canvas>
    </div>
  );
};

export default ThreeJs;
