import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import { rootReducer } from '../reducers';
import { ActionType } from 'typesafe-actions';

declare module 'typesafe-actions' {
	interface Types {
		RootAction: ActionType<typeof import('../actions')>;
	}
}

export const history = createBrowserHistory();

const middleware = [thunk, routerMiddleware(history)];

// rehydrate state when app starts
const initialState = {};

export const store = createStore(
	rootReducer(history),
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);