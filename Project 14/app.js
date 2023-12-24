import { neonCursor } from "https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js";

const root = document.getElementById("neon");

const option = {
    el: root,
    shaderPoint: 80,
    curvePoint: 80,

    curveLerp: 0.8,

    radius1: 1,
    radius2: 5,

    velocityThreshold: 10,

    sleepRadiusY: 100,
    sleepRadiusX: 100,

    sleepTimeCoefX: 0.0025,
    sleepTimeCoefY: 0.001,

};
neonCursor(option);