import { useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
import { Input } from './components/Input'
import { ListItem } from './components/ListItem'
import { complete, saveTodo } from './store/todos/todosReducer'

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({
    complete: (id) => dispatch(complete(id)),
    submit: (value) => dispatch(saveTodo(value))
})

export const ReduxApp = connect(mapStateToProps, mapDispatchToProps)(({ todos, complete, submit }) => {
    const [value, setValue] = useState('')

    const handleChange = val => setValue(val)
    const handleSubmit = () => {
        submit(value)
        setValue('')
    }

    return (
        <View style={styles.container}>
            <Input value={value} onChange={handleChange} onSubmit={handleSubmit} />
            <FlatList
                data={todos}
                keyExtractor={x => String(x.id)}
                renderItem={({ item }) => <ListItem {...item} onPress={() => complete(item.id)} />}
                style={styles.list}
            />
        </View>
    )
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginTop: 35,
    },
    list: {
        alignSelf: 'stretch',
    },
})