import Line from "./AnimObjects2D/Line";
import NumberPlane from "./AnimObjects2D/NumberPlane";
import Scene2D from "./core/Scene2D";
import { Lines } from "./enums/AnimObjects2D";
import { Width , Height } from "./helpers/Dimensions";

let s = new Scene2D(Width.full , Height.full);
let p = new NumberPlane({ unit: 10, s })

s.add(p)