import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { useFormik } from 'formik'
import * as Yup from 'yup'

// const validate = values => {
//     const errors = {}

//     if (!values.email) {
//         errors.email = 'Requerido'
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//         errors.email = 'Correo invalido !'
//     }

//     return errors
// }

export const FormikApp = () => {
    const formik = useFormik({
        initialValues: { email: '' },
        // validate,
        validationSchema: Yup.object({
            email: Yup.string().email('Email invalido !').required('Requerido !')
        }),
        onSubmit: x => console.warn(x)
    })

    return (
        <View style={styles.container}>
            <Text>Correo electronico</Text>
            <TextInput
                value={formik.values.email}
                onChangeText={formik.handleChange('email')}
                onBlur={formik.handleBlur('email')}
                style={styles.input}
            />
            {formik.errors.email && formik.touched.email ? <Text>{formik.errors.email}</Text> : null}
            <Button onPress={formik.handleSubmit} title='Enviar' />
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
})