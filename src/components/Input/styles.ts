import { StyleSheet } from "react-native";

import { themes } from '../../global/themes'

export const style = StyleSheet.create({
    boxInput:{
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderRadius:40,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        color: themes.colors.quaseBranquinho,
        borderColor: themes.colors.intermediario,
    },
    input: {
        color: themes.colors.escuro,
        height: '100%',
        width: '93%',
        borderRadius: 40,
    },
    tittleInput:{
        marginLeft: 5,
        color: themes.colors.escuro,
        marginTop: 25,       
    },
    icon:{
        width: '100%',
    },
    button:{
       width:'10%' 
    }
});