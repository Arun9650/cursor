import logo from "./logo.svg";
import "./App.css";
import { neonCursor } from "threejs-toys";

neonCursor({
  el: document.getElementById("app"),
  shaderPoints: 16,
  curvePoints: 80,
  curveLerp: 0.5,
  radius1: 5,
  radius2: 30,
  velocityTreshold: 10,
  sleepRadiusX: 100,
  sleepRadiusY: 100,
  sleepTimeCoefX: 0.0025,
  sleepTimeCoefY: 0.0025,
});

function App() {
  return (
    <div className="App">
      <div id="app">
        <div id="hero">
          <h1>
            NEON
            <br />
            CURSOR
          </h1>
          <a target="_blank" href="https://github.com/klevron/threejs-toys">
            github/threejs-toys
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
