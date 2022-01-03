// import * as React from 'react';
// import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput, Image } from 'react-native'

// export const ForgotPw = ({ navigation }) => {
//     return (
        
//             <View style={styles.container}>
            
//             <Image style={{ width: 250, height: 50, marginLeft: 50, marginBottom: 20 }} source={require('./images/fb.png')} />
//             <Text style={styles.Header}> Trouble with logging in? </Text>
//             <Text style={styles.Headersec}> Enter your email address, phone number or username, and we'll send you a link to get back into your account. </Text>

//             <TextInput placeholder="Phone number, username or email address" style={styles.formInput} />
            
//             <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('PostList')} >
//                 <Text style={{marginBottom :10}}>Login</Text>

//                 <TouchableOpacity onPress={() => navigation.navigate('ForgotPw')} >
//             <Text style={{color: 'blue', alignItems: 'center', justifyContent: 'center', marginLeft: 100, marginTop: 10, }}>Forgotten your password?</Text>
//             </TouchableOpacity>

//             <View style={{padding: 30, flexDirection:'row', justifyContent: 'center', marginLeft: 20}}>
//                 <Text style={{fontSize: 17}}>
//                     Dont have an account?
//                 </Text>
//                 <TouchableOpacity onPress={() => navigation.navigate('SignUp')} >
//                     <Text style={{color:'blue', fontSize: 17}}>
//                         SignUp
//                     </Text>
//                 </TouchableOpacity>
//             </View>
            
//             </TouchableOpacity>
//             </View>
//  )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: 'white',
//         justifyContent: 'center',
//         paddingHorizontal: 14,
//         marginBottom: 150,
//     },
//     formInput: {
//         height: 50,
//         backgroundColor: 'white',
//         borderRadius: 15,
//         padding: 10,
//         marginTop: 10,
//         borderWidth: 1,
//     },
//     Header: {
//         fontWeight: 'bold',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 20,
//         color: 'black'
//     },
//     Headersec: {
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 13,
//         color: 'gray'
//     },
//     Button: {
        
//         backgroundColor: 'blue',
//         borderRadius: 15,
//         height: 50,
//         alignItems: 'center',
//         justifyContent: 'center',
//         marginTop: 20,
//         marginBottom: -10,
//     }
// })


import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput, Image } from 'react-native'

export const ForgotPw = ({ navigation }) => {
    return (
        
            <View style={styles.container}>
            
            <Image style={{ width: 150, height: 150, marginLeft: 50, marginBottom: 20, marginLeft: 100 }} source={require('./images/pw.png')} />
            <Text style={styles.Header}> Trouble with logging in? </Text>
            <Text style={styles.Headersec}> Enter your email address, phone number or username, and we'll send you a link to get back into your account. </Text>
            
            <TextInput placeholder="Email address, phone number or username" style={styles.formInput} />
        
            <View styles={styles.buttonContainer}>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PostList')} >
            <Text style={styles.buttonText}> Send Login link </Text>
            </TouchableOpacity>

                <Text></Text>
                <Text> -----------------------------------  OR  ------------------------------------</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')} >
            <Text style={{color: 'black', alignItems: 'center', justifyContent: 'center', marginLeft: 100, marginTop: 20, }}>Create New Account</Text>
            </TouchableOpacity>

            <View style={{padding: 10, flexDirection:'row', justifyContent: 'center', marginLeft: 20, borderWidth: 1, borderColor: 'gray', marginTop: 60}}>
                <TouchableOpacity onPress={() => navigation.navigate('Login')} >
                    <Text style={{fontSize: 17}}>
                        Back To Login
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
        height: 50,
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 10,
        marginTop: 15,
        borderWidth: 1,
        marginBottom:10, 
    },

   buttonText: {
       color: 'white',
   },

    button: {
        backgroundColor: 'blue',
        borderRadius: 15,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10,
        

    },
    Header: {
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: 'black',
        marginLeft: 50,
    },
    Headersec: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 13,
        color: 'gray',
        marginTop: 5,
        
    },

   
})