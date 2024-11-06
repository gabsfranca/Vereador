import { Dimensions, StyleSheet } from "react-native";
import { themes } from "../../global/themes";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const style = StyleSheet.create({
    button:{
        width: 200,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center', 
        backgroundColor: themes.colors.Vprimary,
        borderRadius: 40,
        marginTop: 60,

        //gerado
        shadowColor: themes.colors.escuro,
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 4,
    },
    textButton:{
        fontSize: 20,
        color: themes.colors.escuro,
        fontWeight: 'bold'
    },
})