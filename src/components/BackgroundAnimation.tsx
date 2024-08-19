import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import { useAppSelector } from '../store';
import { Box } from '@mui/material';

const MIN_RADIUS = 7;
const MAX_RADIUS = 20;
const DEPTH = 4;
const NUM_POINTS = 2000;

const getGradientStop = (
  ratio: number,
  LEFT_COLOR: string,
  RIGHT_COLOR: string
) => {
  ratio = ratio > 1 ? 1 : ratio < 0 ? 0 : ratio;

  const c0 = LEFT_COLOR.match(/.{1,2}/g)!.map(
    (oct) => parseInt(oct, 16) * (1 - ratio)
  );
  const c1 = RIGHT_COLOR.match(/.{1,2}/g)!.map(
    (oct) => parseInt(oct, 16) * ratio
  );
  const ci = [0, 1, 2].map((i) => Math.min(Math.round(c0[i] + c1[i]), 255));
  const color = ci
    .reduce((a, v) => (a << 8) + v, 0)
    .toString(16)
    .padStart(6, '0');

  return `#${color}`;
};

const calculateColor = (x: number, LEFT_COLOR: string, RIGHT_COLOR: string) => {
  const maxDiff = MAX_RADIUS * 2;
  const distance = x + MAX_RADIUS;

  const ratio = distance / maxDiff;

  const stop = getGradientStop(ratio, LEFT_COLOR, RIGHT_COLOR);

  return stop;
};

const randomFromInterval = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

const BackgroundAnimation = () => {
  const { isDarkMode } = useAppSelector((state) => state.userState);

  const LEFT_COLOR = !isDarkMode ? 'ffffff' : '000000';
  const RIGHT_COLOR = !isDarkMode ? 'b7ff00' : 'e5e5e5';

  return (
    <Box sx={{ opacity: 0.5 }}>
      <Canvas
        camera={{
          position: [10, -7.5, -5],
        }}
        style={{ height: '100vh' }}
      >
        <OrbitControls maxDistance={20} minDistance={10} />
        <directionalLight />
        <pointLight position={[-30, 0, -30]} power={10.0} />
        <PointCircle LEFT_COLOR={LEFT_COLOR} RIGHT_COLOR={RIGHT_COLOR} />
      </Canvas>
    </Box>
  );
};

interface PointCircleProps {
  LEFT_COLOR: string;
  RIGHT_COLOR: string;
}

const PointCircle: React.FC<PointCircleProps> = ({
  LEFT_COLOR,
  RIGHT_COLOR,
}) => {
  const ref = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (ref.current?.rotation) {
      ref.current.rotation.z = clock.getElapsedTime() * 0.05;
    }
  });

  const pointsInner = Array.from({ length: NUM_POINTS }, (_, k) => k + 1).map(
    (num) => {
      const randomRadius = randomFromInterval(MIN_RADIUS, MAX_RADIUS);
      const randomAngle = Math.random() * Math.PI * 2;

      const x = Math.cos(randomAngle) * randomRadius;
      const y = Math.sin(randomAngle) * randomRadius;
      const z = randomFromInterval(-DEPTH, DEPTH);

      const color = calculateColor(x, LEFT_COLOR, RIGHT_COLOR);

      return {
        idx: num,
        position: [x, y, z] as [number, number, number],
        color,
      };
    }
  );

  const pointsOuter = Array.from(
    { length: NUM_POINTS / 4 },
    (_, k) => k + 1
  ).map((num) => {
    const randomRadius = randomFromInterval(MIN_RADIUS / 2, MAX_RADIUS * 2);
    const angle = Math.random() * Math.PI * 2;

    const x = Math.cos(angle) * randomRadius;
    const y = Math.sin(angle) * randomRadius;
    const z = randomFromInterval(-DEPTH * 10, DEPTH * 10);

    const color = calculateColor(x, LEFT_COLOR, RIGHT_COLOR);

    return {
      idx: num,
      position: [x, y, z] as [number, number, number],
      color,
    };
  });

  return (
    <group ref={ref}>
      {pointsInner.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
      {pointsOuter.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
    </group>
  );
};

interface PointProps {
  position: [number, number, number];
  color: string;
}

const Point: React.FC<PointProps> = ({ position, color }) => {
  return (
    <Sphere position={position} args={[0.1, 10, 10]}>
      <meshStandardMaterial
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.5}
        color={color}
      />
    </Sphere>
  );
};

export default BackgroundAnimation;
