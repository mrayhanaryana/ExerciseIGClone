import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Divider } from 'react-native-elements'

const postFootericons = [
    {
        name: 'Like',
        imageUrl:
            'https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-heart-miscellaneous-kiranshastry-lineal-kiranshastry.png' ,
        
    },

    {
        name: 'Comment',
        imageUrl:
            'https://img.icons8.com/ios/50/000000/topic.png',
        
    },

    {
        name: 'Share',
        imageUrl:
            'https://img.icons8.com/ios/50/000000/sent.png',
        
    },

    {
        name: 'Save',
        imageUrl:
            'https://i.pinimg.com/originals/1a/77/b8/1a77b82fa5cf6252cb3169e29c613d85.png' ,
        
    },

]


const Post = ({post}) => {
    return (
        <View style={{marginBottom: 30}}>
            <Divider width={1} orientation='vertical' />
            <PostHeader post={post} />
            <PostImage post={post} />
            <View style={{marginHorizontal: 15, marginTop: 10}}>
                <PostFooter />
                <Likes post={post} />
                <Caption post={post} />
                <CommentsSection post={post} />
                <Comments post={post} />
            </View>
        </View>
    )
}

const PostHeader=({post})=>(
    <View 
        style={{flexDirection: 'row', 
        justifyContent: 'space-between', 
        margin: 8, 
        alignItems: 'center', 
        }}>
        
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={{uri: post.profile_picture}} style={styles.story} />
            <Text style={{color: 'black', marginLeft: 10, fontWeight: '700'}}>
                {post.user}
            </Text>
        </View>
        <Image source={{uri: 'https://img.icons8.com/material-rounded/24/000000/menu-2.png' }} style={{ width: 16, height: 16}}/>
        
    </View>
)

const PostImage = ({post})=>(
    <View
    style={{
        width: '100%',
        height: 450,
        }}>
        <Image source={{uri: post.imageUrl}} style={{height: '100%', resizeMode: 'cover'}}/>
    </View>
)

const PostFooter = () =>(
    <View style={{flexDirection: 'row'}}>
        <View style={styles.leftFooterIconsContainer}>
            <Icon  imgStyle={styles.footerIcon} imgUrl={postFootericons[0].imageUrl} /> 
            <Icon  imgStyle={styles.footerIconcom} imgUrl={postFootericons[1].imageUrl} />
            <Icon  imgStyle={styles.footerIconshare} imgUrl={postFootericons[2].imageUrl} />
        </View>

        <View style={{flex: 1, alignItems: 'flex-end'}}>
            <Icon imgStyle={styles.footerIconsave} imgUrl={postFootericons[3].imageUrl} />
        </View>
    </View>


)

const Icon = ({imgStyle,imgUrl}) =>(
    <TouchableOpacity>
        <Image  style = {imgStyle} source={{uri: imgUrl}} />
    </TouchableOpacity>
)

const Likes = ({post})=> (
    <View style={{flexDirection: 'row', marginTop: 4}}>
        <Text style={{color: 'black', fontWeight: 'bold'}}>{post.likes.toLocaleString('en')} likes</Text>
    </View>
    
)

const Caption = ({post}) =>(
    <View style={{marginTop: 5}}>
        <Text style={{color: 'black'}}>
            <Text style={{fontWeight: 'bold'}}>{post.user}</Text> 
            <Text> {post.caption}</Text> 
        </Text>
    </View>
)

const CommentsSection = ({post}) =>(
<View style={{marginTop: 5}}>
    {!! post.comments.length &&(
        <Text style={{color: 'gray'}}>
            View {post.comments.length > 1 ? 'all' : ''} {post.comments.length} {''}
            {post.comments.length> 1 ? 'comments' : 'comment'}
        </Text>
    )}
</View>
)

const Comments = ({post}) => (
    <>
        {post.comments.map((comment, index) => (
            <View key={index} style={{flexDirection: 'row', marginTop: 5}}>
                <Text style={{color: 'black'}}>
                    <Text style={{fontWeight: 'bold'}}> {comment. user} </Text>
                    {comment.comment}
                </Text>
            </View>
    
        ))}
    </>
   
)

const styles = StyleSheet.create({
    story: {
        width: 35,
        height: 35,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 1.6,
        borderColor: '#ff8501',
    },

    footerIcon: {
        width: 28,
        height: 28,
        bottom: 1,
        
    },
    footerIconcom: {
        width: 25,
        height: 25,
    },
    footerIconshare: {
        width: 28,
        height: 28,
        bottom: -1
    },
    footerIconsave: {
        width: 25,
        height: 25,
        bottom: -2,
        
    },

    leftFooterIconsContainer: {
        flexDirection: 'row',
        width: '30%',
        justifyContent: 'space-between',
        
    }
})

export default Post