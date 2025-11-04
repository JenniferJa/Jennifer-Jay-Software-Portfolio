import { useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  useEffect(() => {
    const container = document.getElementById("container3D");
    if (!container) return;

    // --- Scene setup ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // --- Lighting ---
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(2, 2, 5);
    scene.add(light);

    const ambientLight = new THREE.AmbientLight(0x404040, 1);
    scene.add(ambientLight);

    // --- Camera position ---
    camera.position.set(0, 1, 5);

    // --- Controls (allow zoom, rotate, pan) ---
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = true; // ✅ allows zooming
    controls.enablePan = true;
    controls.rotateSpeed = 0.7;
    controls.zoomSpeed = 0.8;

    // --- Load model ---
    const loader = new GLTFLoader();
    loader.load(
      "/models/mini_macbook_pro/scene.gltf", // ensure it's in /public/models
      (gltf) => {
        const object = gltf.scene;
        scene.add(object);

        object.position.set(0, -1, 0);
        object.scale.set(1.5, 1.5, 1.5);

        // --- Animation loop ---
        const animate = () => {
          requestAnimationFrame(animate);
          controls.update(); // ✅ needed for OrbitControls
          renderer.render(scene, camera);
        };
        animate();
      },
      undefined,
      (error) => console.error("Error loading model:", error)
    );

    // --- Handle window resize ---
    const handleResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    // --- Cleanup on unmount ---
    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      container.innerHTML = "";
    };
  }, []);

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Passionate Software Engineer</h3>
            <p className="text-muted-foreground">
              What excites me most about software engineering is the opportunity to make an impact. 
              Whether that's through improving user experiences, solving challenging problems, 
              or collaborating with others to bring ambitious ideas to life.
            </p>
            <p className="text-muted-foreground">
              I’m eager to continue learning from the best and contributing to projects that turn technology into something meaningful for others.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div
            id="container3D"
            className="w-full h-full min-h-[500px] flex justify-center items-center"
          ></div>
        </div>
      </div>
    </section>
  );
};
