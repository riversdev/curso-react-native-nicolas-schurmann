const initialState = [
    { id: 1, desc: 'Todo 1', completed: false },
    { id: 2, desc: 'Todo 2', completed: false },
    { id: 3, desc: 'Todo 3', completed: false },
]

const COMPLETE = 'COMPLETE'
const SUBMIT = 'SUBMIT'
const START_SUBMIT = 'START_SUBMIT'
const ERROR_SUBMIT = 'ERROR_SUBMIT'

export const complete = id => ({ type: COMPLETE, payload: id })
export const submit = desc => ({ type: SUBMIT, payload: { id: Math.random().toString(36), desc, completed: false } })
export const startSubmit = () => ({ type: START_SUBMIT })
export const errorSubmit = (error) => ({ type: ERROR_SUBMIT, payload: error })

export const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case COMPLETE:
            return state.map(x => x.id === action.payload ? { ...x, completed: !x.completed } : x)

        case SUBMIT:
            return [...state, action.payload]

        default:
            return state
    }
}

// thunk
export const saveTodo = desc => async (dispatch, getState) => {
    dispatch(startSubmit())

    const todo = { desc, completed: false }

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'POST',
            body: JSON.stringify(todo)
        })
        const { id } = await response.json()

        todo.id = id

        dispatch({ type: SUBMIT, payload: todo }) // esto seberia ir en un action creator pero no lo hice para no modificar el primero xdxd
    } catch (error) {
        console.error(error)
        dispatch(errorSubmit(error))
    }
}