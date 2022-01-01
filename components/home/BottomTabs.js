import React, {useState} from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { Divider } from 'react-native-elements'


const bottomTabIcons = [
    {
        name: 'Home',
        active:'https://img.icons8.com/fluency-systems-filled/2x/home.png' ,
        inactive: 'https://img.icons8.com/material-outlined/2x/home--v2.png',
    },

    {
        name: 'Search',
        active:'https://img.icons8.com/material-rounded/2x/search.png' ,
        inactive: 'https://img.icons8.com/fluency-systems-regular/2x/search.png',
        
    },

    {
        name: 'Reels',
        active:'https://img.icons8.com/ios-filled/2x/instagram-reel.png' ,
        inactive: 'https://img.icons8.com/ios/2x/instagram-reel.png',
    },

    {
        name: 'Shop',
        active:'https://img.icons8.com/ios-filled/344/shop-local.png' ,
        inactive: 'https://img.icons8.com/ios/344/shop-local.png',
    },

    {
        name: 'Profile',
        active:'https://miro.medium.com/max/792/1*IlfcghwBI5Z_i9XZ65kgZQ.png' ,
        inactive: 'https://miro.medium.com/max/792/1*IlfcghwBI5Z_i9XZ65kgZQ.png',
    },

]


const BottomTabs = ({ icons }) => {
    const [activeTab, setActiveTab]= useState('Home')
    
    const Icon = ({ icon })=>(
        <TouchableOpacity onPress={()=> setActiveTab(icon.name)}>
            <Image source={{uri: activeTab === icon.name ? icon.active : icon.inactive}} 
            style={[styles.icon, 
            icon.name === 'Profile' ? styles.profilePic() : null,
            activeTab === 'Profile' && icon.name === activeTab
            ? styles.profilePic(activeTab) : null,
            ]} />
        </TouchableOpacity>
    )
    
    return (
        <View style={styles.wrapper}>
            <Divider width={1} orientation='vertical' />
            <View style={styles.container}>
                {bottomTabIcons.map((icon, index) => (
                <Icon key={index} icon={icon} />
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        position : "relative",
        width: '100%',
        bottom: '1%',
        zIndex: 999,
        backgroundColor: '#FFF',
    },

    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 50,
        paddingTop: 10,
    },

    icon: {
     width: 30,
     height: 30,
    },

    profilePic: (activeTab = '') => ({
        borderRadius: 50,
        borderWidth: activeTab === 'Profile' ? 2 : 0,
        borderColor: '#000'
    }),
})

export default BottomTabs
