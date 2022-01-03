import React, {useState} from 'react'
import { View, Text, TextInput, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import { Formik } from 'formik' 
import * as Yup from 'yup' 
import Validator from 'email-validator'

const LoginForm = ({navigation}) => {
    const LoginFormSchema = Yup.object().shape({
        email: Yup.string().email().required( 'An email is required'),
        password: Yup.string()
        .required()
        .min(6, 'Your password has to have at least 6 characters')
       })
    return (
        <View style={styles.wrapper}>
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit = {values => {
                  console.log(values)
                }}
                validationSchema ={LoginFormSchema}
                validateOnMount={true}
            
            >
                {({handleChange,handleBlur,handleSubmit,values, isValid}) => (
                    <>
                        <View style={[
                            styles.inputField,
                                {
                                    borderColor:
                                        values.email.length < 1 
                                        || Validator.validate(values.email) 
                                        ? '#CCC' : 'red',
                                },
                            ]}>
                        <TextInput
                            placeholderTextColor='#444'
                            placeholder=' Phone number, username or email'
                            autoCapitalize='none'
                            keyboardīype=' email-address'
                            textContentType='emailAddress'
                            autoFocus={true}
                            onChangeText={handleChange('email')}
                            onBlur= {handleBlur( 'email')}
                            value = {values.email}
                        
                        />
                        </View>
                        <View style={[
                            styles.inputField,
                                {
                                    borderColor:
                                        values.email.length < 1 
                                        || Validator.validate(values.email) 
                                        ? '#CCC' : 'red',
                                },
                            ]}>
                        <TextInput
                            placeholderTextcolor='#444'
                            placeholder='Password'
                            autoCapitalize='none'
                            autoCorrect={false}
                            secureTextEntry={true}
                            textContentType='password'
                            onChangeText={handleChange('password')}
                            onBlur= {handleBlur( 'password')}
                            value = {values.password}
                        /> 
                        </View>
                        
                        <View style={{alignItems: 'flex-end', marginBottom: 30}}>
                            <Text style={{color: '#6BB0F5'}}>Forgot Password?</Text>
                        </View>

                        <Pressable titlesize={200} 
                                style={styles.button(isValid)} 
                                onPress={handleSubmit}
                                disabled={!isValid} 
                        >
                                <Text style={styles.buttonText}>Log In</Text>
                        </ Pressable>

                        <View style={styles.signupContainer}>
                            <Text>Don't have an account?</Text>
                            <TouchableOpacity onPress={() => navigation.push('SignUpScreen')}>
                                <Text style={{color: '#6BB0F5'}}>Sign up</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}
            
            </Formik>
        </View>

        
    )
}

const styles= StyleSheet.create({

    wrapper: {
        marginTop: 80,
      },
      
      inputField:{
        borderRadius : 4,
        padding: 8,
        backgroundColor: '#FAFAFA',
        marginBottom: 10,
        borderwidth: 1,
      },

    button: isValid=>({
        backgroundColor: isValid ? '#0096F6' : '#9ACAF7',
      alignItems : 'center',
      justifyContent: 'center',
      minHeight: 42,
      borderRadius: 4,
    }),

    buttonText: {
        fontWeight: '600',
        color: '#fff',
        fontSize: 20,
    },

    signupContainer:{
        flexDirection: 'row',
        width: '100%',
        justifyContent : 'center',
         marginTop: 50,
    },
})

export default LoginForm
