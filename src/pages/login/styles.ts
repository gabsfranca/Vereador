import { Dimensions, StyleSheet } from "react-native";
import { themes } from "../../global/themes";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const style = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        backgroundColor: themes.colors.quaseBranquinho,
    },
    boxTop:{
        height: Dimensions.get('window').height/3,
        backgroundColor: themes.colors.quaseBranquinho,
        width:'100%',
        alignItems: 'center',
        justifyContent:'center'
    },
    boxMid:{
        height: Dimensions.get('window').height/4,
        backgroundColor: themes.colors.quaseBranquinho,
        width:'100%',
        paddingHorizontal: 37,
         
    },
    boxBottom:{
        height: Dimensions.get('window').height/3,
        backgroundColor: themes.colors.quaseBranquinho,
        width:'100%',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    logo:{
        marginTop: 100,
        width:130,
        height:130
    },
    text:{
        fontWeight: 'bold',
        marginTop: 80,
        fontSize: 25,
        color: themes.colors.escuro
    },
    tittleInput:{
        marginLeft: 5,
        color: themes.colors.escuro,
        marginTop: 25,       
    },
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
    bottomText:{
        fontSize: 16,
        color: themes.colors.escuro,
    }
})