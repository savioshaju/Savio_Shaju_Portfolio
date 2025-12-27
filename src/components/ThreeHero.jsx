import * as THREE from "three";
import { useRef, useState, useMemo } from "react";
import { Canvas, extend, useThree, useFrame } from "@react-three/fiber";
import { BallCollider, CuboidCollider, Physics, RigidBody, useRopeJoint, useSphericalJoint } from "@react-three/rapier";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";
import { useTexture } from "@react-three/drei";

extend({ MeshLineGeometry, MeshLineMaterial });

export default function ThreeHero() {
  return (
    <Canvas camera={{ position: [0, 0, 13], fov: 25 }} dpr={[1, 2]}>
      <color attach="background" args={["#fbfaf8"]} />
      <ambientLight intensity={0.9} />
      <directionalLight position={[5, 10, 5]} intensity={0.4} />
      <Physics gravity={[0, -35, 0]} timeStep={1 / 60} iterations={15}>
        <Band />
      </Physics>
    </Canvas>
  );
}

function Band() {
  const band = useRef();
  const fixed = useRef();
  const j1 = useRef();
  const j2 = useRef();
  const j3 = useRef();
  const card = useRef();

  const vec = new THREE.Vector3();
  const dir = new THREE.Vector3();

  const { width, height } = useThree((s) => s.size);
  const texture = useTexture("/profile.jpg");

  const [curve] = useState(() => new THREE.CatmullRomCurve3([
    new THREE.Vector3(),
    new THREE.Vector3(),
    new THREE.Vector3(),
    new THREE.Vector3()
  ]));

  const [dragged, drag] = useState(false);

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3, card, [[0, 0, 0], [0, 1.45, 0]]);

  useFrame((state) => {
    if (dragged) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1, j2, j3].forEach((r) => r.current?.wakeUp());
      card.current?.setNextKinematicTranslation({
        x: vec.x - dragged.x,
        y: vec.y - dragged.y,
        z: vec.z - dragged.z
      });
    }
    if (fixed.current) {
      curve.points[0].copy(j3.current.translation());
      curve.points[1].copy(j2.current.translation());
      curve.points[2].copy(j1.current.translation());
      curve.points[3].copy(fixed.current.translation());
      band.current.geometry.setPoints(curve.getPoints(32));
    }
  });

  return (
    <>
      <group position={[3, 4, 0]}>
        <RigidBody ref={fixed} type="fixed" />
        {[j1, j2, j3].map((ref, i) => (
          <RigidBody key={i} ref={ref} position={[0.5 * (i + 1), 0, 0]} linearDamping={0.6} angularDamping={0.95}>
            <BallCollider args={[0.1]} />
          </RigidBody>
        ))}
        <RigidBody ref={card} position={[2, 0, 0]} linearDamping={0.6} angularDamping={0.95} type={dragged ? "kinematicPosition" : "dynamic"}>
          <CuboidCollider args={[0.8, 1.125, 0.02]} />
          <group onPointerDown={(e) => drag(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current.translation())))} onPointerUp={() => drag(false)}>
            <CardFront texture={texture} />
            <CardBack />
            <CardSketchFrame />
          </group>
        </RigidBody>
      </group>
      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial transparent opacity={0.6} color="#111827" resolution={[width, height]} lineWidth={1} />
      </mesh>
    </>
  );
}

function CardFront({ texture }) {
  return (
    <mesh position={[0, 0, 0.021]}>
      <planeGeometry args={[1.6, 2.25]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
}

function CardBack() {
  return (
    <mesh position={[0, 0, -0.021]} rotation={[0, Math.PI, 0]}>
      <planeGeometry args={[1.6, 2.25]} />
      <meshBasicMaterial color="#fbfaf8" />
    </mesh>
  );
}

function CardSketchFrame() {
  const material = useMemo(() => new THREE.MeshBasicMaterial({ color: "#111827" }), []);
  const w = 1.6;
  const h = 2.25;
  const t = 0.04;

  return (
    <>
      <mesh position={[0, h / 2 + t / 2, 0]} material={material}>
        <boxGeometry args={[w + t * 2, t, t]} />
      </mesh>
      <mesh position={[0, -h / 2 - t / 2, 0]} material={material}>
        <boxGeometry args={[w + t * 2, t, t]} />
      </mesh>
      <mesh position={[-w / 2 - t / 2, 0, 0]} material={material}>
        <boxGeometry args={[t, h + t * 2, t]} />
      </mesh>
      <mesh position={[w / 2 + t / 2, 0, 0]} material={material}>
        <boxGeometry args={[t, h + t * 2, t]} />
      </mesh>
    </>
  );
}