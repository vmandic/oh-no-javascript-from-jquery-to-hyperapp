import { h } from "hyperapp";

export const state = {
    message: "Hello World!"
};

export const view = (state) => { 
    return (
        <div>{state.message}</div>
    );
};