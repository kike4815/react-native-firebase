import React, { useEffect, useState } from 'react'
import firebase from '../database/firebase'
import {ScrollView,View,TextInput,Button,StyleSheet, ProgressViewIOSComponent} from 'react-native'

const UserDetailScreen = (props) => {
    const initialState = {
        id:'',
        name:'',
        email:'',
        phone:''
    }
    const [user, setuser] = useState(initialState)

    useEffect(() => {
        const getUser = async (id) => {
            const dbRef = firebase.db.collection('users').doc(id)
            const doc = await dbRef.get()
            const user = doc.data()
            setuser({
            ...user,
            id:doc.id});
        }   
        getUser(props.route.params.userId)
    }, [])
    
    const handleChange = (name, value) => {
        setuser({...user,[name]:value})
    }

    const deleteUser = async () => {
        const dBref = firebase.db.collection('users').doc(props.route.params.userId)
        await dBref.delete()
        props.navigation.navigate('user_list')
    }

    const updateUser = async () => {
        const dBref = firebase.db.collection('users').doc(user.id)
        await dBref.set({
            name: user.name,
            email: user.email,
            phone:user.phone
        })
        setuser(initialState)
        props.navigation.navigate('user_list')
    }

    return (
        <ScrollView style={styles.container}>
        <View style={styles.inputGroup}>
            <TextInput 
            placeholder='name'
            value={user.name}
            onChangeText={(value) => handleChange('name',value)}
            />
        </View>
        <View style={styles.inputGroup}>
            <TextInput 
            placeholder='email'
            value={user.email}
            onChangeText={(value) => handleChange('email',value)}
            />
        </View>
        <View style={styles.inputGroup}>
            <TextInput 
            placeholder='phone'
            value={user.phone}
            onChangeText={(value) => handleChange('phone',value)}
            />
        </View>
        <View style={{marginBottom:10}}>
            <Button color='#19AC52' title='Edit user' onPress={() => updateUser()}/>
        </View>
        <View>
            <Button color='#E37999' title='Delete user' onPress={() => deleteUser()}/>
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
export default UserDetailScreen
