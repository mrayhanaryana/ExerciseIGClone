import React, {useState} from 'react'
import { View, Text, TextInput, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import { Formik } from 'formik' 
import * as Yup from 'yup' 
import Validator from 'email-validator'
import { auth } from '../../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const SignupForm = ({navigation}) => {
    const SignupFormSchema = Yup.object().shape({
        email: Yup.string().email().required( 'An email is required'),
        password: Yup.string().required().min(2, 'A username is required')
        .required()
        .min(6, 'Your password has to have at least 6 characters')
       })
       const onSignUp = async(email,password) => {
        try {
            await createUserWithEmailAndPassword(auth,email, password)
        }
        catch(error) {
            console.log(error)
        }
    }

       return (
        <View style={styles.wrapper}>
            <Formik
                initialValues={{ email: '', username: '', password: '' }}
                onSubmit = {values => {
                  console.log(values)
                }}
                validationSchema ={SignupFormSchema}
                validateOnMount={true}
            
            >
                {({handleChange,handleBlur,values, isValid}) => (
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
                            placeholder=' email'
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
                                        values.username.length < 1 
                                        || Validator.validate(values.username) 
                                        ? '#CCC' : 'red',
                                },
                            ]}>
                        <TextInput
                            placeholderTextColor='#444'
                            placeholder=' username'
                            autoCapitalize='none'
                            textContentType='username'
                            autoFocus={true}
                            onChangeText={handleChange('username')}
                            onBlur= {handleBlur( 'username')}
                            value = {values.username}
                        
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

                        <Pressable titlesize='large'
                                style={styles.button(isValid)} 
                                onPress={onSignUp}
                                disabled={!isValid} 
                        >
                                <Text style={styles.buttonText}>Sign Up</Text>
                        </ Pressable>

                        <View style={styles.signupContainer}>
                            <Text>Already have an account?</Text>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Text style={{color: '#6BB0F5'}}>Log In</Text>
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
    

export default SignupForm
