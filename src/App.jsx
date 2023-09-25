import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import "./App.css"; 

function App() {
  return (
    <div className="app-container">
      <div className="canvas-container">
        <Canvas shadows camera={{ position: [0, 0, 10], fov: 30 }}>
          <Experience />
        </Canvas>
      </div>
    </div>
  );
}

export default App;
