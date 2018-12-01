import { h } from "hyperapp";

import "./counter.css";

export const state = {
  count: 0,
  delay: 1000
};

export const actions = {
  down: () => state => ({ count: state.count - 1 }),
  up: () => state => ({ count: state.count + 1 }),
  upLater: () => (state, actions) => { setTimeout(actions.up, state.delay); }
};

export const view = (state, actions) => (
  <main>
    <h1>{state.count}</h1>
    <button onclick={actions.down}>-</button>
    <button onclick={actions.upLater}>+ ({state.delay / 1000}s later)</button>
  </main>
);
