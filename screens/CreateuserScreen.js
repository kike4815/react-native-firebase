import React, { useState } from 'react'
import {Button,TextInput,ScrollView,StyleSheet,View} from 'react-native'
import firebase from '../database/firebase'

const CreateuserScreen = (props) => {

    const [state, setState] = useState({
        name: '',
        email:'',
        phone:''
    })

    const handleChange = (name, value) => {
        setState({...state,[name]:value})
    }

    const SaveNewUser = async () => {
        if (state.name === '' || state.email==='' || state.phone===''){
            alert('Please fill all the fields')
        }else {
            try {
                await firebase.db.collection('users').add({
                    name: state.name,
                    email:state.email,
                    phone:state.phone
                })
                props.navigation.navigate('user_list')
            } catch (error) {
                console.log(error);    
            }
        }
    }
    
    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputGroup}>
                <TextInput 
                placeholder='name'
                onChangeText={(value) => handleChange('name',value)}
                />
            </View>
            <View style={styles.inputGroup}>
                <TextInput 
                placeholder='email'
                onChangeText={(value) => handleChange('email',value)}
                />
            </View>
            <View style={styles.inputGroup}>
                <TextInput 
                placeholder='phone'
                onChangeText={(value) => handleChange('phone',value)}
                />
            </View>
            <View>
                <Button title='Save user' onPress={() => SaveNewUser()}/>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:35
    },
    inputGroup:{
        flex:1,
        padding:0,
        marginBottom:15,
        borderBottomColor:'#cccccc',
        borderBottomWidth:1
    }
})

export default CreateuserScreen
