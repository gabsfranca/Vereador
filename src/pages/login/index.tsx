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

import { style } from "./styles";
import logo from '../../assets/Images.png'
import { themes } from "../../global/themes";
import { Input } from "../../components/Input"
import { FontAwesome, MaterialIcons, Octicons } from '@expo/vector-icons';
import { Button } from '../../components/button';

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(true)

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
                <Input
                    value= { email }
                    onChangeText={setEmail}
                    Tittle='email ou usuário'
                    IconRight={MaterialIcons}
                    IconRightName='email'

                />

                <Input
                    value= { password }
                    onChangeText={setPassword}
                    Tittle='Senha'
                    IconRight={Octicons}
                    IconRightName= {showPassword?'eye-closed':'eye'}
                    secureTextEntry={showPassword}
                    onIconRightPress={() => setShowPassword(!showPassword)}
                />
                    
            </View>
            <View style = {style.boxBottom}>
                <Button
                    text = 'Login'
                    loading = { loading }
                    onPress={() => getLogin(email, password)}
                />
            </View>
            <Text style={style.bottomText}>Ainda nao criou a sua conta?<Text style={style.bottomText}>Crie agora!</Text></Text>
        </View>
    )
}