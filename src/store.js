import { createStore } from 'redux';
import { reducer } from './reducer';
import { changeEmail, changeName } from './actions';

export const store = createStore(reducer);




setTimeout(() => {
    store.dispatch(changeName('Frodo'));
    store.dispatch(changeEmail('frodo@blabla.com'));
}, 2500);

// function createAction(type) {
//     return function (payload) {
//         return { type, payload }
//     }
// }



















// import { createStore, applyMiddleware, compose } from 'redux';
// import createSageMiddleware from 'redux-saga';
// import { reducer } from './reducers';
// import thunk from 'redux-thunk';
// import rootSaga from 'sagas';
// import { setStoreReference } from 'helpers/store';
//
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const sagaMiddleware = createSageMiddleware();
// const middlewareList = [thunk, sagaMiddleware];
//
//
// export function configureStore(preloadedState) {
//     const store = createStore(
//         reducer,
//         preloadedState,
//         composeEnhancers(
//             applyMiddleware( ...middlewareList )
//         )
//     );
//
//     setStoreReference(store);
//     sagaMiddleware.run(rootSaga);
//
//     return store;
// }
