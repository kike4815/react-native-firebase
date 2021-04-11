import React, { useEffect, useState } from 'react'
import firebase from '../database/firebase'
import {StyleSheet,View,Text,ScrollView,Button} from 'react-native'
import {ListItem, Avatar} from 'react-native-elements'

const UsersList = (props) => {
    const [listUsers, setListUsers] = useState([])

    useEffect(() => {
         firebase.db.collection('users').onSnapshot(querySnapshot => {
             const users = []
             querySnapshot.docs.forEach(user => {
                 const {name, email,phone} = user.data()
                 users.push({
                     id:user.id,
                     name,
                     email,
                     phone
                 })
             });
             setListUsers(users)
            })
        }, [])
        
    return (
        <ScrollView>
            <Button title='Create User' onPress={()=>props.navigation.navigate('create_user')}/>
            {
                listUsers.map(user => (
                    <ListItem key={user.id} bottomDivider onPress={() => {
                        props.navigation.navigate('user_detail',{
                            userId: user.id
                        })
                    }}>
                        <Avatar source={{uri:'https://reactnativeelements.com/img/avatar/avatar--photo.jpg'}}/>
                        <ListItem.Chevron />
                        <ListItem.Content>
                            <ListItem.Title>{user.name}</ListItem.Title>
                            <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
                ))
            }
        </ScrollView>
    )
}


export default UsersList
