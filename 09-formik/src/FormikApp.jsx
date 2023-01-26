import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { Formik, useField, useFormikContext } from 'formik'
import * as Yup from 'yup'

const MyInput = ({ fieldName, ...props }) => {
    const [field, meta] = useField(fieldName)

    return (
        <>
            <TextInput
                value={field.value}
                onChangeText={field.onChange(fieldName)}
                onBlur={field.onBlur(fieldName)}
                style={styles.input}
                {...props}
            />
            {meta.error && meta.touched && (<Text style={styles.red}>{meta.error}</Text>)}
        </>
    )
}

const EmailForm = () => {
    const { submitForm } = useFormikContext()

    return (
        <>
            <Text>Correo electronico</Text>
            <MyInput fieldName='email' />
            <Text>Nombre</Text>
            <MyInput fieldName='name' />
            <Button
                title='Enviar'
                onPress={submitForm}
            />
        </>
    )
}

export const FormikApp = () => {
    return (
        <View style={styles.container}>
            <Formik
                initialValues={{ email: '', name: '' }}
                validationSchema={Yup.object({
                    email: Yup.string().email('Email invalido').required('Requerido'),
                    name: Yup.string().min(10).required('Requerido'),
                })}
                onSubmit={x => console.warn(x)}
            >
                <EmailForm />
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 12,
        width: 150,
        backgroundColor: '#eee',
    },
    red: {
        color: 'red',
    },
})