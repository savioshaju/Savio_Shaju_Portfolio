import * as THREE from "three";
import { useRef, useState, useEffect, useMemo } from "react";
import { Canvas, useFrame, useThree, extend } from "@react-three/fiber";
import {
  Physics,
  RigidBody,
  BallCollider,
  CuboidCollider,
  useRopeJoint,
} from "@react-three/rapier";
import { OrbitControls, useTexture } from "@react-three/drei";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";

extend({ MeshLineGeometry, MeshLineMaterial });

/* =========================
   ROOT
========================= */
export default function ThreeHero() {
  return (
    <Canvas
      style={{ width: "100%", height: "100%" }}
      camera={{ position: [0, 0, 8], fov: 40 }}
      dpr={[1, 2]}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 8, 5]} intensity={1.2} />

      <Physics gravity={[0, -9.5]}>
        <HangingCard />
      </Physics>

      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}

/* =========================
   HANGING SYSTEM
========================= */
function HangingCard() {
  const anchor = useRef();
  const joint1 = useRef();
  const joint2 = useRef();
  const card = useRef();
  const lineRef = useRef();

  const { size } = useThree();

  const [canDrag, setCanDrag] = useState(false);
  const [dragOffset, setDragOffset] = useState(null);

  useEffect(() => {
    const t = setTimeout(() => setCanDrag(true), 1500);
    return () => clearTimeout(t);
  }, []);

  // Safe initial line
  const initialLine = useMemo(
    () => [
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0, -0.5, 0),
      new THREE.Vector3(0, -1, 0),
      new THREE.Vector3(0, -1.5, 0),
    ],
    []
  );

  // Rope physics
  useRopeJoint(anchor, joint1, [[0, 0, 0], [0, 0, 0], 0.8]);
  useRopeJoint(joint1, joint2, [[0, 0, 0], [0, 0, 0], 0.8]);
  useRopeJoint(joint2, card, [[0, 0, 0], [0, 1.2, 0], 0.2]);

  useFrame(({ pointer, camera }) => {
    /* ---------- ROPE VISUAL ---------- */
    if (
      !anchor.current ||
      !joint1.current ||
      !joint2.current ||
      !card.current ||
      !lineRef.current
    )
      return;

    const p0 = anchor.current.translation();
    const p1 = joint1.current.translation();
    const p2 = joint2.current.translation();
    const p3 = card.current.translation();

    // 🚨 HARD NaN GUARD
    if (
      !Number.isFinite(p0.x) ||
      !Number.isFinite(p1.x) ||
      !Number.isFinite(p2.x) ||
      !Number.isFinite(p3.x)
    )
      return;

    const cardTop = new THREE.Vector3(p3.x, p3.y + 1.2, p3.z);

    const points = [
      new THREE.Vector3(p0.x, p0.y, p0.z),
      new THREE.Vector3(p1.x, p1.y, p1.z),
      new THREE.Vector3(p2.x, p2.y, p2.z),
      cardTop,
    ];

    lineRef.current.geometry.setPoints(points);

    /* ---------- DRAG ---------- */
    if (dragOffset && canDrag) {
      const vec = new THREE.Vector3(pointer.x, pointer.y, 0.5).unproject(camera);
      const dir = vec.sub(camera.position).normalize();
      const pos = camera.position.clone().add(dir.multiplyScalar(8));

      card.current.setNextKinematicTranslation({
        x: pos.x - dragOffset.x,
        y: pos.y - dragOffset.y,
        z: 0,
      });

      // Keep upright
      card.current.setNextKinematicRotation(new THREE.Quaternion());
    }
  });

  return (
    <group position={[0, 2.5, 0]}>
      {/* VISUAL ROPE */}
      <mesh ref={lineRef}>
        <meshLineGeometry points={initialLine} />
        <meshLineMaterial
          color="#22d3ee"
          lineWidth={0.15}
          resolution={[size.width, size.height]}
        />
      </mesh>

      {/* FIXED ANCHOR */}
      <RigidBody ref={anchor} type="fixed" />

      {/* JOINTS */}
      <RigidBody ref={joint1} position={[0, -0.8, 0]} linearDamping={3} colliders={false}>
        <BallCollider args={[0.05]} />
      </RigidBody>

      <RigidBody ref={joint2} position={[0, -1.6, 0]} linearDamping={3} colliders={false}>
        <BallCollider args={[0.05]} />
      </RigidBody>

      {/* CARD */}
      <RigidBody
        ref={card}
        position={[0, -3, 0]}
        linearDamping={2.5}
        angularDamping={2.5}
        type={dragOffset ? "kinematicPosition" : "dynamic"}
      >
        <CuboidCollider args={[0.9, 1.3, 0.05]} />

        <group
          onPointerDown={(e) => {
            if (!canDrag) return;
            e.stopPropagation();
            const p = card.current.translation();
            setDragOffset(new THREE.Vector3(e.point.x - p.x, e.point.y - p.y, 0));
          }}
          onPointerUp={() => setDragOffset(null)}
        >
          <IDCard />
        </group>
      </RigidBody>
    </group>
  );
}

/* =========================
   ID CARD
========================= */
function IDCard() {
  const photo = useTexture("/profile.jpg");

  return (
    <>
      <mesh position={[0, 0, 0.01]}>
        <planeGeometry args={[1.8, 2.6]} />
        <meshStandardMaterial color="#020617" />
      </mesh>

      <mesh position={[-0.45, 0.7, 0.02]}>
        <planeGeometry args={[0.7, 0.9]} />
        <meshStandardMaterial map={photo} />
      </mesh>

      <mesh position={[-0.45, 0.7, 0.03]}>
        <planeGeometry args={[0.74, 0.94]} />
        <meshStandardMaterial color="#22d3ee" transparent opacity={0.25} />
      </mesh>

      <Bar x={0.35} y={0.8} w={0.7} />
      <Bar x={0.35} y={0.55} w={0.55} />
      <Bar x={0} y={0.15} w={1.4} />
      <Bar x={0} y={-0.1} w={1.4} />
      <Bar x={0} y={-0.35} w={1.4} />

      <mesh position={[0, -1.05, 0.02]}>
        <planeGeometry args={[1.8, 0.25]} />
        <meshStandardMaterial color="#22d3ee" transparent opacity={0.3} />
      </mesh>
    </>
  );
}

function Bar({ x, y, w }) {
  return (
    <mesh position={[x, y, 0.02]}>
      <planeGeometry args={[w, 0.1]} />
      <meshStandardMaterial color="#0b132b" />
    </mesh>
  );
}
