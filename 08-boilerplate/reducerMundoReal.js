const makeType = mod => type => `${mod}/${type}`

const mac = (type, ...argNames) => (...args) => {
    const action = { type }

    argNames.forEach((arg, index) => {
        action[argNames[index]] = args[index]
    })

    return action
}

const createReducer = (IS, handlers) => (state = IS, action) => {
    if (handlers.hasOwnProperty(action.type)) {
        return handlers[action.type](state, action)
    } else {
        return state
    }
}

const fetchReducerCreator = resource => {
    const mod = makeType(resource)

    const FETCH_START = mod('FETCH_START')
    const FETCH_SUCCESS = mod('FETCH_SUCCESS')
    const FETCH_ERROR = mod('FETCH_ERROR')

    const initialState = {
        data: [],
        fetched: false,
        fetching: false,
        error: null,
    }

    const fetchStartReduce = (state) => ({ ...state, fetching: true })
    const fetchSuccessReduce = (state, action) => ({ ...state, data: action.payload, fetching: false, fetched: true, error: null })
    const fetchErrorReduce = (state, action) => ({ ...state, data: [], fetching: false, fetched: true, error: action.payload })

    const reducer = createReducer(initialState, {
        [FETCH_START]: fetchStartReduce,
        [FETCH_SUCCESS]: fetchSuccessReduce,
        [FETCH_ERROR]: fetchErrorReduce,
    })

    const fetchStart = mac(FETCH_START)
    const fetchSuccess = mac(FETCH_SUCCESS, 'payload')
    const fetchError = mac(FETCH_ERROR, 'payload')

    const fetchThunk = () => async (dispatch, getState) => {
        dispatch(fetchStart())

        try {
            const response = await fetch(`/${resource}`)
            const data = await response.json()

            dispatch(fetchSuccess(data))
        } catch (error) {
            dispatch(fetchError(error))
        }
    }

    return {
        reducer,
        fetchThunk,
    }
}


// en el archivo donde se quiera usar...
const { reducer, fetchThunk } = fetchReducerCreator('todos')

export { reducer, fetchThunk }


// productos...
const { reducer, fetchThunk } = fetchReducerCreator('productos')

export { reducer, fetchThunk }