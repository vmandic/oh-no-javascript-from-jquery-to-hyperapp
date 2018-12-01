import { app } from "hyperapp";
import { state, actions, view } from "./app/counter";

app(state, actions, view, document.getElementById("root"));