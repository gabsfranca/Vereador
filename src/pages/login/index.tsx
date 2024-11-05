import { 
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
    ActivityIndicator
} from 'react-native';
import React, { useState } from "react";
import { MaterialIcons } from '@expo/vector-icons';
import { style } from "./styles";
import logo from '../../assets/Images.png'
import { themes } from "../../global/themes";


export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    async function getLogin(email: string, password: string) {
        try {
            
            if (!email || !password){
                return Alert.alert('insira email e senha')
            }

            setLoading(true)

            setTimeout(() =>{
                Alert.alert(`email: ${email}, senha: ${password}`) 
                setLoading(false)
            }, 3000)           

        } catch (error) {
            console.log(error)
        }
    }

    return(
        <View style ={style.container} >
            <View style = {style.boxTop}>
                <Image
                    source={logo}
                    style={style.logo}
                    resizeMode='contain'
                />               
                <Text style={style.text}>Bem vindo de volta!</Text>     
            </View>


            <View style = {style.boxMid}>
                <Text style = {style.tittleInput}>
                    Email ou usuário: 
                </Text>
                <View style = {style.boxInput}>
                    <TextInput
                        style={style.input}
                        value={email}
                        onChangeText = {setEmail}
                     />
                    <MaterialIcons
                        name='email'
                        size={20}
                        color={themes.colors.Vprimary}
                    />
                </View>


                <Text style = {style.tittleInput}>
                    Senha: 
                </Text>
                <View style = {style.boxInput}>
                    <TextInput
                        style = {style.input}
                        value = {password}
                        onChangeText={setPassword}
                     />
                    <MaterialIcons
                        name='remove-red-eye'
                        size={20}
                        color={themes.colors.Vprimary}
                    />
                </View>
            </View>
            <View style = {style.boxBottom}>
                <TouchableOpacity style={style.button} onPress={() => getLogin(email, password)}>
                    {loading?<ActivityIndicator color={themes.colors.quaseBranquinho} size={'small'} />:<Text style = {style.textButton}>Login</Text>}
                    
                </TouchableOpacity>
            </View>
            <Text style={style.bottomText}>Ainda nao criou a sua conta?<Text style={style.bottomText}>Crie agora!</Text></Text>
        </View>
    )
}