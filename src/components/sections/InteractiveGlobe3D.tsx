import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { Sun, Moon, Play, Pause } from 'lucide-react';
import { Container } from '@/components/layout/Container';

export interface RegionData {
  name: string;
  lat: number;
  lon: number;
  role: string;
  customers: string;
  code: string;
}

export const REGIONS: RegionData[] = [
  { name: 'India', lat: 13.08, lon: 80.27, role: 'Global HQ & Innovation Center', customers: 'Chennai (T. Nagar & Ambattur)', code: 'IN · HQ' },
  { name: 'United States', lat: 38.0, lon: -97.0, role: 'Enterprise Client Operations', customers: 'Fintech & HealthTech', code: 'US' },
  { name: 'Singapore', lat: 1.35, lon: 103.8, role: 'APAC Regional Hub', customers: 'Logistics & Digital Commerce', code: 'SG' },
  { name: 'Ireland', lat: 53.3, lon: -8.0, role: 'EU Compliance Gateway', customers: 'SaaS & Enterprise Systems', code: 'IE' },
  { name: 'Middle East', lat: 25.2, lon: 55.3, role: 'Strategic Advisory & Cloud', customers: 'Aviation, Retail & Energy', code: 'AE' },
  { name: 'Australia', lat: -30.0, lon: 145.0, role: 'Oceania Delivery Partner', customers: 'Managed Cloud & DevOps', code: 'AU' },
  { name: 'Canada', lat: 56.0, lon: -100.0, role: 'North America Delivery', customers: 'Enterprise Engineering', code: 'CA' },
  { name: 'Germany', lat: 51.0, lon: 10.0, role: 'DACH Regional Operations', customers: 'Automotive & Manufacturing', code: 'DE' },
];

// High-speed CDN assets for true photorealistic NASA Blue Marble and Earth Night maps
const EARTH_TEXTURES = {
  day: 'https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-blue-marble.jpg',
  dayFallback: 'https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg',
  night: 'https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-night.jpg',
  nightFallback: 'https://unpkg.com/three-globe/example/img/earth-night.jpg',
  topology: 'https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-topology.png',
};

/**
 * Procedural Equirectangular Real-World Continent Generator.
 * Guarantees that real continents (India, Africa, Europe, Americas, Australia, Asia)
 * render instantaneously with zero network latency, while the NASA texture loads in background.
 */
function createProceduralEarthCanvas(mode: 'day' | 'night'): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  canvas.width = 2048;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d');
  if (!ctx) return canvas;

  const w = canvas.width;
  const h = canvas.height;

  // Convert (lat, lon) to equirectangular pixel coordinates
  const toXY = (lat: number, lon: number): [number, number] => [
    ((lon + 180) / 360) * w,
    ((90 - lat) / 180) * h,
  ];

  // Helper to draw smoothed landmass polygons
  const drawPoly = (coords: [number, number][], fill: string, stroke?: string) => {
    if (coords.length < 3) return;
    ctx.beginPath();
    const [startX, startY] = toXY(coords[0][0], coords[0][1]);
    ctx.moveTo(startX, startY);
    for (let i = 1; i < coords.length; i++) {
      const [x, y] = toXY(coords[i][0], coords[i][1]);
      ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fillStyle = fill;
    ctx.fill();
    if (stroke) {
      ctx.strokeStyle = stroke;
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }
  };

  if (mode === 'day') {
    // 1. Natural Ocean Gradient
    const oceanGrad = ctx.createLinearGradient(0, 0, 0, h);
    oceanGrad.addColorStop(0, '#082f49');
    oceanGrad.addColorStop(0.2, '#0c4a6e');
    oceanGrad.addColorStop(0.5, '#075985');
    oceanGrad.addColorStop(0.8, '#0c4a6e');
    oceanGrad.addColorStop(1, '#082f49');
    ctx.fillStyle = oceanGrad;
    ctx.fillRect(0, 0, w, h);

    // Subtle graticule grid
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)';
    ctx.lineWidth = 1;
    for (let lon = -180; lon <= 180; lon += 30) {
      const x = ((lon + 180) / 360) * w;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }
    for (let lat = -60; lat <= 60; lat += 30) {
      const y = ((90 - lat) / 180) * h;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }

    const landFill = '#1e3a5f';
    const coastStroke = '#38bdf8';

    // 2. Real World Continents Polygons
    // Africa & Madagascar
    drawPoly([
      [36, -6], [37, 10], [31, 31], [22, 38], [12, 51], [-5, 41],
      [-15, 40], [-26, 33], [-34, 18], [-25, 15], [-12, 13], [5, 1],
      [5, -4], [15, -17], [28, -13], [36, -6]
    ], landFill, coastStroke);
    drawPoly([[-12, 49], [-25, 47], [-25, 43], [-12, 49]], landFill, coastStroke);

    // Eurasia & Subcontinent India
    drawPoly([
      [36, -9], [43, -9], [44, 0], [48, -4], [54, 8], [60, 25],
      [71, 28], [68, 44], [72, 75], [76, 100], [70, 140], [65, 175],
      [56, 160], [43, 132], [30, 122], [22, 114], [10, 105], [1, 104],
      [14, 100], [22, 92],
      // India Peninsula
      [22, 88], [19, 85], [13, 80.2], [8.1, 77.5], [10, 76], [15, 74], [19, 72.8], [22, 69], [25, 62],
      // Middle East
      [26, 56], [24, 54], [17, 54], [12, 45], [21, 39], [29, 35],
      // Mediterranean & Europe
      [37, 36], [41, 29], [38, 24], [40, 18], [44, 8], [36, -9]
    ], landFill, coastStroke);

    // Sri Lanka
    drawPoly([[9.8, 80], [6, 81], [7, 79.5]], landFill, coastStroke);

    // North America & Greenland
    drawPoly([
      [71, -156], [65, -168], [55, -162], [60, -145], [54, -130],
      [48, -124], [38, -123], [32, -117], [23, -110], [15, -93],
      [8, -77], [20, -90], [29, -95], [25, -80], [35, -75],
      [44, -69], [47, -53], [58, -62], [68, -100], [71, -156]
    ], landFill, coastStroke);
    drawPoly([[60, -45], [76, -20], [83, -30], [78, -70], [65, -52]], landFill, coastStroke);

    // South America
    drawPoly([
      [11, -74], [10, -62], [5, -52], [-8, -35], [-23, -43],
      [-35, -57], [-45, -66], [-54, -68], [-42, -74], [-20, -70],
      [-5, -81], [1, -79], [11, -74]
    ], landFill, coastStroke);

    // Australia & New Zealand
    drawPoly([
      [-12, 131], [-11, 142], [-27, 153], [-34, 151], [-38, 145],
      [-35, 138], [-34, 115], [-20, 118], [-12, 131]
    ], landFill, coastStroke);
    drawPoly([[-41, 145], [-43, 147], [-43, 145]], landFill, coastStroke);
    drawPoly([[-35, 174], [-41, 175], [-46, 168], [-43, 172]], landFill, coastStroke);

  } else {
    // 2. Night Mode: Deep Cosmic Black with Golden City Lights
    ctx.fillStyle = '#030712';
    ctx.fillRect(0, 0, w, h);

    const landFill = '#0f172a';
    const coastStroke = '#1e293b';

    // Real landmasses in sleek stealth slate
    drawPoly([[36, -6], [37, 10], [31, 31], [22, 38], [12, 51], [-15, 40], [-34, 18], [-25, 15], [5, 1], [15, -17], [36, -6]], landFill, coastStroke);
    drawPoly([[36, -9], [54, 8], [71, 28], [76, 100], [65, 175], [43, 132], [22, 114], [1, 104], [22, 88], [13, 80.2], [8.1, 77.5], [19, 72.8], [25, 62], [26, 56], [12, 45], [37, 36], [36, -9]], landFill, coastStroke);
    drawPoly([[71, -156], [55, -162], [48, -124], [23, -110], [8, -77], [25, -80], [44, -69], [58, -62], [71, -156]], landFill, coastStroke);
    drawPoly([[11, -74], [-8, -35], [-23, -43], [-54, -68], [-20, -70], [11, -74]], landFill, coastStroke);
    drawPoly([[-12, 131], [-27, 153], [-38, 145], [-34, 115], [-12, 131]], landFill, coastStroke);

    // Glowing golden city clusters (Chennai, Mumbai, Singapore, London, New York, Tokyo)
    const cityNodes: [number, number, number][] = [
      [13.08, 80.27, 8],  // Chennai HQ
      [19.07, 72.87, 6],  // Mumbai
      [28.61, 77.20, 6],  // Delhi
      [1.35, 103.8, 5],   // Singapore
      [51.5, -0.1, 7],    // London
      [40.7, -74.0, 8],   // New York
      [37.7, -122.4, 6],  // San Francisco
      [35.6, 139.6, 7],   // Tokyo
      [25.2, 55.3, 6],    // Dubai
      [-33.8, 151.2, 5],  // Sydney
      [52.5, 13.4, 5],    // Berlin
    ];

    cityNodes.forEach(([lat, lon, rad]) => {
      const [x, y] = toXY(lat, lon);
      const radGrad = ctx.createRadialGradient(x, y, 0, x, y, rad * 3);
      radGrad.addColorStop(0, '#FEF08A');
      radGrad.addColorStop(0.3, '#F59E0B');
      radGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = radGrad;
      ctx.beginPath();
      ctx.arc(x, y, rad * 3, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  return canvas;
}

export const InteractiveGlobe3D: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const [globeMode, setGlobeMode] = useState<'day' | 'night'>('day');
  const [isRotating, setIsRotating] = useState<boolean>(true);

  const rotTargetRef = useRef<{ lat: number; lon: number }>({
    lat: REGIONS[0].lat * 0.7,
    lon: REGIONS[0].lon,
  });
  const holdRef = useRef<boolean>(false);
  const holdTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const earthMatRef = useRef<THREE.MeshStandardMaterial | null>(null);

  // Resume / toggle auto-rotation manually or on double click
  const toggleAutoRotate = useCallback(() => {
    if (holdRef.current) {
      gsap.killTweensOf(rotTargetRef.current);
      if (holdTimerRef.current) {
        clearTimeout(holdTimerRef.current);
        holdTimerRef.current = null;
      }
      holdRef.current = false;
      setIsRotating(true);
    } else {
      holdRef.current = true;
      setIsRotating(false);
      if (holdTimerRef.current) clearTimeout(holdTimerRef.current);
    }
  }, []);

  // Switch between NASA Blue Marble daylight and Night Lights
  const updateGlobeTexture = useCallback((mode: 'day' | 'night') => {
    if (!earthMatRef.current) return;

    // 1. Immediately apply instant procedural continent texture
    const fallbackCanvas = createProceduralEarthCanvas(mode);
    const proceduralTex = new THREE.CanvasTexture(fallbackCanvas);
    proceduralTex.colorSpace = THREE.SRGBColorSpace;
    earthMatRef.current.map = proceduralTex;
    earthMatRef.current.needsUpdate = true;

    // 2. Fetch full photorealistic satellite texture in background
    const targetUrl = mode === 'day' ? EARTH_TEXTURES.day : EARTH_TEXTURES.night;
    const fallbackUrl = mode === 'day' ? EARTH_TEXTURES.dayFallback : EARTH_TEXTURES.nightFallback;

    const loader = new THREE.TextureLoader();
    loader.load(
      targetUrl,
      (tex) => {
        tex.colorSpace = THREE.SRGBColorSpace;
        if (earthMatRef.current) {
          earthMatRef.current.map = tex;
          earthMatRef.current.needsUpdate = true;
        }
      },
      undefined,
      () => {
        // Fallback CDN retry
        loader.load(fallbackUrl, (tex) => {
          tex.colorSpace = THREE.SRGBColorSpace;
          if (earthMatRef.current) {
            earthMatRef.current.map = tex;
            earthMatRef.current.needsUpdate = true;
          }
        });
      }
    );
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || typeof window === 'undefined') return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
    } catch {
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 50);
    camera.position.z = 4.15;

    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // ── LIGHTING SETUP: Solar Directional + Ambient + Cygnusa Rim Fill ──
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xfff8ee, 1.6);
    sunLight.position.set(5, 3, 5);
    scene.add(sunLight);

    const rimLight = new THREE.DirectionalLight(0x38bdf8, 0.5);
    rimLight.position.set(-5, -2, -4);
    scene.add(rimLight);

    const rad = Math.PI / 180;

    // Exact mapping from Lat/Lon to 3D Cartesian coordinates
    const latLonToVec3 = (lat: number, lon: number, r = 1) =>
      new THREE.Vector3(
        r * Math.cos(lat * rad) * Math.sin(lon * rad),
        r * Math.sin(lat * rad),
        r * Math.cos(lat * rad) * Math.cos(lon * rad)
      );

    // ── 1. REAL-WORLD EARTH SPHERE WITH NASA SATELLITE TEXTURE ──
    const earthGeo = new THREE.SphereGeometry(1.0, 64, 64);

    // Initial instant canvas texture
    const initialCanvas = createProceduralEarthCanvas(globeMode);
    const initialTex = new THREE.CanvasTexture(initialCanvas);
    initialTex.colorSpace = THREE.SRGBColorSpace;

    const earthMat = new THREE.MeshStandardMaterial({
      map: initialTex,
      roughness: 0.65,
      metalness: 0.1,
    });
    earthMatRef.current = earthMat;

    // Load bump elevation map for realistic 3D mountain topography
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(EARTH_TEXTURES.topology, (bumpTex) => {
      earthMat.bumpMap = bumpTex;
      earthMat.bumpScale = 0.035;
      earthMat.needsUpdate = true;
    });

    const earthMesh = new THREE.Mesh(earthGeo, earthMat);
    // Align texture Greenwich meridian with latLonToVec3 coordinate system
    earthMesh.rotation.y = -Math.PI / 2;
    globeGroup.add(earthMesh);

    // Load initial high-res satellite map
    updateGlobeTexture(globeMode);

    // ── 2. LUMINOUS ATMOSPHERIC FRESNEL AURA (VIEW FROM ORBIT) ──
    const atmoGeo = new THREE.SphereGeometry(1.022, 64, 64);
    const atmoMat = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.65 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.6);
          gl_FragColor = vec4(0.055, 0.647, 0.914, 1.0) * intensity * 1.5;
        }
      `,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true,
      depthWrite: false,
    });
    const atmoMesh = new THREE.Mesh(atmoGeo, atmoMat);
    globeGroup.add(atmoMesh);

    // ── 3. DELICATE LAT/LON GRATICULE OVERLAY ──
    const linePoints: THREE.Vector3[] = [];
    for (let lat = -80; lat <= 80; lat += 20) {
      let prev = latLonToVec3(lat, -180, 1.002);
      for (let lon = -170; lon <= 180; lon += 10) {
        const p = latLonToVec3(lat, lon, 1.002);
        linePoints.push(prev, p);
        prev = p;
      }
    }
    for (let lon = -180; lon < 180; lon += 20) {
      let prev = latLonToVec3(-90, lon, 1.002);
      for (let lat = -80; lat <= 90; lat += 10) {
        const p = latLonToVec3(lat, lon, 1.002);
        linePoints.push(prev, p);
        prev = p;
      }
    }
    const graticuleGeo = new THREE.BufferGeometry().setFromPoints(linePoints);
    const graticuleMat = new THREE.LineSegments(
      graticuleGeo,
      new THREE.LineBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.16 })
    );
    globeGroup.add(graticuleMat);

    // ── 4. REGIONAL PINS (Chennai HQ in Solar Gold #F59E0B) ──
    const pinPositions = REGIONS.map((r) => latLonToVec3(r.lat, r.lon, 1.01));
    const rippleRings: THREE.Mesh<THREE.RingGeometry, THREE.MeshBasicMaterial>[] = [];

    pinPositions.forEach((pos, idx) => {
      const isHQ = idx === 0;
      const col = isHQ ? 0xf59e0b : 0xf0f9ff;

      // Pin core sphere
      const pinSphere = new THREE.Mesh(
        new THREE.SphereGeometry(isHQ ? 0.034 : 0.024, 16, 16),
        new THREE.MeshBasicMaterial({ color: col })
      );
      pinSphere.position.copy(pos);
      globeGroup.add(pinSphere);

      // Radar pulse ring
      const ringMesh = new THREE.Mesh(
        new THREE.RingGeometry(0.032, 0.046, 36),
        new THREE.MeshBasicMaterial({
          color: col,
          transparent: true,
          side: THREE.DoubleSide,
          depthWrite: false,
        })
      );
      ringMesh.position.copy(pos);
      ringMesh.lookAt(pos.clone().multiplyScalar(2));
      globeGroup.add(ringMesh);
      rippleRings.push(ringMesh);
    });

    // ── 5. CYBERNETIC FLIGHT ARCS FROM CHENNAI HQ ──
    const arcs: THREE.Line<THREE.BufferGeometry, THREE.LineBasicMaterial>[] = [];
    for (let i = 1; i < REGIONS.length; i++) {
      const a = pinPositions[0];
      const b = pinPositions[i];
      const ang = a.angleTo(b);
      const mid = a.clone().add(b).normalize().multiplyScalar(1 + ang * 0.36);
      const curvePts = new THREE.QuadraticBezierCurve3(a, mid, b).getPoints(64);

      const arcLine = new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(curvePts),
        new THREE.LineBasicMaterial({ color: 0x0ea5e9, transparent: true, opacity: 0.8 })
      );
      globeGroup.add(arcLine);
      arcs.push(arcLine);
    }

    // Dynamic Viewport Resize
    const handleResize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      if (!w || !h) return;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    // Interactive Drag Physics
    let isDragging = false;
    let lastX = 0;
    let lastY = 0;

    // Double-click on canvas: immediately unfreeze and resume rotating!
    const handleDoubleClick = () => {
      gsap.killTweensOf(rotTargetRef.current);
      if (holdTimerRef.current) {
        clearTimeout(holdTimerRef.current);
        holdTimerRef.current = null;
      }
      holdRef.current = false;
      isDragging = false;
      setIsRotating(true);
    };

    const handlePointerDown = (e: PointerEvent) => {
      isDragging = true;
      holdRef.current = true;
      setIsRotating(false);
      lastX = e.clientX;
      lastY = e.clientY;
      canvas.setPointerCapture(e.pointerId);
      gsap.killTweensOf(rotTargetRef.current);
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      rotTargetRef.current.lon -= (e.clientX - lastX) * 0.35;
      rotTargetRef.current.lat = Math.max(
        -70,
        Math.min(70, rotTargetRef.current.lat + (e.clientY - lastY) * 0.3)
      );
      lastX = e.clientX;
      lastY = e.clientY;
    };

    const handlePointerUp = (e: PointerEvent) => {
      isDragging = false;
      try {
        canvas.releasePointerCapture(e.pointerId);
      } catch {
        // ignore
      }
      if (holdTimerRef.current) clearTimeout(holdTimerRef.current);
      // Fast, responsive 1.2s timeout before gently resuming rotation
      holdTimerRef.current = setTimeout(() => {
        holdRef.current = false;
        setIsRotating(true);
      }, 1200);
    };

    canvas.addEventListener('dblclick', handleDoubleClick);
    canvas.addEventListener('pointerdown', handlePointerDown);
    canvas.addEventListener('pointermove', handlePointerMove);
    canvas.addEventListener('pointerup', handlePointerUp);
    canvas.addEventListener('pointercancel', handlePointerUp);
    canvas.addEventListener('lostpointercapture', handlePointerUp);

    // Optimized Animation Loop
    const clock = new THREE.Clock();
    let animId: number;
    let isVisible = true;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);

    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (!isVisible || document.hidden) return;

      const t = clock.getElapsedTime();
      if (!holdRef.current) {
        rotTargetRef.current.lon += 0.14;
      }

      globeGroup.rotation.x = rotTargetRef.current.lat * rad;
      globeGroup.rotation.y = -rotTargetRef.current.lon * rad;

      // Pulse ring expansion
      rippleRings.forEach((r, i) => {
        const k = (t * 0.75 + i * 0.28) % 1;
        r.scale.setScalar(1 + k * 2.2);
        r.material.opacity = (1 - k) * 0.85;
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('dblclick', handleDoubleClick);
      canvas.removeEventListener('pointerdown', handlePointerDown);
      canvas.removeEventListener('pointermove', handlePointerMove);
      canvas.removeEventListener('pointerup', handlePointerUp);
      canvas.removeEventListener('pointercancel', handlePointerUp);
      canvas.removeEventListener('lostpointercapture', handlePointerUp);
      if (holdTimerRef.current) clearTimeout(holdTimerRef.current);
      observer.disconnect();
      renderer.dispose();
    };
  }, [globeMode, updateGlobeTexture]);

  const handleSelectRegion = (index: number) => {
    // If the user clicks or double-clicks on the currently active region, resume rotation immediately!
    if (selectedIdx === index && holdRef.current) {
      gsap.killTweensOf(rotTargetRef.current);
      if (holdTimerRef.current) {
        clearTimeout(holdTimerRef.current);
        holdTimerRef.current = null;
      }
      holdRef.current = false;
      setIsRotating(true);
      return;
    }

    setSelectedIdx(index);
    const target = REGIONS[index];
    holdRef.current = true;
    setIsRotating(false);
    if (holdTimerRef.current) clearTimeout(holdTimerRef.current);
    gsap.killTweensOf(rotTargetRef.current);

    let deltaLon = target.lon - rotTargetRef.current.lon;
    deltaLon = ((deltaLon + 540) % 360) - 180;

    gsap.to(rotTargetRef.current, {
      lat: target.lat * 0.75,
      lon: rotTargetRef.current.lon + deltaLon,
      duration: 1.4,
      ease: 'power3.inOut',
      onComplete: () => {
        // Fast 1.4s focus time, then resumes rotation
        holdTimerRef.current = setTimeout(() => {
          holdRef.current = false;
          setIsRotating(true);
        }, 1400);
      },
    });
  };

  const handleToggleMode = (mode: 'day' | 'night') => {
    setGlobeMode(mode);
    updateGlobeTexture(mode);
  };

  const currentRegion = REGIONS[selectedIdx];

  return (
    <div ref={containerRef} className="w-full text-[#0F172A]">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-12 items-center">

        {/* Left Column: Region Navigation List */}
        <div className="space-y-4">
          <span className="text-sm font-semibold text-slate-800 tracking-tight block mb-2 font-sans">
            Global delivery presence
          </span>

          <h2 className="font-heading text-2xl sm:text-3xl lg:text-[36px] font-bold text-slate-950 tracking-tight leading-tight">
            Engineering from Chennai. <br />
            <span className="text-cygnusa-sky">
              Operating worldwide.
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans max-w-xl">
            Headquartered in Chennai with development centers in T. Nagar and Ambattur, CYGNUSA provides seamless offshore development pods, 24/7 cloud management, and technology advisory to enterprises across three continents.
          </p>

          {/* Interactive Region Selector Buttons */}
          <ul className="pt-2 border-t border-slate-200 space-y-1.5" role="tablist">
            {REGIONS.map((region, idx) => {
              const isSelected = selectedIdx === idx;
              return (
                <li key={region.name}>
                  <button
                    type="button"
                    onClick={() => handleSelectRegion(idx)}
                    title={isSelected ? 'Click again or double click to resume rotation' : `Focus on ${region.name}`}
                    className={`w-full flex items-center justify-between py-2.5 sm:py-3 px-3.5 sm:px-4 rounded-xl transition-all text-left border cursor-pointer ${isSelected
                      ? 'bg-sky-50 border-sky-400 text-[#0F172A] shadow-sm'
                      : 'border-slate-100 text-slate-600 hover:text-[#0F172A] hover:bg-slate-50'
                      }`}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-heading font-bold text-sm sm:text-base block text-[#0F172A]">
                          {region.name}
                        </span>
                        {idx === 0 && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-amber-100 text-amber-800">
                            GLOBAL HQ
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-slate-500 mt-0.5 block">
                        {region.customers}
                      </span>
                    </div>

                    <div className="text-right">
                      <span
                        className={`text-xs uppercase tracking-wider px-2.5 py-1 rounded-full border ${isSelected
                          ? 'text-[#0284C7] border-sky-300 bg-white font-semibold'
                          : 'text-slate-500 border-slate-200 bg-slate-50'
                          }`}
                      >
                        {region.code}
                      </span>
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right Column: 3D Real-World Earth Viewport */}
        <div
          onDoubleClick={toggleAutoRotate}
          title="Double-click to resume auto-rotation"
          className="relative w-full aspect-square max-w-[580px] lg:max-w-[620px] mx-auto flex items-center justify-center select-none"
        >

          {/* Ambient Radial Aura */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-sky-400/20 via-cyan-400/5 to-transparent blur-3xl pointer-events-none" />

          {/* Top-Right Pill Switcher: Mode + Rotation Control */}
          <div className="absolute top-3 right-3 z-20 inline-flex items-center p-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 text-xs shadow-md gap-1">
            {/* Quick Rotate / Pause Toggle Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                toggleAutoRotate();
              }}
              title={isRotating ? 'Pause auto-rotation' : 'Resume auto-rotation'}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-semibold text-[11px] transition-all cursor-pointer ${isRotating
                ? 'bg-sky-50 text-[#0284C7] hover:bg-sky-100 border border-sky-200/60'
                : 'bg-amber-50 text-amber-800 hover:bg-amber-100 border border-amber-200/60'
                }`}
            >
              {isRotating ? (
                <>
                  <Pause size={11} className="shrink-0" />
                  <span>Spinning</span>
                </>
              ) : (
                <>
                  <Play size={11} className="shrink-0 fill-current" />
                  <span>Rotate</span>
                </>
              )}
            </button>

            <div className="w-[1px] h-3.5 bg-slate-200 my-auto" />

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleToggleMode('day');
              }}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-semibold text-[11px] transition-all cursor-pointer ${globeMode === 'day'
                ? 'bg-gradient-to-r from-[#0284C7] to-[#0ea5e9] text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
                }`}
            >
              <Sun size={12} />
              <span>Blue Marble</span>
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleToggleMode('night');
              }}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-semibold text-[11px] transition-all cursor-pointer ${globeMode === 'night'
                ? 'bg-[#0F172A] text-amber-300 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
                }`}
            >
              <Moon size={12} />
              <span>Night</span>
            </button>
          </div>

          {/* Active Target Market Telemetry HUD Pill */}
          <div className="absolute top-3 left-3 z-20 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/90 text-xs shadow-md">
            <span className="w-2 h-2 rounded-full bg-cygnusa-sky shrink-0" />
            <span className="font-semibold text-slate-800">{currentRegion.name}</span>
            <span className="text-slate-400">·</span>
            <span className="text-slate-500 text-[11px]">
              {currentRegion.lat > 0 ? `${currentRegion.lat}°N` : `${Math.abs(currentRegion.lat)}°S`}, {currentRegion.lon > 0 ? `${currentRegion.lon}°E` : `${Math.abs(currentRegion.lon)}°W`}
            </span>
          </div>

          {/* Interactive WebGL Canvas */}
          <canvas
            ref={canvasRef}
            id="globe"
            className="w-full h-full cursor-grab active:cursor-grabbing relative z-10"
            style={{ touchAction: 'pan-y' }}
            aria-label="Interactive 3D Real World Earth demonstrating CYGNUSA global delivery"
          />

          {/* Bottom Scrub Instructions */}
          <div className="absolute -bottom-2 text-center w-full pointer-events-none z-20">
            <span className="text-[11px] uppercase tracking-wider text-slate-500 bg-white/90 backdrop-blur-sm px-3.5 py-1 rounded-full border border-slate-200/80 shadow-sm">
              Drag to explore · Double-click to resume rotation
            </span>
          </div>

        </div>

      </div>
    </div>
  );
};

export const InteractiveGlobeSection: React.FC = () => {
  return (
    <section id="global-presence" className="bg-white py-20 md:py-28 border-b border-cygnusa-border overflow-hidden">
      <Container>
        <InteractiveGlobe3D />
      </Container>
    </section>
  );
};

export default InteractiveGlobeSection;