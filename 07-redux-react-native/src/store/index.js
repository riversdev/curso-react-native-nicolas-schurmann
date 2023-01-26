import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { todosReducer } from './todos/todosReducer'

const reducers = {
    todos: todosReducer,
}

export const store = createStore(combineReducers({ ...reducers }), applyMiddleware(thunk))