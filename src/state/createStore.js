import { createStore, applyMiddleware, compose } from 'redux'; 

const logger = (store) => {
	return (next) => {
		return (action) => {
			const result = next(action);
			//debug here
			if (process.env.NODE_ENV !== 'production') {
				console.log('[Middleware] Dispatching', action); //eslint-disable-line
				console.log('[Middleware] next state', store.getState()); //eslint-disable-line
			}

			return result;
		};
	};
};

const composeSetup =
	process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		: compose;

const createReduxStore = (rootReducer, http, history) =>
	createStore(rootReducer, composeSetup(applyMiddleware(logger)));

export default createReduxStore;
