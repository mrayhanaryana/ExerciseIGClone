import React from 'react'
import { View, Text, Image, StyleSheet , TouchableOpacity } from 'react-native'

const Header = ({navigation}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image 
                    style={styles.logo} 
                    source={require('../../images/Instagram_logo.png')}
                />
            </TouchableOpacity>

            <View style={styles. iconsContainer}>
                <TouchableOpacity onPress={() => navigation.push ('NewPostScreen')}>
                    <Image
                        source={{
                            uri :'https://img.icons8.com/material-outlined/344/plus--v1.png'
                        }}
                        style={styles.icon}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image
                        source={{
                            uri :'https://img.icons8.com/material-outlined/344/filled-like.png'
                        }}
                        style={styles.icon}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style = {styles.unreadBadge}>
                        <Text style={styles.unreadBadgeText}>8</Text>
                    </View> 
                    <Image
                        source={{
                            uri :'https://img.icons8.com/material-outlined/344/facebook-messenger.png'
                        }}
                        style={styles.icon}
                    />
                </TouchableOpacity>
                
            </View>
        
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignitems : 'center',
        flexDirection: 'row',
        marginHorizontal: 10,
        
    },

    iconsContainer: {
        flexDirection: 'row',
    },

    logo: {
        width: 120,
        height: 70,
        resizeMode : 'contain',
        bottom: 5,
      },
    
      icon: {
        width: 27,
        height: 27,
        marginLeft: 20,
        resizeMode: 'contain',
        marginTop: 15,
        justifyContent : 'space-between',
        marginRight: 5,  
        
      },

      unreadBadge: {
        backgroundColor: '#FF3250',
        position: 'absolute',
        left: 20,
        bottom: 30,
        width: 20,
        height: 20,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100,
        marginBottom: 13,
        marginLeft:15
      },

      unreadBadgeText: {
        color: 'white',
        fontWeight: '600',
      },
})

export default Header