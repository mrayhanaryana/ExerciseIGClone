import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import SignupForm from '../components/signupScreen/SignupForm'




const INSTAGRAM_LOGO =
    'https://img.favpng.com/11/18/23/instagram-logo-computer-icons-png-favpng-3q0ij4EWL99aZ8Y7xH6RzvniV.jpg'

const SignUpscreen = ({navigation}) => {
    return (
        <View style={styles.container}>
           <View style={styles.logoContainer}>
            <Image source={{uri: INSTAGRAM_LOGO, height: 100, width: 100}} />
            </View>
            <SignupForm navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'white',
        paddingTop: 50,
        paddingHorizontal: 12,
    },

    logoContainer: {
        alignItems:'center' ,
        marginTop: 40,
    },

})

export default SignUpscreen