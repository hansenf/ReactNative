import React from 'react'
import {Platform, ScrollView, Image, StyleSheet, Text, TextInput, View,TouchableOpacity, Button,KeyboardAvoidingView } from 'react-native'

const Login = () => {
    return (
        <KeyboardAvoidingView
        behavior ={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}
        >
        <ScrollView>
            <View style={styles.containerView}>
                <Image style={styles.Login} source ={require('../Tugas13/asset/logo.png')}/>
                <Text style={styles.logintext}>Login</Text>
                <View style={styles.formInput}>
                    <Text style={styles.formtext}>Username</Text>
                    <TextInput style={styles.input}></TextInput>
                </View>
                <View style={styles.formInput}>
                <Text style={styles.formtext}>Password</Text>
                <TextInput style={styles.input} secureTextEntry ={true}></TextInput>
                </View>
                <View >
                    <TouchableOpacity style={styles.btlogin}>
                        <Text style={styles.bttext}>Masuk</Text>
                    </TouchableOpacity>
                    <Text style={styles.autotext}>Atau</Text>
                    <TouchableOpacity style={styles.btdaftar}>
                        <Text style={styles.bttext}>Daftar</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        </ScrollView>   
        </KeyboardAvoidingView>
    )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex : 1,
        backgroundColor : 'white'
    },
    Login:{
        marginTop: 63
    },

    logintext:{
        fontSize : 24,
        marginTop : 63,
        textAlign :'center',
        color : '#003366',
        marginVertical : 20
    },
    formtext:{
        color : "#003366"
    }, autotext:{
        fontSize:20,
        color: '#3EC6FF',
        textAlign :'center',
        marginTop:30
    }, 
    formInput:{
        marginHorizontal: 55,
        marginVertical:5,
        alignContent: 'center',
        width : 294

    },
    input :{
        height : 40,
        borderColor: '#003366',
        padding: 10,
        borderWidth: 1
    },
    btlogin:{
        alignItems:'center',
        marginTop: 50,
        padding : 10,
        backgroundColor : '#3EC6FF',
        borderRadius: 16,
        marginHorizontal: 120,
        marginBottom : 10,
        width : 140
    }, btdaftar: {

        alignItems:'center',
        marginTop: 50,
        padding : 10,
        backgroundColor : '#003366',
        borderRadius: 16,
        marginHorizontal: 122,
        marginBottom : 10,
        width : 140
    },
    bttext:{
        color :'white'
    }



})
