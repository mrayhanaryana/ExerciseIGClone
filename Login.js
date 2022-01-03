import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput, Image } from 'react-native'

export const Login = ({ navigation }) => {
    return (
        
            <View style={styles.container}>
            
            {/* <Image style={{ width: 250, height: 50, marginLeft: 50, marginBottom: 20 }} source={require('./images/fb.png')} /> */}
            {/* <Image style={{ width: 100, height: 100, marginLeft: 125, marginBottom: 20, marginTop: -80 }} source={require('./images/ig-logo.png')} /> */}
            <Image style={{ width: 250, height: 80, marginLeft: 45, marginBottom: 15, marginTop: -80 }} source={require('./images/Instagram_logo.png')}
                />
            <TextInput placeholder="Phone number, username or email address" style={styles.formInput} />
            <TextInput placeholder="Password" style={styles.formInput} />
            

            <View styles={styles.buttonContainer}>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomeScreen')} >
            <Text style={styles.buttonText}> Log In </Text>
            </TouchableOpacity>

            <Text></Text>
                <Text> -----------------------------------  OR  ------------------------------------</Text>

            <TouchableOpacity onPress={() => navigation.navigate('ForgotPw')} >
            <Text style={{color: '#0957C3', alignItems: 'center', justifyContent: 'center', marginLeft: 90, marginTop: 25, marginBottom: 50 }}>Forgotten your password?</Text>
            </TouchableOpacity>

            <View style={{padding: 30, flexDirection:'row', justifyContent: 'center', marginLeft: 5, marginBottom: -110,  borderWidth: 1, borderColor: 'gray'}}>
                <Text style={{fontSize: 17}}>
                    Don't have an account?
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')} >
                    <Text style={{color:'#00acee', fontSize: 15, left: 5}}>
                        Sign Up
                    </Text>
                </TouchableOpacity>
            </View>
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
        height: 65,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        marginTop: 20,
        borderWidth: 1,
    },

   buttonText: {
       color: 'white',
       fontWeight: 'bold',
   },

    
    button: {
        backgroundColor: '#00A5E3',
        borderRadius: 10,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
        marginBottom: 5,

        

    }

   
})