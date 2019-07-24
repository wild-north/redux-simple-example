import React from 'react';
import { store } from './store';

window.store = store;

console.log('initial state', store.getState());

store.subscribe(function () {
    console.log(store.getState());
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
});

export const App = () => (
    <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium assumenda at autem cumque debitis distinctio eligendi enim fugiat illum ipsa, ipsam itaque maiores natus optio provident quia, rerum ullam velit?
    </div>
);
