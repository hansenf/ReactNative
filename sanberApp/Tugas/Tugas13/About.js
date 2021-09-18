import React from 'react'
import { StyleSheet, Text, View,ScrollView,Image,TextInput, Button } from 'react-native'

const About = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.judul}>About Me</Text>
                <Image style={styles.usergambar} source ={require('../Tugas13/asset/Vector.png')}/>
                <Text style={styles.nama}>Mahanani</Text>
                <Text style={styles.kerjaan}>Member Aja</Text>
                <View style={styles.kotak}>
                    <Text style={styles.juduldalam}>Portofolio</Text>
                    <View style={styles.kotakdalam}>
                        <View>
                            <Image style={styles.gambar1} source={require('../Tugas13/asset/github.png')}></Image>
                            <Text style={styles.text1}>@Maha.Git</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.kotak}>
                    <Text style={styles.juduldalam}>Contact</Text>
                    <View style={styles.kotakdalamv2}>
                    <View style={styles.kotakcontact}>
                        <View>
                            <Image style={styles.gambar} source ={require('../Tugas13/asset/insta.png')}/>
                            <Text style={styles.textdalam}>@Hananigram</Text>
                        </View>  
                    </View>
                    <View style={styles.kotakcontact}>
                        <View>
                            <Image style={styles.gambar} source ={require('../Tugas13/asset/wa.png')}/>
                            <Text style={styles.textdalam}>08126776709</Text>
                        </View>  
                    </View>
                    <View style={styles.kotakcontact}>
                        <View>
                            <Image style={styles.gambar} source ={require('../Tugas13/asset/gmail.png')}/>
                            <Text style={styles.textdalam}>maha@gmial.com</Text>
                        </View>  
                    </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default About

const styles = StyleSheet.create({
    container:{
        marginTop: 64,

    },
    judul:{
        fontSize: 36,
        fontWeight : 'bold',
        color : '#003366'
        ,textAlign: 'center'
    },
    usergambar :{
        alignItems: 'center',
        marginTop : 30,
        marginLeft : 105
           
    },
    nama:{
        fontSize : 24,
        color : '#003366',
        fontWeight :'bold',
        textAlign :'center'
    },
    kerjaan:{
        fontSize : 24,
        color : '#3EC6FF',
        fontWeight :'bold',
        textAlign :'center',
        marginBottom: 7
    },
    kotak:{
        borderColor:'blue',
        borderBottomColor: '#0000',
        borderRadius: 10,
        padding: 5,
        backgroundColor:'#EFEFEF',
        marginBottom:9
    },
    kotakdalam:{
        borderTopWidth: 2,
        borderTopColor:'#003366',
        flexDirection:'row',
    }, gambar:{
        marginLeft : 40,
        marginTop : 20,
        alignItems : 'center',
        marginBottom : 10
    }, textdalam:{
        marginLeft : 20,
        marginTop : 10,
        textAlign : 'center',
        marginBottom : 10,
        fontSize: 12,
        color:"#003366"
    }, text1:{
        marginLeft : 150,
        marginTop : 10,
        textAlign : 'center',
        marginBottom : 10,
        fontSize: 12,
        color:"#003366"
        
    },gambar1:{
        marginLeft : 150,
        marginTop : 10,
        alignItems : 'center',
        
    },
    kotakdalamv2:{
        borderTopWidth: 2,
        borderTopColor:'#003366',
        flexDirection:'row',
        justifyContent: 'space-around'
    },juduldalam:{
        fontSize: 18,
        color:"#003366"
    } 



})
