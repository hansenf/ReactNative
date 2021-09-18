import React, { useEffect } from 'react'
import { useState } from 'react'
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Button } from 'react-native'
import { Data }from './data'

const Item = ({ title, harga, type, image, updateHarga }) => (
    <View style={{alignItems: 'center', margin: 20}}>
    <View style={{marginTop: 20, width: 160, borderWidth: 1, borderRadius: 5}}>
        <Text style={{alignSelf: 'center'}}>{title}</Text>
        <Image style={{width: 'auto', height: 100}} source={image}/>
        <Text style={{alignSelf: 'center'}}>{harga}</Text>
        <Text style={{alignSelf: 'center'}}>{type}</Text>
        <Button title="BELI" onPress={()=>updateHarga(harga)}/>
    </View>
    </View>
);

export default function Home({route, navigation}) {
    const { username } = route.params;
    const [totalPrice, setTotalPrice] = useState(0);

    const currencyFormat=(num)=> {
        return 'Rp ' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    };

    const updateHarga =(price)=>{
        console.log("UpdatePrice : " + price);
        const temp = Number(price) + totalPrice;
        console.log(temp)
        setTotalPrice(temp)
        
        //? #Bonus (10 poin) -- HomeScreen.js --
        //? agar harga dapat update misal di tambah lebih dari 1 item atau lebih -->
    }

    const renderItem = ({ item }) => (
        <Item title={item.title} harga={item.harga} type={item.type} image={item.image} updateHarga={updateHarga}/>
    );

    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row', justifyContent:"space-between", padding: 16}}>
                <View>
                    <Text>Selamat Datang,</Text>
                    <Text style={{fontSize:18, fontWeight:'bold'}}>{username}</Text>
                </View>
                <View>
                    <Text>Total Harga:</Text>
                    <Text style={{fontSize:18, fontWeight:'bold'}}> {currencyFormat(totalPrice)}</Text>
                </View>
            </View>
            <View style={{marginBottom: 20, paddingBottom: 60}}>
            {/* //? #Soal No 2 (15 poin) -- Home.js -- Function Home
            //? Buatlah 1 komponen FlatList dengan input berasal dari data.js   
            //? dan memiliki 2 kolom, sehingga menampilkan 2 item per baris (horizontal) -->
            //? #Soal No 3 (15 poin) -- HomeScreen.js --
             //? Buatlah styling komponen Flatlist, agar dapat tampil dengan baik di device untuk layouting bebas  --> */
            <FlatList
                data={ Data }
                renderItem={renderItem}
                numColumns={2}
                keyExtractor={item => item.id}
            />
             }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,        
        backgroundColor:'white', 
    },  
    content:{
        maxWidth: 150,
        maxHeight: 220,        
        margin:5,
        marginLeft:5,
        marginRight:5,
        marginBottom:5,
        marginTop:5,
        borderWidth:1,
        alignItems:'center',
        borderRadius: 5,
        borderColor:'grey',
            
    },
        
})