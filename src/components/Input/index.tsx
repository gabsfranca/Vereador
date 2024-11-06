import React, { forwardRef, Fragment, LegacyRef } from "react";

import {
     View,
     TextInput,
     Text,
     TextInputProps,
     TouchableOpacity, 
     
    } from 'react-native';

import { style } from './styles'
import { themes } from '../../global/themes'

import { FontAwesome, MaterialIcons, Octicons } from '@expo/vector-icons';

type IconComponent = React.ComponentType<React.ComponentProps<typeof MaterialIcons>> |
                     React.ComponentType<React.ComponentProps<typeof FontAwesome>> |
                     React.ComponentType<React.ComponentProps<typeof Octicons>>;

type Props = TextInputProps & {
    IconLeft?: IconComponent,
    IconRight?: IconComponent,
    IconLeftName?: string,
    IconRightName?: string,
    Tittle?: string,
    onIconLeftPress?: () => void,
    onIconRightPress?: () => void
}


export const Input = forwardRef((Props:Props, ref: LegacyRef<TextInput> | null)=>{
    
    const calculateSizeW = () => {
        if (IconLeft && IconRight ){
            return '86%'
        }else if (IconLeft || IconRight){
            return '93%'
        }else{
            return '100%'
        }
    }

    const calculateSizePaddingLeft = () =>{
        if (IconLeft && IconRight ){
            return 6;
        }else if (IconLeft || IconRight){
            return 10;
        }else{
            return 15;
        }       
    }

    const {IconLeft,
            IconRight,
            IconLeftName,
            IconRightName,
            Tittle,
            onIconLeftPress,
            onIconRightPress,
            ...rest} = Props
        
    return(
        <Fragment>
            {Tittle&&<Text style = {style.tittleInput}>{Tittle}</Text>}
            <View style = {[style.boxInput, {paddingLeft: calculateSizePaddingLeft()}]}>

                {IconLeft && IconLeftName &&(
                    <TouchableOpacity onPress={onIconLeftPress} style = {style.button}>
                        <IconLeft
                            name={IconLeftName as any}
                            size ={28}
                            color={themes.colors.Vprimary}
                            style={style.icon}
                        />
                    </TouchableOpacity>
                )}

                <TextInput
                    style = {[
                        style.input,{width: calculateSizeW()}
                    ]}
                    {...rest}
                />

                {IconRight && IconRightName &&(
                    <TouchableOpacity onPress={onIconRightPress} style = {style.button}>
                        <IconRight
                            name={IconRightName as any}
                            size ={28}
                            color={themes.colors.Vprimary}
                            style={style.icon}
                        />
                    </TouchableOpacity>
                )}
                
            </View>
        </Fragment>
    )
})

