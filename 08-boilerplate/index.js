const makeType = mod => type => `${mod}/${type}`

const mod = makeType('LISTA')

const ADD_TODO = mod('ADD_TODO')
const UPDATE_TODO = mod('UPDATE_TODO')
const REMOVE_TODO = mod('REMOVE_TODO')

// Make Action Creator
const mac = (type, ...argNames) => (...args) => {
    const action = { type }

    argNames.forEach((arg, index) => {
        action[argNames[index]] = args[index]
    })

    return action
}

const addTodo = mac(ADD_TODO, 'payload')
const updateTodo = mac(UPDATE_TODO, 'payload')
const removeTodo = mac(REMOVE_TODO, 'payload')

console.log(addTodo({ title: 'title' }))