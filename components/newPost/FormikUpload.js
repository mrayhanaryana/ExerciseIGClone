import React, { useState } from 'react'
import { View, Text, Image, TextInput, Button } from 'react-native'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { Divider } from 'react-native-elements'
import validUrl from 'valid-url'

const PLACEHOLDER_IMG=
'https://img2.pngdownload.id/20180320/bkw/kisspng-computer-icons-user-iconfinder-symbol-account-profile-icon-5ab1460ad5a644.5359015415215672428751.jpg'

const uploadPostSchema = Yup.object().shape({
    imageUrl: Yup.string().url().required('A url is required'),
    caption: Yup.string().max(2200,'Caption reached max level'),

})


const FormikUpload = ({navigation}) => {
const [thumbnailUrl, setThumnailUrl] =  useState(PLACEHOLDER_IMG)

    return (
       <Formik
       initialValues={{caption:'', imageUrl:''}}
       onSubmit={(values)=>{
        console.log(values)
        console.log('Your Post Was Successfully Aploaded')
        navigation.goBack()
        }}
       validationSchema={uploadPostSchema}
       validateOnMount={true}
       >
           {({handleBlur, handleChange, handleSubmit, values, errors, isValid}) =>
            <>
            <View
            style={{
                margin:20,
                justifyContent: 'space-between',
                flexDirection: 'row',
            }}
            >
                <Image
                source={{
                    uri: validUrl.isUri(thumbnailUrl) 
                    ? thumbnailUrl 
                    : PLACEHOLDER_IMG
                }}
                style={{width:100, height: 100}}
                />

                <View style={{flex: 1, marginLeft: 12}}>
                <TextInput 
                style={{color:'black', fontSize:20}}
                placeholder='Wrire a caption here ...' 
                placeholderTextColor='gray'
                multiline={true}
                onChangeText={handleChange('caption')}
                onBlur={handleBlur('caption')}
                value={values.caption}
                />
                </View>
            </View>

            <Divider width={0.2} orientation='vertical'/>
            <TextInput 
                onChange={e => setThumnailUrl(e.nativeEvent.text)}
                style={{color:'black', fontSize:18}}
                placeholder='Enter URL image link' 
                placeholderTextColor='gray'
                onChangeText={handleChange('imageUrl')}
                onBlur={handleBlur('imageUrl')}
                value={values.imageUrl}
            />
            {errors.imageUrl && (
                <Text style={{fontSize: 10, color: 'red'}}>
                    {errors.imageUrl}
                </Text>
            )}
            <Button onPress={handleSubmit} title='share' disabled={!isValid} />
            </>
           }

       </Formik>
    )
}

export default FormikUpload
