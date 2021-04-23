import React, { useEffect, useState } from 'react'
import {Text, View,  Image, TouchableOpacity, Button} from 'react-native';
import axios from 'axios';

const newScreen = () =>{
    const [data, setData] = useState({});

useEffect(() => {
    (async ()=> {
        try{
            const result = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
            setData(() => result.data);
        }catch(error){
            console.log(error);
        }
        
    })()
}, []);


    return(
        <View>
            <Text>
                {data.name}
            </Text>
        </View>
            )
        }



export default newScreen;
