import { app } from "hyperapp";
import { state, view } from "./app/helloWorld";

app(state, null, view, document.getElementById("root"));