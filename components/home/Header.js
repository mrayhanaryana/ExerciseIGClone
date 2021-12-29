import React from 'react'
import { View, Text, Image, StyleSheet , TouchableOpacity } from 'react-native'

const Header = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image 
                    style={styles.logo} 
                    source={require('../../assets/logo.png')}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignitems : 'center',
        flexDirection: 'row',
        marginHorizontal: 20,
    },

    logo: {
        width: 100,
        height: 50,
        resizeMode : 'contain',
      },
})

export default Header
