import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native'


   
export const SignUp = ({ navigation }) => {
    return (
        <View style={styles.container}>
    
            <Image style={{ width: 250, height: 80, marginLeft: 45, marginBottom: 10, marginTop: -30 }} source={require('./images/Instagram_logo.png')} />
            <Text style={{fontWeight: 'bold', marginBottom: 10, marginTop: 5, fontSize: 17}}> Sign up to see photos and videos from your friends </Text>
            <TextInput placeholder="Mobile number or email address" style={styles.formInput} />
            <TextInput placeholder="Full Name" style={styles.formInput} />
            <TextInput placeholder="Username" style={styles.formInput} />
            <TextInput placeholder="Password" style={styles.formInput} />
        
            <View styles={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')} >
            <Text style={styles.buttonText}> Sign Up </Text>
            </TouchableOpacity>
            </View>

            <View style={{padding: 20, flexDirection:'row', justifyContent: 'center', marginLeft: 5, borderWidth: 1, borderColor: 'gray', marginTop: -10, bottom: -20}}>
            <Text style={{fontSize: 17, color: 'black'}}>
                   Have an account?
            </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')} >
                    <Text style={{fontSize: 17, color: '#00A5E3'}}>
                       Log in
                    </Text>
                    </TouchableOpacity>
                    </View>
            </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        paddingHorizontal: 14,
    },

    formInput: {
        height: 50,
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 10,
        marginTop: 10,
        borderWidth: 1,
    },

   buttonText: {
       color: 'white',
   },

    
    button: {
        backgroundColor: '#00A5E3',
        borderRadius: 10,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 60,
        

    }
})